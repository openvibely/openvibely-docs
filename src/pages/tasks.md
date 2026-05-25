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

## Running And Monitoring

Tasks move through statuses such as pending, queued, running, completed, failed, cancelled, and blocked. The page listens for live task events so board state can refresh while work is happening.

Use task detail views to inspect execution output, thread messages, attachments, changed files, review comments, and worktree state.

## Reviewing Work

When a project has a repository attached, task execution can produce worktree-backed changes. Review those changes before merging or creating a pull request.

| Review Surface | Use It For |
|---|---|
| Thread | Follow the conversation and follow-up messages around the task. |
| Execution detail | Inspect model output, errors, and run history. |
| Changes | See modified files and diffs. |
| Review comments | Track comments attached to generated code. |
| Worktree actions | Merge, clean up, resolve conflicts, or create a PR when supported. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Task Lifecycle](task-lifecycle.html) | Explains statuses and terminal states. |
| [Git Worktrees](git-worktrees.html) | Explains isolated repository changes. |
| [Schedule](schedule.html) | Runs tasks later or repeatedly. |
| [Task Chaining](task-chaining.html) | Connects dependent task work. |
