# Features Overview

OpenVibely is a web workbench for AI-assisted software work that gets more useful the more project work flows through it. The UI is the primary surface: it gives teams a place to configure models and agents, select a project, create work, monitor execution, review changes, automate recurring tasks, and let OpenVibely build durable project memory from completed work.

## Product At A Glance

| Area | What Users Experience | Where To Learn More |
|---|---|---|
| Dashboard | A selected-project landing page with task counts, category entry points, and an empty state for first-time setup. | [Dashboard](dashboard.html) |
| Projects | A workspace boundary that controls repository context, task lists, chat, schedules, workers, memory, and channels. | [Projects](projects.html) |
| Chat | A project-aware conversation for exploration, attachments, `Plan` mode, and `Orchestrate` mode. Chat can centrally create, run, and coordinate multiple parallel tasks from one window. | [Chat](chat.html), [Orchestrate From Chat](orchestrate-from-chat.html) |
| Tasks | A board for backlog, active, and completed work with run/cancel controls, streaming progress, threads, attachments, diffs, and review. | [Tasks](tasks.html), [Task Threads & Follow-Ups](task-threads-followups.html), [Task Diffs & Review](task-diffs-review.html) |
| Scheduling | Time-based automation for one-time, recurring, and system maintenance runs. | [Schedule](schedule.html), [Scheduled Task Runs](scheduled-tasks.html) |
| Alerts | Project-scoped failure, follow-up, and attention notices with unread state. | [Alerts](alerts.html) |
| Models | UI-managed access to Anthropic, OpenAI, and Ollama with defaults, auth options, tool policy, and capacity controls. | [Models](models.html), [Model Selection & Tool Policy](model-selection-tool-policy.html), [Model Providers](model-providers.html), [Worker Capacity & Dispatch](workers.html) |
| Agents | Reusable AI worker profiles with prompts, skills, plugins, MCP servers, permissions, routing, and lifecycle hooks. | [Agents](agents.html), [Lifecycle Hooks](lifecycle-hooks.html), [Skill Curation](skills-and-learning.html) |
| Memory | Memory Curator autonomously creates project memory from completed work, recalls relevant notes before future tasks, and consolidates memory over time. | [Memory](memory.html), [Lifecycle Hooks](lifecycle-hooks.html) |
| Configuration | Runtime, auth, integration, deployment, and environment controls for self-hosted operation. | [Configuration](configuration.html), [Environment Variables](environment.html), [Deployment Modes](deployment.html) |
| Review workflows | Worktree-backed changes, task output, comments, merge decisions, cleanup, and pull request paths. | [Review Workflows](review-workflows.html), [Git Worktrees & Merge Safety](git-worktrees.html), [GitHub](github.html) |
| Channels | Slack, Telegram, GitHub, and webhook entry points for creating and tracking work outside the web UI. | [Channels Overview](channels.html), [Webhook Triggers](webhooks.html), [Prompt Queue & Steering](prompt-queue-steering.html) |

## The Primary Workflow

| Step | What Happens In The UI |
|---|---|
| Configure | Add at least one model, optionally create agents, and set worker limits if needed. |
| Select a project | Use the sidebar project selector so every page knows which repository/workspace you are working in. |
| Start work | Use Chat when the work needs discussion, or Tasks when you already know the unit of work. |
| Monitor | Watch task status, streaming output, alerts, and board movement as workers execute. |
| Review | Inspect task threads, attachments, changed files, review comments, worktree state, and pull request options before shipping. |
| Automate | Use scheduled task runs, task chains, channel/webhook triggers, or structured workflows for repeatable work. |

## What Makes It Different

- It is UI-first: the app is built around project selection, sidebar navigation, modals, task boards, calendars, chat, alerts, and review screens.
- It is chat-orchestrated: one project Chat page can plan work, create multiple parallel tasks, steer or queue follow-up prompts, and keep coordination centralized.
- It is project-first: tasks, chat, memory, schedules, workers, models, agents, and channels are scoped around the selected project.
- It is review-first: AI work becomes visible task state, event streams, logs, diffs, comments, and GitHub-ready changes.
- It keeps work continuous: task threads, follow-ups, queueing, and steering let users refine active work without losing context.
- It learns from completed work: Memory Curator creates, updates, and consolidates durable project context, while Skill Curator improves the right scoped skill library afterward.
- It is automation-ready: scheduled task runs, task chains, channel prompts, webhook triggers, and workflows are managed from the app instead of hidden in scripts.
- It is self-hosted: operators control configuration, authentication, model access, database, worker capacity, and channels.

## Recommended Reading

| If You Want To... | Read This |
|---|---|
| Try it quickly | [Installation](installation.html), then [Quickstart](quickstart.html) |
| Understand the main UI | [Dashboard](dashboard.html), [Projects](projects.html), [Chat](chat.html), [Orchestrate From Chat](orchestrate-from-chat.html), [Tasks](tasks.html), [Schedule](schedule.html), and [Alerts](alerts.html) |
| Understand work mechanics | [Task Threads & Follow-Ups](task-threads-followups.html), [Task Chaining & Branch Lineage](task-chaining.html), [Lifecycle Hooks](lifecycle-hooks.html), [Worker Capacity & Dispatch](workers.html), and [Scheduled Task Runs](scheduled-tasks.html) |
| Configure AI behavior | [Models](models.html), [Model Selection & Tool Policy](model-selection-tool-policy.html), [Agents](agents.html), [Memory](memory.html), [Skill Curation](skills-and-learning.html), and [Personalities](personalities.html) |
| Review generated code | [Task Diffs & Review](task-diffs-review.html), [Review Workflows](review-workflows.html), [Task Lifecycle](task-lifecycle.html), [Git Worktrees & Merge Safety](git-worktrees.html), and [GitHub](github.html) |
| Run for a team | [Deployment Modes](deployment.html), [Authentication](authentication.html), [Configuration](configuration.html), [Worker Capacity & Dispatch](workers.html), and [Channels Overview](channels.html) |
