# Updates

Released desktop apps and server binaries can update themselves from the OpenVibely release service. Source checkouts and Docker containers use their own update workflows.

## Update Support

| Installation | Update Method |
|---|---|
| macOS, Linux, or Windows desktop app | Approve the update in OpenVibely. The app replaces itself and restarts. |
| macOS, Linux, or Windows server binary | Approve the update in OpenVibely. The binary replaces itself and restarts. |
| Docker | Pull the new image and replace the container. Keep `/data` mounted. |
| Source checkout | Pull the desired source revision and rebuild. |

## What Users See

OpenVibely periodically checks the configured release channel. When a newer authorized release is available, an update notice appears throughout the app; you do not need to remain on the Alerts page.

Open `Alerts` to see the current version, available version, release notes, update state, active AI operations, and any failure message.

## What Happens After Approval

| Step | What Happens |
|---|---|
| Download | OpenVibely downloads and verifies the replacement before asking for approval. |
| Drain | After approval, it waits for active AI operations to finish. |
| Replace | A recovery helper replaces the installed app or executable. |
| Restart | The new version starts and reports healthy. |
| Complete or roll back | The update is marked complete. If startup or health validation fails, the helper restores the previous version. |

The updater replaces application files only. App data stays in the platform data directory listed on [Deployment Modes](deployment.html).

## Reinstall After A Failed Update

Rerun the hosted installer with the same variant. The installer coordinates with any unfinished update recovery and replaces the installed application without deleting its data.

```bash
curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant binary
```

```powershell
& ([scriptblock]::Create((irm https://openvibely.ai/install.ps1))) -Variant binary
```

Use `desktop` instead of `binary` for the desktop app. Do not manually delete update state files as a normal recovery step; keep the failure message from Alerts for troubleshooting.

## Docker Updates

Pull and run the new image while reusing the existing `/data` volume:

```bash
docker pull openvibely/openvibely:0.5.0
docker stop openvibely
docker rm openvibely
docker run -d \
  --name openvibely \
  -p 3001:3001 \
  -v openvibely_data:/data \
  openvibely/openvibely:0.5.0
```

For production, pin an immutable image digest rather than relying only on a mutable tag.

## Related Pages

See [Installation](installation.html), [Deployment Modes](deployment.html), [Alerts](alerts.html), and [Troubleshooting](troubleshooting.html).
