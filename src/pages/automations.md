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
| `Template` | Starts from the maintained Native SDLC or GitHub SDLC topology. |
| `Describe` | Generates a browser-local design from a natural-language description for you to review. |
| `Custom` | Opens the builder with an empty custom graph. |

All three paths use the same graph builder and validation rules. A generated design is not active until you select `Save changes`.

## Build The Graph

The builder has three synchronized views.

| View | Purpose |
|---|---|
| `Graph` | Add, move, delete, and connect nodes on the visual canvas. |
| `Details` | Configure Automation metadata, node prompts and settings, and transition labels or conditions. |
| `YAML` | Edit the complete Automation definition directly. Switching back to Graph parses and validates the YAML before rebuilding the canvas. |

In Graph, select `Add node`, choose a supported capability, and drag from one node's right output handle to the next node's left input handle. Use Details or YAML to configure the new node.

| Node | Purpose |
|---|---|
| `Schedule` | Defines one-time or recurring work and creates its own task and schedule when saved. |
| `Task` | Defines project work, optionally assigned to a selected Agent. |
| `Create notification` | Creates a Native Alert notification when its connected task runs. |
| `Human approval` | Waits for a person to approve or reject the notification in Alerts. |
| `Approved inbox` | Receives approved Native work and creates the next visible task. |
| `Native implementation` | Performs approved implementation work inside OpenVibely. |
| `Create GitHub issue` | Creates a supported GitHub issue handoff. |
| `Human assignment` | Waits for an issue to be assigned in GitHub. |
| `GitHub inbox` | Creates implementation work from the assigned issue. |
| `Open pull request` | Opens or reuses the linked task pull request. |
| `Human review` | Observes human pull request review state. |
| `Outcome` | Marks a supported terminal result. |

The canvas supports selecting, moving, deleting, and reconnecting nodes and connections. Pan the canvas by dragging empty space; use zoom, `Fit`, and `Reset layout` to adjust the view.

## Save And Replace

The design remains in browser memory until you select `Save` or `Save changes`. Navigating away or refreshing discards unsaved edits.

Saving validates the complete graph, creates or reconciles required resources, and immediately applies the Automation in one database transaction. OpenVibely rejects unsupported or ambiguous handoffs, invalid connector directions, unsafe cycles, missing configuration, and cross-project or unavailable references.

Editing starts from a browser-local copy while the current saved graph continues to run. A successful save replaces that current graph while preserving the Automation identity and lifecycle state. There is no separate Publish step or restorable graph-version history.

If validation or resource creation fails, the save is rolled back and the previously saved graph remains active. A failed save does not leave a partially applied Automation.

## Monitor The Live Graph

Open a saved Automation to see its live Graph, Details, or read-only YAML. Node borders and labels show the highest-priority state currently present, including waiting, running, blocked, failed, and recently completed work.

Schedule and Task nodes link to their exact project tasks when bound. The live view refreshes while it remains visible, and tracked GitHub pull request state is refreshed automatically when it becomes stale.

Select `Run` from a live Automation, or `Run now` from its portfolio menu, to queue a manual run. This does not change the Automation's saved schedule cadence.

## Disable, Enable, Or Delete

| Action | Effect |
|---|---|
| `Disable` | Prevents new scheduled admissions while preserving the saved graph. |
| `Enable` | Allows eligible disabled work to enter execution again. |
| `Delete` | Removes the Automation and Automation-owned trigger schedules when deletion is safe. Existing domain tasks remain. |

Editing a disabled Automation does not activate it. Saving preserves its current lifecycle state.

## Update A Maintained Template

Native SDLC and GitHub SDLC Automations show `Update to latest template` when a newer maintained template revision is available.

Updating replaces the current nodes, connections, prompts, and schedules with the latest template. The Automation name and lifecycle state are preserved, but template customizations are not merged. Review the confirmation carefully before applying the update.

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
