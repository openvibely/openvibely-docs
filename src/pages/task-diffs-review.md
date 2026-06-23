# Task Diffs & Review

Task diffs are how OpenVibely makes generated code reviewable. A task can produce file changes in an isolated worktree, preserve execution diff output, stream live diff snapshots during follow-up work, and expose review comments before merge or pull request actions.

## Where To Find Diffs

Open a task detail page and select the `Changes` tab. That view is the user-facing diff surface for generated work.

| Surface | Use It For |
|---|---|
| Changes tab | Inspect file changes for the selected task. |
| File cards | Review each changed file with status, hunks, line numbers, and binary or rename metadata where available. |
| Inline or split view | Change how textual diffs are displayed when loading a file. |
| Review comments | Attach feedback to lines and submit the review back to the task. |
| Worktree actions | Rebase stale task branches, merge locally, resolve conflicts, clean up, or create a pull request when supported. |

## What The Diff Includes

For worktree-backed tasks, OpenVibely prefers the live worktree diff while the task is running, queued, or otherwise unmerged. That can include committed branch changes and uncommitted changes from the task worktree.

After merge, or when a worktree is no longer available, the UI falls back to preserved execution diff output so the task still has a reviewable history.

For non-worktree tasks, the Changes tab uses the latest non-empty execution diff captured for that task.

## Live Diff Snapshots

During task follow-up execution, OpenVibely can broadcast periodic `diff_snapshot` events. The task Changes view can refresh from those snapshots so reviewers see current file changes while work is still in progress instead of waiting for completion.

This is especially useful when a user sends a follow-up into a task thread and wants to watch how the agent changes the worktree.

## File-Level Loading

Large diffs can be expensive to render all at once. The diff viewer parses unified git diff output into file cards, recognizes added, deleted, modified, renamed, copied, and binary changes, and supports per-file lazy loading.

Small files can load automatically. Large files can be loaded on demand, and very large diffs may be limited to keep the UI responsive.

## Review Comments

Review comments let users leave targeted feedback on generated changes. The review toolbar can submit accumulated comments back to the AI agent, reactivating the task so it can respond to the requested changes.

Use review comments when the task is close but needs specific edits. Use a normal task follow-up when the feedback is broader and not tied to a line or file.

## Recommended Review Flow

1. Open the task detail page.
2. Select `Changes`.
3. Scan changed files and load large file cards only when needed.
4. Add line comments for specific corrections.
5. Submit the review if the agent should revise the work.
6. Re-check the updated diff after the follow-up run completes.
7. Rebase onto the merge target first if the task branch is stale and the Changes tab offers that action.
8. Merge locally, clean up the worktree, or create a pull request when the result is ready.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | The board and task detail workflow around generated work. |
| [Review Workflows](review-workflows.html) | The broader merge, cleanup, and PR decision path. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Why generated changes are isolated from the main checkout. |
| [Task Lifecycle](task-lifecycle.html) | How task status affects when diffs are live, preserved, or ready for review. |
| [GitHub](github.html) | How reviewed changes can become pull requests. |
