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
| Lifecycle hooks | Adds behavior around task execution events. |

## Scopes

| Scope | When To Use It |
|---|---|
| Global | The agent should be reusable across projects. |
| Project | The agent is specific to one repository or workspace. |

## How Agents Fit Tasks

When creating a task, users can choose an agent or leave selection on auto-routing. An agent can also define model behavior, so task execution can inherit a consistent combination of instructions, tools, and provider settings.

## Best Practices

- Name agents by the work they perform, not by an implementation detail.
- Keep instructions focused enough that users can predict the agent’s behavior.
- Use permissions and scoped file settings to make consequences explicit.
- Prefer routing hints when multiple agents could plausibly handle similar work.
- Use project-scoped agents for repository-specific conventions.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Tasks can run with a selected agent. |
| [Models](models.html) | Agents can inherit or choose model behavior. |
| [Personalities](personalities.html) | Personality settings affect tone and behavior. |
| [Workflows](workflows.html) | Multi-agent workflows coordinate agents across larger work. |
