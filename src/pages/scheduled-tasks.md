# Scheduled Tasks

Scheduled tasks are normal tasks with a configured run time and optional recurrence. They are managed from the Schedule page and preserve the task’s prompt, model, agent, attachments, and project context.

## Supported Recurrence

OpenVibely supports one-time, second-based, minute-based, hourly, daily, weekly, and monthly schedules. Daily, weekly, and monthly scheduling preserve local time-of-day across daylight-saving transitions by converting through local time.

## How To Think About Scheduling

| Choice | Meaning |
|---|---|
| One-time | Run the task once in the future. |
| Recurring | Re-run the same task definition on a cadence. |
| Disable | Keep the schedule record but stop future runs. |
| Delete | Remove the automation. |

## Good Uses

- Run periodic maintenance prompts.
- Let system maintenance keep managed memory and reusable skill libraries healthy over time.
- Schedule backlog or health checks.
- Repeat documentation, testing, or cleanup tasks.
- Start a known task outside normal working hours.

## System Maintenance

OpenVibely can create visible scheduled system tasks for learning maintenance. `System: Memory Consolidation` is assigned to `System: Memory Curator` and keeps one project's `.openvibely/memories` library focused by merging duplicates, removing stale facts, and keeping `MEMORIES.md` as the compact index. `System: Skill Library Maintenance` keeps standalone skills useful over time.

## Cautions

- A recurring schedule can repeatedly create model cost and repository changes.
- Review the task prompt and auto-merge setting before scheduling.
- Use Alerts and Insights to monitor failures and trends over time.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Schedule](schedule.html) | The UI surface for managing scheduled task runs. |
| [Tasks](tasks.html) | Scheduled work runs existing task definitions. |
| [Memory](memory.html) | Memory Curator can consolidate managed project memory through scheduled system work. |
| [Skill Curation](skills-and-learning.html) | Skill Curator can keep reusable skills healthy through scheduled system work. |
| [Alerts](alerts.html) | Failed runs can create alerts. |
