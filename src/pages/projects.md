# Projects

Projects define the repository and context for work. Use the tabs across the top to switch between individual project workspaces, or select **All projects** to manage work across projects from one place.

## Skills and Memory Permissions

Right-click the project tab, choose **Project Settings**, and open **Skills & Memory**. The table has separate **Read** and **Write** switches for **Skills** and **Memories**, plus **Allow global skill writes**. Change the switches and save the project settings. Managing these settings requires Maintainer access or higher.

| Control | What It Permits | New Project Default |
|---|---|---|
| Skills → Read | Chat and tasks can read skill instructions to guide their work. | On |
| Skills → Write | Permitted tasks, task-thread follow-ups, and maintenance can create or update skills within their allowed scope. | Off |
| Memories → Read | Chat and tasks can read saved project knowledge. | On |
| Memories → Write | Permitted tasks, task-thread follow-ups, and maintenance can save or update durable project knowledge. | On |
| Allow global skill writes | Allows skill changes shared across projects. Requires **Skills → Write**. | Off |

Turning off **Skills → Write** also clears and disables **Allow global skill writes**. Existing projects retain their previous permissions rather than being reset to new-project defaults.

Ordinary Chat can read permitted skills and memories but cannot write them through these managed knowledge controls, even when Write is enabled. To save a lesson or improve a skill, use a task or task-thread follow-up with the corresponding write permission. Agent permissions and the write scope of the selected tools still apply.

Read and Write are independent. Turning reading off does not erase information already loaded into a conversation. These controls govern reading and maintaining the skill/memory libraries; using a document skill to create an output does not itself require permission to rewrite that skill.

For example, leave skill reads on and skill writes off to use existing skills without letting tasks revise them. Leave memory reads on and writes off when tasks should consult saved knowledge without updating it. Enable global skill writes only when the intended skill change should affect other projects too.

See [Memory](memory.html) and [Skill Curation](skills-and-learning.html) for how knowledge is used and maintained.

If a managed GitHub project's repository is missing locally, use **Re-clone** in project settings to recover it. Local-path projects require an existing valid repository directory.

Projects are the workspace boundary in the OpenVibely UI. The selected project controls what Chat, Tasks, Schedule, Workers, Alerts, Memory, Insights, Channels, and many settings operate on.

## What Users Do

Desktop and wide browser layouts show open projects as tabs. Use the plus button to search for a project or create one, drag tabs to reorder them, and right-click a project tab and choose **Project Settings**. Closing a tab does not delete the project; reopen it from the plus menu. Open tabs, their order, and the last page visited in each project are saved across restarts. Narrow layouts retain a project selector.

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

### Open Project Settings From A Tab

Right-click an individual project tab and choose **Project Settings**. This opens settings for the tab you clicked, even if another project tab is currently selected. With a tab focused, **Shift+F10** or the keyboard context-menu key opens the same menu.

Use Project Settings for repository details, defaults, worker limits, Skills & Memory permissions, and sharing controls, subject to your access level. The **All projects** tab has no Project Settings menu because it is a combined view rather than a separate project.

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

Select **All projects** to work across the projects you have access to from one workspace. The left task list combines tasks into Active, Completed, Backlog, and Scheduled groups and shows the owning project beside each task. Search matches task titles and project names. Open tasks, use their action menus, and move work between categories from this combined list. Opening a task keeps All projects selected while execution and changes stay tied to the task's own project.

The Tasks page, Automations, Analytics, and Insights also support combined project views. Filter to a project when you need a narrower view. The All projects tab can be reordered or closed like other project tabs, then reopened from the plus menu.

All projects has a personal saved Chat conversation for each signed-in user, including separate pending messages, active runs, provider context, and model preferences. Other members do not share this conversation. Older shared All projects history from before this change remains accessible only to organization admins/owners. Select a destination project when creating project-owned work; tasks and automations keep their own project context. A conversation opened within a specific project stays scoped to that project.

## Sharing And Ownership

Right-click an individual project tab, choose **Project Settings**, and open the **Sharing** tab. Organization membership is managed separately in **Settings → Organization**.

Joining the organization does **not** grant access to its projects. A project is accessible to its owner, organization admins/owners, and members explicitly granted a project role. Project selectors and All projects views show only projects you can access.

| Role | What It Allows |
|---|---|
| Viewer | Read project work. |
| Editor | Read, create, and run project work. |
| Maintainer | Editor capabilities plus project settings and access to the project audit. Cannot change member grants or ownership. |
| Project owner or organization admin/owner | Manage project access, transfer ownership, and delete the project, in addition to managing its work. |

### Give A Teammate Access

1. Invite them through **Settings → Organization** and have them join.
2. Open the project's **Project Settings → Sharing** tab as its owner or an organization admin/owner.
3. Select the member and a **Project role**, then click **Save member**. Use the same controls to change a member's role.
4. Repeat for each project they should access. Organization membership alone does not provide a Viewer or Editor baseline.

**Remove access** removes that member's explicit grant. They lose access unless they are the project owner or an organization admin/owner. To hand over a project, select another active member and choose **Transfer ownership**; another active organization member must exist first.

Expand **Recent access and execution audit** to inspect recorded actors, actions, and times. This is a project-level audit; an organization-wide audit view is not currently available.

### When Access Changes

Removing access stops affected live subscriptions and prevents new work from being started or admitted under that user's revoked permissions. It does not itself cancel a run that was already admitted. Removing an organization member also revokes their sessions and removes their individual project grants.

Project roles enforce application access; they do not sandbox agent processes or isolate repository files and secrets on the host. A separate private-project mode is not currently available.

See [Authentication](authentication.html) for invitations, organization roles, and signing in.
