# Models

Models tell OpenVibely how to run AI work. Users configure them from the Models screen, then pick them as project defaults, task-specific choices, or agent defaults.

## What Users Do In Models

Open **Settings → Models** and create a model config.

| UI Concept | Product Effect |
|---|---|
| Provider | Chooses Anthropic, OpenAI, Ollama, an OpenAI-compatible provider preset/custom endpoint, or a Mixture of Models virtual config. |
| Auth method | Uses OAuth, API key, local Ollama configuration, or OpenAI-compatible header settings depending on provider. |
| Model identifier | Selects a discovered model or a manually entered model ID used for execution. |
| Default model | Lets tasks run without choosing a model every time. |
| Reasoning, tokens, temperature | Tunes model behavior where supported. |
| Max workers | Controls concurrent task work for this model. Leave blank or use `0` to inherit project/global capacity; any positive value sets a per-model cap with no product-imposed maximum. |
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

## Reasoning And Model Settings

The Model dialog shows only settings supported by the selected provider and model. `gpt-6-astra` offers `low`, `medium`, `high`, `xhigh`, and `max` reasoning effort, uses `medium` when no effort is configured, and does not support `none` or configurable temperature. `gpt-6-sol` and `gpt-6-luna` add `none` to those effort choices and also default to `medium`. OpenVibely hides Temperature for Astra and ignores stale submitted temperature values.

Current Claude models can expose `xhigh` where the provider supports it. Claude Opus 5.5, Fable 5.1, and Mythos 5.1 are available in the Anthropic selector; consult [Model Providers](model-providers.html) for their supported effort levels and provider-specific constraints.

## Context Limits And Setup

The model editor groups settings into tabs and supports OAuth connection before saving a configuration. Compatible endpoints can supply model metadata through discovery; Ollama setup can discover installed models from its base URL.

In the Generation tab, `Context window (tokens)` sets the working context size and `Compact conversation at (tokens)` controls when history is compacted. The editor fills suggested positive values from the model's limits; verify the window against your server when discovery cannot report it.

OpenAI-compatible and Ollama configurations also expose `Max output (tokens)`. Leave room for input; for context windows smaller than 32,768 tokens, the editor limits output to one quarter of the window. OpenAI and Anthropic adapters manage their output budgets without this control. Conversation composers offer searchable model selection, saved favorites, and supported reasoning-effort overrides.

## Manage Model Configurations

Use the Models collection toolbar to search configurations, including connected OAuth account labels, filter by provider, default status, authentication, or kind, and sort the results. Select configurations to delete several at once only after checking that no project, agent, or Mixture of Models still depends on them.

OAuth credentials are stored as reusable provider connections. Multiple compatible model configurations can link to the same connection, so refreshed credentials and account identity stay consistent across those models. The model editor shows the selected provider account and lets you connect a new account or choose an existing compatible connection. Before disconnecting one, review the models listed as using it.

OpenVibely refreshes eligible OAuth credentials before expiry and persists refreshed state so restarts do not revert to stale tokens. If a provider rejects refresh or requires renewed consent, the affected connection is marked for reauthentication instead of silently borrowing another account. Usage and cooldown state remain attributed to the exact provider connection.

## Mixture Of Models

Create a Mixture of Models after configuring the individual models it should call. Choose one or more references and one aggregator; references run concurrently as private advisory calls with tools disabled, then the aggregator receives their output and produces the visible response with its supported runtime capabilities.

Each turn calls every reference plus the aggregator, so the Models dialog shows the expected call count and cost warning. The dialog also controls reference timeout and separate reference/aggregator temperatures. Mixtures cannot recursively reference other mixtures, and a model config cannot be deleted while a mixture still depends on it.

See [Mixture of Models](mixture-of-models.html) for execution order, defaults, capacity, failure behavior, and tool policy.

## Choosing Defaults

Set an app-level default model if most work should use the same provider. Set a project default when a repository should prefer a different model. Pick a task model only when the task needs a one-off override.

## Fast Mode

For supported OpenAI and Claude models, the model controls offer **Fast mode**. It requests faster service with higher cost or plan usage. Model, reasoning-effort, and Fast mode selections persist for the relevant Chat or task context.


## Related Pages

| Page | Why It Matters |
|---|---|
| [Quickstart](quickstart.html) | The first task requires at least one usable model. |
| [Agents](agents.html) | Agents can inherit or choose model behavior. |
| [Mixture of Models](mixture-of-models.html) | Configures advisory references and the acting aggregator. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Explains Plan/Orchestrate tool boundaries and provider-native tools. |
| [Worker Capacity & Dispatch](workers.html) | Model configs participate in capacity control. |
| [Model Providers](model-providers.html) | Provider-specific setup details live there. |

## Composer Model Menu

In Chat or a task thread, click the model name at the bottom of the composer to open **Models**. **Command/Ctrl+M** opens or closes the same menu. The menu selects from your configured models; add or edit configurations in **Settings → Models**.

### Find And Select A Model

- **Provider groups:** Hover over or click a provider to open its model submenu. OpenAI-compatible configurations use their provider preset names where available.
- **Search models:** Search by configuration name, provider, model ID, or the model's displayed details. Results appear directly in the menu across provider groups.
- **Favorites:** Click a model's star to add or remove it from **Favorites** in the main menu. Favorites are saved, so frequently used models are easier to reach next time.
- **Auto/default choices:** These appear when offered by the current composer. They follow the app's selection rules rather than selecting a named configuration explicitly. See [Model Selection & Tool Policy](model-selection-tool-policy.html).

Click a model row to select it. The composer displays the selected model. You can also navigate rows with Up/Down, open a focused provider with Right, return from its submenu with Left, and activate a focused model with Enter.

### Reasoning Effort And Fast Mode

The menu shows controls supported by the selected model:

| Control | What It Does |
|---|---|
| **Reasoning effort** | A slider chooses among that model's supported effort levels. Available levels vary by model. |
| **Fast mode** | Requests the provider's priority service option for supported models. Availability depends on the model; it is separate from reasoning effort. |
| **Use default** | Clears the override for that control and returns to the model's configured/default behavior. |

Unsupported controls are hidden. You do not need duplicate model configurations just to change effort or Fast mode for a conversation.

### Where Choices Are Saved

Chat model choices and overrides are saved for the project conversation. Existing task threads save their own model settings. Effort and Fast mode overrides are tracked per model, so switching models can restore the corresponding saved choices. These conversation controls do not rewrite the shared model configuration in Settings.

If settings or favorites cannot be loaded or saved, the picker displays an error. Follow its retry instruction rather than assuming the choice was saved.
