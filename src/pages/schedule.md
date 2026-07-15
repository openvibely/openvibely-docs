# Schedule

The Schedule page manages one-time and recurring task execution for the selected project. Scheduled work is intentionally handled outside normal task category selection so users can reason about time-based automation separately from the task board.

## What Users Do

Open `Schedule` from the Workspace section of the sidebar.

| UI Action | Product Effect |
|---|---|
| Create a schedule | Picks a task and a time for it to run. |
| Choose recurrence | Runs the task once or repeats it at an interval. |
| Enable or disable | Controls whether future runs should happen. |
| Reschedule | Changes when the task should run next. |
| Delete schedule | Removes the future automation without deleting the underlying task. Deleting a scheduled task from task detail returns to Schedule. |

## Repeat Types

| Repeat Type | Use It For |
|---|---|
| Once | A single future run. |
| Seconds | High-frequency testing or development-only loops. |
| Minutes | Short operational intervals. |
| Hours | Repeated maintenance throughout a day. |
| Daily | Daily checks or recurring implementation tasks. |
| Weekly | Weekly cleanup, reporting, or backlog review. |
| Monthly | Long-running maintenance cadence. |

## How Schedule Relates To Tasks

A schedule belongs to a task. The task defines the prompt, model, agent, attachments, repository context, and review behavior. The schedule only controls when and how often that task should run.

Use the task board for immediate work. Use Schedule when the timing matters.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Scheduled work runs existing task definitions. |
| [Scheduled Task Runs](scheduled-tasks.html) | Deeper automation guidance for recurring work. |
| [Alerts](alerts.html) | Failed scheduled runs can create alerts. |
| [Memory](memory.html) | Some schedule-adjacent controls may surface project memory behavior. |
