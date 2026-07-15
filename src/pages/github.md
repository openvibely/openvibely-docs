# GitHub

GitHub connects OpenVibely to repositories, issues, pull requests, and review feedback. Use it to create projects from GitHub repositories, let agents work with issues, and publish reviewed task changes as linked pull requests.

## What Users Do In The App

Open `Channels`, choose GitHub, and follow the connection flow for your instance. After GitHub is connected, users can import or resolve repositories during project setup and create pull requests from task changes after reviewing the diff.

## What GitHub Enables

| Capability | User Impact |
|---|---|
| Project setup | Choose or clone a GitHub repository as the source for a project. |
| Task review | Inspect generated changes in the task detail view before sending anything upstream. |
| Pull requests | Publish a task worktree branch through the GitHub API and open or reuse its linked pull request. |
| Issue actions | Authorized Chat, task, and scheduled agents can read, create, comment on, label, and list issues. |
| Assigned-issue discovery | Agents can list open issues assigned to the connected PAT owner or a configured GitHub Authorized User. |
| Review feedback | Comments and reviews from GitHub Authorized Users can be forwarded into linked task threads for follow-up work. |
| Repository maintenance | Re-clone or resolve repository metadata when a project source changes. |

## Recommended Workflow

1. Connect GitHub from `Channels`.
2. Create or update a project with the intended repository source.
3. Run a task against that project.
4. Open the task detail view and review the thread, changed files, and review comments.
5. Create a pull request only after the generated changes look ready for repository review.

## Authorize Users

Add trusted GitHub logins under GitHub Runtime Settings -> `Authorized Users`. This list is used by GitHub runtime authorization checks, assigned-issue discovery for GitHub App or custom inbox setups, and pull request feedback forwarding.

GitHub Authorized Users are not the same as Slack, Telegram, Discord, or Email inbound authorization. They do not control who can send Chat messages to OpenVibely. With a PAT connection, assigned-issue discovery can use the PAT owner; GitHub App and custom inbox setups need a configured Authorized User because an organization installation account is not an issue assignee.

Authorization checks deny by default when the list is empty. API credentials establish repository access, but do not by themselves mark issue assignees or reviewers as trusted.

## Pull Request Safety

Routine publication opens or reuses the task's linked pull request and updates the persisted task, issue, and pull request relationship. Replacing pull request branch history is a separate destructive capability intended only for explicitly approved cleanup. It requires confirmation and the exact current remote head SHA as a force-with-lease guard; use normal publication for ordinary revisions.

## Configuration Notes

Operators can preconfigure GitHub App settings with `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, and `GITHUB_APP_PRIVATE_KEY`. Users should not need to understand environment values during normal project or task work.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Review Workflows](review-workflows.html) | Review changes before publication and understand feedback continuation. |
| [Runtime Capabilities](runtime-capabilities.html) | Explains GitHub issue and pull request actions available to agents. |
| [Projects](projects.html) | GitHub repositories can become project sources. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Task changes are isolated before merge or pull request actions. |
| [Tasks](tasks.html) | Pull request actions live in task review flows. |
