# Email

Email lets OpenVibely poll a dedicated inbox through IMAP and send threaded replies through SMTP. Messages from authorized senders enter the same project Chat and task workflows as other channels.

## Configure Email

Open `Channels`, choose `+ Add Channel`, and select Email.

| Setting | Purpose |
|---|---|
| Provider preset | Fills the standard IMAP and SMTP hosts and ports for Gmail, Outlook / Microsoft 365, Yahoo Mail, Fastmail, or iCloud Mail. |
| Custom IMAP/SMTP | Supports another provider by accepting explicit hosts and ports. |
| Inbox address and password | Authenticates the dedicated mailbox. Use an app password when the provider requires one. |
| Send completion/failure replies | Controls whether Email-origin task outcomes are sent back to their original thread. |
| Skip attachments | Prevents inbound MIME attachments from being added as Chat context. |

Use `Test Connection` after saving the mailbox settings. A dedicated automation inbox is safer and easier to troubleshoot than a personal mailbox.

## Authorize Senders

Email Authorized Senders are system-level across projects and deny-by-default. Add each sender address that may instruct OpenVibely. There is no pairing code or PIN flow.

Authorized Senders control inbound instructions. Project-scoped Outbound Message Targets separately control proactive recipients and default subjects.

## Message And Thread Behavior

OpenVibely polls unread messages, ignores messages sent by the configured mailbox itself, and skips common automated or list messages. An authorized message becomes an Email-origin Chat turn in the active project.

Replies preserve `In-Reply-To` and `References` headers and keep a single `Re:` subject prefix. Completion and failure replies are plain-text UTF-8 messages. Disable completion/failure replies when Email should be intake-only.

## Attachments

Email supports normal messages and attachment-only messages. Up to ten attachments are processed per email, with a 20 MB limit per attachment. Images can be passed to a vision-capable model, while non-image text files up to 100 KB can be included inline as prompt context.

Attachments larger than the inline context limit may still remain associated with the Chat turn. Enable `Skip attachments` if the mailbox should never ingest attached files.

## Outbound Messages

Save recipient addresses under `Channels` -> `Outbound Message Targets`. Each target can have a friendly name, a Home designation, and an optional default subject. Outbound sends reuse the Email channel's SMTP settings; no second SMTP configuration is required.

## Troubleshooting

| Symptom | Check |
|---|---|
| Connection fails | Verify IMAP/SMTP hosts, ports, TLS requirements, and the provider's app-password policy. |
| Message is ignored | Confirm it is unread, not self-sent or automated, and the sender is authorized. |
| Reply is not sent | Enable completion/failure replies and verify SMTP authentication. |
| Attachment is missing | Check `Skip attachments`, the ten-file limit, and the 20 MB per-file limit. |
| Work appears in the wrong project | Switch the Email channel's active project before sending the next instruction. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Explains shared channel and project behavior. |
| [Outbound Messaging](outbound-messaging.html) | Configure proactive recipients and subjects. |
| [Attachments As Context](attachments.html) | Explains how inbound files become model context. |
| [Authentication](authentication.html) | Distinguishes app login from channel authorization. |
