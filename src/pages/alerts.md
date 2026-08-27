# Alerts

Alerts surface project-scoped events that need attention. The sidebar badge shows unread alerts, and live app events can update the badge while users are working.

## What Users See

Open `Alerts` from the System section of the sidebar.

System update status also appears on this page when a packaged desktop app or server binary finds an available release. The update notice itself can appear throughout the app. See [Updates](updates.html).

| UI Element | Purpose |
|---|---|
| Unread badge | Shows when the selected project has alerts that have not been read. |
| Alert list | Shows failures, follow-up requests, custom app-generated notices, and Native notifications that may require a decision. |
| Approve or reject | Records the human decision for a pending Native notification; a connected Automation can observe the result and continue through the matching handoff. |
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

Alerts are not a replacement for the task board. Use them as a notification and human-decision layer: they point you back to a task, execution, project event, or Automation handoff that deserves attention. When a task fails, open the task detail page to inspect execution output, thread history, and any generated changes.

For an Automation `Human approval` node, approve or reject the real pending notification in Alerts. The graph can observe that human decision and follow a configured branch, but it cannot decide for you.

A repository-changing task also creates an alert when its isolated worktree cannot be prepared. OpenVibely does not fall back to the main checkout; correct the repository or initial-commit problem before retrying.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Automations](automations.html) | Native approval nodes wait for a human decision in Alerts. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Worktree setup failures are fail-closed and actionable. |
| [Tasks](tasks.html) | Most alerts point back to task activity. |
| [Worker Capacity & Dispatch](workers.html) | Capacity and timeouts can affect failures and delays. |
| [Insights](insights.html) | Longer-term trends appear in insight surfaces. |
| [Updates](updates.html) | Packaged app update status and approval appear on Alerts. |
