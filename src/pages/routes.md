# Routes

This reference summarizes the major route groups registered by OpenVibely. Use runtime Swagger for detailed API schemas.

## UI Routes

| Area | Routes |
|---|---|
| Dashboard | `/`, `/dashboard`, `/dashboard-mockup`, `/analytics` |
| Projects | `/projects`, `/projects/new`, `/projects/:id/edit` |
| Tasks | `/tasks`, `/tasks/:taskId`, task executions, status, changes, thread, run, cancel, category, reorder, chain |
| Schedule | `/schedule`, `/tasks/:taskId/schedule`, `/schedules/:id`, `/schedules/:scheduleId/reschedule` |
| Agents | `/agents`, `/agents/generate`, plugin state/marketplaces/install, lifecycle hooks, skills JSON, agent-owned skill routes |
| Models | `/models`, `/models/ollama/available`, model OAuth routes |
| Workers | `/workers`, worker stats routes |
| Channels | `/channels`, GitHub, Slack, Telegram, Discord, Email, outbound message targets, webhooks |
| Personality | `/personality`, custom personality routes |
| Worktrees | `/tasks/:taskId/worktree`, merge, PR, resolve, abort, cleanup, settings |
| Chat | `/chat`, `/chat/send`, chat attachments, clear history |
| Alerts | `/alerts`, unread count, read/delete actions |
| Workflows | `/workflows`, workflow steps, and executions |
| Insights | `/insights`, `/upcoming`, `/history`, `/suggestions`, `/backlog` |
| Events | `/events/live`, `/events/chat/:exec_id` |
| Lifecycle APIs | `/api/tasks/:id/lifecycle-executions`, `/api/lifecycle-executions/:id/events` |

## Swagger

Swagger UI is served at `/swagger/*`.
