# Review Workflows

Review workflows are how OpenVibely keeps AI-generated work visible and controllable. Tasks can produce repository changes in isolated worktrees, users can inspect execution history and diffs, and GitHub-connected projects can turn reviewed work into pull requests.

## What Users Review

| Review Surface | Use It For |
|---|---|
| Task detail | Inspect prompt, model output, status, errors, run history, and follow-up context. |
| Thread | Continue the conversation around a completed or failed task without losing context. |
| Attachments | Check the files or context that shaped the task. |
| Changed files | Review generated modifications before merge or pull request actions. |
| Review comments | Track comments attached to generated code and task output. |
| Worktree state | Decide whether to keep, merge, clean up, or publish changes. |

## Typical Review Flow

1. Open the task from the board, alert, schedule history, or channel-created work.
2. Read the execution output and thread history to understand what the model attempted.
3. Inspect changed files and diffs from the task detail view.
4. Add follow-up instructions if the result needs another pass.
5. Rebase the task branch onto the merge target when the Changes tab offers it and the base branch has moved.
6. Merge locally or create a pull request when the project and GitHub integration support it.
7. Clean up the worktree after the generated changes are no longer needed.

## How Review Relates To GitHub

GitHub is the external review and publishing path. OpenVibely remains the place where users configure project context, run work, inspect task output, and decide whether generated changes should become a pull request.

Task worktree branches can be published through the GitHub API, and publication opens or reuses the task's linked pull request while preserving issue linkage. Authorized GitHub comments, reviews, and review comments can be deduplicated and forwarded back into that implementation task's thread for another follow-up run.

Replacing a linked pull request branch's history is not a routine update path. It requires explicit confirmation and the exact current remote head SHA as a force-with-lease guard. Use it only for intentionally approved history cleanup.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | The task board is the main entry point for review. |
| [Task Lifecycle](task-lifecycle.html) | Explains statuses and terminal outcomes. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Explains isolated repository changes. |
| [GitHub](github.html) | Explains repository access and pull request workflows. |
| [GitHub Autonomous SDLC](github-autonomous-sdlc.html) | Routes authorized PR feedback into linked task threads. |
| [Alerts](alerts.html) | Failed or follow-up-needed work can point users back into review. |
