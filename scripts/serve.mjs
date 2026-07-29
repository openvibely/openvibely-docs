import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.env.DOCS_ROOT || 'dist');
const port = Number(process.env.PORT || 4173);

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.svg', 'image/svg+xml'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.ico', 'image/x-icon'],
]);

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), geolocation=(), microphone=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

createServer((request, response) => {
  const filePath = resolveRequestPath(request.url || '/');

  if (!filePath) {
    response.writeHead(404, securityHeaders);
    response.end('Not found');
    return;
  }

  const extension = extname(filePath);
  const cacheControl = extension === '.html' ? 'no-cache' : 'public, max-age=3600';
  response.writeHead(200, {
    ...securityHeaders,
    'Cache-Control': cacheControl,
    'Content-Type': contentTypes.get(extension) || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}).listen(port, '0.0.0.0', () => {
  console.log(`serving OpenVibely docs from ${root} on :${port}`);
});

function resolveRequestPath(rawUrl) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(rawUrl, 'http://localhost').pathname);
  } catch {
    return null;
  }

  const cleanPath = normalize(pathname).replace(/^[/\\]+/, '');
  const candidates = cleanPath === ''
    ? ['index.html']
    : [cleanPath, `${cleanPath}.html`, join(cleanPath, 'index.html')];

  for (const candidate of candidates) {
    const target = resolve(root, candidate);
    if (!target.startsWith(root + '/') && target !== root) {
      continue;
    }

    try {
      const info = statSync(target);
      if (info.isFile()) {
        return target;
      }
    } catch {
      // Try the next candidate.
    }
  }

  return null;
}
