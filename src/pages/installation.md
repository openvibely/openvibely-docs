# Installation

The fastest local setup is to clone the repository and run the startup script. The script is the recommended first path because it installs missing UI tooling, generates required assets, builds the server binary, starts OpenVibely, and tails the log.

## Requirements

- Go `1.26.3+`.
- Git for cloning and project worktree operations.
- Optional provider CLIs or credentials depending on which model authentication method you use.

## Fresh Clone

```bash
git clone https://github.com/openvibely/openvibely.git
cd openvibely
./start.sh
```

If the script is not executable:

```bash
chmod +x start.sh
./start.sh
```

## What `./start.sh` Does

- Loads `.env` if present.
- Installs `templ` if missing.
- Runs `templ generate`.
- Builds `bin/openvibely`.
- Starts the server.
- Tails `logs/openvibely.log`.

The default URL is `http://localhost:3001`.

## Developer Workflow

Use this only if you are working on the OpenVibely codebase itself:

```bash
make install-tools
make dev
```

`make install-tools` installs additional developer tools such as `air`, `swag`, and the optional `goose` CLI. Normal app startup does not require these.

## Next Step

After startup, open the web app and configure at least one model from the `Models` screen. Then create a project from the sidebar and use `Chat` or `Tasks` to begin work. See [First-Time Setup](first-time-setup.html).
