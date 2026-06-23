# Git Worktrees & Merge Safety

OpenVibely uses per-task repository isolation so AI-generated changes can be reviewed before they are merged or turned into pull requests. A task should not quietly rewrite the main checkout.

Worktree-backed execution gives each task a place to make changes, track branch/base information, show diffs, support follow-ups, and preserve a safe review boundary.

## Why Worktrees Matter

| Concept | User Impact |
|---|---|
| Task worktree | Isolates generated files for one task. |
| Task branch | Gives the work a branch identity for merge or pull request flows. |
| Base branch and commit | Preserve what the task started from. |
| Merge target | Defines where reviewed work should land. |
| Merge status | Shows whether merging is pending, merged, failed, or conflicted. |
| Auto-merge | Lets eligible completed work merge automatically when enabled. |
| Rebase | Updates a task branch onto its merge target when review needs the latest base before merge or PR creation. |
| Cleanup | Removes isolated task workspace after it is no longer needed. |

## Review Flow

1. Run a task attached to a repository-backed project.
2. Open the task detail view.
3. Inspect thread output and changed files.
4. Read or add review comments when relevant.
5. If the task branch is stale, rebase it onto the merge target before final review.
6. Merge, create a pull request, resolve conflicts, abort, or clean up the worktree depending on the result.

## Merge Safety Boundaries

| Boundary | Why It Exists |
|---|---|
| Isolated task worktree | Keeps generated changes away from the main checkout until reviewed. |
| Live and preserved diffs | Allows review before and after cleanup/merge paths. |
| Dirty-worktree checks | Avoids unsafe automatic merge behavior when a worktree has uncommitted state. |
| Conflict status | Makes merge conflicts visible instead of pretending the work shipped. |
| Descendant checks | Protects parent branches while chained child tasks are still non-terminal. |
| Follow-up merge reset | If a merged or conflicted task receives new follow-up changes, review can become pending again. |

## Follow-Ups And Worktrees

Task follow-ups continue from the task's worktree when available. If the follow-up makes new file changes, OpenVibely can capture updated diff output and reset review state that was previously merged or conflicted. If the follow-up is read-only and makes no changes, merged state should not be disturbed.

This is why follow-ups are useful for review feedback: the task remains one unit of work, but new changes still become visible for review.

## Rebase Before Merge

When the Changes tab offers `Rebase onto <target>`, use it to bring the task branch up to date with the merge target before final review. This is useful when the base branch has moved since the task started and you want to review or merge against current code.

Treat rebase like any other review action: confirm the updated diff still matches the task intent, resolve conflicts if they appear, and only merge or create a pull request after the rebased result looks safe.

## Auto-Merge Discipline

Leave auto-merge disabled until the team trusts the project, model, and agent combination. Even with auto-merge enabled, generated work should be understood as task output that may need review, tests, conflict handling, or pull request inspection.

Good auto-merge candidates are low-risk, repetitive, well-tested tasks. Risky migrations, broad refactors, security-sensitive changes, or generated code touching unfamiliar areas should stay manual.

## What It Does Not Do

- It does not guarantee generated code is correct.
- It does not eliminate merge conflicts.
- It does not make review comments optional for high-risk work.
- It does not mean a cleaned-up worktree has no preserved diff history.
- It does not let parent branch cleanup ignore active chained descendants.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Task Diffs & Review](task-diffs-review.html) | Explains the Changes tab and review comments. |
| [Review Workflows](review-workflows.html) | Explains review, merge, and PR decisions. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Follow-up changes can reopen review. |
| [Task Chaining & Branch Lineage](task-chaining.html) | Dependent tasks preserve branch lineage. |
| [GitHub](github.html) | GitHub integration supports pull request workflows. |
