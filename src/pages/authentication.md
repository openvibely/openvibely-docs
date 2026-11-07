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

Members have their own interface preferences, and Chat/task messages, queued inputs, and steering messages show their authors. Joining the organization does not grant access to existing projects. Project owners and organization admins/owners grant Viewer, Editor, or Maintainer roles through **Project Settings → Sharing**. See [Sharing And Ownership](projects.html#sharing-and-ownership) for role capabilities and the invitation-to-project-access workflow. Hosted SSO currently supports the workspace owner only.

### Organization Roles

Organization roles and project roles are separate. **Member** does not mean project Editor, and a project Maintainer is not an organization Admin.

| Organization Role | Organization Controls | Project Access |
|---|---|---|
| Member | View organization information and membership. | Only owned projects and projects explicitly shared with them. |
| Admin | Rename the organization, invite ordinary members, remove ordinary members, and revoke invitations they created. Cannot change member roles or manage owners/admins as members. | Access all projects and manage their sharing and ownership. |
| Owner | Admin capabilities plus invite admins, change organization roles, remove admins/owners subject to the last-owner rule, and revoke any invitation. | Access all projects and manage their sharing and ownership. |

Under **General**, admins and owners can edit **Organization name** and click **Save name**. Under **Members**, owners select a role and click **Save role**; authorized admins/owners use **Remove** to remove membership. To hand over organization ownership, promote another member to **Owner** first. The last owner cannot be demoted or removed. This is separate from transferring an individual project's ownership.

### Invite And Join

Local authentication must be enabled before inviting people. With authentication off, anyone who can reach the app acts as the local owner. Hosted SSO does not currently provide this multi-member invitation flow.

1. Open **Settings → Organization → Invitations**.
2. Choose **Member**, or **Admin** if you are an owner, then click **Create invite link**. Owner invitations are not offered; promote a joined member separately.
3. Copy and share the displayed link. It is **shown only once**, works **once**, and expires after **seven days**. Anyone holding the link can use it to join.
4. The recipient opens the link and creates an account, chooses **Use an existing account**, or joins as their already signed-in account. New usernames use 3–64 letters, numbers, dots, dashes, or underscores; new passwords require at least 12 characters.
5. After joining, grant ordinary members access to the appropriate projects through **Project Settings → Sharing**. An invited Admin already has access to all projects.

The invitation list shows **Pending**, **Accepted**, **Revoked**, or **Expired**. Use **Revoke** on an unused, unexpired invitation to invalidate it. Owners can revoke any invitation; admins can revoke their own. If you lose the original link, create a new invitation and revoke the unused one.

### Remove Members And Restore Access

Removing someone revokes their sessions and removes their explicit project grants. Rejoining does not restore those grants; assign them again as needed. Removing an invitation's creator, or demoting that creator to ordinary Member, also revokes their outstanding invitations.

Removing membership does not transfer projects they own. Review project ownership and use **Transfer ownership** when responsibility should move to another teammate. Removing access does not itself cancel already-admitted work; see [When Access Changes](projects.html#when-access-changes).

## Personal And Shared Conversations

- **All projects Chat** is personal to each signed-in user. History, queued messages, active runs, provider context, and model/reasoning/Fast mode preferences are kept separately. Organization admin status does not grant access to another user's new personal conversation through the app.
- **Project Chat and task threads** are shared with members who have access to that project; their role determines which actions they can perform.
- **Older shared All projects history** remains available only to organization admins/owners after upgrade. The author of an old message is not automatically made the owner of that shared history.

These are application access rules, not process or filesystem isolation. Private-project sandboxing, organization-wide audit browsing, named conversation lists, and participant-level conversation sharing are not currently available.

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

With authentication enabled, Telegram, Slack, and Discord senders must also map to an OpenVibely user with the required project permissions. Email sender mappings can be configured, but authenticated email execution remains blocked until verified sender identity is supported.

Outbound Message Targets do not grant inbound access. They are project-scoped destinations for proactive agent sends, with a separate project policy for explicit unsaved targets.

## Production Guidance

- Always set `AUTH_ENABLED=true` explicitly for internet-facing deployments.
- Use a long random `AUTH_PASSWORD`.
- Use at least 32 random bytes for `AUTH_SESSION_SECRET`.
- Terminate TLS at a reverse proxy or load balancer.
- Keep secrets in environment variables or a secret manager, not committed files.
