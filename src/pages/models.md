# Models

Models tell OpenVibely how to run AI work. Users configure them from the Models screen, then pick them as project defaults, task-specific choices, or agent defaults.

## What Users Do In Models

Open `Models` from the System section of the sidebar and create a model config.

| UI Concept | Product Effect |
|---|---|
| Provider | Chooses Anthropic, OpenAI, or Ollama. |
| Auth method | Uses CLI auth, OAuth, API key, or local Ollama configuration depending on provider. |
| Model identifier | Selects the provider model used for execution. |
| Default model | Lets tasks run without choosing a model every time. |
| Reasoning, tokens, temperature | Tunes model behavior where supported. |
| Max workers | Limits how much concurrent task work this model can run. |
| Worker timeout | Prevents stalled model executions from holding capacity forever. |
| Auto-start tasks | Allows tasks created with the model to start immediately when configured. |
| Tool policy | Changes by surface and mode, especially Chat `Plan` versus `Orchestrate`. |

## Supported Providers

| Provider | Typical Use |
|---|---|
| Anthropic | Hosted Claude models through CLI, OAuth, or API key auth. |
| OpenAI | Hosted OpenAI/Codex-compatible flows through CLI, OAuth, or API key auth. |
| Ollama | Local models through a local or configured Ollama base URL. |

A `test` provider exists in source code for tests and is not documented as a normal production provider.

## Choosing Defaults

Set an app-level default model if most work should use the same provider. Set a project default when a repository should prefer a different model. Pick a task model only when the task needs a one-off override.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Quickstart](quickstart.html) | The first task requires at least one usable model. |
| [Agents](agents.html) | Agents can inherit or choose model behavior. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Explains Plan/Orchestrate tool boundaries and provider-native tools. |
| [Worker Capacity & Dispatch](workers.html) | Model configs participate in capacity control. |
| [Model Providers](model-providers.html) | Provider-specific setup details live there. |
