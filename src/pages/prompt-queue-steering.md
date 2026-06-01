# Prompt Queue & Steering

Prompt queueing and steering keep Chat usable while a response is already running. If you send another message during an active chat turn, OpenVibely can either queue it as the next turn or steer the active turn when the UI offers that affordance.

This is similar in spirit to queue-steering concepts in other agent tools, but OpenVibely routes channel and web prompts into the project Chat orchestrator. Channels do not own separate agent assignments. They are entry points into the same project-scoped orchestration path.

## The Mental Model

| Behavior | What It Means |
|---|---|
| Active turn | Chat is already producing a response for the selected project. |
| Queued input | A follow-up prompt waits behind the active turn and becomes the next chat turn. |
| Steering input | A prompt targets the current active turn so the running response can adapt. |
| Applied input | A queued or steering prompt has been consumed by the chat runner. |
| Cancelled input | A pending queued or steering prompt was cancelled before it was applied. |

Interactive Chat intentionally bypasses task worker capacity. Worker limits gate task execution, not the chat orchestrator, so you can continue coordinating even when task workers are busy.

## Queueing

Queueing is the default safe behavior when you add a follow-up while Chat is already busy. The message is saved as pending input for the same project and active execution, then promoted after the running turn finishes.

Use queued follow-ups for normal next-step instructions:

```text
After that finishes, create a second task for tests and make it depend on the implementation result.
```

Queued messages are useful when you want to preserve ordering. The active answer can finish without interruption, then the queued prompt becomes the next unit of chat work.

## Steering

Steering is for correcting or redirecting the active response before it finishes. The web UI tracks the active turn and requires the expected turn id so a stale browser tab cannot accidentally steer the wrong response.

Use steering for immediate corrections:

```text
Actually, do not include the deployment scripts in this plan. Keep the scope to the web UI and API handlers.
```

If the active turn changed before the steering message is submitted, OpenVibely rejects the stale steer and the user should queue or send a normal follow-up instead.

## Channels Route Into Chat

Slack, Telegram, API, and web messages share the same chat execution path. Channel-origin chat runs are handed to the same streaming processor used by the web Chat page, with `Orchestrate` behavior for channel surfaces.

That means channels are not separate rooms with manually assigned agents. A channel message enters the selected project context, reaches the Chat orchestrator, and the orchestrator decides what actions are available based on surface, mode, and project state.

## What Orchestrate Can Control

In `Orchestrate` mode, Chat can perform write actions such as creating tasks, editing tasks, executing tasks, sending follow-ups to task threads, scheduling tasks, managing alerts, switching projects, and changing chat mode. In `Plan` mode, Chat stays read-oriented so users can explore before taking action.

## Good Uses

- Send a follow-up while a long response is still running without opening another session.
- Correct the active response when you notice it is planning the wrong scope.
- Ask Chat to create several tasks, then queue the next coordination instruction while it is still responding.
- Let channel messages feed the same project orchestrator used by the web UI.

## Limits And Safety

- Queue and steering are project-scoped; they are not global app queues.
- Steering should be used for the currently active turn only.
- Task worker capacity still matters once Chat starts real task execution.
- GitHub PR and merge operations stay outside chat-controllable actions because they need explicit review context.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Orchestrate From Chat](orchestrate-from-chat.html) | Shows how queueing and steering support one-window multi-task coordination. |
| [Chat](chat.html) | Explains Plan and Orchestrate modes. |
| [Channels Overview](channels.html) | Shows how Slack, Telegram, GitHub, and webhooks enter OpenVibely workflows. |
| [Worker Capacity & Dispatch](workers.html) | Explains the task execution capacity that is separate from Chat responsiveness. |
