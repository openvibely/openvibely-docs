# Workers

Workers control how much AI work OpenVibely can run at once. In the UI, worker settings help teams avoid overwhelming a model provider, a local machine, or a single project.

## What Users Configure

Open `Workers` from the System section of the sidebar.

| Capacity Layer | What It Protects |
|---|---|
| Global capacity | Overall execution slots across the instance. |
| Project limits | Prevent one selected project from consuming all execution capacity. |
| Model limits | Prevent one provider or model config from being overloaded. |
| Worker timeout | Stops stalled executions from holding capacity forever. |

## When To Change Worker Settings

- Lower limits when using expensive hosted models.
- Lower limits when a provider rate-limits heavily.
- Raise limits when you have enough machine capacity and provider quota.
- Set project limits when one repository should not block work in others.
- Use model limits when local Ollama or a specific hosted provider is slower than the rest.

## How It Feels In The App

When capacity is available, tasks can move from queued to running. When capacity is constrained, tasks wait in the queue until a worker slot is available. Alerts and task statuses help users notice stuck or failed work.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Workers execute tasks from the board. |
| [Models](models.html) | Model configs can define per-model worker limits. |
| [Projects](projects.html) | Projects can define project-level worker limits. |
