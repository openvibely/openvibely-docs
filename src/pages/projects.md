# Projects

Projects are the workspace boundary in the OpenVibely UI. The selected project controls what Chat, Tasks, Schedule, Workers, Alerts, Memory, Insights, Channels, and many settings operate on.

## What Users Do

Use the project selector in the sidebar to switch workspaces. Use the plus button to create a new project, and the settings button to edit the current project.

| UI Action | Product Effect |
|---|---|
| Select a project | Updates project-scoped pages such as Chat, Tasks, Schedule, Models, Agents, Workers, Alerts, Insights, and Channels. |
| Create a project | Adds a workspace with a name, description, repository source, optional default model, and optional worker limit. |
| Edit project settings | Changes repository details, defaults, and project-level controls. |
| Switch project while editing | The app warns if modals with unsaved changes are open. |

## Repository Sources

OpenVibely supports local path projects and repository URL projects.

| Source | Use It When |
|---|---|
| Local repository path | The OpenVibely process can access the checkout directly for worktrees, diffs, and memory. |
| Repository URL | You want OpenVibely to work from a remote Git source such as GitHub. |

Local path access is explicit because it lets the server read local filesystem paths. Desktop mode enables local paths by default. Server mode requires `OPENVIBELY_ENABLE_LOCAL_REPO_PATH`.

## Project-Scoped Features

| Feature | How The Project Matters |
|---|---|
| Chat | Conversations run with the selected project context. |
| Tasks | Board categories, task execution, review, and schedules belong to the project. |
| Memory | Repository-local managed memory is stored under `.openvibely/memories` when memory is enabled. |
| Skills | Project-scoped skills and agent-owned skills can override global behavior for this repository. |
| Workers | Project worker limits prevent one workspace from consuming all execution capacity. |
| Channels | Channel-origin Chat maintains active project context. Outbound Message Targets and explicit-unsaved-target policy belong to the selected project, while inbound channel allowlists remain system-level. |
| Insights | Grades, Pulse, Reflection, and Analytics summarize project activity. |

## First Project Checklist

- Give the project a clear name that matches the repository or product area.
- Add a repository path or URL before expecting worktree diffs and review flows.
- Choose a default model if most tasks should use the same provider.
- Let project-scoped memory and skills capture repository conventions as work completes.
- Set a worker limit if the project should not consume unlimited execution slots.
- Add channels only after the project is stable enough for team use.
