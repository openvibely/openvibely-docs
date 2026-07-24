# Automations

Automations turn supported OpenVibely capabilities into project-scoped visual graphs with explicit handoffs. Use them when work needs multiple steps, human decisions, or GitHub state to remain visible in one place.

Open `Automations` from the Workspace section of the sidebar. The portfolio shows each saved Automation's lifecycle and health state; select one to open its live graph.

## Automations Versus Schedules

| Use Case | Best Surface |
|---|---|
| Run one task once or on a recurring cadence | [Schedule](schedule.html) |
| Connect schedules, tasks, approvals, GitHub actions, and outcomes | Automations |

Automations reuse the same Tasks, Schedule, Alerts, GitHub integrations, workers, and queues used elsewhere in OpenVibely. Existing tasks, schedules, alerts, and GitHub objects do not become Automations automatically.

## Create An Automation

Select `New Automation`, then choose a starting point.

| Starting Point | What It Does |
|---|---|
| `Template` | Starts from a maintained Native, GitHub, or Vision Driver topology. |
| `Describe It` | Generates a browser-local design from a natural-language description for you to review. |
| `Blank` | Opens an empty canvas for a custom graph. |

All three paths use the same graph builder and validation rules. A generated design is not active until you select `Save changes`.

## Build The Graph

Select `Add node` to add a supported capability, configure it under `Node and connection settings`, then drag from one node's right output handle to the next node's left input handle.

| Node | Purpose |
|---|---|
| `Schedule` | Defines one-time or recurring work and creates its own task and schedule when saved. |
| `Task` | Defines project work, optionally assigned to a selected Agent. |
| `Create notification` | Creates a Native Alert notification when its connected task runs. |
| `Human approval` | Waits for a person to approve or reject the notification in Alerts. |
| `Create GitHub issue` | Creates a supported GitHub issue handoff. |
| `Human assignment` | Waits for an issue to be assigned in GitHub. |
| `GitHub inbox` | Creates implementation work from the assigned issue. |
| `Open pull request` | Opens or reuses the linked task pull request. |
| `Human review` | Observes human pull request review state. |
| `Outcome` | Marks a supported terminal result. |

The canvas supports selecting, moving, deleting, and reconnecting nodes and connections. Pan the canvas by dragging empty space; use zoom, `Fit`, and `Reset layout` to adjust the view.

## Save And Replace

The graph remains in browser memory until you select `Save changes`. Navigating away or refreshing discards unsaved edits.

Saving validates the complete graph, creates or reconciles required resources, and immediately applies the Automation. OpenVibely rejects unsupported or ambiguous handoffs, invalid connector directions, unsafe cycles, missing configuration, and cross-project or unavailable references.

Editing starts from a browser-local copy while the current saved graph continues to run. A successful save replaces that current graph while preserving the Automation identity and lifecycle state. There is no separate Publish step or restorable graph-version history.

If resource application starts but the save cannot finish, the portfolio shows `Save needs attention`. Select `Reopen Save` to retry the exact graph safely; already created resources are shown and reused where possible.

## Monitor The Live Graph

Open a saved Automation to see its `Live` graph. Node borders and labels show the highest-priority state currently present, including waiting, running, blocked, failed, and recently completed work.

Schedule and Task nodes link to their exact project tasks when bound. GitHub-backed graphs also offer `Refresh GitHub state`; otherwise the live view refreshes while it remains visible.

## Pause, Resume, Or Delete

| Action | Effect |
|---|---|
| `Pause` | Prevents new scheduled admissions while preserving the saved graph. |
| `Resume` | Allows eligible paused work to enter execution again. |
| `Delete` | Removes the Automation and Automation-owned trigger schedules when deletion is safe. Existing domain tasks remain. |

Editing a paused Automation does not activate it. Saving preserves its current lifecycle state.

## Human Review Boundaries

Native approvals must be completed by a person in Alerts. GitHub assignment, pull request review, and merge remain human-controlled in GitHub. An Automation can observe those decisions and continue through configured handoffs, but it cannot approve itself or grant itself merge, release, or deployment authority.

GitHub nodes require a usable repository and provider authentication. Topologies that discover assigned issues or observe trusted GitHub actors also require the applicable GitHub Authorized Users configuration.

## Create From Chat

Chat can preview an Automation description in either chat mode. In `Orchestrate` mode, it can prepare the same supported save plan used by the visual builder.

Chat displays the exact save effects and waits for a later explicit confirmation in the same thread. Before confirmation, it creates no active Automation or runtime resources. After confirmation, it validates and saves through the same resource and safety boundaries as the web builder.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Chat](chat.html) | Preview an Automation or prepare a confirmed save plan conversationally. |
| [Tasks](tasks.html) | Automation work remains visible as normal project tasks. |
| [Schedule](schedule.html) | Use a schedule when one task only needs time-based execution. |
| [Alerts](alerts.html) | Native human approvals are completed from Alerts. |
| [GitHub](github.html) | Configure repository, issue, pull request, and trusted-actor capabilities. |
| [Agents](agents.html) | Task nodes can use selected reusable Agents. |
| [Worker Capacity & Dispatch](workers.html) | Automation-created work still respects normal execution capacity. |
