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
| DB path | `./openvibely.db` |
| Repo root | `./repos` |
| Local repo paths | Disabled unless enabled by env |

## Desktop Mode

Desktop mode uses Wails and OS app-data directories. The backend binds to an ephemeral port by default, and the Wails WebView loads the backend URL.

| OS | App Data Path |
|---|---|
| macOS | `~/Library/Application Support/OpenVibely` |
| Linux | `~/.local/share/openvibely` unless `XDG_DATA_HOME` is set |
| Windows | `%LOCALAPPDATA%\OpenVibely` or `%APPDATA%\OpenVibely` fallback |

Desktop defaults local repo paths to enabled.

## Docker / VPS

Use server mode with explicit persistent paths, auth, TLS termination, and `APP_BASE_URL` for hosted OAuth callback behavior.

## OAuth By Mode

- Server/VPS: set `APP_BASE_URL` to the public origin.
- Desktop: usually leave `APP_BASE_URL` unset and use localhost callback behavior.
- Manual fallback: set `OAUTH_REDIRECT_MODE=localhost_manual` when provider callback restrictions require manual paste.
