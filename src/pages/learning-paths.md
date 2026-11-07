# Learning Paths

Choose the path that matches what you want to accomplish in the OpenVibely web app.

## Local Solo User

- Install with `./start.sh`.
- Open the web UI and add an Anthropic, OpenAI, or Ollama model.
- Create a local path project from the plus menu beside the project tabs.
- Use Chat to explore the repository or Add Task to create a clear unit of work. Manage tasks from the left task list; choose All projects to combine work across projects.
- Review generated changes before merging.

## Team Or Server Operator

- Read [Deployment Modes](deployment.html), [Authentication](authentication.html), and [Configuration](configuration.html).
- Set storage, repository root, base URL, and auth variables deliberately.
- Configure GitHub, Slack, Telegram, Discord, Email, outbound targets, or webhooks as needed.
- Tune worker capacity by global, project, and model limits.
- Use Alerts and Insights to monitor the instance after work starts running.

## Agent Builder

- Read [Agents](agents.html), [Skill Curation](skills-and-learning.html), [Models](models.html), [Memory](memory.html), and [Personalities](personalities.html).
- Define system prompts, tools, skills, MCP servers, routing hints, lifecycle hooks, and permissions.
- Use scoped file permissions when an agent should only work in a specific directory.
- Test agents on normal Tasks before using them in larger workflows.
- Review how completed tasks improve standalone or agent-owned skills so learning stays in the right scope.

## Automation Designer

- Read [Scheduled Task Runs](scheduled-tasks.html), [Task Chaining & Branch Lineage](task-chaining.html), and [Workflows](workflows.html).
- Start with explicit schedules or task chains before adding broader workflow coordination.
- Use Alerts, Reflection, and Analytics to audit what ran.

## Contributor Or Integrator

- Start with the product pages first so the UI workflow is clear.
- Use Developer Reference only after you understand how users create projects, chat, run tasks, review changes, and configure channels in the app.
