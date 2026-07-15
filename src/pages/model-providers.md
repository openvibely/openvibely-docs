# Model Providers

Model providers are configured through the Models UI and stored as `LLMConfig` records.

## Recommended Setup

Start with one provider and model that fits your team's quality, latency, and cost requirements, then add specialized configs only when needed. For a straightforward Codex setup, choose `gpt-5.6-sol`. When a GPT-5.6 model config does not specify a reasoning effort, the runtime uses `medium`.

Use higher reasoning effort for difficult implementation or review work when the additional latency is justified. Avoid assuming that a model name alone determines capability: runtime tools also depend on provider support, Chat mode, agent permissions, and configured integrations.

Claude Opus and Sonnet configs are alternatives for teams using Anthropic. Local Ollama and OpenAI-compatible configs are useful when data location, custom gateways, or local capacity matter.

## Provider Matrix

| Provider | Code Value | Key Details |
|---|---|---|
| Anthropic | `anthropic` | OAuth, API key; Anthropic API key can also serve as vision fallback when no vision-capable model is configured |
| OpenAI | `openai` | OAuth, API key; OAuth includes account/workspace tracking |
| Ollama | `ollama` | Local provider with configurable base URL and default `http://localhost:11434` |
| OpenAI-compatible | `openai_compatible` plus preset-specific values | OpenAI-style Chat Completions providers, gateways, and local endpoints with base URL, optional auth header settings, optional extra headers/body, and model discovery when supported |
| Mixture of Models | `mixture` | Virtual config composed from existing non-mixture reference and aggregator model configs; no separate provider credential |

## OpenAI-Compatible Providers

OpenAI-compatible configs are for providers and gateways that expose an OpenAI-style Chat Completions API. The Models UI includes built-in presets for common hosted providers, inference gateways, and local runtimes, plus a custom option for anything else.

Use a preset when available so OpenVibely can fill the expected endpoint pattern and attempt model discovery. Use `Custom OpenAI-Compatible` when you need to supply your own base URL, model list URL, auth header name or prefix, extra headers, or extra request body fields. If discovery returns no usable model list, enter the model ID manually.

Public OpenAI-compatible endpoints should use HTTPS. Plain HTTP base URLs are accepted for localhost and private network hosts so local gateways can be used without public TLS.

### Built-In Presets

OpenVibely ships presets for these OpenAI-compatible providers:

| Category | Presets |
|---|---|
| Hosted gateways and provider routers | OpenRouter, NVIDIA NIM, DeepInfra, Fireworks, Groq, Mistral, Cerebras, Together, Hugging Face Router, DeepSeek, Moonshot, NovitaAI, Venice, Kilo Code, Arcee AI, GMI Cloud, Chutes |
| Regional and platform providers | Qwen / DashScope, Qwen / DashScope Intl, Alibaba Coding Plan, Z.AI / GLM, Qianfan, StepFun, StepFun Step Plan, Tencent TokenHub, Tencent TokenHub Intl, Xiaomi MiMo |
| Local and self-hosted runtimes | Local vLLM, LM Studio, SGLang, LiteLLM, Inferrs Local, ds4 Local |

These presets are convenience defaults, not separate provider types. They all save as OpenAI-compatible model configs with preset-specific base URLs and discovery behavior.

## OAuth Variables

Hosted OAuth can use provider-specific client IDs, client secrets, authorization URLs, token URLs, and scopes. `APP_BASE_URL` controls public callback origins, and `OAUTH_REDIRECT_MODE` controls hosted vs localhost/manual behavior.

## Reasoning Effort

When a model supports reasoning modes, the model config UI shows an **Effort** dropdown. Models without reasoning support do not show the dropdown.

**Codex (OpenAI) models**

| Model | Effort levels |
|---|---|
| `gpt-5.6-sol` | low · medium · high · xhigh · **max** |
| `gpt-5.6-terra` | low · medium · high · xhigh · **max** |
| `gpt-5.6-luna` | low · medium · high · xhigh · **max** |
| `gpt-5.5` | low · medium · high · **xhigh** |
| `gpt-5.5-pro` | low · medium · high · **xhigh** |
| `gpt-5.4` | low · medium · high · **xhigh** |
| `gpt-5.3-codex` | low · medium · high · **xhigh** |
| `gpt-5.2-codex` | low · medium · high · **xhigh** |
| `gpt-5.1-codex-max` | low · medium · high · **xhigh** |
| `gpt-5.4-mini` | low · medium · high · **xhigh** |
| `gpt-5.3-codex-spark` | low · medium · high · **xhigh** |
| `gpt-5.1-codex` | low · medium · high |
| `gpt-5.1-codex-mini` | low · medium · high |
| `gpt-5-codex` | low · medium · high |
| `gpt-5-codex-mini` | low · medium · high |

The default effort is model-dependent. GPT-5.6, GPT-5.5, and GPT-5.4 variants default to `medium`; older variants generally default to `high`. The environment variable `OPENVIBELY_CODEX_REASONING_EFFORT` sets a fallback effort when the model config does not specify one.

**Anthropic (Claude) models**

| Model | Effort levels |
|---|---|
| Claude Sonnet 5 | low · medium · high · **max** |
| Claude Opus 4.8 | low · medium · high · **max** |
| Claude Opus 4.7 | low · medium · high · **max** |
| Claude Opus 4.6 | low · medium · high · **max** |
| Claude Sonnet 4.6 | low · medium · high · **max** |
| Claude Sonnet 4.5 | low · medium · high · **max** |
| Claude Haiku 4.5 | *(no effort — reasoning not supported)* |

`max` is the Anthropic equivalent of `xhigh`.

If a configured effort level is not supported by the selected model, OpenVibely falls back to the nearest supported level automatically.
