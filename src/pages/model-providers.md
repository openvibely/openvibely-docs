# Model Providers

Model providers are configured through the Models UI and stored as `LLMConfig` records.

## Provider Matrix

| Provider | Code Value | Key Details |
|---|---|---|
| Anthropic | `anthropic` | CLI, OAuth, API key; Anthropic API key can also serve as vision fallback when no vision-capable model is configured |
| OpenAI | `openai` | CLI, OAuth, API key; OAuth includes account/workspace tracking |
| Ollama | `ollama` | Local provider with configurable base URL and default `http://localhost:11434` |

## OAuth Variables

Hosted OAuth can use provider-specific client IDs, client secrets, authorization URLs, token URLs, and scopes. `APP_BASE_URL` controls public callback origins, and `OAUTH_REDIRECT_MODE` controls hosted vs localhost/manual behavior.

## Reasoning Effort

`OPENVIBELY_CODEX_REASONING_EFFORT` is a fallback for Codex requests when model config does not set one. Allowed values documented in the README are `low`, `medium`, `high`, and `xhigh`, with fallback `high`.
