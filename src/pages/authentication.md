# Authentication

OpenVibely supports local user accounts within one organization per installation. Enable login with environment variables, then manage members in **Settings → Organization**.

## Enablement Rules

| Case | Behavior |
|---|---|
| `AUTH_ENABLED=true` | Auth enabled explicitly |
| `AUTH_ENABLED=false` | Auth disabled only while the default local owner is the sole member and owner |
| `AUTH_ENABLED` unset and username/password set | Auth inferred enabled |
| `AUTH_ENABLED` unset and username/password missing | Auth disabled |

When auth resolves enabled, startup requires `AUTH_USERNAME`, `AUTH_PASSWORD`, and `AUTH_SESSION_SECRET`. Missing required values cause startup failure.

`AUTH_USERNAME` and `AUTH_PASSWORD` initialize the owner account once. After initialization, changing these variables does not reset the stored credentials. A password-change/reset UI is not currently available.

## Organization Members

Open **Settings → Organization** to invite members or admins and manage existing members. Invitation links expire after seven days and can be revoked. Owners manage roles and membership; admins can invite and remove ordinary members. The last owner cannot be removed or demoted.

Members have their own interface preferences, and conversation messages show who sent them. All members currently share access to all projects and global application operations; roles restrict organization management, not project access. Hosted SSO currently supports the workspace owner only.

## Session Settings

| Variable | Purpose |
|---|---|
| `AUTH_SESSION_SECRET` | Signs the `ov_session` cookie |
| `AUTH_SESSION_TTL` | Go duration string; invalid or non-positive values fall back to `24h` |

Upgrading from a release before 0.12.0 requires existing users to sign in again. Removing a member revokes their sessions but does not cancel work already running.

## Trusted Proxies

`AUTH_TRUSTED_PROXIES` accepts comma-separated proxy IP addresses or CIDRs for login rate limiting. Forwarded client addresses are ignored by default. Configure only the reverse proxies in front of your installation.

## UI Behavior

Use the signed-in user menu to log out. Organization management is available under **Settings → Organization**.

See [Configuration](configuration.html) for authentication setup and [Environment Variables](environment.html) for the variable reference.

## Channel Authorization

App login and channel authorization are separate layers. Slack, Telegram, Discord, and Email Authorized Users or Senders are system-level allowlists and deny inbound access until identities are added. GitHub Authorized Users define trusted issue inbox and pull request feedback identities.

Outbound Message Targets do not grant inbound access. They are project-scoped destinations for proactive agent sends, with a separate project policy for explicit unsaved targets.

## Production Guidance

- Always set `AUTH_ENABLED=true` explicitly for internet-facing deployments.
- Use a long random `AUTH_PASSWORD`.
- Use at least 32 random bytes for `AUTH_SESSION_SECRET`.
- Terminate TLS at a reverse proxy or load balancer.
- Keep secrets in environment variables or a secret manager, not committed files.
