# Installation

Install the released desktop app or server binary from `openvibely.ai`. The installer detects macOS, Linux, or Windows and selects the matching `amd64` or `arm64` download automatically.

[[install-chooser]]

## macOS And Linux

Run the interactive installer and choose `desktop` or `binary` when prompted:

```bash
curl -fsSL https://openvibely.ai/install.sh | bash
```

To choose the app type in the command:

Desktop app:

```bash
curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant desktop
```

Server binary with a browser UI:

```bash
curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant binary
```

Do not run the installer as root. It installs the app for the current user and requests elevated permission only when it needs to create a command in `/usr/local/bin`.

## Windows

Run the interactive PowerShell installer and choose `desktop` or `binary` when prompted:

```powershell
irm https://openvibely.ai/install.ps1 | iex
```

To choose the app type in the command:

Desktop app:

```powershell
& ([scriptblock]::Create((irm https://openvibely.ai/install.ps1))) -Variant desktop
```

Server binary with a browser UI:

```powershell
& ([scriptblock]::Create((irm https://openvibely.ai/install.ps1))) -Variant binary
```

Run the installer from a normal user PowerShell session, not an Administrator session.

## What The Installer Detects

You do not need to pass operating-system or architecture flags.

| System | Detected Architectures | Available Variants |
|---|---|---|
| macOS | Intel (`amd64`) and Apple silicon (`arm64`) | Desktop and binary |
| Linux | `amd64` and `arm64` | Desktop and binary |
| Windows | `amd64` and `arm64` | Desktop and binary |

The installer downloads the matching signed release metadata and artifact, verifies it, installs it, and creates the normal command or application launcher.

## Installed Locations

| System | Server Binary | Desktop App |
|---|---|---|
| macOS | `~/.local/share/openvibely/bin/openvibely`, launched as `openvibely` | `~/Applications/OpenVibely.app` |
| Linux | `~/.local/share/openvibely/bin/openvibely`, launched as `openvibely` | `~/.local/share/openvibely/bin/openvibely-desktop`, launched as `openvibely-desktop` or from the application menu |
| Windows | `%LOCALAPPDATA%\Programs\OpenVibely Server` | `%LOCALAPPDATA%\Programs\OpenVibely Desktop` and its Start Menu shortcut |

The server binary runs in the current terminal after installation. Press `Ctrl+C` to stop it. Desktop installs launch the native app.

## Install A Specific Version

Use `--version` when testing or restoring an already published version:

```bash
curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant desktop --version 0.5.0
```

```powershell
& ([scriptblock]::Create((irm https://openvibely.ai/install.ps1))) -Variant desktop -Version 0.5.0
```

Use `--replace` on macOS or Linux, or `-Replace` on Windows, to approve replacement without an interactive confirmation.

## Build From Source

Use the source workflow when developing OpenVibely itself.

Requirements:

- Go `1.26.6+`.
- Git.
- Provider credentials for the models you configure.

```bash
git clone https://github.com/openvibely/openvibely.git
cd openvibely
./start.sh
```

The script generates required assets, builds `bin/openvibely`, starts the server, and tails `logs/openvibely.log`. Open `http://localhost:3001`.

For the live developer workflow:

```bash
make install-tools
make dev
```

## Next Step

Configure at least one model, create a project, and use Chat or Tasks to begin work. See [Quickstart](quickstart.html), [First-Time Setup](first-time-setup.html), and [Updates](updates.html).
