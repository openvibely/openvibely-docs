import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

execFileSync(process.execPath, ['scripts/build.mjs'], { stdio: 'pipe' });

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

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
});

test('client-side navigation keeps accessible focus and native-link fallbacks', () => {
  assert.match(html, /class="content" tabindex="-1"/, 'content is not programmatically focusable');
  assert.match(html, /event\.defaultPrevented[^\n]+event\.button[^\n]+event\.metaKey/, 'modified and non-primary clicks are not preserved');
  assert.match(html, /window\.location\.assign\(url\.href\)/, 'failed client navigation has no native fallback');
});
