# Swarm Orchestration

Swarm mode turns one task into a coordinated parent with planner, worker, reviewer, and merger child tasks. Use it when a goal contains several independent scopes that can be delegated and then reviewed together.

## Create A Swarm

Open `Tasks`, click `+ Add Task`, and enable `Swarm mode`.

| Control | Behavior |
|---|---|
| Max workers | Limits how many worker slices the planner may create. The default is `3`; the allowed range is `1` to `8`. |
| Worker isolation | Sets the default execution boundary for worker roles. |
| Reviewer enabled | Adds a read-only review phase after required workers finish. Enabled by default. |
| Merger enabled | Adds an integration phase after review. Enabled by default. |
| Category | `Active` starts planning; `Backlog` defers planning until the parent is run or moved to Active. |

Chat in `Orchestrate` mode can also create a swarm when you explicitly ask it to split one goal across coordinated workers.

## Roles And Order

| Role | Responsibility |
|---|---|
| Parent | Holds the shared goal and displays overall progress. |
| Planner | Breaks the goal into worker-owned scopes and creates the child tasks. |
| Worker | Executes one planned slice with its own task thread, model, output, and reviewable changes. |
| Reviewer | Checks the combined worker result after all required workers finish. |
| Merger | Integrates approved worker changes after review. |

Workers begin in parallel after the plan is applied. They do not form a dependency chain with one another, so do not design a worker slice that must wait for another worker's unpublished result. Put cross-worker validation in the reviewer and merger phases.

## Isolation Modes

| Mode | Use It For |
|---|---|
| `Worktree` | Code-writing workers that need separate repository branches and reviewable diffs. This is the default. |
| `Read only` | Research, inspection, or review roles that should not write repository files. |
| `Shared` | Work that intentionally uses a shared checkout. Use only when overlapping writes and coordination risks are understood. |

For normal coding swarms, keep `Worktree`. Each worktree-backed child preserves its own branch, diff, retries, and follow-up history.

## Board And Task Detail

The Tasks board groups a swarm under its parent card and shows the state of each child role. Open the parent for the swarm overview, or open a child to inspect that role's thread, execution output, changes, and lifecycle activity.

A failed or interrupted swarm preserves completed child work. Open the parent to see which phase needs attention instead of recreating the whole swarm.

## Follow-Ups And Reruns

| Follow-Up Target | What Runs Again |
|---|---|
| Parent | Recoordinates the swarm and returns the result to review and merge as needed. |
| Worker | Continues that worker slice, then requires downstream review and merge again. |
| Reviewer | Repeats review without rerunning completed workers. |
| Merger | Continues integration without rerunning workers or reviewer. |

Use the active response `Stop response` control to stop the current role run. Cancelling a queued input or cancelling the entire task is a separate action.

## Worker Capacity

`Max workers` controls the number of worker slices the planner may create. It does not reserve execution slots or override the limits on the `Workers` page. Actual concurrency is still bounded by global, project, and per-model worker pools, so a swarm with eight planned workers may execute fewer than eight at once.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Create and monitor swarm parents and children. |
| [Chat](chat.html) | Create swarms through Orchestrate mode. |
| [Worker Capacity & Dispatch](workers.html) | Controls actual task execution concurrency. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Explains the default worker isolation boundary. |
| [Review Workflows](review-workflows.html) | Covers diff review, merge, and pull request decisions. |
