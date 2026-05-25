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
- Check extraction or consolidation run status for `error`.
- Remember memory writes to `.openvibely/memory` inside the selected repo.

## Tasks Stay Queued

- Check global worker capacity.
- Check project `max_workers`.
- Check model `max_workers` and `worker_timeout`.
- Confirm the selected model credentials are valid.
