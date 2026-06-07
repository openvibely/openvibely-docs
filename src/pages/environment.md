# Environment Variables

This is a concise reference. See [Configuration](configuration.html) for explanations and recommended usage.

## Runtime

| Variable | Default |
|---|---|
| `PORT` | `3001` server, `0` desktop |
| `DATABASE_PATH` | `~/.openvibely/openvibely.db` |
| `DATABASE_URL` | empty |
| `ENVIRONMENT` | `development` |
| `PROJECT_REPO_ROOT` | `~/.openvibely/repos` |
| `OPENVIBELY_APP_DATA_DIR` | empty unless set |
| `OPENVIBELY_ENABLE_LOCAL_REPO_PATH` | false server, true desktop when unset |
| `OPENVIBELY_PLUGIN_ROOT` | app-local plugin root when unset |
| `OPENVIBELY_CODEX_REASONING_EFFORT` | `high` fallback |

## Auth

| Variable | Default |
|---|---|
| `AUTH_ENABLED` | inferred from username/password when unset |
| `AUTH_USERNAME` | empty |
| `AUTH_PASSWORD` | empty |
| `AUTH_SESSION_SECRET` | empty |
| `AUTH_SESSION_TTL` | `24h` |

## OAuth And Providers

| Variable Group | Examples |
|---|---|
| Base URL and redirect | `APP_BASE_URL`, `OAUTH_REDIRECT_MODE` |
| Anthropic OAuth | `ANTHROPIC_OAUTH_CLIENT_ID`, `ANTHROPIC_OAUTH_CLIENT_SECRET`, authorize/token URL, scopes |
| OpenAI OAuth | `OPENAI_OAUTH_CLIENT_ID`, `OPENAI_OAUTH_CLIENT_SECRET`, authorize/token URL, scopes |
| Provider bootstrap | `ANTHROPIC_API_KEY` |

## Channels

| Channel | Variables |
|---|---|
| Telegram | `TELEGRAM_BOT_TOKEN` |
| GitHub | `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, `GITHUB_APP_PRIVATE_KEY` |
| Slack | `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET`, `SLACK_APP_TOKEN`, `SLACK_BOT_TOKEN` |

## Git SSL

- `GIT_SSL_CAINFO`
- `SSL_CERT_FILE`
- `GIT_SSL_NO_VERIFY`
