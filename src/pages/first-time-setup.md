# First-Time Setup

OpenVibely works best when setup follows the product dependency order: model access first, then a project, then the daily workflow screens.

## Setup Order

1. Add at least one model from the `Models` screen.
2. Create or import a project from the sidebar project controls.
3. Optionally create reusable agents from `Agents`.
4. Start work from `Chat` when you need to plan, or `Tasks` when the work is already clear.
5. Tune `Workers` if tasks need stricter concurrency controls.
6. Add channels, schedules, memory, and automation after the core loop works.

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
