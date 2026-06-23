# Slack

Slack lets approved team members create and monitor OpenVibely work from team conversations while keeping review and configuration in the web app.

## What Users Do In The App

Open `Channels`, choose Slack, then configure the connection using OAuth or manual tokens depending on how the instance is operated. After the connection is saved, add authorized users and test the connection before relying on Slack for team workflows.

## What Slack Enables

| Capability | User Impact |
|---|---|
| Team chat entry point | People can request project work without opening the web app first. |
| Authorized users | Only approved Slack users can interact with OpenVibely. |
| Connection test | Operators can confirm the bot is reachable before inviting broad use. |
| Project-aware work | Slack-created work still lands in OpenVibely projects and task review flows. |
| Task Goals | Tasks created or managed through Slack support Goals the same way web tasks do. Goal state is visible and managed in the web app. |
| Early follow-ups | Replies sent before the first task run exists are preserved as follow-ups for that task instead of being dropped. |

## Task Follow-Ups

Slack-created work still belongs to the normal OpenVibely task flow. If a user replies with clarification before the first execution has started, OpenVibely keeps that reply with the task so it can be applied as follow-up context when execution begins.

## Setup Flow

1. Create or choose the Slack app used for OpenVibely.
2. Configure OAuth or manual bot-token settings in `Channels`.
3. Provide the app-level token required for Socket Mode when using Socket Mode.
4. Save the configuration and test the connection.
5. Add authorized users.
6. Create a low-risk test task and review it in the OpenVibely web app.

## Configuration Notes

Operators may provide `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET`, `SLACK_APP_TOKEN`, and `SLACK_BOT_TOKEN` through environment configuration. The UI should remain the source of truth for whether Slack is connected and who is authorized.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Shared rollout guidance for external channels. |
| [Projects](projects.html) | Slack work should be tied to a project. |
| [Tasks](tasks.html) | Slack-created work is reviewed as normal task work. |
