# Features Overview

OpenVibely is a web workbench for AI-assisted software work that gets more useful the more project work flows through it. The UI is the primary surface: it gives teams a place to configure models and agents, select a project, create work, monitor execution, review changes, automate recurring tasks, and let OpenVibely build durable project memory from completed work.

## Product At A Glance

| Area | What Users Experience | Where To Learn More |
|---|---|---|
| Projects | A selected workspace that controls repository context, task lists, chat, schedules, workers, memory, and channels. | [Projects](projects.html) |
| Chat | A project-aware conversation for exploration, planning, attachments, and task orchestration. | [Chat](chat.html) |
| Tasks | A board for backlog, active, and completed work with run/cancel controls, streaming progress, threads, attachments, diffs, and review. | [Tasks](tasks.html) |
| Schedule | A calendar-like surface for one-time and recurring runs. | [Schedule](schedule.html) |
| Insights | Grades, Pulse, Reflection, and Analytics surfaces for understanding project activity and outcomes. | [Insights](insights.html) |
| Models | UI-managed access to Anthropic, OpenAI, and Ollama with defaults, auth options, and capacity controls. | [Models](models.html) |
| Agents | Reusable AI worker profiles with prompts, skills, plugins, MCP servers, permissions, and lifecycle hooks. | [Agents](agents.html) |
| Memory curation | Memory Curator autonomously creates project memory from completed work, recalls the right notes before future tasks, and consolidates the memory library over time. | [Memory](memory.html) |
| Skill curation | OpenVibely curates reusable skills from completed work so future tasks start with better learned behavior. | [Skill Curation](skills-and-learning.html) |
| Review | Worktree-backed changes that users can inspect before merge or pull request creation. | [Git Worktrees](git-worktrees.html), [GitHub](github.html) |
| Automation | Scheduled tasks, task chains, and structured multi-agent workflows. | [Automation In The UI](scheduled-tasks.html) |
| Channels | Slack, Telegram, GitHub, and webhook entry points for creating and tracking work outside the web UI. | [Channels Overview](channels.html) |

## The Primary Workflow

| Step | What Happens In The UI |
|---|---|
| Configure | Add at least one model, optionally create agents, and set worker limits if needed. |
| Select a project | Use the sidebar project selector so every page knows which repository/workspace you are working in. |
| Start work | Use Chat when the work needs discussion, or Tasks when you already know the unit of work. |
| Monitor | Watch task status, streaming output, alerts, and board movement as workers execute. |
| Review | Inspect task threads, attachments, changed files, review comments, and worktree state before shipping. |
| Automate | Use schedules, task chains, or structured workflows for repeatable work. |

## What Makes It Different

- It is UI-first: the app is built around project selection, sidebar navigation, modals, task boards, calendars, chat, alerts, and review screens.
- It is project-first: tasks, chat, memory, schedules, workers, models, agents, and channels are scoped around the selected project.
- It is review-first: AI work becomes visible task state, event streams, logs, diffs, comments, and GitHub-ready changes.
- It learns from completed work: Memory Curator creates, updates, and consolidates durable project context, while Skill Curator improves the right scoped skill library afterward.
- It is automation-ready: schedules, task chains, and workflows are managed from the app instead of hidden in scripts.
- It is self-hosted: operators control configuration, authentication, model access, database, worker capacity, and channels.

## Recommended Reading

| If You Want To... | Read This |
|---|---|
| Try it quickly | [Installation](installation.html), then [Quickstart](quickstart.html) |
| Understand the main UI | [Projects](projects.html), [Chat](chat.html), [Tasks](tasks.html), and [Schedule](schedule.html) |
| Configure AI behavior | [Models](models.html), [Agents](agents.html), [Memory](memory.html), [Skill Curation](skills-and-learning.html), and [Personalities](personalities.html) |
| Review generated code | [Task Lifecycle](task-lifecycle.html), [Git Worktrees](git-worktrees.html), and [GitHub](github.html) |
| Run for a team | [Deployment Modes](deployment.html), [Authentication](authentication.html), [Workers](workers.html), and [Channels Overview](channels.html) |
