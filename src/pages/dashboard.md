# Workspace Overview

The workspace brings project tabs, an app rail, a task list, and the current conversation or page into one window. You can manage work within one project or across projects without repeatedly returning to the Tasks board.

Opening the app root takes you to Chat. There is no separate Dashboard page in the current navigation; this guide retains the old documentation URL for saved links.

## Find Your Way Around

On wide desktop and browser layouts, the workspace has four main areas:

| Area | What It Controls |
|---|---|
| Project tabs across the top | Choose one project's workspace or **All projects** for a combined view. |
| App rail at the far left | Switch between Chat, Tasks, Automations, Schedule, Alerts, Analytics, Grades, Pulse, and Reflection. Settings is at the bottom. Hover an icon to see its label. |
| Task list beside the rail | Browse and manage tasks in vertically stacked Active, Completed, Backlog, and Scheduled groups. |
| Main work area | Read Chat or a task thread, review Changes, or use the page selected from the rail. |

The app rail and task list have different jobs: the rail selects a page; the task list selects and manages individual work. On narrow layouts, use the project selector and navigation controls available for that window size.

## One Project Or All Projects

Select a project tab to focus on its repository and work. Select **All projects** to manage work across projects from one place. The combined task list labels each task with its owning project, and search can match task titles or project names. Opening a task from that list keeps the All projects workspace selected while the task continues to use its own project's context.

Visible project tabs act as pinned shortcuts for fast access. Use the plus menu beside the tabs to find and open an existing project, choose **Create New Project**, or reopen All projects. Drag tabs to reorder them; closing a tab removes it from the open workspace without deleting the project. Open tabs, their order, and each project's last visited page are remembered. See [Projects](projects.html) for project settings and scope.

## Work From The Vertical Task List

The task list works as a vertical Kanban alongside your current work. Click a category heading to expand or collapse its zone, then select a task to open its thread. **Show more** makes that category's list independently scrollable; **Show less** restores its compact preview. Expansion and browsing choices are remembered per project scope.

Use search to reveal matching tasks across zones, or right-click a row for its actions. Drag a task into another zone or onto the floating **Move to** menu to change category; hover near a scrolling zone's edge during a drag to browse farther. Press **Escape** to cancel a drag. Available moves depend on task state, and Scheduled requires an existing schedule. See [Task List: Vertical Kanban](tasks.html#task-list-vertical-kanban) and [Sidebar Task Actions](tasks.html#sidebar-task-actions) for scrolling, search, and move behavior.

You can use this list as your everyday task-management surface. Open the **Tasks** page from the rail when you want columns side by side, board filters, or batch selection. Both views operate on the same tasks; switching views does not create a separate queue.

Resize or collapse the task list to make room for the main work area. **Settings → Appearance** offers task-list and project-tab layout choices. See [Tasks](tasks.html) for actions, scheduling behavior, and review controls.

## Create A Task From The Left Task List

1. Select an individual project tab or **All projects**.
2. Click the **+** labeled **New task** at the top of the left task list, next to the magnifying-glass search button. This opens a new task in the main work area without visiting the Tasks board.
3. Write your request in the composer and add any attachments. Open the **Details** panel using the panel button at the upper right to adjust the task's properties.
4. In All projects, choose the owning **Project** in Details. If you send without choosing one, the app opens the project picker.
5. Choose **Active** to start work or **Backlog** to save it for later, then send the first message to create the task. You can also configure a schedule before sending.

The **New task** plus above the task list creates work. The separate plus beside the **project tabs** opens the project menu. The magnifying glass searches tasks, and the panel toggle above the list collapses or expands it. See [Creating A Task](tasks.html#creating-a-task) for task properties.

## What Is In The Left Rail?

The narrow strip at the far left is the app rail. These are its destinations in top-to-bottom order; hover an icon to read its label. Project-scoped pages follow the selected project tab or All projects view where supported.

| Icon | Destination | Use It For |
|---|---|---|
| Speech bubble | [Chat](chat.html) | Ask questions, plan changes, and orchestrate work from a conversation. |
| Clipboard | [Tasks](tasks.html) | Open the side-by-side task board with filters and batch actions. |
| Lightning bolt | [Automations](automations.html) | Build and monitor graphs connecting tasks, schedules, approvals, and outcomes. |
| Calendar | [Schedule](schedule.html) | Manage one-time and recurring task runs. |
| Bell | [Alerts](alerts.html) | Review notifications, failures, human approval requests, and available updates. |
| Bar chart | [Analytics](analytics.html) | Inspect outcomes, performance, token usage, costs, and provider limits. |
| Document with chart | [Grades](insights.html) | Inspect project health, proactive insights, and idea grading. |
| Checklist | [Pulse](insights.html) | See running, waiting, and upcoming work and pulse summaries. |
| History arrow / clock | [Reflection](insights.html) | Review historical activity and generated reflections. |
| Gear, pinned at the bottom | Settings | Configure Appearance, Models, Agents, Channels, Workers, and other preferences. |

Workspace and Insights are navigation group names; in the compact rail, use the icons and their labels to find those destinations. The task rows and category headings sit in the separate task list beside the rail.

## When The Left Panel Changes

The panel beside the rail adapts to what you are doing:

| Current View | Left Panel | Return To Work |
|---|---|---|
| Chat or a task thread | Task list grouped by category. | Select another task or use the rail. |
| A task's **Changes** view | Changed-file explorer for navigating the diff. | Choose **Back** in the explorer to return to the task thread and task list. |
| **Settings** | Settings navigation instead of task rows. | Choose **Back** in the settings navigation to return to your workspace. |

The task list has not been deleted when the panel changes. Its previous collapsed state is restored when you leave these views. The task's [right-hand panel](task-threads-followups.html#the-right-hand-task-panel) is separate: it contains Details, Schedule, Chaining, Files, and Lifecycle tabs. Open it with the panel button at the upper right of the task header.

## Projects And Settings

[Projects](projects.html) explains the context shared by these pages; it is not a separate app-rail destination. On wide layouts, use the plus button beside the project tabs to find or create a project, and right-click an individual project tab to choose **Project Settings**. All projects provides a combined view where supported; new project-owned work still needs a destination project.

Open the **Settings** gear at the bottom of the app rail. Its left navigation contains:

| Destination | Use It For |
|---|---|
| Appearance → Themes, Layout, Chat | Customize colors, task-list and project-tab layout, and conversation appearance. |
| Shortcuts | Search keyboard shortcuts and filter them by category. |
| [Models](models.html) | Configure model access and defaults. |
| [Agents](agents.html) | Configure reusable execution profiles. |
| [Skills](skills-and-learning.html) | Browse and manage skills in scope. |
| [Channels](channels.html) | Configure external integrations and messaging. |
| [Personality](personalities.html) | Choose interaction style and behavior preferences. |
| Organization | Open organization controls. |
| [Workers](workers.html) | Set execution capacity. |

Right-click an individual project tab and choose **Project Settings** to configure that project. All projects is a combined view, so it does not have its own repository settings.

## Insights

The **Insights** destinations in the rail are **Grades**, **Pulse**, and **Reflection**. Use these for project health, upcoming work, and historical activity. See [Insights](insights.html) for details.
