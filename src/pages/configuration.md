# Configuration

OpenVibely is configured primarily with environment variables. `start.sh` loads `.env` when present, then starts the server.

## Runtime Variables

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `3001` in server mode, `0` in desktop mode | HTTP port; desktop uses ephemeral by default |
| `DATABASE_PATH` | `~/.openvibely/openvibely.db` (both modes) | SQLite database path |
| `DATABASE_URL` | empty | Loaded but not used by server startup |
| `ENVIRONMENT` | `development` | Runtime label |
| `PROJECT_REPO_ROOT` | `~/.openvibely/repos` (both modes) | Managed clone root |
| `OPENVIBELY_APP_DATA_DIR` | mode-specific | Overrides app-data root and changes DB/repo defaults |
| `OPENVIBELY_ENABLE_LOCAL_REPO_PATH` | false in server, true in desktop | Enables local path project source mode |

## Auth Variables

| Variable | Purpose |
|---|---|
| `AUTH_ENABLED` | Explicit built-in login toggle |
| `AUTH_USERNAME` | Login username |
| `AUTH_PASSWORD` | Login password |
| `AUTH_SESSION_SECRET` | HMAC secret for `ov_session` cookie |
| `AUTH_SESSION_TTL` | Session lifetime, default `24h` |

If `AUTH_ENABLED` is unset, auth is inferred enabled when both username and password are present. If auth is enabled, username, password, and session secret are required.

## Model Provider Configuration

Most model setup happens in the Models UI, not environment variables. Use that screen to configure provider auth, default models, OpenAI-compatible base URLs, gateway headers, and model discovery/manual model IDs. Environment variables are mainly for bootstrap secrets and deployment-wide OAuth settings.

## Integration Variables

- `ANTHROPIC_API_KEY`
- `TELEGRAM_BOT_TOKEN`
- `GITHUB_APP_ID`
- `GITHUB_APP_SLUG`
- `GITHUB_APP_PRIVATE_KEY`
- `SLACK_CLIENT_ID`
- `SLACK_CLIENT_SECRET`
- `SLACK_APP_TOKEN`
- `SLACK_BOT_TOKEN`

## Deployment Variables

- `APP_BASE_URL`
- `OAUTH_REDIRECT_MODE`
- Provider OAuth client IDs, secrets, authorize URLs, token URLs, and scopes.
- Git SSL variables: `GIT_SSL_CAINFO`, `SSL_CERT_FILE`, and `GIT_SSL_NO_VERIFY`.
