# Task Threads & Follow-Ups

Task threads let you keep working with a task after the first execution. Instead of starting over with a new prompt, you can send a follow-up that continues from the task's existing context, output, status, worktree, selected model, assigned agent, and prior conversation.

Use follow-ups when the task is still the right unit of work but needs clarification, correction, a second pass, or review feedback applied.

## What Users See

| Surface | What It Means |
|---|---|
| Task thread | The conversation around one task, including the original prompt, model output, and follow-up messages. |
| Follow-up input | A way to continue the same task without creating another board card. |
| Queued follow-up | The message has been accepted but is waiting for execution capacity. |
| Streaming response | The follow-up is actively running and appending new output to the thread. |
| Changes update | New follow-up changes can refresh diffs and review state. |
| Alerts | Failed follow-ups or tasks needing more input can create attention notices. |

## When A Follow-Up Triggers

A follow-up is useful after a task has produced enough context to continue from. Common triggers include asking the agent to address review comments, refine an implementation, explain a failure, add tests, resolve a small issue discovered during review, or continue a task that explicitly asked for more direction.

Follow-ups are different from Chat orchestration. Chat is the central place to coordinate many tasks. A task follow-up is scoped to one existing task thread.

## Runtime Boundary

Task follow-ups are execution work, so they respect worker capacity. If project or model capacity is full, OpenVibely accepts the follow-up and queues it instead of dropping the message.

Interactive project Chat intentionally stays responsive even when task workers are full. That is why Chat can keep orchestrating while task follow-ups wait for available execution slots.

## Context Rules

| Rule | Why It Matters |
|---|---|
| Continue the existing task | The follow-up uses task thread context instead of acting like a brand-new task. |
| Preserve execution profile | The selected model, effective agent context, and task mode remain available. |
| Re-run supporting hooks | Lifecycle behavior such as memory recall and skill routing can still support the new turn. |
| Keep worktree orientation | Repository-backed follow-ups continue from the task's worktree when available. |
| Update review state only when needed | A follow-up that creates new changes can make review pending again; a read-only follow-up should not disturb merged state. |

## Examples

| User Intent | Better As |
|---|---|
| "Fix the test failure in this task's changes." | Task follow-up |
| "Apply my review comment to the implementation you just made." | Task follow-up |
| "Create three separate approaches and run them in parallel." | Chat Orchestrate |
| "This completed task should now update the docs too." | Task follow-up or a chained child task, depending on whether it is the same unit of work |
| "Split this feature into backend, frontend, and tests." | Chat Orchestrate or task chaining |

## Steering From A Task Thread

When a follow-up is queued and the task thread shows a pending input row, a **Steer** button appears on that row. Steering from a task thread works the same way as Chat steering: it redirects the active turn rather than queuing behind it.

Use task-thread steering when you have already sent a follow-up but want to correct or narrow it before the worker picks it up. If the turn has already started, the steer may be rejected and you should send a new follow-up instead.

## What It Does Not Do

- It does not bypass worker capacity for task execution.
- It does not create a new task card unless you ask Chat or task actions to create one.
- It does not make every attachment or temporary prompt detail durable memory.
- It does not automatically mean generated changes are safe to merge.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | The task detail screen contains the thread and follow-up controls. |
| [Prompt Queue & Steering](prompt-queue-steering.html) | Explains queued prompts and active-turn steering in Chat. |
| [Worker Capacity & Dispatch](workers.html) | Follow-ups wait for task execution capacity. |
| [Task Diffs & Review](task-diffs-review.html) | Follow-up changes can update the Changes tab. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Repository-backed follow-ups continue in isolated task worktrees. |
