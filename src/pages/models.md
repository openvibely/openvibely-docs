# Models

Models tell OpenVibely how to run AI work. Users configure them from the Models screen, then pick them as project defaults, task-specific choices, or agent defaults.

## What Users Do In Models

Open `Models` from the System section of the sidebar and create a model config.

| UI Concept | Product Effect |
|---|---|
| Provider | Chooses Anthropic, OpenAI, Ollama, or an OpenAI-compatible provider preset/custom endpoint. |
| Auth method | Uses OAuth, API key, local Ollama configuration, or OpenAI-compatible header settings depending on provider. |
| Model identifier | Selects a discovered model or a manually entered model ID used for execution. |
| Default model | Lets tasks run without choosing a model every time. |
| Reasoning, tokens, temperature | Tunes model behavior where supported. |
| Max workers | Limits how much concurrent task work this model can run. |
| Worker timeout | Prevents stalled model executions from holding capacity forever. |
| Auto-start tasks | Allows tasks created with the model to start immediately when configured. |
| Tool policy | Changes by surface and mode, especially Chat `Plan` versus `Orchestrate`. |

## Supported Providers

| Provider | Typical Use |
|---|---|
| Anthropic | Hosted Claude models through OAuth or API key auth. |
| OpenAI | Hosted OpenAI/Codex-compatible flows through OAuth or API key auth. |
| Ollama | Local models through a local or configured Ollama base URL. |
| OpenAI-compatible | Providers and gateways that expose an OpenAI-style Chat Completions API, including presets and custom endpoints. |

A `test` provider exists in source code for tests and is not documented as a normal production provider.

## OpenAI-Compatible Models

Choose an OpenAI-compatible preset when your provider or gateway already matches one of the supported setup patterns. Presets fill in the expected endpoint details and, when the provider exposes a compatible model list, the Models screen can discover available models for you.

Use a custom OpenAI-compatible endpoint for local gateways, self-hosted inference, or providers that are not listed as presets. In that case, provide the base URL, auth header behavior if required, and either discover models from the endpoint or enter the model ID manually. Public endpoints should use HTTPS; plain HTTP is intended for localhost or private network hosts.

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
