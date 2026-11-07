# OpenVibely Docs

The only recursive self-improvement command center for software teams.

OpenVibely turns one Chat into the control plane for your entire AI development workflow. Describe a goal once, then coordinate parallel task sessions, reusable Automation Graphs, scheduled work, live agent execution, and reviewable changes from one place.

Agents do the work. You stay in command. Inspect any thread, review any diff, steer any task, and keep the whole plan moving from the original conversation.

Goal loops drive unfinished work forward. Main models use skills and preserve project memories with your permission. Scheduled maintenance and optional skill learning keep that knowledge useful for future work.

Self-hosted, single binary, SQLite by default, and built for teams that want speed without giving up control, auditability, or ownership.

## Start Fast

Choose the native desktop app or a server with a browser UI. The recommended command is selected for your system.

[[install-chooser]]

The installer verifies the release and selects the correct architecture-specific artifact. See [Installation](installation.html) for installed locations, pinned versions, and source builds.

The first useful path is UI-first: add a model, create or select a project, then use Chat or Tasks to start work.

| What You Want To Do | Start Here |
|---|---|
| Understand the app | [Features Overview](features-overview.html) |
| Install the desktop app or server | [Installation](installation.html) |
| Use the UI for the first task | [Quickstart](quickstart.html) |
| Set up a durable instance | [First-Time Setup](first-time-setup.html) |

## The App Mental Model

OpenVibely lets you work in an individual project tab or manage work across projects from the All projects tab. On wide layouts, the app rail selects pages, the left task list provides a vertical Kanban, and the main area holds your conversation, task thread, or selected page. Narrow layouts use a project selector.

| App Area | What Users Do There |
|---|---|
| Project tabs / selector | Focus on one project or choose All projects to manage combined work. |
| App rail | Use the far-left icons to switch pages or open Settings. |
| Left task list | Manage Active, Completed, Backlog, and Scheduled work as a vertical Kanban beside the current page. |
| Chat | Ask questions, plan changes, attach context, and orchestrate work conversationally. |
| Tasks page | Use side-by-side board columns, filters, and batch actions when you want a broader task view. |
| Automations | Build reusable visual workflows from schedules, tasks, agents, approvals, GitHub stages, and outcomes, then monitor their live state. |
| Schedule | Put project work on a calendar so tasks run once or repeat. |
| Alerts | Review notifications, failures, approval requests, and update availability. |
| Analytics | Inspect outcomes, performance, token usage, costs, and provider limits. |
| Insights | Use Grades, Pulse, and Reflection to understand health, upcoming work, and history. |
| Settings | Configure appearance, models, agents, workers, channels, and other preferences. |

## What OpenVibely Provides

| Capability | Product Outcome |
|---|---|
| Project workspaces | Keep repository context, model defaults, worker limits, schedules, memory, and integrations tied to a real codebase. |
| Chat-first planning | Start from a conversation when the work is unclear, then turn the plan into executable tasks. |
| Task execution | Manage work from the vertical task list or board, inspect threads, review changed files, and decide what ships. |
| Reusable agents | Capture system prompts, tools, skills, plugins, permissions, routing hints, and lifecycle behavior as reusable worker profiles. |
| Memory curation | Autonomously create, recall, update, and consolidate durable project memory so repeated context does not have to be re-explained. |
| Skill curation | OpenVibely learns from completed work and autonomously improves reusable standalone or agent-owned skills. |
| Reviewable changes | Use Git worktrees and GitHub integration so AI output becomes visible diffs and pull requests rather than hidden edits. |
| Automation Graphs | Start from maintained templates or a custom graph, connect supported workflow nodes, run work manually or on a schedule, and keep human approval boundaries visible. |
| Documents and images | Create or revise documents with Paperworks skills, generate images in supported conversations, and download published outputs. See [Documents With Paperworks](documents.html). |
| Goal-driven continuation | Give a task a completion condition and let it continue across turns, with pause and resume controls. See [Task Goals](task-goals.html). |
| Team access | Invite members and manage project access levels and ownership. See [Projects](projects.html#sharing-and-ownership). |
| External channels | Create, monitor, and report work through Slack, Telegram, Discord, Email, GitHub, outbound targets, and inbound webhooks. |

## How The Docs Are Organized

The docs start with a high-level user guide, then go deeper into the subfeatures that matter during real work: central Chat orchestration, prompt queueing and steering, task diffs, review comments, worktrees, schedules, alerts, memory, models, agents, channels, and operations.

| Section | Use It For |
|---|---|
| Get Started | Product overview, feature hub, install, UI quickstart, first setup, and learning paths. |
| Workspace | Workspace orientation, Projects, Chat, Tasks, Automations, Schedule, Alerts, and Analytics. |
| Agents | Reusable worker profiles, Memory, Skill Curation, Personalities, and Multi-Agent Workflows. |
| Capabilities | Task lifecycle, prompt queue and steering, task diffs, review workflows, worktrees, attachments, scheduled tasks, task chaining, and insights. |
| Channels | Slack, Telegram, Discord, Email, GitHub, outbound messaging, and webhooks as alternate front doors and reporting paths for project work. |
| Models | Model configs, provider setup, defaults, and worker capacity. |
| Platforms | Deployment, updates, authentication, configuration, and environment setup. |
| Gateway & Ops | API reference, routes, troubleshooting, glossary, and machine-readable docs. |

## Source Verification

The docs were checked against OpenVibely source code, including domain models, configuration loading, UI rendering, source-wired product surfaces, and existing guides. The app rail provides daily-work and Insights destinations, with Settings at the bottom; project tabs and the separate task list organize the working context. Documentation groups also include conceptual guides such as Projects; they are not all app menu entries.
