# Settings

Click the **gear at the bottom of the app rail** to open Settings. The left task list becomes settings navigation. Choose a destination there, or use **Back** to return to the workspace. Expand **Appearance** to select Themes, Layout, or Chat.

## Settings Destinations

| Destination | What You Can Configure | Guide |
|---|---|---|
| Appearance | Theme colors, workspace layout, and conversation presentation. | See the controls below. |
| Shortcuts | Search keyboard actions and filter by category; check the focus requirements for each shortcut. | [Keyboard Shortcuts](keyboard-shortcuts.html) |
| Models | Connect API keys, supported subscription accounts, or local inference; configure models, defaults, and generation settings. | [Models](models.html) |
| Agents | Configure reusable execution profiles, plugins, marketplace sources, skills, lifecycle hooks, and advanced settings. | [Agents](agents.html) |
| Skills | Browse and manage reusable instructions, including bundled document skills and optional learning behavior. | [Skill Curation](skills-and-learning.html) |
| Channels | Connect external services, authorize inbound users, and configure outbound destinations. | [Channels](channels.html) |
| Personality | Select an interaction style or create and manage custom personalities. | [Personalities](personalities.html) |
| Organization | Invite people, manage organization roles and membership, and revoke invitations. Joining does not automatically grant project access. | [Authentication](authentication.html#organization-members) |
| Workers | Configure execution capacity and understand global, project, and model limits. | [Worker Capacity & Dispatch](workers.html) |

Available actions depend on your organization and project permissions. Opening Settings does not grant permission to administer shared resources. Appearance preferences belong to the signed-in user; model connections and other shared configuration have their own scope and permissions.

## Appearance: Themes

Open **Settings → Appearance → Themes**, search the theme catalog, and select a palette. Theme previews show how the colors fit together. The chosen theme applies across the workspace, including conversations, boards, schedules, and code review.

## Appearance: Layout

| Control | Choices And Purpose |
|---|---|
| Surfaces | **Default** uses the theme's standard backgrounds. **Layered** separates the outer frame, page, and cards with distinct shades. |
| Task list | **Floating** leaves a gap between the list and main page. **Unified** joins them into one continuous surface. |
| Project tabs | **Detached** keeps tabs separate from the page. **Attached** visually connects the active tab to the page. |
| Task board columns | **Faint tint**, **Filled**, **Inset cards**, or **Tint + header strip** changes how the board's drop zones and cards are distinguished. |

Use the visual previews to compare options. These change presentation; closing tabs, moving tasks, and changing task categories are separate workspace actions.

## Appearance: Chat

These controls apply to Chat and task threads.

| Control | Choices And Purpose |
|---|---|
| Tool output | **Full** shows tool calls and results directly. **Compact** folds consecutive tool activity and thinking into expandable groups while keeping assistant text visible. |
| Width | **Full width** uses the available conversation space. **Focused** centers a narrower column for easier reading. |
| Assistant bubbles | **Off** places assistant messages directly on the page. **On** gives them filled bubble backgrounds. |
| Bubble and composer color step | **Off** uses the card background shade. **On** lifts bubbles and the composer one shade above cards. |

Compact tool output is a display preference: expand a group to inspect its contents.

## App Settings Versus Project Settings

Use the gear for the destinations above. For repository details, project defaults, project worker limits, Skills & Memory permissions, or project sharing, **right-click an individual project tab → Project Settings**. All projects has no project-settings modal of its own.

See [Projects](projects.html), [Skills and Memory Permissions](projects.html#skills-and-memory-permissions), and [Sharing And Ownership](projects.html#sharing-and-ownership) for those controls. Deployment environment variables are documented separately in [Configuration](configuration.html).
