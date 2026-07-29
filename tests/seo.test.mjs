import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

execFileSync(process.execPath, ['scripts/build.mjs'], { stdio: 'pipe' });

const overview = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const quickstart = await readFile(new URL('../dist/quickstart.html', import.meta.url), 'utf8');
const pageFiles = (await readdir(new URL('../dist/', import.meta.url))).filter(file => file.endsWith('.html'));
const pages = await Promise.all(pageFiles.map(async file => [file, await readFile(new URL(`../dist/${file}`, import.meta.url), 'utf8')]));

function decodeEntities(value) {
  return value.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function metaContent(html, name) {
  const value = html.match(new RegExp(`<meta name="${name}" content="([^"]+)">`))?.[1];
  return value && decodeEntities(value);
}

test('every page emits focused indexable metadata and a canonical URL', () => {
  for (const [route, html] of pages) {
    const title = decodeEntities(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
    const description = metaContent(html, 'description') || '';
    assert.ok(title.length >= 50 && title.length <= 60, `${route} title length is ${title.length}`);
    assert.ok(description.length >= 150 && description.length <= 160, `${route} description length is ${description.length}`);
    assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://docs\\.openvibely\\.ai/${route === 'index.html' ? '' : route}">`));
  }
  assert.equal(pages.length, 54);
  assert.notEqual(metaContent(overview, 'description'), metaContent(quickstart, 'description'));
});

test('pages include crawlable breadcrumbs, structured data, and long-page navigation', () => {
  assert.match(quickstart, /<nav class="breadcrumbs" aria-label="Breadcrumb">/);
  assert.match(quickstart, /<script type="application\/ld\+json" data-seo="structured-data">/);
  assert.match(quickstart, /"@type":"TechArticle"/);
  assert.match(quickstart, /"@type":"BreadcrumbList"/);
  assert.match(quickstart, /<nav class="table-of-contents" aria-label="On this page">/);
});

test('sitemap and article schema use stable source history dates', () => {
  const expected = execFileSync('git', ['log', '-1', '--format=%cs', '--', 'src/pages/quickstart.md'], { encoding: 'utf8' }).trim();
  assert.ok(expected, 'quickstart source history date is missing');
  assert.match(quickstart, new RegExp(`"dateModified":"${expected}"`));
});

test('sitemap and robots advertise every canonical documentation route', async () => {
  const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
  const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');
  const expected = execFileSync('git', ['log', '-1', '--format=%cs', '--', 'src/pages/quickstart.md'], { encoding: 'utf8' }).trim();
  assert.match(sitemap, /<loc>https:\/\/docs\.openvibely\.ai\/<\/loc>/);
  assert.match(sitemap, new RegExp(`<loc>https://docs\\.openvibely\\.ai/quickstart\\.html</loc><lastmod>${expected}</lastmod>`));
  assert.match(robots, /User-agent: \*\nAllow: \/\nSitemap: https:\/\/docs\.openvibely\.ai\/sitemap\.xml/);
});

test('shared image markup reserves layout space and avoids oversized assets', async () => {
  assert.match(overview, /class="brand-mark"[^>]+width="32" height="32"[^>]+decoding="async"/);
  const avatar = await readFile(new URL('../public/assets/avatar.png', import.meta.url));
  assert.ok(avatar.byteLength < 100_000, `avatar is ${avatar.byteLength} bytes`);
});
