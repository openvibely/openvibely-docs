# Deployment Modes

OpenVibely uses one Go backend for server, desktop, and container deployments. Choose the mode based on how users will open the app and who manages updates.

## Server Binary

The server binary provides the browser UI at `http://localhost:3001` by default.

```bash
openvibely
```

| Setting | Default |
|---|---|
| Port | `3001` |
| Data root | `~/.openvibely` |
| Database | `~/.openvibely/openvibely.db` |
| Repository root | `~/.openvibely/repos` |
| Local repository paths | Disabled unless `OPENVIBELY_ENABLE_LOCAL_REPO_PATH=true` |

The macOS and Linux installer places the real executable under `~/.local/share/openvibely/bin`. That executable location is separate from the data root.

## Desktop App

Desktop mode uses Wails and opens a native window. Its backend binds to an available local port automatically.

| System | Default Desktop Data Root |
|---|---|
| macOS | `~/Library/Application Support/OpenVibely` |
| Linux | `$XDG_DATA_HOME/openvibely`, or `~/.local/share/openvibely` when `XDG_DATA_HOME` is unset |
| Windows | `%LOCALAPPDATA%\OpenVibely` |

Desktop data is outside the installed app bundle or executable. Replacing or updating the desktop app does not replace its database, repositories, or uploads.

Desktop mode enables local repository paths by default. Use `OPENVIBELY_APP_DATA_DIR`, `DATABASE_PATH`, or `PROJECT_REPO_ROOT` when an explicit location is required.

## Docker

The Docker image contains the server app for both `linux/amd64` and `linux/arm64`. Docker selects the matching image automatically.

```bash
docker pull openvibely/openvibely:0.5.0

docker run -d \
  --name openvibely \
  -p 3001:3001 \
  -v openvibely_data:/data \
  openvibely/openvibely:0.5.0
```

Open `http://localhost:3001`. Keep `/data` on a named volume or bind mount so the database, repositories, and uploads survive container replacement.

For a VPS, place TLS and a reverse proxy in front of the container, configure authentication, and set `APP_BASE_URL` to the public origin.

Container updates are performed by replacing the container with the desired image digest or tag. They do not use the desktop or binary self-updater. See [Updates](updates.html).

## OAuth By Mode

- Server, VPS, or Docker: set `APP_BASE_URL` to the public origin.
- Desktop: usually leave `APP_BASE_URL` unset and use localhost callback behavior.
- Manual fallback: set `OAUTH_REDIRECT_MODE=localhost_manual` when provider callback restrictions require manual paste.

## Related Pages

See [Installation](installation.html) for release installer commands, [Configuration](configuration.html) for runtime settings, and [Environment Variables](environment.html) for the full environment reference.
