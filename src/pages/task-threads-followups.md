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

## Choose A Model In The Composer

Click the model name at the bottom of the task composer or press **Command/Ctrl+M**. The menu offers provider submenus, search, favorites, and model-supported Reasoning effort and Fast mode controls. Existing tasks save their own conversation model settings. See [Composer Model Menu](models.html#composer-model-menu) for the full guide.

## Review Changes From The Composer

When a task has changed files, a compact change summary appears at the top of the thread composer. It shows the number of changed files, lines added (`+`), lines removed (`−`), and review-comment count when present. Zero addition/deletion counts are hidden; the entire summary is hidden when there are no changed files.

Click the file/count summary to open the task's **Changes** diff view. **Command/Ctrl+Shift+D** is the keyboard shortcut. This opens the review surface; it does not merge or accept the changes. The adjacent action control provides merge and pull request actions, with a dropdown for available methods and destinations.

In Changes, select files in the left changed-file explorer to inspect their diffs. Choose **Back** in that explorer to return to the thread and continue with a follow-up. See [Task Diffs & Review](task-diffs-review.html) for review and merge workflows.

## The Right-Hand Task Panel

Open a task from the left task list or board. Click the panel button at the upper right of the task header (**Open details panel**), or press **Command/Ctrl+Shift+B**, to open or close its right-hand panel. This keeps supporting controls beside the task conversation.

Drag the panel divider to resize it. Its width and open/closed preference are remembered, and each task remembers its selected panel tab. On smaller windows, the panel can overlay the work area instead of sitting beside it.

The tabs appear in this order:

| Tab | What You Can Do |
|---|---|
| **Details** | Edit Model, Agent, Category, Priority, and Tag. Inspect execution status and timing, the task prompt, [Task Goal](task-goals.html), auto-merge settings, and worktree information when available. Swarm tasks also show their swarm context. |
| **Schedule** | Configure or manage this task's timed runs. See [Scheduled Task Runs](scheduled-tasks.html). |
| **Chaining** | Configure how this task hands work to a child task. See [Task Chaining & Branch Lineage](task-chaining.html). |
| **Files** | View the task's attachments. These are context files, not the generated code diff. See [Attachments](attachments.html). |
| **Lifecycle** | Inspect supporting lifecycle activity and refresh its status. See [Lifecycle Hooks](lifecycle-hooks.html). |

In **Details**, select a property to edit it. Available actions depend on the task's state and whether it has a worktree. The panel may therefore show more information after execution begins than it does for a new task.

When creating a task in **All projects**, Details also provides the destination **Project** picker. Choose an owning project before creating the task. Lifecycle activity becomes available after the task exists.

**Changes** is a separate main-area view for reviewing generated code, not one of the five right-panel tabs. Opening Changes turns the left task list into a changed-file explorer; the right panel remains available for task controls. Choose **Back** in the file explorer to return to the thread. See [Task Diffs & Review](task-diffs-review.html).

## Create And Review Visual Outputs

A task thread can produce SVG diagrams and interactive HTML files as well as code and documents. Ask for an SVG drawing, or ask the AI to create and publish a self-contained HTML file for a mockup, calculator, or other interactive explanation.

SVG responses offer **Download SVG** and **SVG source**; clicking the drawing opens the gallery. Published HTML files show an inline preview with **Expand**, and the file viewer offers **Preview**, **Source**, and download controls. Review the output, then send a follow-up to revise it in the same task.

See [File Gallery And Previews](attachments.html#file-gallery-and-previews) for viewer controls and [Create SVGs And HTML Previews](attachments.html#create-svgs-and-html-previews) for example requests.

## When A Follow-Up Triggers

A follow-up is useful after a task has produced enough context to continue from. Common triggers include asking the agent to address review comments, refine an implementation, explain a failure, add tests, resolve a small issue discovered during review, or continue a task that explicitly asked for more direction.

Channel-created tasks can also receive follow-up context early. If a Slack, Telegram, Discord, Email, or X reply arrives before the first execution exists, OpenVibely keeps it with the task so the instruction is available when the task starts.

Scheduled task threads use the same follow-up, queueing, cancellation, and steering controls. You can provide more direction before or between scheduled runs without creating a separate task.

Follow-ups are different from Chat orchestration. Chat is the central place to coordinate many tasks. A task follow-up is scoped to one existing task thread.

## Runtime Boundary

Task follow-ups are execution work, so they respect worker capacity. If project or model capacity is full, OpenVibely accepts the follow-up and queues it instead of dropping the message.

Interactive project Chat intentionally stays responsive even when task workers are full. That is why Chat can keep orchestrating while task follow-ups wait for available execution slots.

Task-thread streams reconnect from their last received output offset and replay durable output before finalizing a turn. A brief browser or gateway disconnect should not require resending the follow-up; wait for catch-up first.

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

Use task-thread steering when you have already sent a follow-up but want to correct or narrow it before the worker picks it up. You can also cancel a queued follow-up before it is applied. If the turn has already started, the steer may be rejected and you should send a new follow-up instead.

## Edit Pending Instructions

Before delivery, use `Edit` on a pending queued message or steering instruction to revise it. The editor holds that message from dispatch while you edit. Save the changes or cancel editing to retain the original; already-delivered instructions require a new follow-up. See [Prompt Queue & Steering](prompt-queue-steering.html#edit-pending-instructions).

## Stop An Active Follow-Up

While a follow-up response is running, the send control becomes `Stop response`. Stopping cancels the active model run and records a cancellation state in the thread. It does not cancel other queued follow-ups or the entire task; use the queued-row cancel action or task cancel control for those separate intents.

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
| [Task Diffs & Review](task-diffs-review.html) | Open the composer’s change summary to review diffs and follow-up changes. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Repository-backed follow-ups continue in isolated task worktrees. |
