# Projects

Projects define the repository and context for work. Use the tabs across the top to switch between individual project workspaces, or select **All projects** to manage work across projects from one place.

## Skills and Memory Permissions

In project settings, **Skills & Memory** controls skill and memory reads and writes separately. New projects allow skill reads and memory reads/writes, while skill writes are off. **Allow global skill writes** is separate and requires skill writes. Existing projects retain their previous permissions.

If a managed GitHub project's repository is missing locally, use **Re-clone** in project settings to recover it. Local-path projects require an existing valid repository directory.

Projects are the workspace boundary in the OpenVibely UI. The selected project controls what Chat, Tasks, Schedule, Workers, Alerts, Memory, Insights, Channels, and many settings operate on.

## What Users Do

Desktop and wide browser layouts show open projects as tabs. Use the plus button to search for a project or create one, drag tabs to reorder them, and use a tab's context menu to open project settings. Closing a tab does not delete the project; reopen it from the plus menu. Open tabs, their order, and the last page visited in each project are saved across restarts. Narrow layouts retain a project selector.

Use Command/Ctrl+Shift+Left or Right to switch project tabs and Command/Ctrl+Shift+K to open the project menu.

| UI Action | Product Effect |
|---|---|
| Select a project | Updates project-scoped pages such as Chat, Tasks, Schedule, Models, Agents, Workers, Alerts, Insights, and Channels. |
| Create a project | Adds a workspace with a name, description, repository source, optional default model, and optional worker limit. |
| Edit project settings | Changes repository details, defaults, and project-level controls. |
| Switch project while editing | The app warns if modals with unsaved changes are open. |

## Pin Projects As Tabs

Think of the visible project tabs as pinned shortcuts for fast access, not the full project catalog. Keep the projects you use often open, and close others without deleting their work.

### Add Or Reopen An Existing Project

1. Click the **+** beside the project tabs to open the project menu.
2. Search for the project and select it. The app opens it as a tab, or switches to its existing tab if it is already open.
3. Select **All projects** from the same menu when you want the combined workspace.

This is the project-tab plus, separate from **+ New task** above the task list.

### Create A Project From The Tab Menu

Open the project-tab **+** menu and choose **Create New Project**. Enter the project name and repository source, configure any defaults you need, and submit the project form. The new project becomes available in the workspace. See [Repository Sources](#repository-sources) for local paths and repository URLs.

### Reorder And Close Tabs

Drag a project tab left or right to change its position. Click its **×** to close it. Closing the selected tab switches to a neighboring tab; the last remaining tab cannot be closed. All projects can also be reordered or closed when another tab remains.

Closing a tab only removes that shortcut. It does not delete the project or cancel its tasks or schedules. Use the **+** menu to reopen it later. Open tabs, their order, and each project's last visited page are saved across restarts.

## Repository Sources

OpenVibely supports local path projects and repository URL projects.

| Source | Use It When |
|---|---|
| Local repository path | The OpenVibely process can access the checkout directly for worktrees, diffs, and memory. |
| Repository URL | You want OpenVibely to work from a remote Git source such as GitHub. |

Local path access is explicit because it lets the server read local filesystem paths. Desktop mode enables local paths by default. Server mode requires `OPENVIBELY_ENABLE_LOCAL_REPO_PATH`.

In the desktop app, browsing for a local repository opens the operating system's native folder picker.

Project Settings reports the current repository-path health as `Healthy`, `Missing`, or `Unknown`. A missing path means OpenVibely cannot find the configured checkout; an unknown state means it cannot confirm the path from the current runtime. Correct or browse to an accessible repository path before expecting worktrees, diffs, or repository-backed memory to work.

## Project-Scoped Features

| Feature | How The Project Matters |
|---|---|
| Chat | Conversations run with the selected project context. |
| Tasks | Board categories, task execution, review, and schedules belong to the project. |
| Memory | Repository-local managed memory is stored under `.openvibely/memories` when memory is enabled. |
| Skills | Project-scoped skills and agent-owned skills can override global behavior for this repository. |
| Workers | A blank or `0` project limit inherits global capacity; a positive limit sets a project-specific cap. |
| Agents | The selected project's Agent list includes global agents and its own project-scoped agents, not project-scoped agents from other projects. |
| Channels | Channel-origin Chat maintains active project context. Slack, Telegram, Discord, and Email inbound allowlists are system-level. Outbound Message Targets and explicit-unsaved-target policy belong to the selected project; X mention authorization is also project-scoped. |
| Insights | Grades, Pulse, and Reflection summarize project health, upcoming work, and history. |
| Analytics | Summarizes project outcomes, performance, and usage from the Workspace section. |

## First Project Checklist

- Give the project a clear name that matches the repository or product area.
- Add a repository path or URL before expecting worktree diffs and review flows.
- Choose a default model if most tasks should use the same provider.
- Let project-scoped memory and skills capture repository conventions as work completes.
- Set a worker limit if the project should not consume unlimited execution slots.
- Add channels only after the project is stable enough for team use.

## All Projects

Select **All projects** to work across projects from one workspace. The left task list combines tasks into Active, Completed, Backlog, and Scheduled groups and shows the owning project beside each task. Search matches task titles and project names. Open tasks, use their action menus, and move work between categories from this combined list. Opening a task keeps All projects selected while execution and changes stay tied to the task's own project.

The Tasks page, Automations, Analytics, and Insights also support combined project views. Filter to a project when you need a narrower view. The All projects tab can be reordered or closed like other project tabs, then reopened from the plus menu.

All projects has its own saved Chat conversation. Select a destination project when creating project-owned work; tasks and automations keep their own project context. A conversation opened within a specific project stays scoped to that project.

## Sharing And Ownership

Open an individual project tab's context menu, open project settings, and find **Sharing and ownership**. Organization membership is managed separately in **Settings → Organization**.

All organization members can access projects; private projects are not currently available. Project access controls determine what a member can do:

| Control | Purpose |
|---|---|
| Organization access | Set the project's baseline access to Viewer or Editor. |
| Additional member grants | Grant an individual Viewer, Editor, or Maintainer access. Removing a grant leaves the organization baseline in effect. |
| Maintainer | Allows management of project settings. |
| Owner and organization admins/owners | Can change sharing and membership, transfer ownership, or delete the project. |
| Recent access and execution audit | Inspect recorded actors, actions, and times. |

Ownership can be transferred to another active organization member. See [Authentication](authentication.html) for inviting members and signing in.
