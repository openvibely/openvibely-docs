# Alerts

Alerts surface project-scoped events that need attention. The sidebar badge shows unread alerts, and live app events can update the badge while users are working.

## What Users See

Open `Alerts` from the System section of the sidebar.

| UI Element | Purpose |
|---|---|
| Unread badge | Shows when the selected project has alerts that have not been read. |
| Alert list | Shows failures, follow-up requests, and custom app-generated notices. |
| Mark read | Clears attention from one alert. |
| Mark all read | Clears all current unread alerts for the project. |
| Delete | Removes alerts that are no longer useful. |

## Alert Types

| Type | Meaning |
|---|---|
| `task_failed` | A task failed and likely needs inspection. |
| `task_needs_followup` | A task produced or requires follow-up work. |
| `custom` | App logic created a custom alert. |

## Severities

| Severity | Meaning |
|---|---|
| `info` | Informational. |
| `warning` | Attention recommended. |
| `error` | Failure or high-priority issue. |

## How Alerts Fit The Workflow

Alerts are not a replacement for the task board. Use them as a notification layer: they point you back to a task, execution, or project event that deserves attention. When a task fails, open the task detail page to inspect execution output, thread history, and any generated changes.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Most alerts point back to task activity. |
| [Workers](workers.html) | Capacity and timeouts can affect failures and delays. |
| [Insights](insights.html) | Longer-term trends appear in insight surfaces. |
