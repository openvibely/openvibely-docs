# Learning Paths

Choose the path that matches what you want to accomplish in the OpenVibely web app.

## Local Solo User

- Install with `./start.sh`.
- Open the web UI and add an Anthropic, OpenAI, or Ollama model.
- Create a local path project from the sidebar.
- Use Chat to explore the repository or Tasks to create a clear unit of work.
- Review generated changes before merging.

## Team Or Server Operator

- Read [Deployment Modes](deployment.html), [Authentication](authentication.html), and [Configuration](configuration.html).
- Set storage, repository root, base URL, and auth variables deliberately.
- Configure GitHub, Slack, Telegram, or webhooks as needed.
- Tune worker capacity by global, project, and model limits.
- Use Alerts and Insights to monitor the instance after work starts running.

## Agent Builder

- Read [Agents](agents.html), [Models](models.html), [Memory](memory.html), and [Personalities](personalities.html).
- Define system prompts, tools, skills, MCP servers, routing hints, and permissions.
- Use scoped file permissions when an agent should only work in a specific directory.
- Test agents on normal Tasks before using them in larger workflows.

## Automation Designer

- Read [Scheduled Tasks](scheduled-tasks.html), [Task Chaining](task-chaining.html), and [Workflows](workflows.html).
- Start with explicit schedules or task chains before adding broader workflow coordination.
- Use Alerts, Reflection, and Analytics to audit what ran.

## Contributor Or Integrator

- Start with the product pages first so the UI workflow is clear.
- Use Developer Reference only after you understand how users create projects, chat, run tasks, review changes, and configure channels in the app.
