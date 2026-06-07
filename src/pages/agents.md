# Agents

Agents are reusable AI worker profiles. In the UI, they let users capture how a task should be approached instead of rewriting the same system prompt, tools, permissions, skills, and routing hints for every run.

## What Users Do In Agents

Open `Agents` from the System section of the sidebar. Create an agent manually, generate one from a prompt, edit an existing profile, attach skills or plugins, and choose whether tasks should use that agent explicitly or let routing select one.

| Agent Area | Product Meaning |
|---|---|
| Identity | Name, description, key, scope, and project association help users find the right profile. |
| Instructions | System prompt and model defaults shape how the agent works. |
| Tools | File, shell, web, notebook, scoped-file, and management tools define what the agent can do. |
| Skills | Reusable instructions and slash-command style capabilities. |
| Plugins and MCP | Marketplace-backed integrations and runtime tool servers. |
| Routing | Describes when the agent is good, when to avoid it, and how confident routing should be. |
| Permissions | Controls what workflow capabilities the agent is allowed to use. |
| Lifecycle hooks | Adds behavior around task execution events, including memory recall/update and skill curation when configured. |

## Scopes

| Scope | When To Use It |
|---|---|
| Global | The agent should be reusable across projects. |
| Project | The agent is specific to one repository or workspace. |

## How Agents Fit Tasks

When creating a task, users can choose an agent or leave selection on auto-routing. An agent can also define model behavior, so task execution can inherit a consistent combination of instructions, tools, and provider settings.

When a task is assigned to an agent, Skill Curator works within that agent’s own skill library. After the task completes, autonomous curation can improve only that assigned agent’s skills when the lesson is specific to the agent’s role.

## System Curators

OpenVibely includes protected system agents for learning work users should not have to manage manually.

| System Agent | What It Does |
|---|---|
| `System: Memory Curator` | Autonomously creates and updates durable project memory from completed work, recalls relevant memory before tasks, and runs scheduled consolidation. |
| `System: Goal Agent` | Evaluates active task goals after each task turn via the `evaluate_task_goal` lifecycle hook, queuing continuation follow-ups until the goal is achieved or blocked. |
| `Skill Curator` | Routes reusable skills into tasks and improves standalone or agent-owned skill libraries from completed work. |

`System: Memory Curator` is a protected on-disk system agent. Its skills live under `.openvibely/agents/memory_curator/` and can be reviewed there, but the agent is not user-editable or selectable as a primary task agent. It uses scoped memory tools rooted at `.openvibely/memories`, skips normal repository-editing tools, and keeps memory learning isolated from task worktrees.

## Agent Detail Tabs

The agent detail page has three tabs: **Details**, **Skills**, and **Lifecycle Hooks**.

**Details** covers identity, instructions, tools, routing, and permissions — the core agent configuration.

**Skills** shows skills owned by this agent. From this tab you can create a new skill, edit an existing one, change skill state (enable, disable, always-use, archive), or preview which skills the router would currently select for a hypothetical task. System agents show a protected banner instead of edit controls.

**Lifecycle Hooks** lists the hooks configured for this agent. Each row shows the hook type (`route_task`, `before_run`, `after_complete`), the assigned skill, run policy, and tool-scope permissions. The tool-scope section controls what that hook's skill is allowed to do: read or write skills, read or write repository files, use shell or tools, and similar. An explainer callout on the tab summarizes what tool-scope means for that hook type.

## Skills And Lifecycle Hooks

Agents can own skills on disk, and those skills can evolve from completed work.

| Capability | User Impact |
|---|---|
| Agent-owned skills | Keep role-specific instructions and reusable habits attached to one agent. |
| Lifecycle hooks | Run supporting steps before or after task execution. |
| Skill routing | Select relevant agent skills for assigned-agent tasks. |
| Agent skill learning | Improve the assigned agent’s skills without writing into unrelated agents. |

Use agent-owned skills when the knowledge should stay with that agent. Use standalone skills when the knowledge should help many agents or no-agent tasks.

## Best Practices

- Name agents by the work they perform, not by an implementation detail.
- Keep instructions focused enough that users can predict the agent’s behavior.
- Use permissions and scoped file settings to make consequences explicit.
- Prefer routing hints when multiple agents could plausibly handle similar work.
- Use project-scoped agents for repository-specific conventions.
- Let agent-owned skills capture role-specific learning that should improve future assigned tasks.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Tasks can run with a selected agent. |
| [Task Goals](task-goals.html) | System: Goal Agent drives persistent task objectives through the after_complete hook. |
| [Memory](memory.html) | Explains the protected Memory Curator and managed project memory. |
| [Skill Curation](skills-and-learning.html) | Explains standalone skills, agent-owned skills, and autonomous curation. |
| [Models](models.html) | Agents can inherit or choose model behavior. |
| [Personalities](personalities.html) | Personality settings affect tone and behavior. |
| [Workflows](workflows.html) | Multi-agent workflows coordinate agents across larger work. |
