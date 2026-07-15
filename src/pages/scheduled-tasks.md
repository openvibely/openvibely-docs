# Scheduled Task Runs

Scheduled tasks are normal tasks with a configured run time and optional recurrence. They are managed from the Schedule page and preserve the task's prompt, model, agent, attachments, project context, and execution boundaries.

Use schedules for work that should happen later or repeatedly without requiring a person to remember to start it.

## What Users See

| UI Concept | Meaning |
|---|---|
| Schedule page | Calendar/list surface for one-time and recurring work. |
| Scheduled category | Tasks can be moved into scheduled work when timing is configured. |
| Run at | The first or next intended run time. |
| Next run | The computed upcoming execution time. |
| Enabled state | Keeps the schedule record while allowing future runs to pause. |
| System schedules | Visible maintenance tasks such as memory consolidation and skill library upkeep. |

## Supported Recurrence

OpenVibely supports one-time, second-based, minute-based, hourly, daily, weekly, and monthly schedules. Daily, weekly, and monthly scheduling preserve local time-of-day across daylight-saving transitions by computing through local time.

| Choice | Meaning |
|---|---|
| One-time | Run the task once in the future, then stop. |
| Seconds/minutes/hours | Repeat at a sub-daily interval. |
| Daily/weekly/monthly | Repeat on calendar-aware cadence while preserving intended local time. |
| Disable | Keep the schedule but stop future dispatch. |
| Delete | Remove the schedule. |

## Dispatch Boundary

When a schedule reaches its next run time, the scheduled work enters normal task execution. It still respects worker capacity, project/model limits, task dependencies, and review requirements.

A scheduled run is not a hidden background mutation. It creates visible task activity, can fail like other work, and should be monitored through Schedule, Tasks, Alerts, and review pages.

## Good Uses

- Run GitHub Dev Inbox and finder prompts as visible issue-to-PR automation.
- Run periodic maintenance prompts.
- Let system maintenance keep managed memory and reusable skill libraries healthy over time.
- Schedule repository health checks.
- Repeat documentation, testing, or cleanup tasks.
- Start a known task outside normal working hours.
- Create a predictable external workflow without relying on a separate cron script.

## System Maintenance

OpenVibely can create visible scheduled system tasks for learning maintenance.

| System Task | Purpose |
|---|---|
| `System: Memory Consolidation` | Uses Memory Curator to keep one project's managed memory focused and accurate. |
| `System: Skill Library Maintenance` | Uses Skill Curator to keep reusable standalone skills useful over time. |

Because these are visible schedules, users can inspect when maintenance is configured and see the resulting task history.

## Cautions

- Recurring loop tasks should be schedule-driven. Do not add a persisted Task Goal unless the work itself needs goal-driven continuation.
- A recurring schedule can repeatedly create model cost and repository changes.
- Review the task prompt and auto-merge setting before scheduling.
- Disable risky schedules instead of deleting them when you may need the history.
- Use Alerts and Insights to monitor failures and trends over time.
- Treat scheduled repository-changing work with the same review discipline as manual tasks.

## Related Pages

| Page | Why It Matters |
|---|---|
| [GitHub Autonomous SDLC](github-autonomous-sdlc.html) | Scheduled inbox and finder tasks form a visible GitHub loop. |
| [Task Goals](task-goals.html) | Use goals on implementation work, not as the default recurrence engine. |
| [Schedule](schedule.html) | The UI surface for managing scheduled task runs. |
| [Worker Capacity & Dispatch](workers.html) | Scheduled runs wait for execution capacity when needed. |
| [Memory](memory.html) | Memory Curator can consolidate managed project memory through scheduled system work. |
| [Skill Curation](skills-and-learning.html) | Skill Curator can keep reusable skills healthy through scheduled system work. |
| [Alerts](alerts.html) | Failed runs can create alerts. |
