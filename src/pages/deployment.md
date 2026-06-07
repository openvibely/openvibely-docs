# Deployment Modes

OpenVibely uses one shared Go backend for server and desktop deployments. The backend wires the database, repositories, services, HTTP routes, workers, scheduler, and event streams.

## Server Mode

Server mode is the default web, VPS, and Docker path.

```bash
./start.sh
```

Important defaults:

| Setting | Default |
|---|---|
| Port | `3001` |
| DB path | `~/.openvibely/openvibely.db` |
| Repo root | `~/.openvibely/repos` |
| Local repo paths | Disabled unless `OPENVIBELY_ENABLE_LOCAL_REPO_PATH=true` |

## Desktop Mode

Desktop mode uses Wails. The backend binds to an ephemeral port by default and the Wails WebView loads the backend URL.

Desktop defaults:

| Setting | Default | Override |
|---|---|---|
| Port | `0` (ephemeral) | `PORT` |
| DB path | `~/.openvibely/openvibely.db` | `DATABASE_PATH` or `OPENVIBELY_APP_DATA_DIR` |
| Repo root | `~/.openvibely/repos` | `PROJECT_REPO_ROOT` or `OPENVIBELY_APP_DATA_DIR` |
| Local repo paths | enabled | `OPENVIBELY_ENABLE_LOCAL_REPO_PATH` |

Both server and desktop modes share `~/.openvibely` as the default app-data directory, so they share the same database unless an explicit `DATABASE_PATH` or `OPENVIBELY_APP_DATA_DIR` separates them.

## Docker / VPS

Use server mode with explicit persistent paths, auth, TLS termination, and `APP_BASE_URL` for hosted OAuth callback behavior.

## OAuth By Mode

- Server/VPS: set `APP_BASE_URL` to the public origin.
- Desktop: usually leave `APP_BASE_URL` unset and use localhost callback behavior.
- Manual fallback: set `OAUTH_REDIRECT_MODE=localhost_manual` when provider callback restrictions require manual paste.
