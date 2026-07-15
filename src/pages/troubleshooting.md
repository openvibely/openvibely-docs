# Troubleshooting

This page collects common operational issues that follow from the source-verified configuration and workflow model.

## Server Does Not Start

- Confirm Go `1.26.3+` is installed.
- If auth is enabled, confirm `AUTH_USERNAME`, `AUTH_PASSWORD`, and `AUTH_SESSION_SECRET` are all set.
- Check `logs/openvibely.log` when using `./start.sh`.
- Ensure the selected `PORT` is available.

## OAuth Returns To Localhost On A VPS

- Set `APP_BASE_URL` to your public origin, for example `https://app.example.com`.
- Use `OAUTH_REDIRECT_MODE=auto` or `hosted`.
- Ensure provider callback URLs match the app callback routes.

## Local Repository Paths Are Missing

- In server mode, set `OPENVIBELY_ENABLE_LOCAL_REPO_PATH=true`.
- In desktop mode, local paths are enabled by default.

## Memory Does Not Write

- Confirm the project has a local `repo_path`.
- Confirm memory is enabled for the project.
- Check Memory Curator lifecycle activity or `System: Memory Consolidation` run status for `error`.
- Remember memory writes to `.openvibely/memories` inside the selected repo.

## Tasks Stay Queued

- Check global worker capacity.
- Check project `max_workers`.
- Check model `max_workers` and `worker_timeout`.
- Confirm the selected model credentials are valid.
- For swarms, remember the parent's `Max workers` limits planned slices but does not override execution capacity.

## Worktree Setup Fails

- Open the task error and project Alert; OpenVibely fails closed instead of modifying the main checkout.
- Confirm the repository exists, its merge target is valid, and Git can create a worktree.
- Create an initial commit before running repository-changing tasks in a new empty repository.

## A Channel Ignores Messages

- Add the sender to the system-level Authorized Users or Senders list; Slack, Telegram, Discord, and Email are deny-by-default.
- For Discord server channels and threads, mention the bot and verify Message Content Intent and channel permissions.
- For Email, confirm the message is unread, not self-sent or automated, and IMAP polling is connected.
- Verify the channel's active project when work appears in an unexpected workspace.

## Outbound Messages Fail

- Confirm the platform channel is configured and the selected project has a matching saved or Home target.
- Test the target from `Channels` -> `Outbound Message Targets`.
- Enable `Allow explicit unsaved targets` only when the prompt intentionally uses an unsaved destination.
- Confirm Chat is in `Orchestrate` mode and the selected provider/agent supports `send_message`.

## Mixture Of Models Is Slow Or Expensive

- Reduce the number of reference models.
- Lower Reference Timeout or use faster reference configs.
- Check provider rate limits and underlying model credentials.
- Remember every turn calls all references plus the aggregator.

## GitHub SDLC Skips Work

- Assign the issue to the PAT owner or a configured GitHub Authorized User.
- Remove stale prompt requirements for an existing PR or mandatory `approved` label.
- Keep recurring inbox/finder tasks schedule-driven; put persisted goals on implementation tasks instead.
- Confirm the implementation task has a worktree branch before publishing its pull request.
