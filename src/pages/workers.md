# Workers

The Workers page is where you control how many AI tasks can run at the same time — globally, per project, and per model. Open it from **System → Workers** in the sidebar.

This is the lever between "tasks pile up in a queue" and "tasks run fast but overwhelm your machine or provider rate limits." Getting the limits right lets Chat stay responsive as the orchestrator while as many tasks as your setup can handle run in parallel behind it.

## The Workers Page

When you open Workers you see three things:

**Live stats header** — Updates every few seconds. Shows:
- **Worker Pool Size** — the current global limit (how many execution slots exist)
- **Tasks Running** — how many slots are active right now, shown as `running / pool size`
- **Queue** — how many tasks are waiting for a free slot

**Worker Capacity & Utilization table** — Global and every project in one view. The table auto-refreshes every 3 seconds. Columns:

| Column | What It Shows |
|---|---|
| Scope | `Global` (highlighted row) or `Project` |
| Name | `All Projects` for global, or the project name |
| Running | Tasks currently executing in that scope |
| Queue | Tasks waiting for a slot in that scope |
| Limit | Editable inline field — click, type a new number, click **Set** |
| Status | `Idle`, `Active`, or `At capacity` badge |

**Per-Model Worker Pools table** — Only appears if at least one model has a dedicated worker pool configured. Shows running tasks and the limit for each model pool. Limits for model pools are set on the [Models](models.html) page, not here.

## Setting Limits

All limit changes are inline — no separate settings page needed.

**Global limit:** Click the number in the Global row's Limit column, type the new value (1–10), click **Set**. This is the hard ceiling across everything.

**Project limit:** Click the number in a project row's Limit column, type the new value (0–10), click **Set**. Setting a project to `0` removes the project-specific cap — that project is then only bounded by the global limit.

The page preserves any limit field you're actively editing during live refreshes, so typing a new value won't get overwritten before you hit Set.

## How the Two Layers Work Together

Global and project limits stack as a dual-layer cap:

- A task needs to fit within **both** the global limit and its project's limit (if one is set) before it can run.
- If a project has no limit set (`0`), it competes freely within the global pool.
- If a project limit is set lower than the global limit, that project can never consume more than its own cap regardless of how many global slots are free.

**Example:** Global = 5, Project A = 2, Project B = no limit. Project A can run at most 2 tasks at once even if 4 global slots are free. Project B can use up to all 5 global slots if nothing else is running.

## Status Badges

| Badge | Meaning |
|---|---|
| `Idle` | No tasks running in this scope |
| `Active` | Tasks are running and slots remain available |
| `At capacity` | All allowed slots for this scope are taken; new work queues |

A non-zero Queue with `At capacity` status means tasks are waiting. They'll be dispatched as soon as a slot frees.

## Swarms And Capacity

A swarm's `Max workers` setting limits how many worker slices its planner may create. It does not create or reserve execution slots. Swarm child tasks enter the same dispatcher as other tasks and must fit within global, project, and per-model limits.

For example, a swarm may plan six workers while the project limit is two. All six remain visible, but at most two from that project can execute concurrently, subject to the global and selected-model limits.

## What Stays Outside Worker Limits

| Work type | Behavior |
|---|---|
| Interactive Chat | Bypasses task worker limits entirely — Chat always responds |
| Chained/blocked tasks | Wait for their dependency to unblock first, then need a slot |
| Scheduled tasks | Enter the same queue as regular tasks; wait for a slot if needed |
| Task follow-ups | Queue when capacity is full; dispatch when a slot frees |

The Chat bypass is intentional. You can keep planning, creating tasks, and checking status in Chat while every worker slot is busy running tasks in the background.

## Quick Tuning Patterns

| Symptom | Action |
|---|---|
| Tasks queuing across all projects | Raise the Global limit (if machine and provider can handle it) |
| One project always queued while others are idle | Raise that project's limit |
| A specific model is the bottleneck | Set a per-model pool limit on the Models page to fence it off |
| Machine or provider getting saturated | Lower the Global limit |
| One project shouldn't block others | Set a cap on that project so it can't consume all global slots |
| Local Ollama or self-hosted model is slow | Lower the model pool limit for that model config |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Swarm Orchestration](swarm-orchestration.html) | Planned worker count is separate from actual execution concurrency. |
| [Tasks](tasks.html) | Tasks are the work that workers execute |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Follow-ups queue when task capacity is full |
| [Chat](chat.html) | Chat bypasses task limits and stays responsive while workers are busy |
| [Chat](chat.html) | Launching many parallel tasks from Chat makes worker limits matter more |
| [Models](models.html) | Configure per-model pool limits on the Models page |
| [Projects](projects.html) | Projects can have their own worker caps set here or on the project settings page |
