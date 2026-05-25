# Authentication

OpenVibely includes built-in login middleware controlled by environment variables.

## Enablement Rules

| Case | Behavior |
|---|---|
| `AUTH_ENABLED=true` | Auth enabled explicitly |
| `AUTH_ENABLED=false` | Auth disabled explicitly |
| `AUTH_ENABLED` unset and username/password set | Auth inferred enabled |
| `AUTH_ENABLED` unset and username/password missing | Auth disabled |

When auth resolves enabled, startup requires `AUTH_USERNAME`, `AUTH_PASSWORD`, and `AUTH_SESSION_SECRET`. Missing required values cause startup failure.

## Session Settings

| Variable | Purpose |
|---|---|
| `AUTH_SESSION_SECRET` | Signs the `ov_session` cookie |
| `AUTH_SESSION_TTL` | Go duration string; invalid or non-positive values fall back to `24h` |

## UI Behavior

The sidebar calls `/auth/me` to show the authenticated user menu when auth is active. Logout posts to `/logout`.

## Production Guidance

- Always set `AUTH_ENABLED=true` explicitly for internet-facing deployments.
- Use a long random `AUTH_PASSWORD`.
- Use at least 32 random bytes for `AUTH_SESSION_SECRET`.
- Terminate TLS at a reverse proxy or load balancer.
- Keep secrets in environment variables or a secret manager, not committed files.
