# Git Worktrees

OpenVibely uses per-task repository isolation so AI-generated changes can be reviewed before they are merged or turned into pull requests.

## Why Worktrees Matter

A task should not quietly rewrite the main checkout. Worktree-backed execution gives each task a place to make changes, track branch/base information, show diffs, and support review actions.

| Concept | User Impact |
|---|---|
| Task worktree | Isolates generated files for one task. |
| Task branch | Gives the work a branch identity for merge or pull request flows. |
| Base branch and commit | Preserve what the task started from. |
| Merge target | Defines where reviewed work should land. |
| Merge status | Shows whether merging is pending, merged, failed, or conflicted. |
| Auto-merge | Lets eligible completed work merge automatically when enabled. |

## Review Flow

1. Run a task attached to a repository-backed project.
2. Open the task detail view.
3. Inspect thread output and changed files.
4. Read or add review comments when relevant.
5. Merge, create a pull request, resolve conflicts, abort, or clean up the worktree depending on the result.

## Review Discipline

Leave auto-merge disabled until the team trusts the project, model, and agent combination. Review diffs and submitted comments before merging generated changes.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Worktree actions live in task review flows. |
| [GitHub](github.html) | GitHub integration supports pull request workflows. |
| [Task Lifecycle](task-lifecycle.html) | Worktrees are part of the larger execution lifecycle. |
