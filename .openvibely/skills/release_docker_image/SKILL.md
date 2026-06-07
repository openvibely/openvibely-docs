---
kind: openvibely.agent_skill
version: 1
skill:
    key: release_docker_image
    name: Release OpenVibely Docs Docker Image
    scope: project
    description: Build and push the official OpenVibely Docs Docker image to Docker Hub as openvibely/openvibely-docs:latest and optionally a version tag.
---

Use this skill when asked to cut a release of the docs Docker image, publish a new Docker image, or push the docs site to Docker Hub.

## Entry Point

The user may provide an optional version tag (e.g. `v1.5.0`). If none is given, release as `latest` only.

## Step 1 — Choose The Release Source

Before running release commands, identify the exact checkout that should be published:

```
pwd
git rev-parse --show-toplevel
git branch --show-current
git status --porcelain
git rev-parse --short HEAD
```

For an official release, prefer the repo root on `main` with a clean tree. If the task is running inside a `.worktrees/...` checkout or any branch other than `main`, do not silently switch checkouts and do not silently bypass the branch check. Tell the user the current checkout/branch and ask whether to release that worktree/branch or wait until the changes are merged to `main`.

Only proceed from a non-`main` branch or task worktree when the user explicitly confirms releasing that exact source, or when the user's request clearly refers to the current unmerged task output. In the final report, state that the image was built from a non-`main` worktree/branch and include the short SHA.

The chosen release source must be clean. If `git status --porcelain` shows uncommitted changes in the checkout being released, stop and tell the user; never publish from a dirty tree.

## Step 2 — Pre-flight Checks

Run all pre-flight checks from the chosen release source before building anything.

**2a. Docs build is clean**
```
npm run build
```
The static build must pass with zero errors. Do not publish an image from a broken build.

**2b. Docker daemon is running**
```
docker info
```
If Docker is not running, stop and tell the user to start Docker Desktop or the Docker daemon.

**2c. Docker Hub credentials are available**

Use a non-interactive config check first so the release workflow does not hang on a credential prompt:
```
python3 - <<'PY'
import json, pathlib
p = pathlib.Path.home() / '.docker' / 'config.json'
if not p.exists():
    print('not-logged-in')
    raise SystemExit
c = json.loads(p.read_text())
auths = c.get('auths') or {}
has_auth = any(k in auths for k in ('https://index.docker.io/v1/', 'index.docker.io', 'docker.io'))
has_store = bool(c.get('credsStore') or c.get('credHelpers'))
print('logged-in' if has_auth or has_store else 'not-logged-in')
PY
```

This check only verifies that Docker has stored credentials or a credential helper. If the later push returns an auth error, stop and tell the user to run `docker login`, then re-trigger the release.

## Step 3 — Build the Image

Build the multi-stage image from the chosen release source root:

```
docker build \
  --platform linux/amd64 \
  -t openvibely/openvibely-docs:latest \
  .
```

If the user provided a version tag (e.g. `v1.5.0`), add it as an additional tag in the same build command:

```
docker build \
  --platform linux/amd64 \
  -t openvibely/openvibely-docs:latest \
  -t openvibely/openvibely-docs:<version> \
  .
```

Do not use `--no-cache` by default — the layer cache is safe to use here since the docs build was verified first.

## Step 4 — Smoke-Check the Image Locally

Run the image briefly to confirm it starts and serves:

```
docker run --rm -d --name ov-docs-check -p 4173:4173 openvibely/openvibely-docs:latest
sleep 2
curl -sf http://localhost:4173/ | head -c 200
docker stop ov-docs-check
```

If `curl` returns a non-zero exit or no output, stop, report the failure output, and do not push. If the container name or port is already in use, stop the stale container or use a different temporary name/port and report what changed.

## Step 5 — Push to Docker Hub

Push `latest`:
```
docker push openvibely/openvibely-docs:latest
```

If a version tag was provided, push it too:
```
docker push openvibely/openvibely-docs:<version>
```

Capture the digest from the push output for the final report.

## Step 6 — Report

Confirm to the user:
- Tags pushed (e.g. `openvibely/openvibely-docs:latest`, `openvibely/openvibely-docs:v1.5.0`)
- The checkout path and branch used for the release
- The git commit SHA the image was built from (`git rev-parse --short HEAD`)
- Whether the release source was `main` or a non-`main` worktree/branch
- Image digest returned by the push (from `docker push` output)

If only `latest` was pushed and no version tag was given, suggest the user consider tagging the commit in git for traceability:
```
git tag v<version> && git push origin v<version>
```
