# Channels Overview

Channels let people create, monitor, and respond to OpenVibely work from the tools they already use. The web app remains the best place to configure channels, review generated changes, and manage project settings. Channel prompts route into OpenVibely project workflows rather than living in disconnected AI sessions.

## What Channels Are For

| Channel | What It Enables |
|---|---|
| GitHub | Connect repositories, import project sources, and open pull requests from reviewed task changes. |
| Slack | Let approved team members create and track work from Slack conversations. |
| Telegram | Control OpenVibely from a mobile bot and receive task responses when enabled. |
| Webhooks | Let external systems create project-scoped tasks from structured events. |

## How To Set Them Up

Open `Channels` from the System section of the app sidebar. Configure one channel at a time, test the connection when the UI offers a test action, and connect each channel to the projects where it should be allowed to create or monitor work.

## Shared Concepts

- Channels should be treated as alternate front doors into the same project/task workflows users see in the web app.
- Channel chat routes into the shared Chat orchestrator, which decides what to do with incoming prompts using project context, surface permissions, and available chat actions.
- Channels do not require users to manually assign agents to rooms; the prompt enters the selected project workflow and can create or coordinate work through the orchestrator.
- Slack and Telegram support authorized users so only approved people can interact with OpenVibely from chat tools.
- GitHub is both a channel and a repository provider, so it affects project setup and pull request review flows.
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
| [GitHub](github.html) | Repository access and pull request workflows. |
| [Slack](slack.html) | Team chat setup and authorized users. |
| [Telegram](telegram.html) | Mobile bot setup and response behavior. |
| [Webhook Triggers](webhooks.html) | Event-driven task creation. |
