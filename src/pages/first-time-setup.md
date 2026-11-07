# First-Time Setup

OpenVibely works best when setup follows the product dependency order: model access first, then a project, then the daily workflow screens.

## Setup Order

1. Add at least one model from **Settings → Models**.
2. Create or import a project from the plus menu beside the project tabs (or the project selector on narrow layouts).
3. Optionally create reusable agents from **Settings → Agents**.
4. Open Chat from the app rail to plan, or use Add Task for clear work. Manage tasks from the left task list or the Tasks board.
5. Open **Settings → Workers** if tasks need stricter concurrency controls.
6. Add channels, schedules, memory, and automation after the core loop works.

## Get Oriented

Project tabs choose the working scope: one project or **All projects**. The far-left app rail switches pages. The task list beside it is a vertical Kanban for opening tasks, using their action menus, and moving work between categories while keeping the main work area available. The Tasks page offers a board view with filters and batch actions. See [Workspace Overview](dashboard.html) for the full layout.

## Why Models Come First

Tasks and chat need a model config to execute. Models also carry capacity settings such as `max_workers`, `worker_timeout`, and `auto_start_tasks`, so adding a reliable default model early makes the rest of setup predictable.

## Safe Defaults

- Use a local project path for quick experiments when local path mode is available.
- Keep auto-merge off until you trust the task output and review flow.
- Start with one or two workers before raising concurrency.
- Configure auth before exposing a server on the public internet.
- Enable memory only for projects with a real local repository path, because managed memory is written under that repo's `.openvibely/memories` directory.

## Common First Project Flow

```text
Model -> Project -> Chat or Task -> Run -> Review diff -> Merge or open PR
```

## What To Configure Later

| Feature | Add It When |
|---|---|
| Agents | You repeat the same prompting, tools, permissions, or style across tasks. |
| Schedule | Work should run later or repeat. |
| Channels | A team should create, monitor, or report work through Slack, Telegram, Discord, Email, GitHub, outbound targets, or webhooks. |
| Memory | Future tasks should automatically receive relevant project knowledge, and completed work should be turned into durable memory when it contains reusable context. |
| Automation | You want scheduled runs, task chains, or structured multi-agent workflows. |
