# GitHub

GitHub connects OpenVibely to repositories and review workflows. Use it when projects should be created from GitHub sources or when completed task changes should become pull requests.

## What Users Do In The App

Open `Channels`, choose GitHub, and follow the connection flow for your instance. After GitHub is connected, users can import or resolve repositories during project setup and create pull requests from task changes after reviewing the diff.

## Where GitHub Shows Up

| Area | User Experience |
|---|---|
| Project setup | Choose or clone a GitHub repository as the source for a project. |
| Task review | Inspect generated changes in the task detail view before sending anything upstream. |
| Pull requests | Turn reviewed task worktree changes into a GitHub pull request. |
| Repository maintenance | Re-clone or resolve repository metadata when a project source changes. |

## Recommended Workflow

1. Connect GitHub from `Channels`.
2. Create or update a project with the intended repository source.
3. Run a task against that project.
4. Open the task detail view and review the thread, changed files, and review comments.
5. Create a pull request only after the generated changes look ready for repository review.

## Configuration Notes

Operators can preconfigure GitHub App settings with `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, and `GITHUB_APP_PRIVATE_KEY`. Users should not need to understand those values during normal project/task work.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Projects](projects.html) | GitHub repositories can become project sources. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Task changes are isolated before merge or PR actions. |
| [Tasks](tasks.html) | Pull request actions live in task review flows. |
