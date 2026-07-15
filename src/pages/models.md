# Models

Models tell OpenVibely how to run AI work. Users configure them from the Models screen, then pick them as project defaults, task-specific choices, or agent defaults.

## What Users Do In Models

Open `Models` from the System section of the sidebar and create a model config.

| UI Concept | Product Effect |
|---|---|
| Provider | Chooses Anthropic, OpenAI, Ollama, an OpenAI-compatible provider preset/custom endpoint, or a Mixture of Models virtual config. |
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
| Mixture of Models | A virtual config that sends a turn to multiple reference models, then asks one configured aggregator model to produce the final response. |

A `test` provider exists in source code for tests and is not documented as a normal production provider.

## OpenAI-Compatible Models

Choose an OpenAI-compatible preset when your provider or gateway already matches one of the supported setup patterns. OpenVibely ships presets for hosted gateways and providers such as OpenRouter, NVIDIA NIM, DeepInfra, Fireworks, Groq, Mistral, Cerebras, Together, Hugging Face Router, DeepSeek, Moonshot, DashScope/Qwen, Z.AI/GLM, StepFun, Tencent TokenHub, and several local runtimes including vLLM, LM Studio, SGLang, LiteLLM, Inferrs, and ds4. Presets fill in the expected endpoint details and, when the provider exposes a compatible model list, the Models screen can discover available models for you.

Use a custom OpenAI-compatible endpoint for local gateways, self-hosted inference, or providers that are not listed as presets. In that case, provide the base URL, auth header behavior if required, and either discover models from the endpoint or enter the model ID manually. Public endpoints should use HTTPS; plain HTTP is intended for localhost or private network hosts. The full preset list lives in [Model Providers](model-providers.html).

## Mixture Of Models

Create a Mixture of Models after configuring the individual models it should call. Choose one or more references and one aggregator; references run concurrently as private advisory calls with tools disabled, then the aggregator receives their output and produces the visible response with its supported runtime capabilities.

Each turn calls every reference plus the aggregator, so the Models dialog shows the expected call count and cost warning. The dialog also controls reference timeout and separate reference/aggregator temperatures. Mixtures cannot recursively reference other mixtures, and a model config cannot be deleted while a mixture still depends on it.

See [Mixture of Models](mixture-of-models.html) for execution order, defaults, capacity, failure behavior, and tool policy.

## Choosing Defaults

Set an app-level default model if most work should use the same provider. Set a project default when a repository should prefer a different model. Pick a task model only when the task needs a one-off override.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Quickstart](quickstart.html) | The first task requires at least one usable model. |
| [Agents](agents.html) | Agents can inherit or choose model behavior. |
| [Mixture of Models](mixture-of-models.html) | Configures advisory references and the acting aggregator. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Explains Plan/Orchestrate tool boundaries and provider-native tools. |
| [Worker Capacity & Dispatch](workers.html) | Model configs participate in capacity control. |
| [Model Providers](model-providers.html) | Provider-specific setup details live there. |
