# Features Overview

OpenVibely is a native desktop app and browser-based workbench for AI-assisted software work that gets more useful the more project work flows through it. The UI is the primary surface: it gives teams a place to configure models and agents, select a project, create work, monitor execution, review changes, automate recurring tasks, and let OpenVibely build durable project memory from completed work.

## Product At A Glance

| Area | What Users Experience | Where To Learn More |
|---|---|---|
| Workspace | Project tabs, an app rail, and a vertical task list surround the current conversation or page. | [Workspace Overview](dashboard.html) |
| Analytics | Task outcomes, performance comparisons, token usage, costs, and provider limits. | [Analytics](analytics.html) |
| Projects | Individual project tabs focus repository work; All projects combines work for management from one place. | [Projects](projects.html) |
| Chat | A project-aware conversation for exploration, attachments, `Plan` mode, and `Orchestrate` mode. Chat can centrally create, run, and coordinate multiple tasks or swarms from one window. | [Chat](chat.html), [Runtime Capabilities](runtime-capabilities.html) |
| Tasks | A vertical task list for everyday management, plus a board with columns, filters, and batch actions. Task threads provide execution, follow-ups, diffs, review, and swarm details. | [Tasks](tasks.html), [Swarm Orchestration](swarm-orchestration.html), [Task Threads & Follow-Ups](task-threads-followups.html), [Task Diffs & Review](task-diffs-review.html) |
| Automations | Project-scoped visual graphs that connect schedules, tasks, Agents, Native approvals, supported GitHub actions, and outcomes through explicit handoffs. | [Automations](automations.html) |
| Scheduling | Time-based automation for one-time, recurring, and system maintenance runs. | [Schedule](schedule.html), [Scheduled Task Runs](scheduled-tasks.html) |
| Alerts | Project-scoped failure, follow-up, and attention notices with unread state. | [Alerts](alerts.html) |
| Models | UI-managed access to Anthropic, OpenAI, Ollama, OpenAI-compatible providers, and Mixture of Models virtual configs with defaults, auth options, tool policy, and capacity controls. | [Models](models.html), [Mixture of Models](mixture-of-models.html), [Model Selection & Tool Policy](model-selection-tool-policy.html), [Model Providers](model-providers.html), [Worker Capacity & Dispatch](workers.html) |
| Agents | Reusable AI worker profiles with prompts, skills, plugins, MCP servers, permissions, routing, and lifecycle hooks. | [Agents](agents.html), [Lifecycle Hooks](lifecycle-hooks.html), [Skill Curation](skills-and-learning.html) |
| Memory | Main models select and update project memory; Memory Curator consolidates it through scheduled maintenance. | [Memory](memory.html), [Lifecycle Hooks](lifecycle-hooks.html) |
| Configuration | Runtime, auth, integration, deployment, update, and environment controls for self-hosted operation. | [Configuration](configuration.html), [Environment Variables](environment.html), [Deployment Modes](deployment.html), [Updates](updates.html) |
| Review workflows | Worktree-backed changes, task output, comments, merge decisions, cleanup, API-published pull requests, and authorized PR feedback. | [Review Workflows](review-workflows.html), [Git Worktrees & Merge Safety](git-worktrees.html), [GitHub](github.html) |
| Channels | Slack, Telegram, Discord, Email, GitHub, webhook, and outbound-message entry points for creating, tracking, and reporting work outside the web UI. | [Channels Overview](channels.html), [Outbound Messaging](outbound-messaging.html), [Discord](discord.html), [Email](email.html), [Webhook Triggers](webhooks.html) |

## The Primary Workflow

| Step | What Happens In The UI |
|---|---|
| Configure | Add at least one model, optionally create agents, and set worker limits if needed. |
| Select a project | Choose a project tab for focused work or All projects for combined management; narrow layouts use a project selector. |
| Start work | Use Chat when the work needs discussion, or create a task when you already know the unit of work. |
| Monitor | Watch status in the left task list while reading a thread; open the board when you want columns or batch actions. |
| Review | Inspect task threads, attachments, changed files, review comments, worktree state, and pull request options before shipping. |
| Automate | Use visual Automation graphs for supported multi-step handoffs, or schedules when one task only needs time-based execution. |

## What Makes It Different

- It is UI-first: the app is built around project tabs, an app rail, a vertical task list, task boards, calendars, chat, alerts, and review screens.
- It is chat-orchestrated: one project Chat page can plan work, create multiple parallel tasks, steer or queue follow-up prompts, and keep coordination centralized.
- It is project-first: tasks, chat, memory, schedules, workers, models, agents, and channels are scoped around the selected project.
- It is review-first: AI work becomes visible task state, event streams, logs, diffs, comments, and GitHub-ready changes.
- It keeps work continuous: task threads, follow-ups, queueing, and steering let users refine active work without losing context.
- It retains useful knowledge: main models read and write project memory with permission, while scheduled maintenance and optional skill learning keep reusable guidance useful.
- It is automation-ready: visual Automation graphs connect schedules, tasks, approvals, supported GitHub actions, and outcomes, while task chains, channel prompts, and webhook triggers cover simpler repeatable work.
- It is self-hosted: operators control configuration, authentication, model access, database, worker capacity, and channels.

## Documents and Appearance

Built-in document skills create and edit Word documents, PDFs, spreadsheets, and presentations. Files can be published into conversations for preview and download. See [Attachments](attachments.html) for supported previews and [Skill Curation](skills-and-learning.html) for dependency approval.

Open **Settings → Appearance** to choose a theme, including curated community and VS Code palettes. Customize task-list layout, project tabs, default or layered surfaces, conversation width and bubbles, and board-column styling with visual previews. Theme colors apply across chat, task boards, schedules, code, and review controls.

## Recommended Reading

| If You Want To... | Read This |
|---|---|
| Try it quickly | [Installation](installation.html), then [Quickstart](quickstart.html) |
| Understand the main UI | [Workspace Overview](dashboard.html), [Projects](projects.html), [Chat](chat.html), [Tasks](tasks.html), [Automations](automations.html), [Schedule](schedule.html), and [Alerts](alerts.html) |
| Understand work mechanics | [Task Threads & Follow-Ups](task-threads-followups.html), [Task Chaining & Branch Lineage](task-chaining.html), [Lifecycle Hooks](lifecycle-hooks.html), [Worker Capacity & Dispatch](workers.html), and [Scheduled Task Runs](scheduled-tasks.html) |
| Configure AI behavior | [Models](models.html), [Model Selection & Tool Policy](model-selection-tool-policy.html), [Agents](agents.html), [Memory](memory.html), [Skill Curation](skills-and-learning.html), and [Personalities](personalities.html) |
| Review generated code | [Task Diffs & Review](task-diffs-review.html), [Review Workflows](review-workflows.html), [Task Lifecycle](task-lifecycle.html), [Git Worktrees & Merge Safety](git-worktrees.html), and [GitHub](github.html) |
| Run for a team | [Deployment Modes](deployment.html), [Authentication](authentication.html), [Configuration](configuration.html), [Worker Capacity & Dispatch](workers.html), and [Channels Overview](channels.html) |
