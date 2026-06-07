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

## Step 1 — Pre-flight Checks

Confirm the following before building anything:

**1a. On the main branch with a clean tree**
```
git -C <repo> branch --show-current
git -C <repo> status --porcelain
```
The branch must be `main`. If there are uncommitted changes, stop and tell the user — never release from a dirty tree.

**1b. Docs build is clean**
```
npm run build
```
The static build must pass with zero errors. Do not publish an image from a broken build.

**1c. Docker daemon is running**
```
docker info
```
If Docker is not running, stop and tell the user to start Docker Desktop or the Docker daemon.

**1d. Logged in to Docker Hub**
```
docker login
```
Must be authenticated as a user with push access to `openvibely/openvibely-docs`. If not logged in, prompt the user to run `docker login` and re-trigger the skill.

## Step 2 — Build the Image

Build the multi-stage image from the repo root:

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

Do not use `--no-cache` by default — the layer cache is safe to use here since Step 1 verified the build is clean.

## Step 3 — Smoke-Check the Image Locally

Run the image briefly to confirm it starts and serves:

```
docker run --rm -d --name ov-docs-check -p 4173:4173 openvibely/openvibely-docs:latest
sleep 2
curl -sf http://localhost:4173/ | head -c 200
docker stop ov-docs-check
```

If `curl` returns a non-zero exit or no output, stop, report the failure output, and do not push.

## Step 4 — Push to Docker Hub

Push `latest`:
```
docker push openvibely/openvibely-docs:latest
```

If a version tag was provided, push it too:
```
docker push openvibely/openvibely-docs:<version>
```

## Step 5 — Report

Confirm to the user:
- Tags pushed (e.g. `openvibely/openvibely-docs:latest`, `openvibely/openvibely-docs:v1.5.0`)
- The git commit SHA the image was built from (`git rev-parse --short HEAD`)
- Image digest returned by the push (from `docker push` output)

If only `latest` was pushed and no version tag was given, suggest the user consider tagging the commit in git for traceability:
```
git tag v<version> && git push origin v<version>
```
