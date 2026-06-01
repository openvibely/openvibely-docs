# Orchestrate From Chat

Chat is the central control surface for multi-task project work. Instead of opening separate AI sessions for every branch of a goal, use one project-scoped chat window to plan the work, create multiple tasks, start them, monitor progress, inspect results, and send follow-ups.

## Why It Matters

Most coding work starts messy: a feature needs research, implementation, tests, cleanup, and review. OpenVibely lets that whole flow stay in one Chat page. The orchestrator can turn a single conversation into several tracked tasks while the task board, task detail pages, and review screens keep each unit of work visible.

This avoids bouncing between disconnected sessions or losing context across threads. The chat remains the coordination layer, while each task remains independently executable and reviewable.

## The Core Flow

| Step | What Happens |
|---|---|
| Start in Chat | Describe the goal in the selected project. Attach files if they help. |
| Plan if needed | Use `Plan` mode to explore the approach without creating or changing work. |
| Switch to Orchestrate | Use `Orchestrate` mode when you want OpenVibely to create, edit, run, or coordinate tasks. |
| Create parallel tasks | Ask Chat to split the goal into independent tasks, such as backend, frontend, tests, and docs. |
| Manage from one place | Continue using Chat to check state, send follow-ups, inspect task threads, or start additional work. |
| Review each output | Open task links from Chat or the Tasks page to inspect diffs, comments, worktree state, and PR options. |

## Plan Mode vs Orchestrate Mode

| Mode | Best For | What Chat Can Do |
|---|---|---|
| `Plan` | Understanding risk, narrowing scope, comparing options, and writing a safe implementation plan. | Read project state, list capabilities, inspect existing tasks, models, agents, alerts, settings, and project context. |
| `Orchestrate` | Turning decisions into tracked project work. | Create and edit tasks, execute tasks, send messages into task threads, schedule work, manage alerts, switch projects, and set chat mode. |

A strong workflow is: ask Chat to make a plan, let the plan converge, switch to `Orchestrate`, then ask it to create the actual task set.

## Parallel Task Example

Use Chat when you want one goal split into coordinated but separately reviewable work:

```text
Plan the changes needed for OAuth login, then create separate tasks for backend routes, UI wiring, tests, and docs. Run the independent tasks in parallel where possible and keep this chat updated as they finish.
```

In `Orchestrate` mode, Chat can create multiple task cards and execute them. Each task keeps its own status, thread, lifecycle events, attachments, changes, review comments, and worktree actions, but the original Chat page remains the place to ask what is done, what is blocked, and what should happen next.

## What Stays Centralized

- The selected project context stays fixed for the conversation.
- Chat history keeps the original goal, plan, and follow-up decisions together.
- Task links produced by Chat open the relevant task detail from the same project workflow.
- Running chat turns can accept steering or queue follow-up prompts instead of forcing a new session.
- Channel-origin messages use the same chat runner, so Slack, Telegram, API, and web Chat behavior stays aligned.

## When To Use The Task Page Instead

Use Tasks directly when the unit of work is already known and you want board-first control. The Tasks page is better for manual triage, bulk scanning task state, opening a specific task detail, or working through diffs and review comments one task at a time.

Use Chat when the shape of the work is still evolving or when you want to coordinate several tasks from one conversation.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Chat](chat.html) | The main project conversation and mode selector. |
| [Prompt Queue & Steering](prompt-queue-steering.html) | How follow-up prompts behave while Chat is already responding. |
| [Tasks](tasks.html) | The board where Chat-created work becomes trackable task cards. |
| [Task Diffs & Review](task-diffs-review.html) | How to inspect generated changes before merging or opening a PR. |
| [Task Chaining & Branch Lineage](task-chaining.html) | Use chaining when one task should start after another finishes. |
