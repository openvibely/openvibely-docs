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
| `OPENVIBELY_CODEX_REASONING_EFFORT` | Model-dependent fallback when no supported Codex effort is configured. GPT-6.1 Sol/Terra default to `low`; see [Model Providers](model-providers.html) for supported effort levels and defaults. |

## Auth

| Variable | Default |
|---|---|
| `AUTH_ENABLED` | inferred from username/password when unset |
| `AUTH_USERNAME` | empty |
| `AUTH_PASSWORD` | empty |
| `AUTH_SESSION_SECRET` | empty |
| `AUTH_SESSION_TTL` | `24h` |
| `AUTH_TRUSTED_PROXIES` | empty; forwarded client addresses are ignored |

`AUTH_USERNAME` and `AUTH_PASSWORD` seed the local owner once, rather than resetting its credentials at each startup. See [Authentication](authentication.html) for organization accounts and trusted proxy configuration.

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
| Discord | `DISCORD_BOT_TOKEN` |
| GitHub | `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, `GITHUB_APP_PRIVATE_KEY` |
| Slack | `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET`, `SLACK_APP_TOKEN`, `SLACK_BOT_TOKEN` |
| Email | Configure provider presets or custom IMAP/SMTP settings in the Channels UI. |

## Git SSL

- `GIT_SSL_CAINFO`
- `SSL_CERT_FILE`
- `GIT_SSL_NO_VERIFY`

## Browser Startup

The server opens its local Chat page when ready. Set `OPENVIBELY_NO_BROWSER=true` for remote or headless services, or to opt out locally. Docker images and update relaunches disable automatic browser opening; desktop startup is unchanged.

## Project Computers

Project and task opt-in are saved settings, not environment variables. Local computer use requires a working `docker` CLI and daemon accessible to the OpenVibely process.

| Variable | Purpose | Default behavior |
|---|---|---|
| `OPENVIBELY_COMPUTER_IMAGE` | Prebuilt computer-runtime image reference; prefer an immutable tag or digest. | Unset: use `openvibely-computer:<source-hash>` and build from embedded sources if missing locally. Set: skip the embedded build and run that image. Reusing a mutable tag does not guarantee an update is detected. |
| `OPENVIBELY_COMPUTER_CONTROL_URL` | Endpoint for an externally supplied hosted computer control service. | Unset: local Docker provisioner unless hosted instance mode is selected. Setting it selects the hosted client, not local Docker. |
| `OPENVIBELY_HOSTED_INSTANCE_ID` | Hosted instance marker used when choosing the computer provisioner. | A nonempty value selects the hosted client, which requires a working control URL. |
| `OPENVIBELY_HOSTED_AGENT_TOKEN` | Authentication token for the hosted computer control service. | Supplied by the hosted deployment; not required for local Docker use. |

The hosted client is an integration hook; this repository does not provide its external control-plane server. Setting a URL alone does not provision that service. Container-internal variables such as `OPENVIBELY_COMPUTER_TOKEN` and task user IDs are managed by the provisioner/runtime, not user configuration.

See [project setup](project-setup-user-guide.md#project-computers) for engine requirements and [task controls](tasks-user-guide.md#using-a-task-computer) for tool targets and persistence.
