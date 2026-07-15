# Task Goals

Task Goals let you give a task a persistent objective that OpenVibely works toward across multiple execution turns. Instead of sending follow-up messages manually until a long-running task is done, you describe the end state once and the Goal Agent evaluates progress after each turn, queuing continuation work automatically until the goal is achieved, blocked, or cleared.

## How It Works

When a task has an active goal, the built-in `System: Goal Agent` runs an `after_complete` lifecycle hook called `evaluate_task_goal` after every task turn. That hook reads the stored goal, inspects the latest task transcript and tool evidence, then takes one of three actions:

| Decision | What Happens |
|---|---|
| Not yet achieved | Queues a concrete continuation follow-up so the task keeps making progress. |
| Achieved | Marks the goal `achieved` with an evidence-based reason and stops queuing. |
| Blocked | Records a blocker key and reason; after the same blocker repeats, transitions the goal to `blocked` and stops queuing. |

Goal continuation is injected as a normal queued follow-up, so it respects worker capacity, lifecycle hooks, worktree state, and all other existing task behaviors.

## Goal Panel

When a goal is set, a Goal panel appears on the task detail page above the tab row.

| Panel Field | What It Shows |
|---|---|
| Objective | The stored goal text. |
| Status badge | Current goal status: `active`, `paused`, `achieved`, `blocked`, `cleared`, or `failed`. |
| Reason | The agent's evidence summary when the goal was last evaluated. |
| Last checked | Timestamp of the most recent evaluation. |

## Setting And Editing A Goal

Open the task edit dialog from any task detail page. The dialog includes a Goal section with:

- **Objective text** — describe the end state in plain language.
- **Active / Paused toggle** — pause evaluation without deleting the goal. A paused goal stays stored but the Goal Agent skips evaluation turns until it is made active again.

To remove a goal, clear the objective text and save.

## Goal Statuses

| Status | Meaning |
|---|---|
| `active` | Evaluation is running; the Goal Agent will queue continuations when needed. |
| `paused` | Goal is stored but evaluation is suspended until you resume it. |
| `achieved` | The Goal Agent confirmed the full objective is complete. |
| `blocked` | The same blocker was reported repeatedly; user input or an external change is needed. |
| `cleared` | The goal was explicitly removed. |
| `failed` | A terminal failure prevented goal evaluation from completing. |

## When To Use Goals

Task Goals are most useful for tasks that require iterative work toward a well-defined end state:

- "All tests in the auth package pass."
- "The migration script runs cleanly end-to-end with no warnings."
- "The API returns the correct response for all documented example inputs."

Avoid using goals for vague or open-ended objectives that do not have a clear completion signal, because the Goal Agent can only mark achieved when current transcript evidence proves every requirement is met.

Do not use a persisted goal as the recurrence engine for scheduled inbox, finder, or maintenance loops. Let the schedule repeat the loop task, and put a goal on a distinct implementation task only when that work needs autonomous continuation.

## Setting Goals From Chat

In `Orchestrate` mode, Chat has the full set of goal tools available alongside its task-creation tools. This means you can describe a piece of work once and Chat will both create the task and set the goal on it in the same turn — the Goal Agent then drives that task autonomously from that point on without you sending follow-ups.

| Chat Tool | What It Does | Mode |
|---|---|---|
| `set_task_goal` | Set or replace the stored goal for a task (by task ID or title). | Orchestrate |
| `clear_task_goal` | Remove the goal from a task entirely. | Orchestrate |
| `get_task_goal` | Read the current goal text and status. | Plan + Orchestrate |
| `pause_task_goal` | Suspend automatic evaluation without deleting the goal. | Orchestrate |
| `resume_task_goal` | Re-activate evaluation on a paused goal. | Orchestrate |

A typical Chat-driven goal workflow:

1. In Orchestrate mode, describe the end state — e.g. *"all tests in the auth package should pass cleanly."*
2. Chat creates the task and calls `set_task_goal` with that objective.
3. The task runs; after each turn the Goal Agent evaluates whether the objective is met.
4. If not yet achieved, a continuation follow-up is queued automatically.
5. When evidence proves completion, the goal is marked `achieved` and queuing stops.
6. Back in Chat you can ask for a status update (`get_task_goal`) or adjust the goal at any point.

You can also manage goals on already-existing tasks from Chat — just reference the task by its title or ID.

## Channels

Tasks created or managed through Slack, Telegram, Discord, and Email support Goals the same way web-created tasks do. The goal panel and edit controls are reflected in the web app regardless of which channel originated the task.

## System: Goal Agent

`System: Goal Agent` is a protected built-in system agent. It is not user-selectable as a primary task agent and does not edit repository files or run shell commands. It acts only through goal tools (`get_task_goal`, `mark_task_goal_achieved`, `report_task_goal_blocked`) and `send_to_task`.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Chat](chat.html) | Orchestrate mode can create tasks and set goals on them in a single turn. |
| [Tasks](tasks.html) | Task detail screen where the Goal panel and edit controls live. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Goal continuations are queued as normal task-thread follow-ups. |
| [Task Lifecycle](task-lifecycle.html) | Goal evaluation runs as an after_complete lifecycle hook. |
| [Agents](agents.html) | System: Goal Agent is listed in the System Curators table. |
| [Worker Capacity & Dispatch](workers.html) | Goal continuations respect task worker capacity. |
