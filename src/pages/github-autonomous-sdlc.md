# GitHub Autonomous SDLC Skill

OpenVibely includes the standalone `openvibely_github_autonomous_sdlc_bootstrap` skill to set up a reviewable issue-to-pull-request workflow. The skill uses generic GitHub runtime capabilities to create visible scheduled tasks, implementation tasks, and linked pull requests; it is not a channel or a hidden GitHub poller daemon.

## Prerequisites

- Select an OpenVibely project connected to the target repository.
- Configure a GitHub PAT or GitHub App under `Channels`.
- Add the GitHub users or bot accounts OpenVibely should trust under GitHub Runtime Settings -> `Authorized Users`.
- Use a model/provider that supports runtime tool calls for the scheduled tasks.
- Confirm worker capacity is available for implementation tasks created by the loop.

For PAT setups, assigned-issue discovery can use the PAT owner. For GitHub App or custom inbox setups, assign issues to one of the configured Authorized Users. An organization installation account is not an issue assignee.

## Run The Skill

Run a visible project task or task-thread turn and ask it to use the `openvibely_github_autonomous_sdlc_bootstrap` skill to set up the GitHub SDLC workflow using the current project's GitHub configuration.

The bootstrap creates normal tasks and schedules that remain visible in `Tasks` and `Schedule`. Schedules drive recurring loop tasks; do not put persisted Task Goals on those recurring inbox or finder tasks.

## Recommended Loop

| Scheduled Task | Recommended Cadence | Responsibility |
|---|---:|---|
| GitHub Offering Manager: Vision Suggestions | Daily | Reads project vision and opens suggestion issues for human triage. |
| GitHub Dev Inbox | Hourly | Forwards authorized PR feedback, finds approved assigned issues, and creates or continues implementation tasks. |
| Bug Finder | Optional recurring | Opens focused bug issues only. |
| Optimization Finder | Optional recurring | Opens focused performance or workflow issues only. |
| Redundancy Finder | Optional recurring | Opens focused duplication issues only. |
| Loop Auditor | Optional recurring | Checks that the visible loop follows the intended policy. |

Finder tasks open issues; they do not modify code or open implementation PRs. Start with Offering Manager and Dev Inbox before adding more scanners.

## Approval And Issue Intake

Assignment to the PAT owner or a configured GitHub Authorized User is the default approval signal. An `approved` label can refine a custom workflow but is not required by the standard issue-to-task flow.

The Dev Inbox creates a distinct visible implementation task for each actionable issue and puts the issue number, URL, title, and acceptance notes in its prompt. Persisted Task Goals belong on those implementation tasks when autonomous continuation is desired, not on the recurring Dev Inbox task.

Use plain labels such as `suggestion`, `approved`, `task-created`, `in-progress`, `blocked`, `needs-human`, and `pr-opened`. Labels beginning with `openvibely:` are rejected.

## Pull Requests And Feedback

An implementation task can publish its worktree branch through the GitHub API and open or reuse its linked pull request. The task stores issue and pull request linkage so later scheduled runs and review feedback can find the same work.

Comments, review summaries, and review comments from GitHub Authorized Users can be deduplicated and forwarded into the linked task thread. The task can then continue through a normal follow-up run. Self-authored and bot feedback is skipped.

## Destructive Branch Replacement

The guarded branch-replacement capability exists for explicitly approved history cleanup. It replaces the linked pull request branch from the task's clean local `HEAD` and requires both explicit confirmation and the exact current remote branch SHA. The SHA acts as a force-with-lease guard so the operation fails if the shared branch changed unexpectedly.

Use normal pull request publication for routine updates. Use branch replacement only when rewriting shared history is intentional and recovery implications are understood.

## Troubleshooting

| Symptom | Check |
|---|---|
| Dev Inbox finds no work | Assign an open issue to the PAT owner or a configured Authorized User. |
| Assigned issue is skipped | Remove stale prompt rules that require an existing PR or mandatory `approved` label. |
| Feedback is not forwarded | Verify the PR was created by a linked OpenVibely task and the reviewer is authorized. |
| PR publication fails | Check GitHub credentials, repository permissions, and that the implementation task has a worktree branch. |
| Loop runs continuously | Remove a persisted goal from the recurring loop task; let its schedule control recurrence. |
| Labels are rejected | Remove the `openvibely:` prefix. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [GitHub](github.html) | Configure repository credentials and the normal PR workflow. |
| [Scheduled Task Runs](scheduled-tasks.html) | Schedules are the loop engine. |
| [Task Goals](task-goals.html) | Goals drive implementation tasks, not recurring inbox tasks. |
| [Review Workflows](review-workflows.html) | Inspect changes before GitHub merge. |
| [Runtime Capabilities](runtime-capabilities.html) | Explains the GitHub actions exposed to agents. |
