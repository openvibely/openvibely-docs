# Discord

Discord lets authorized users work with OpenVibely through bot direct messages, server channels, and threads. Direct messages can start work immediately; server and thread messages must mention the bot.

## What You Need

- A Discord application with a bot user.
- The bot token from the Discord Developer Portal.
- `Message Content Intent` enabled for the bot.
- Numeric Discord user IDs for everyone allowed to instruct OpenVibely.
- Server permissions to view channels, send messages, and read message history. Thread workflows also need thread permissions.

## Configure Discord

Open `Channels`, choose Discord, paste the bot token, save the settings, and click `Test Connection`.

The connection test validates REST authentication. The Channels card separately reports whether the Discord Gateway websocket is running. After correcting a token that failed at startup, save the settings again or restart OpenVibely so the Gateway reconnects.

Operators can seed the token with `DISCORD_BOT_TOKEN`; saved UI settings take over after configuration.

## Authorize Users

Discord inbound authorization is system-level across projects and deny-by-default. Add at least one numeric user ID before expecting inbound messages to run.

Enable Developer Mode in Discord, right-click a user, and choose `Copy User ID`. Use the long numeric ID, not a username or display handle.

Authorized Users determine who may instruct OpenVibely. They do not determine where agents may send proactive Discord messages; configure those destinations as project-scoped Outbound Message Targets.

## Message Behavior

| Origin | Behavior |
|---|---|
| Bot DM | Starts or continues project Chat without a mention. |
| Server channel | Runs only when the message mentions the bot. |
| Discord thread | Runs only when the message mentions the bot. |
| Reply to task output | Continues the linked task thread using normal queueing and steering behavior. |

The active project is preserved across messages. If a Chat turn is already active, additional Discord messages enter the shared queued-turn flow.

## Attachments

Discord processes up to three files per message, with a 10 MB limit per file. Supported images can be passed to a vision-capable model. Small non-image files up to 100 KB are included as text context; larger files remain attached to the Chat turn without being inlined.

## Outbound Messages

Save a Discord channel, optional thread, or user DM under `Channels` -> `Outbound Message Targets`. A saved friendly name such as `ops` can be addressed as `discord:#ops`.

Authorized Discord users and outbound DM targets are independent. A user may be allowed to instruct OpenVibely, receive proactive messages, both, or neither.

## Troubleshooting

| Symptom | Check |
|---|---|
| Connection test passes but bot is offline | Check the Gateway status, save corrected settings again, or restart OpenVibely. |
| Bot is online but ignores a server message | Mention the bot and verify Message Content Intent and channel permissions. |
| DM is rejected | Verify the sender's numeric ID is in Discord Authorized Users. |
| Attachments are missing | Verify Gateway access, Message Content Intent, file count, and file size. |
| Gateway reports authentication failure | Reset the bot token, save it in Channels, and reconnect the Gateway. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Explains shared channel authorization and project behavior. |
| [Outbound Messaging](outbound-messaging.html) | Configure proactive Discord channel, thread, and DM sends. |
| [Attachments As Context](attachments.html) | Explains how files enter Chat and tasks. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Discord replies can continue linked task work. |
