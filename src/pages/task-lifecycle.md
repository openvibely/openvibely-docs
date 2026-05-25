# Task Lifecycle

A task moves from an idea into queued work, active execution, review, learning, and a final result. The UI exposes that lifecycle through the board, task detail page, thread, lifecycle activity, changes view, schedules, and review actions.

## Status Flow

Typical task execution moves from `pending` to `queued` to `running`, then to a terminal status: `completed`, `failed`, or `cancelled`. Chained child tasks may begin as `blocked` until their parent condition is met.

## Lifecycle Hooks

Lifecycle hooks are system steps that run around normal task execution. They let OpenVibely select skills, prepare context, and learn from finished work while preserving the user’s normal task flow.

```text
route_task
-> before_run
-> normal task execution
-> after_complete
```

| Hook | User Impact |
|---|---|
| `route_task` | Selects the most relevant standalone or agent-owned skills for the task. |
| `before_run` | Adds hook-provided context before the main task starts when configured. |
| `after_complete` | Observes the result and can improve skills so future tasks benefit. |

The main task still runs normally with its chosen execution profile. Lifecycle hook activity is supporting behavior, not a replacement for the task prompt.

## User-Visible Lifecycle Areas

- Task card on the board.
- Task detail status and execution history.
- Lifecycle execution events and selected skill traces.
- Thread view for follow-up messages.
- Changes view for diffs and live file changes.
- Schedule tab when recurring execution is configured.
- Chain configuration for delegated child work.
- Worktree controls for merge, pull request, conflict resolution, abort, and cleanup.
- Review comments and submitted review notes.

## How Users Should Read State

| State | What To Do |
|---|---|
| `pending` | Review the prompt, project, model, agent, and priority before running. |
| `queued` | Check worker capacity if the task waits longer than expected. |
| `running` | Watch the thread and file-change indicators for progress. |
| `completed` | Review output and changed files before merging or opening a pull request. |
| `failed` | Open the task detail view, read the failure, adjust the prompt/configuration, and retry if appropriate. |
| `cancelled` | Confirm no review action is needed, then archive or revise the task. |
| `blocked` | Inspect the parent task or chain condition before expecting it to run. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Main board and task detail workflows. |
| [Skill Curation](skills-and-learning.html) | How lifecycle hooks let OpenVibely curate skills from completed work. |
| [Git Worktrees](git-worktrees.html) | Reviewable file changes after execution. |
| [Workers](workers.html) | Capacity affects when queued work starts. |
