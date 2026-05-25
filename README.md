# OpenVibely Docs

Static documentation website for OpenVibely. The site is generated from Markdown in `src/pages`, styled with OpenVibely-inspired CSS in `public/assets`, and served as plain static HTML.

The docs are UI-first: they explain how people use the OpenVibely web app before diving into deployment or developer reference material.

## Requirements

- Node.js 22 or newer for local build/serve
- Docker, only if building the container image

## Local Development

Build the static site:

```sh
npm run build
```

Serve the generated site locally:

```sh
npm run serve
```

Open:

```text
http://localhost:4173
```

The server reads from `dist/` by default and supports clean URLs such as `/chat`, `/tasks`, and `/models`.

## Project Structure

```text
src/pages/          Markdown source pages
public/assets/      Shared CSS and static assets
scripts/build.mjs   Static site generator
scripts/serve.mjs   Minimal dependency-free Node static server
dist/               Generated site output, ignored by git
Dockerfile          Minimal production container
```

## Docker

Build the production image:

```sh
docker build -t openvibely-doc:local .
```

Run it locally:

```sh
docker run --rm --name openvibely-doc -p 4173:4173 openvibely-doc:local
```

Open:

```text
http://localhost:4173
```

The Dockerfile uses Node to build the static site and a `FROM scratch` final image for runtime. The final image still serves with Node, but only copies the required Node binary, shared libraries, generated `dist/` files, and `scripts/serve.mjs`.

## HTTPS Deployment

The container serves plain HTTP internally on port `4173`. For HTTPS, terminate TLS in front of it with a reverse proxy or platform load balancer such as Caddy, Nginx, Traefik, or cloud ingress.

Example Caddy configuration:

```caddyfile
docs.example.com {
  reverse_proxy openvibely-doc:4173
}
```

The site is designed to be served from a domain root, such as `https://docs.example.com/`. Serving from a subpath may require asset path changes.

## Updating Content

1. Edit Markdown files in `src/pages`.
2. If adding a page, register it in `scripts/build.mjs` so it appears in navigation and LLM exports.
3. Run `npm run build`.
4. Preview with `npm run serve`.

The build also generates `llms.txt` and `llms-full.txt` in `dist/` for AI/search ingestion.
