# Lifecycle Hooks

Lifecycle hooks are supporting AI steps that run around normal task execution. They let OpenVibely prepare context, recall memory, select skills, and learn from completed work without turning every task into a manual setup process.

The important rule: hooks support the task. They do not replace the user's prompt, selected model, assigned agent, review workflow, or worktree boundary.

## The Hook Path

```text
route_task
-> before_run
-> normal task execution
-> after_complete
```

| Hook | When It Runs | User Impact |
|---|---|---|
| `route_task` | Before the main task starts | Selects relevant standalone or agent-owned skills for the run. |
| `before_run` | Immediately before execution | Adds hook-provided context such as recalled project memory. |
| Normal execution | The primary task run | Runs the user's prompt with the selected model and, when chosen, the assigned agent. |
| `after_complete` | After a terminal result | Lets Memory Curator update durable project memory and Skill Curator improve relevant skills. |
| `scheduled` | On a schedule | Runs visible system maintenance such as memory consolidation or skill library upkeep. |

## What Users See

| UI Area | What It Shows |
|---|---|
| Task lifecycle activity | Supporting steps that ran before or after the task. |
| Selected skills | Which reusable skills were prepared for the run. |
| Memory behavior | Relevant project memory may appear as background context for future tasks. |
| Scheduled system tasks | Maintenance work is visible instead of hidden. |
| Task result | The primary output remains the normal task execution result. |

## Memory Hook Behavior

Memory Curator owns memory recall, update, and consolidation. Before a task, it can recall a compact set of relevant project facts. After completed work, it can create or update durable memory when there is something worth keeping. On schedule, it can consolidate the memory library so it stays useful.

Memory is for durable project knowledge, not raw transcripts, secrets, or one-off temporary context.

## Skill Hook Behavior

Skill Curator owns skill routing and learning. Before a task, it can select reusable skills that fit the prompt and execution scope. After a task, it can decide whether completed work taught OpenVibely a repeatable procedure worth saving.

Skill scope matters. No-agent tasks route standalone skills. Assigned-agent tasks route only that agent's skills. Project skills can override global skills with the same key.

## Boundaries

- Hooks do not give a normal task unlimited permissions.
- Hooks do not turn temporary attachments into durable memory by default.
- Hooks do not write arbitrary agent-owned skills outside the task's assigned-agent scope.
- Hooks do not skip review, diff inspection, or merge safety.
- Hooks should be treated as context and learning support, not as a second hidden user request.

## Examples

| Scenario | Hook Value |
|---|---|
| A project has a repeated testing convention | Skill routing can prepare the relevant testing skill before execution. |
| A user previously explained a repo-specific deployment rule | Memory recall can provide that rule as background context. |
| A completed task uncovered a durable architecture decision | Memory update can preserve it for later tasks. |
| Several completed tasks reveal a reusable review checklist | Skill learning can improve a scoped skill. |
| Memory files become duplicated or stale | Scheduled consolidation can clean them up. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Task Lifecycle](task-lifecycle.html) | Shows where hooks fit in the larger status flow. |
| [Memory](memory.html) | Explains recall, update, and consolidation. |
| [Skill Curation](skills-and-learning.html) | Explains routing, learning, and scoped skill updates. |
| [Scheduled Task Runs](scheduled-tasks.html) | Scheduled hooks run as visible maintenance work. |
| [Agents Overview](agents.html) | Agents can define reusable behavior and lifecycle participation. |
