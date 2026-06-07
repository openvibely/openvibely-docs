# Model Providers

Model providers are configured through the Models UI and stored as `LLMConfig` records.

## Recommended Setup

**Start with Codex `gpt-5.5` at `high` reasoning effort.** This is the default model and the setup OpenVibely is tuned against. It handles the full range of tasks — code generation, multi-file edits, test writing, debugging — and the `high` effort level gives it enough reasoning depth to produce solid results without the latency cost of `xhigh`. For most teams this is the only model config they need.

If a task is complex enough that `high` is producing shallow plans or missing edge cases, switch that model config to `xhigh`. Reserve `xhigh` for the tasks where deeper reasoning is worth the extra time.

**Secondary: Claude Opus** for teams that prefer Anthropic. Opus at `medium` effort performs comparably for most coding tasks at a lower latency and cost than higher effort levels.

**Avoid low effort for task execution.** `low` is fast but the model skips reasoning steps that matter for correctness. It is fine for lightweight utility tasks but not recommended as a default.

## Provider Matrix

| Provider | Code Value | Key Details |
|---|---|---|
| Anthropic | `anthropic` | OAuth, API key; Anthropic API key can also serve as vision fallback when no vision-capable model is configured |
| OpenAI | `openai` | OAuth, API key; OAuth includes account/workspace tracking |
| Ollama | `ollama` | Local provider with configurable base URL and default `http://localhost:11434` |

## OAuth Variables

Hosted OAuth can use provider-specific client IDs, client secrets, authorization URLs, token URLs, and scopes. `APP_BASE_URL` controls public callback origins, and `OAUTH_REDIRECT_MODE` controls hosted vs localhost/manual behavior.

## Reasoning Effort

When a model supports reasoning modes, the model config UI shows an **Effort** dropdown. Models without reasoning support do not show the dropdown.

**Codex (OpenAI) models**

| Model | Effort levels |
|---|---|
| `gpt-5.5` | low · medium · high · **xhigh** |
| `gpt-5.5-pro` | low · medium · high · **xhigh** |
| `gpt-5.4` | low · medium · high · **xhigh** |
| `gpt-5.3-codex` | low · medium · high · **xhigh** |
| `gpt-5.2-codex` | low · medium · high · **xhigh** |
| `gpt-5.1-codex-max` | low · medium · high · **xhigh** |
| `gpt-5.4-mini` | low · medium · high |
| `gpt-5.3-codex-spark` | low · medium · high |
| `gpt-5.1-codex` | low · medium · high |
| `gpt-5.1-codex-mini` | low · medium · high |
| `gpt-5-codex` | low · medium · high |
| `gpt-5-codex-mini` | low · medium · high |

The default effort level is `high`. The environment variable `OPENVIBELY_CODEX_REASONING_EFFORT` sets a fallback effort when the model config does not specify one.

**Anthropic (Claude) models**

| Model | Effort levels |
|---|---|
| Claude Opus 4.8 | low · medium · high · **max** |
| Claude Opus 4.7 | low · medium · high · **max** |
| Claude Opus 4.6 | low · medium · high · **max** |
| Claude Sonnet 4.6 | low · medium · high · **max** |
| Claude Sonnet 4.5 | low · medium · high · **max** |
| Claude Haiku 4.5 | *(no effort — reasoning not supported)* |

`max` is the Anthropic equivalent of `xhigh`.

If a configured effort level is not supported by the selected model, OpenVibely falls back to the nearest supported level automatically.
