import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

execFileSync(process.execPath, ['scripts/build.mjs'], { stdio: 'pipe' });

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const styles = await readFile(new URL('../public/assets/styles.css', import.meta.url), 'utf8');

test('documentation navigation preserves the shell and brand image', () => {
  assert.match(html, /document\.addEventListener\('click'/, 'delegated link handling is missing');
  assert.match(html, /fetch\(url\.href/, 'internal pages are not fetched client-side');
  assert.match(html, /currentContent\.replaceChildren/, 'page content is not updated independently');
  assert.doesNotMatch(html, /sidebar\.replaceChildren/, 'the persistent sidebar must not be replaced');
  assert.doesNotMatch(html, /brand-mark[^\n]+replace/, 'the brand image must not be replaced');
});

test('client-side navigation preserves history and browser navigation', () => {
  assert.match(html, /history\.pushState/, 'navigations are not added to browser history');
  assert.match(html, /window\.addEventListener\('popstate'/, 'back and forward navigation is not handled');
  assert.match(html, /history\.scrollRestoration = 'manual'/, 'native scroll restoration can race asynchronous content replacement');
  assert.match(html, /state\[scrollStateKey\] = \{ x: window\.scrollX, y: window\.scrollY \}/, 'outgoing history entries do not retain their scroll position');
  assert.match(html, /navigate\([^\n]+event\.state/, 'back and forward navigation does not receive the destination history state');
});

test('client-side navigation keeps accessible focus and native-link fallbacks', () => {
  assert.match(html, /class="content" tabindex="-1"/, 'content is not programmatically focusable');
  assert.match(html, /event\.defaultPrevented[^\n]+event\.button[^\n]+event\.metaKey/, 'modified and non-primary clicks are not preserved');
  assert.match(html, /window\.location\.assign\(url\.href\)/, 'failed client navigation has no native fallback');
});

test('hosted OpenVibely actions and brand home link are available', () => {
  assert.match(
    html,
    /<a class="brand-home" href="https:\/\/openvibely\.ai\/" aria-label="OpenVibely home"><img class="brand-mark" src="assets\/avatar\.png" alt="" width="32" height="32" decoding="async" fetchpriority="high"><\/a>/,
    'top-left OpenVibely icon should link to the hosted home page'
  );
  assert.match(
    html,
    /<a href="https:\/\/openvibely\.ai\/">Home<\/a>\s*<a href="https:\/\/openvibely\.ai\/login">Log in<\/a>\s*<a href="https:\/\/github\.com\/openvibely\/openvibely">GitHub<\/a>/,
    'hosted home and login actions should be grouped before the GitHub link'
  );
});

test('mobile header keeps every horizontally scrolling link reachable', () => {
  const mobileStyles = styles.match(/@media \(max-width: 900px\) \{([\s\S]*?)\n\}/)?.[1];
  assert.ok(mobileStyles, 'mobile navigation styles are missing');
  assert.match(
    mobileStyles,
    /\.top-links\s*\{[\s\S]*?overflow-x:\s*auto;[\s\S]*?justify-content:\s*flex-start;/,
    'scrollable mobile links must start-align so leading links are not clipped'
  );
});

test('mobile sidebar is inert when closed and manages keyboard focus', () => {
  assert.match(html, /sidebar\.toggleAttribute\('inert', mobileNav\.matches && !open\)/, 'closed mobile navigation remains keyboard focusable');
  assert.match(html, /if \(open && mobileNav\.matches && search\) search\.focus\(\)/, 'opening mobile navigation does not move focus into it');
  assert.match(html, /if \(restoreFocus && mobileNav\.matches && toggle\) toggle\.focus\(\)/, 'closing mobile navigation does not restore focus');
  assert.match(html, /setNavOpen\(false, true\)/, 'dismissal controls do not request focus restoration');
});

test('search uses an accessible name with compact borderless focus styling', () => {
  assert.match(html, /<div class="docs-search"><input id="docs-search"[^>]+aria-label="Search documentation"[^>]*><\/div>/, 'search input does not have an accessible name');
  assert.doesNotMatch(html, /<label for="docs-search">/, 'search label should not be visible above the input');
  assert.match(
    styles,
    /\.docs-search input\s*\{[\s\S]*?border:\s*0;[\s\S]*?line-height:\s*1\.3;[\s\S]*?padding:\s*0\.35rem 0\.6rem;/,
    'search input is not compact and borderless'
  );
  assert.match(
    styles,
    /--search-focus:\s*#5c6982;/,
    'search focus fill does not provide sufficient visual contrast'
  );
  assert.match(
    styles,
    /\.docs-search input:focus-visible\s*\{[\s\S]*?outline:\s*none;[\s\S]*?box-shadow:\s*none;[\s\S]*?background:\s*var\(--search-focus\);/,
    'search input focus should use only a borderless fill change'
  );
});

test('search keeps every matching accordion section exposed', () => {
  assert.match(html, /if \(!section\.open \|\| \(search && search\.value\.trim\(\)\)\) return;/, 'accordion still closes other sections during search');
  assert.match(html, /if \(!query\)[\s\S]*?section\.open = Boolean\(section\.querySelector\('\.nav-link\.active'\)\)/, 'clearing search does not restore the active section');
  assert.match(html, /if \(query && !section\.hidden\) section\.open = true;/, 'matching sections are not opened');
});

test('search hides nonmatching grid navigation links', () => {
  assert.match(
    styles,
    /\[hidden\]\s*\{\s*display:\s*none\s*!important;\s*\}/,
    'author display styles can override hidden search results'
  );
});

test('back navigation restores scroll only after delayed content replacement', async () => {
  const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script, 'generated client script is missing');

  const events = [];
  const windowListeners = new Map();
  const documentListeners = new Map();
  let currentUrl = new URL('https://docs.example/quickstart.html');
  let resolveFetch;
  const delayedResponse = new Promise(resolve => { resolveFetch = resolve; });
  const currentContent = {
    replaceChildren() { events.push('replace'); },
    focus() {}
  };
  const sidebar = {
    scrollTop: 0,
    addEventListener() {},
    setAttribute() {},
    toggleAttribute() {}
  };
  const location = {
    get href() { return currentUrl.href; },
    get origin() { return currentUrl.origin; },
    get pathname() { return currentUrl.pathname; },
    get search() { return currentUrl.search; },
    assign(url) { throw new Error(`unexpected native navigation to ${url}`); }
  };
  const history = {
    state: {},
    scrollRestoration: 'auto',
    replaceState(state) { this.state = state; },
    pushState(state, _unused, url) {
      this.state = state;
      currentUrl = new URL(url);
    }
  };
  const window = {
    location,
    history,
    scrollX: 0,
    scrollY: 120,
    matchMedia() { return { matches: false, addEventListener() {} }; },
    addEventListener(type, listener) { windowListeners.set(type, listener); },
    scrollTo(x, y) {
      this.scrollX = x;
      this.scrollY = y;
      events.push(`scroll:${x},${y}`);
    }
  };
  const document = {
    title: 'Quickstart - OpenVibely Docs',
    body: { classList: { toggle() {}, contains() { return false; } } },
    querySelector(selector) {
      if (selector === '.sidebar') return sidebar;
      if (selector === '.content') return currentContent;
      return null;
    },
    querySelectorAll() { return []; },
    addEventListener(type, listener) { documentListeners.set(type, listener); },
    getElementById() { return null; }
  };
  const sessionStorage = {
    getItem() { return null; },
    setItem() {}
  };
  class FakeDOMParser {
    parseFromString() {
      return {
        title: 'Overview - OpenVibely Docs',
        querySelector(selector) {
          return selector === '.content' ? { childNodes: [{ page: 'overview' }] } : null;
        }
      };
    }
  }

  Function(
    'window', 'document', 'history', 'sessionStorage', 'fetch', 'DOMParser',
    'AbortController', 'URL', script
  )(
    window, document, history, sessionStorage, () => delayedResponse, FakeDOMParser,
    AbortController, URL
  );

  assert.equal(history.scrollRestoration, 'manual');
  const destinationState = { openvibelyDocsScroll: { x: 0, y: 1400 } };
  currentUrl = new URL('https://docs.example/index.html');
  history.state = destinationState;
  windowListeners.get('popstate')({ state: destinationState });

  await Promise.resolve();
  assert.deepEqual(events, [], 'scroll restoration ran before the destination was available');

  resolveFetch({ ok: true, text: async () => '<html></html>' });
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(events, ['replace', 'scroll:0,1400']);
  assert.equal(document.title, 'Overview - OpenVibely Docs');
});
