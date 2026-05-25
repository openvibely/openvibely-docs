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
- Schedule backlog or health checks.
- Repeat documentation, testing, or cleanup tasks.
- Start a known task outside normal working hours.

## Cautions

- A recurring schedule can repeatedly create model cost and repository changes.
- Review the task prompt and auto-merge setting before scheduling.
- Use Alerts and Insights to monitor failures and trends over time.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Schedule](schedule.html) | The UI surface for managing scheduled task runs. |
| [Tasks](tasks.html) | Scheduled work runs existing task definitions. |
| [Alerts](alerts.html) | Failed runs can create alerts. |
