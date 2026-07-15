# Telegram

Telegram provides mobile bot control for OpenVibely. It is useful for lightweight task creation, status checks, and optional task responses when users are away from the web app.

## What Users Do In The App

Open `Channels`, choose Telegram, save a bot token, test the bot, and add authorized users. If response sending is enabled, task completion or failure messages can be sent back through Telegram.

## What Telegram Enables

| Capability | User Impact |
|---|---|
| Mobile control | Create or follow work from a Telegram chat. |
| Authorized users | Restrict bot access to known numeric user IDs. Authorization is system-level across projects and deny-by-default. |
| Rich responses | Stream and deliver formatted Markdown while avoiding duplicate final messages, with MarkdownV2/plain-text fallback when needed. |
| Outbound targets | Save project-scoped chats, topics, or direct recipients for proactive agent messages. |
| Send responses toggle | Decide whether task responses are sent back through Telegram. |
| Project/task continuity | Telegram-created work still appears in the same OpenVibely task board. |
| Task Goals | Tasks created or managed through Telegram support Goals the same way web tasks do. Goal state is visible and managed in the web app. |
| Early follow-ups | Replies sent before the first task run exists are preserved as follow-ups for that task instead of being dropped. |

## Task Follow-Ups

Telegram-created work still belongs to the normal OpenVibely task flow. If a user replies with clarification before the first execution has started, OpenVibely keeps that reply with the task so it can be applied as follow-up context when execution begins.

## Setup Flow

1. Use BotFather to create a bot and get its token.
2. Save the token in the Telegram channel settings.
3. Test the connection.
4. Add authorized Telegram users.
5. Decide whether task responses should be sent back through Telegram.
6. Run a small test request and review the resulting task in the web app.

## Configuration Notes

Operators can bootstrap Telegram with `TELEGRAM_BOT_TOKEN`. The channel settings remain the user-facing place to test, authorize, and remove Telegram access. Add at least one authorized numeric user ID before testing inbound commands; an empty list is not public access.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Outbound Messaging](outbound-messaging.html) | Configure project-scoped chats, topics, Home targets, and direct recipients. |
| [Channels Overview](channels.html) | Shared rollout guidance for external channels. |
| [Tasks](tasks.html) | Telegram-created work becomes normal task work. |
| [Alerts](alerts.html) | Task failures and follow-up needs should still be watched in the app. |
