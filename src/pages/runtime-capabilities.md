# Runtime Capabilities

Runtime capabilities are the actions a model can take during Chat, task execution, or a task follow-up. Availability depends on the current surface, mode, provider support, agent permissions, project context, and configured integrations.

## Plan And Orchestrate

| Surface | Action Boundary |
|---|---|
| Chat `Plan` | Produces analysis and plans without executing mutation actions. |
| Chat `Orchestrate` | Can receive project-scoped action tools for tasks, swarms, schedules, goals, messaging, and integrations. |
| Initial task run | Can receive execution and management tools allowed by the selected agent and project. |
| Task follow-up | Continues with task context and the runtime tools allowed for that turn. |

OpenVibely uses runtime tool calls for action-capable providers. Legacy-looking action text in a Plan response does not execute a mutation.

## Capability Groups

| Group | Examples |
|---|---|
| Task management | Create a task, create a swarm, inspect work, and continue a task thread. |
| Goals | Set, clear, pause, resume, and inspect a persisted Task Goal. |
| Scheduling | Create, modify, or delete a visible task schedule. |
| Messaging | List saved outbound targets and send through Slack, Telegram, Discord, or Email. |
| GitHub issues | Create, read, list, comment on, and label issues when GitHub is configured. |
| GitHub review | Open or reuse a task pull request, forward authorized review feedback, and perform explicitly guarded branch replacement. |
| Discovery | List the capabilities currently exposed to the turn. |

The exact list is dynamic. A turn may omit a capability because the provider cannot call tools, an integration is not configured, the current task has no required worktree or linkage, or the agent policy does not grant it.

## Safety Boundaries

- Plan mode is non-mutating even if the model describes an action marker.
- Outbound messages are limited by project targets and explicit-target policy.
- GitHub issue intake is limited by repository credentials and configured Authorized Users.
- Pull request publication is tied to an OpenVibely task worktree and persisted task/PR linkage.
- Replacing shared pull request branch history requires explicit confirmation and the exact current remote head SHA as a force-with-lease guard.
- Runtime tools do not bypass worker capacity, task review, worktree isolation, or merge controls.

## Agent Permissions

Agents can define permissions and tool selections. Treat those settings as part of the execution profile: choosing a different agent may change what the same model can do. Protected system agents use narrower, purpose-specific capabilities.

Mixture of Models references never receive runtime action tools. Only the configured aggregator may act, and it receives only the capabilities supported by its provider and policy.

## When An Action Is Missing

Verify the selected Chat mode, configured model/provider, assigned agent, selected project, and required channel or GitHub connection. Ask the turn to list its available capabilities when you need to confirm the current boundary.

If an action affects an external system or is destructive, prefer an explicit instruction naming the exact task, project, target, repository, or pull request.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Chat](chat.html) | Select Plan or Orchestrate mode. |
| [Agents](agents.html) | Configure reusable tool and permission policy. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Understand provider and mode differences. |
| [Outbound Messaging](outbound-messaging.html) | Configure safe send destinations. |
| [GitHub](github.html) | Configure issue and pull request workflows. |
