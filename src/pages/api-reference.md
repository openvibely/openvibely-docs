# API Reference

OpenVibely exposes a REST API and Swagger UI. The app registers Swagger at `/swagger/*`, and the README documents the local Swagger URL as `http://localhost:3001/swagger/index.html` when using `./start.sh`.

## Important API Areas

| Area | Example Routes |
|---|---|
| Projects | `GET /api/projects` |
| Chat | `POST /api/chat/message`, `GET /api/chat/message/:id` |
| Analytics | `/api/analytics/*` |
| Capacity | `/api/capacity/*` |
| Lifecycle | `/api/tasks/:id/lifecycle-executions`, `/api/lifecycle-executions/:id/events` |
| Memory | Project memory setup, lifecycle recall/update, and scheduled consolidation are wired through Memory Curator and task lifecycle infrastructure. |
| Agent skills | `/agents/:id/skills`, `/agents/:id/lifecycle-hooks` |
| Workflows | `/api/workflows/*` |
| Collisions | `/api/collisions/*` |

## Example Chat API Call

```bash
curl -X POST http://localhost:3001/api/chat/message \
  -F "message=Summarize the current task board" \
  -F "project_id=default"
```

## Lifecycle And Skills APIs

Lifecycle APIs expose execution traces for task hooks, including Memory Curator recall/update hooks and Skill Curator learning hooks. Agent skill routes manage on-disk agent-owned skills and lifecycle hook configuration used by the web UI.

## Swagger Source

The repository contains generated Swagger artifacts under `docs/swagger.yaml` and `docs/swagger.json`, and runtime Swagger UI is served from the app.
