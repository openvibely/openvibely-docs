# Channels Overview

Channels let people create, monitor, and respond to OpenVibely work from the tools they already use. The web app remains the best place to configure channels, review generated changes, and manage project settings. Channel prompts route into OpenVibely project workflows rather than living in disconnected AI sessions.

## What Channels Are For

| Channel | What It Enables |
|---|---|
| GitHub | Connect repositories and give agents controlled issue, pull request, and review-feedback capabilities. |
| Slack | Let approved team members create and track work from Slack conversations, including file attachments. |
| Telegram | Control OpenVibely from a mobile bot and receive richly formatted task responses when enabled. |
| Discord | Create and continue work through bot DMs or bot-mentioned server messages, with attachment support. |
| Email | Turn authorized inbox messages and attachments into threaded Chat or task work, with SMTP replies. |
| Webhooks | Let external systems create project-scoped tasks from structured events. |

## How To Set Them Up

Open `Channels` from the System section of the app sidebar. Configure one channel at a time, test the connection when the UI offers a test action, add authorized identities, and select the project where incoming work should continue.

## Authorization Scope

Slack, Telegram, Discord, and Email inbound allowlists are system-level across projects and deny access until an authorized user or sender is added. Telegram runtime authorization is also deny-by-default; do not treat an empty list as public access even if an older Channels UI build says otherwise.

GitHub also has an `Authorized Users` list, but it serves a different purpose: it defines trusted GitHub identities for runtime authorization, assigned-issue discovery, and pull request feedback. It does not control who may send Chat messages through another channel.

Outbound Message Targets and the `Allow explicit unsaved targets` policy are project-scoped. Inbound authorization answers who may instruct OpenVibely; outbound policy answers where agents in the selected project may send. See [Outbound Messaging](outbound-messaging.html).

## Shared Concepts

- Channels should be treated as alternate front doors into the same project/task workflows users see in the web app.
- Channel chat routes into the shared Chat orchestrator, which decides what to do with incoming prompts using project context, surface permissions, and available chat actions.
- Channels do not require users to manually assign agents to rooms; the prompt enters the selected project workflow and can create or coordinate work through the orchestrator.
- Slack, Telegram, Discord, and Email support authorized users or senders so only approved people can interact with OpenVibely.
- Outbound Message Targets are project-scoped saved Slack, Telegram, Discord, and Email destinations. They let Chat and task agents send proactive messages through the existing channel credentials while keeping outbound permissions separate from inbound authorization.
- GitHub is both a channel and a repository provider. It supports repository access, issue actions, assigned-issue discovery, API-backed task pull request publication, and authorized review-feedback forwarding.
- Webhooks are best for trusted automation systems that need to create repeatable task requests.
- Tasks created through any channel support the same features as web-created tasks, including Task Goals, lifecycle hooks, and review workflows.

## Recommended Rollout

1. Start with one project and one channel.
2. Add only the users or systems that should be allowed to create work.
3. Run a low-risk task through the channel.
4. Review the task in the web app before merging or opening a pull request.
5. Expand channel usage once the team understands where generated work appears.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Prompt Queue & Steering](prompt-queue-steering.html) | Explains how channel and web prompts share the Chat orchestrator path. |
| [Outbound Messaging](outbound-messaging.html) | Saved project destinations, Home targets, and explicit-target policy. |
| [GitHub](github.html) | Repository access, issue and pull request actions, and trusted review feedback. |
| [Slack](slack.html) | Team chat setup and authorized users. |
| [Telegram](telegram.html) | Mobile bot setup and response behavior. |
| [Discord](discord.html) | DMs, mention-gated server messages, threads, and attachments. |
| [Email](email.html) | IMAP intake, authorized senders, attachments, and SMTP replies. |
| [Webhook Triggers](webhooks.html) | Event-driven task creation. |
