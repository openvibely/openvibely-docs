# Multi-Agent Workflows

OpenVibely coordinates work through Chat orchestration, task chaining, swarms, and Automation graphs. Use this guide to choose a workflow; there is no separate Workflows page in the current app navigation.

## Choose A Coordination Method

| What You Need | Use | How To Start |
|---|---|---|
| Discuss a goal and coordinate several tasks interactively | Chat orchestration | Open **Chat** from the rail and use **Orchestrate** mode. |
| Run a known follow-up after one task | Task chaining | Open the task's right-hand panel and select **Chaining**. |
| Divide one request among parallel workers with review and integration roles | Swarm | Create a task and enable **Swarm mode**. |
| Save a reusable graph of tasks, schedules, approvals, and outcomes | Automation | Open **Automations** from the rail and create or edit a graph. |
| Obtain advice from several models for one visible response | Mixture of Models | Add a mixture in **Settings → Models**, then select it as the conversation or task model. |

## Coordinate From Chat

Describe the overall goal and ask Chat to create or coordinate tasks. You can inspect their threads from the left task list, send follow-ups, and return to Chat to adjust the plan. Use All projects when coordinating work across project workspaces; each created task still needs an owning project.

Example: “Create separate tasks for the API and UI changes, then help me review their progress.” See [Chat](chat.html).

## Chain A Known Next Step

Use chaining when the next task is already known, such as implementation after planning. Configure the trigger and child instructions in the **Chaining** tab. Child tasks retain their own thread and execution history. See [Task Chaining & Branch Lineage](task-chaining.html) for triggers and branch behavior.

## Delegate A Request To A Swarm

A swarm starts with a parent task. Its planner creates worker tasks, with optional reviewer and merger roles. Use it when the work can be divided into independent pieces that need to be checked and combined.

Example: “Split this migration across backend, frontend, and tests, then review and integrate the changes.” Set Swarm mode and the worker/isolation options before starting. See [Swarm Orchestration](swarm-orchestration.html).

## Build A Reusable Automation

Automations provide **Graph**, **Details**, and **YAML** views for reusable workflows. Connect the supported node types to run tasks, schedule work, create notifications, wait for human decisions, or hand work through supported GitHub stages.

Example: a scheduled task finds work, a person approves its notification in Alerts, and an implementation task follows. Available transitions and outcomes depend on the nodes you choose. See [Automations](automations.html) for the supported node catalog and save flow.

## Multiple Models Versus Multiple Tasks

A Mixture of Models asks reference models for private advice and gives that advice to an aggregator. The aggregator produces the visible response and may use supported tools. It does not create a swarm of independently managed task threads. See [Mixture of Models](mixture-of-models.html).

A [Task Goal](task-goals.html) is another separate control: it keeps one task continuing toward a completion condition across turns. It can complement a workflow, but does not define its stages.

## Monitor And Review

Use the left task list or Tasks board to inspect work, the Automation live graph for graph progress, and Alerts for human approval requests or failures. Worker capacity limits still apply to task execution. Review generated changes through the task's **Changes** view before merging or publishing a pull request.

## Related Pages

| Page | Use It For |
|---|---|
| [Agents](agents.html) | Define reusable worker instructions, skills, and permissions. |
| [Worker Capacity & Dispatch](workers.html) | Understand concurrency and queued work. |
| [Review Workflows](review-workflows.html) | Inspect and finish generated changes. |
