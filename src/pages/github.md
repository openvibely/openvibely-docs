# GitHub

GitHub connects OpenVibely to repositories, issue-driven automation, and review workflows. Use it when projects should be created from GitHub sources, when assigned issues should become implementation tasks, or when reviewed task changes should become pull requests.

## What Users Do In The App

Open `Channels`, choose GitHub, and follow the connection flow for your instance. After GitHub is connected, users can import or resolve repositories during project setup and create pull requests from task changes after reviewing the diff.

## Where GitHub Shows Up

| Area | User Experience |
|---|---|
| Project setup | Choose or clone a GitHub repository as the source for a project. |
| Task review | Inspect generated changes in the task detail view before sending anything upstream. |
| Pull requests | Publish a task worktree branch through the GitHub API and open or reuse its linked pull request. |
| Issue controls | Let authorized Chat, task, and scheduled agents read, create, comment on, label, and list issues. |
| Autonomous SDLC | Use visible scheduled tasks to turn assigned issues into implementation tasks and route authorized PR feedback back to their task threads. |
| Repository maintenance | Re-clone or resolve repository metadata when a project source changes. |

## Recommended Workflow

1. Connect GitHub from `Channels`.
2. Create or update a project with the intended repository source.
3. Run a task against that project.
4. Open the task detail view and review the thread, changed files, and review comments.
5. Create a pull request only after the generated changes look ready for repository review.

## Autonomous Issue-To-PR Workflow

OpenVibely bundles a GitHub autonomous SDLC bootstrap skill that creates visible scheduled loop tasks. The Dev Inbox checks open issues assigned to the PAT owner or configured GitHub Authorized Users. Assignment is the approval signal: each actionable issue gets its own implementation task and persisted completion goal, while finder schedules only open suggestion or defect issues for a human to triage.

Implementation tasks can open or reuse linked pull requests without a local `git push`; OpenVibely publishes their net worktree changes through the GitHub API. The Dev Inbox also forwards comments and reviews from Authorized Users back into the linked task thread, where the agent can continue the work. Recurring inbox/finder tasks are schedule-driven and should not carry persisted task goals.

The normal safety boundary remains visible: issue assignment controls which work begins, Authorized Users control which PR feedback is trusted, task diffs remain reviewable in OpenVibely, and pull requests stay linked to the implementation task that created them. See [GitHub Autonomous SDLC](github-autonomous-sdlc.html) for bootstrap order, schedules, goals, labels, feedback forwarding, and troubleshooting.

## Pull Request Safety

Routine publication opens or reuses the task's linked pull request and updates the persisted task/issue/PR relationship. Replacing pull request branch history is a separate destructive capability intended only for explicitly approved cleanup. It requires confirmation and the exact current remote head SHA as a force-with-lease guard; use normal publication for ordinary revisions.

## Configuration Notes

Operators can preconfigure GitHub App settings with `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, and `GITHUB_APP_PRIVATE_KEY`. Add trusted review and inbox identities under GitHub Runtime Settings -> `Authorized Users`; API credentials alone do not define which issue assignees or reviewers OpenVibely should trust. Users should not need to understand environment values during normal project/task work.

## Related Pages

| Page | Why It Matters |
|---|---|
| [GitHub Autonomous SDLC](github-autonomous-sdlc.html) | Visible scheduled issue intake, implementation tasks, and authorized PR feedback. |
| [Review Workflows](review-workflows.html) | Review changes before publication and understand feedback continuation. |
| [Runtime Capabilities](runtime-capabilities.html) | Explains GitHub issue and pull request actions available to agents. |
| [Projects](projects.html) | GitHub repositories can become project sources. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Task changes are isolated before merge or PR actions. |
| [Tasks](tasks.html) | Pull request actions live in task review flows. |
