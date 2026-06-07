# Completed Task Lessons For OpenVibely Docs Site

Use these durable workflow and UI lessons when maintaining the OpenVibely docs website. For product-copy wording, feature facts, and removed-topic terminology guardrails, use `feature-copy-lessons.md`.

## Runtime And Docker

- Prefer a single-language docs build/serve path unless there is a clear product reason to mix runtimes.
- For this project, Node builds the static site and Node serves it. Do not add a Go server just to get a small runtime image.
- A `FROM scratch` final image can still run the dependency-free Node static server if the Dockerfile explicitly copies the Node binary and the shared libraries it needs from Alpine, plus `dist/` and `scripts/serve.mjs`.
- The minimal container serves plain HTTP on port `4173`; document HTTPS as TLS termination in front of the container via Caddy, Nginx, Traefik, or a load balancer.

## Preview And Validation Workflow

- After content, style, generator, or Dockerfile changes, run `npm run build`.
- When the local preview is expected to reflect changes, rebuild the Docker image and replace the active preview container on port `4173`; check both `openvibely-doc` and `openvibely-docs` names before assuming a port conflict.
- Smoke-test with current generated page text or HTTP status checks, not stale exact headings from earlier docs revisions.
- If a first curl after container restart resets, check container logs/status and retry after readiness before treating it as a runtime failure.

## Navigation And Mobile UI Preferences

- Mobile docs navigation should be an off-canvas drawer opened from a sticky topbar, not a full left nav stacked above page content.
- Sidebar group labels and submenu items should be concise: show only high-level section names and page labels, without descriptive subtitles in the nav.
- Expanded nav groups should not use a heavy border/background box; preserve only the active page highlight.

## Removal Workflow

- When asked to remove a topic from docs, remove it from navigation, standalone source pages, overview/linking pages, generated output, and preview image.
- Scan source and `dist/` for exact topic names and common misspellings before finishing.
