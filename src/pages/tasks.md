# Tasks

Tasks are the main execution surface in OpenVibely. The Tasks page is a project board where users create AI coding work, run it, monitor progress, review output, and decide what happens to generated changes.

## The Task Board

Open `Tasks` from the Workspace section of the sidebar. The board shows project work in user-facing categories.

| Board Area | What It Means |
|---|---|
| Backlog | Planned work that is not currently active. |
| Active | Work the project is currently focused on. |
| Completed | Work that has finished and can be reviewed historically. |

Scheduled tasks are managed from the Schedule page. Chat tasks are internal to chat flows and are not normal board cards.

## Creating A Task

Click `+ Add Task` and fill out the modal.

| Field | User Impact |
|---|---|
| Title | Names the work on the board and task detail screen. |
| Prompt | Tells the model what to do. |
| Model | Overrides the default model for this task when needed. |
| Agent | Uses a reusable execution profile, or lets the router select automatically. |
| Category | Places the card in Backlog or Active. |
| Priority | Helps order and triage work. |
| Tag | Marks the task as a feature or bug when useful. |
| Auto-merge | Allows completed work to merge to the target branch when configured. |
| Attachments | Adds files as extra task context. |

The UI keeps the modal open and shows an inline error if the title conflicts with an existing task in the project.

## Swarm Tasks

Enable `Swarm mode` when one request should be delegated across multiple task roles. A planner creates independent worker scopes, an optional reviewer checks the combined result, and an optional merger integrates approved work. Each child is a real task with its own thread, model assignment, worktree, diff, retry, and follow-up history.

Set the maximum planned worker count and default isolation in the task dialog, then create the parent in Active or Backlog. Active starts planning; Backlog defers the planner until you run the task or move it to Active. The board groups child status under the parent while still linking to every child task.

`Max workers` limits planned slices, not actual concurrency. Global, project, and per-model limits on the Workers page still determine how many children execute at once. See [Swarm Orchestration](swarm-orchestration.html) for roles, isolation, reruns, review, and merge behavior.

## Running And Monitoring

Tasks move through statuses such as pending, queued, running, completed, failed, cancelled, and blocked. The page listens for live task events so board state can refresh while work is happening.

While a thread response is active, the send control becomes `Stop response`. This stops the active model run and records cancellation in the thread. It is different from cancelling a queued follow-up before it starts or cancelling the entire task from the board/detail controls.

Around normal execution, lifecycle hooks can recall memory, prepare useful skills, and learn from completed work. Follow-up messages continue from the existing task thread and respect worker capacity, so they may queue when project or model execution slots are full.

Use task detail views to inspect execution output, thread messages, attachments, changed files, review comments, lifecycle activity, and worktree state.

When a task has an active goal, a Goal panel appears above the tab row showing the objective, status badge, agent reason, and last-checked timestamp. Goal settings live in the task edit dialog.

## Reviewing Work

When a project has a repository attached, task execution can produce worktree-backed changes. Review those changes before merging or creating a pull request.

| Review Surface | Use It For |
|---|---|
| Thread | Follow the conversation and follow-up messages around the task. |
| Execution detail | Inspect model output, errors, and run history. |
| Changes | See modified files, live or preserved diffs, file-level cards, and review comments. |
| Review comments | Track comments attached to generated code. |
| Worktree actions | Merge, clean up, resolve conflicts, or create a PR when supported. |

## Diff Review

Open a task detail page and select `Changes` to inspect generated code. Worktree-backed tasks can show live branch and uncommitted diffs while work is still active, then fall back to preserved execution diffs after merge or cleanup. The diff viewer groups changes by file, supports large-file lazy loading, and lets reviewers attach comments before sending feedback back to the agent.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Swarm Orchestration](swarm-orchestration.html) | Coordinates planner, worker, reviewer, and merger child tasks. |
| [Runtime Capabilities](runtime-capabilities.html) | Explains which task management actions a run may receive. |
| [Task Goals](task-goals.html) | Persistent objectives that drive autonomous continuation across turns. |
| [Task Lifecycle](task-lifecycle.html) | Explains statuses, hooks, and terminal states. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Explains how one task continues through follow-up turns. |
| [Task Diffs & Review](task-diffs-review.html) | Explains the Changes tab, live diffs, file cards, and review comments. |
| [Lifecycle Hooks](lifecycle-hooks.html) | Explains supporting memory, skill, routing, and learning hooks. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Explains isolated repository changes. |
| [Scheduled Task Runs](scheduled-tasks.html) | Runs tasks later or repeatedly. |
| [Task Chaining & Branch Lineage](task-chaining.html) | Connects dependent task work. |
