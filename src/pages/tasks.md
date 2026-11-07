# Tasks

Tasks are units of AI coding work that you can run, monitor, review, and continue through a thread. Manage them from the left task list beside your current work or from the Tasks page. Both views use the same tasks and project scope.

## Task List: Vertical Kanban

On wider windows, the task list sits between the app rail and the main work area. Use it as a vertical Kanban to manage work while keeping a task thread or Chat open. You do not need to visit the Tasks page to switch tasks or use their available actions.

| Group | What It Contains |
|---|---|
| Active | Current work, including scheduled executions that are queued or running. |
| Completed | Finished work available for review and follow-up. |
| Backlog | Work saved for later. |
| Scheduled | Tasks with scheduled runs; admitted executions temporarily appear in Active. |

Select a row to open its thread. Expand or collapse groups, use **Show more** to browse additional tasks, and search for work; search temporarily expands matching groups. Rows show status icons, and right-click opens the task's available actions. Drag tasks to reorder them where supported or move them between categories. See [Sidebar Task Actions](#sidebar-task-actions) for scheduling and swarm effects.

Select an individual project tab to focus the list on that project. In **All projects**, the list combines work and shows project names beside tasks. Search also matches those names. Opening a task preserves the combined workspace, while actions still apply to that task's owning project.

Drag the divider to resize the list, or collapse it for more space. Width and collapsed state are remembered. The list follows saved task sorting and refreshes as tasks, follow-ups, and goals change. It groups top-level tasks; open a swarm parent to inspect its children.

The left panel becomes settings navigation while Settings is open, and a changed-file explorer when reviewing Changes. Use its **Back** control to return to the workspace or task thread. The right-hand Details panel is separate from this left navigation.

Open **Settings → Appearance** for floating or unified task-list layouts, attached or detached project tabs, and visual previews. Board-column choices are Faint tint, Filled, Inset cards, and Tint + header strip.

## The Task Board

Open **Tasks** from the app rail when you want Backlog, Active, and Completed displayed as side-by-side columns, with board search, filters, and batch actions. The board follows the selected project or All projects tab.

Scheduled tasks are managed from Schedule and are also accessible from the task list. Chat conversations are not normal board cards.

## Search, Filters, And Batch Actions

Use board search to find work. Backlog and Completed column menus offer status and priority filters and sorting; Completed also filters merge outcomes. Clear filters to reveal hidden cards again.

Command-click a card's body on macOS or Ctrl-click on Windows/Linux to select or deselect it without opening the task. Select multiple cards this way or choose `Select all` in a column menu to run backlog tasks, stop active work, merge eligible completed branches, create pull requests, or delete tasks. Review the selection and any destructive confirmation first. Active retains execution order rather than offering manual sorting.

## Creating A Task

You can create a task directly from the left task list:

1. Click **+ New task** above the list, next to the search button. This is separate from the plus beside the project tabs, which opens the project menu.
2. In the new task workspace, write the request in the composer and add attachments as needed. You can enter a title at the top.
3. Open **Details** with the panel button at the upper right to configure category, priority, Agent, and other properties. Choose a model in the composer when you need to override the default.
4. If you are in **All projects**, select the owning **Project** in Details. Sending without a destination opens the project picker; All projects itself does not own tasks.
5. Send the first message to create the task. **Active** starts execution; **Backlog** saves the task for later. You can configure a schedule before the first send.

The new task appears in the task list for its project and in All projects. You can keep working from its thread and switch tasks directly from the list. The Tasks board also provides an **Add Task** button that opens the same creation workspace.

| Field | User Impact |
|---|---|
| Title | Names the work on the board and task detail screen. |
| Prompt | Tells the model what to do. |
| Model | Overrides the default model for this task when needed. |
| Agent | Uses a reusable execution profile, or lets the router select automatically. |
| Category | Places the card in Backlog or Active. |
| Priority | Helps order and triage work. |
| Tag | Marks the task as a feature or bug when useful. |
| Auto-merge | Independently merges after successful completion, after an attached goal is achieved, or both. Both triggers are off by default. |
| Attachments | Adds files as extra task context. |

Existing tasks open directly to their thread. Edit properties in the resizable Details panel, switch to `Changes` for code review, and use the panel's `Files`, `Schedule`, `Lifecycle`, and `Chaining` views for supporting work. The panel remembers whether it is open across tasks and projects.

## Swarm Tasks

Enable `Swarm mode` when one request should be delegated across multiple task roles. A planner creates independent worker scopes, an optional reviewer checks the combined result, and an optional merger integrates approved work. Each child is a real task with its own thread, model assignment, worktree, diff, retry, and follow-up history.

Set the maximum planned worker count and default isolation in the task workspace, then create the parent in Active or Backlog. Active starts planning; Backlog defers the planner until you run the task or move it to Active. The board groups child status under the parent while still linking to every child task. Uploaded attachments and follow-up requests remain available to the swarm's execution roles.

`Max workers` limits planned slices, not actual concurrency. Global, project, and per-model limits on the Workers page still determine how many children execute at once. See [Swarm Orchestration](swarm-orchestration.html) for roles, isolation, reruns, review, and merge behavior.

## Running And Monitoring

Tasks move through statuses such as pending, queued, running, completed, failed, cancelled, and blocked. The page listens for live task events so board state can refresh while work is happening.

Task cards use state icons so execution and review outcomes can be scanned without opening every task. In addition to normal lifecycle states, the icons distinguish achieved goals, merged work, merge failures, and merge conflicts. Hover an icon or focus it with assistive technology to read its state label.

On task detail pages, open the task name in the breadcrumb to search and switch tasks without returning to the board. Running tasks are grouped first, followed by recent tasks or search matches. The current task remains available even when it would fall outside the normal result window, and an open selector refreshes as task state changes.

While a thread response is active, the send control becomes `Stop response`. This stops the active model run and records cancellation in the thread. It is different from cancelling a queued follow-up before it starts or cancelling the entire task from the board/detail controls.

Around normal execution, lifecycle hooks can recall memory, prepare useful skills, and learn from completed work. Follow-up messages continue from the existing task thread and respect worker capacity, so they may queue when project or model execution slots are full.

Use task detail views to inspect execution output, thread messages, attachments, changed files, review comments, lifecycle activity, and worktree state.

Inspect and edit the Task Goal from the Details panel. Its state distinguishes active, paused, achieved, blocked, cleared, and failed objectives.

Use Command/Ctrl+K to open the breadcrumb selector, Command/Ctrl+Shift+Up or Down to step through tasks, Command/Ctrl+Shift+B to toggle Details, and Command/Ctrl+Shift+D to switch between the thread and Changes. These shortcuts work from the task composer when no foreground dialog is open.

## Auto-Merge Triggers

Tasks expose two independent, default-off worktree merge triggers. `Auto-merge to target branch on successful completion` runs after a successful task turn. `Auto-merge to target branch when goal is achieved` waits until the stored Task Goal reaches `achieved`, including when the Goal Agent confirms it after lifecycle review. Enable either or both to match the workflow; paused, blocked, cleared, and failed goals do not trigger a goal-achieved merge.

Both settings use the guarded worktree merge flow. Conflicts, stale branches, missing worktrees, and other unsafe states remain visible for manual recovery instead of being forced through.

## Reviewing Work

When a project has a repository attached, task execution can produce worktree-backed changes. Review those changes before merging or creating a pull request.

| Review Surface | Use It For |
|---|---|
| Thread | Follow the conversation and follow-up messages around the task. |
| Execution detail | Inspect model output, errors, and run history. |
| Changes | See modified files, live or preserved diffs, file-level cards, and review comments. |
| Review comments | Track comments attached to generated code. |
| Worktree actions | Merge, clean up, resolve conflicts, or create a PR when supported. |

## Task Card Worktree Actions

Eligible worktree-backed task cards expose `Local` actions without requiring you to leave the board. Choose **Merge commit**, **Fast-forward only**, **Rebase**, or **Squash merge** according to the history your project needs. OpenVibely shows conflicts or stale-branch state rather than completing an unsafe operation; resolve the issue and review the updated diff before trying again.

When GitHub is configured, the card's `GitHub` action can open a pull request for the task branch or take you to the already linked pull request. These actions remain review steps: verify the target branch, changed files, and task status before publishing or merging.

## Diff Review

Open a task detail page and select `Changes` to inspect generated code. Worktree-backed tasks can show live branch and uncommitted diffs while work is still active, then fall back to preserved execution diffs after merge or cleanup. The diff viewer groups changes by file, supports large-file lazy loading, and lets reviewers attach comments before sending feedback back to the agent.

## Sidebar Task Actions

Right-click a sidebar task for its actions, including deletion. Drag tasks to reorder them where supported or move them between categories. Use **Show more** to browse a category; browsing and scroll positions are remembered per project tab.

Moving a scheduled task to Backlog or Completed cancels its scheduled work. Moving a swarm parent to either category also stops its queued or running children.


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
