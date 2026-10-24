# Lifecycle Hooks

Lifecycle hooks are optional supporting AI steps around task execution. Main task models select skills and memories directly; enabled hooks can provide additional context, evaluate task goals, or learn from completed work.

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
| `route_task` | Before the main task starts, when configured | Optional custom routing; built-in Skill Curator routing has been removed. |
| `before_run` | Immediately before execution | Adds hook-provided context such as recalled project memory. |
| Normal execution | The primary task run | Runs the user's prompt with the selected model and, when chosen, the assigned agent. |
| `after_complete` | After a terminal result | Supports goal evaluation and optional skill learning. Skill Curator learning is disabled by default. |
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

Main task models select and update memories directly, subject to project permissions. Memory Curator consolidates the library through scheduled maintenance; it no longer runs built-in recall or update hooks on each task turn.

Memory is for durable project knowledge, not raw transcripts, secrets, or one-off temporary context.

## Skill Hook Behavior

Main task models select skills directly. Skill Curator provides scheduled maintenance and optional after-complete learning. Enable the learning hook in its lifecycle settings and allow the necessary skill writes to use it. Built-in lifecycle hooks can be toggled without editing their protected skill instructions.

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
