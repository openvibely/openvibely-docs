# OpenVibely Docs

OpenVibely turns AI coding from one-off prompts into a self-hosted command center that learns your projects as you use it. Give it your repositories, models, agents, schedules, review flow, and team channels, then manage work from one UI where tasks stay tied to project context, changes stay reviewable, and useful lessons are carried into the next run.

It is built for teams that want faster AI-assisted development without losing control. Start in chat when an idea is fuzzy, promote the plan into tracked tasks, watch execution live, review the diffs, and schedule follow-up work when the project needs ongoing attention. As work completes, OpenVibely gets smarter on its own: Memory Curator creates and updates durable project memory, consolidates stale or duplicate notes, Skill Curation improves reusable task behavior, and future work starts with more of the context your team has already taught it.

## Start Fast

```bash
git clone https://github.com/openvibely/openvibely.git
cd openvibely
./start.sh
```

Open `http://localhost:3001`. The first useful path is UI-first: add a model, create or select a project, then use Chat or Tasks to start work.

| Goal | Start Here |
|---|---|
| Understand the app | [Features Overview](features-overview.html) |
| Run it locally | [Installation](installation.html) |
| Use the UI for the first task | [Quickstart](quickstart.html) |
| Set up a durable instance | [First-Time Setup](first-time-setup.html) |

## The App Mental Model

OpenVibely is organized around a selected project. The sidebar project selector changes the context for the main product surfaces.

| App Area | What Users Do There |
|---|---|
| Project selector | Choose the repository/workspace that tasks, chat, memory, workers, schedules, and integrations apply to. |
| Chat | Ask questions, plan changes, attach context, and orchestrate work conversationally. |
| Tasks | Use a board to create AI coding tasks, run them, inspect output, review changed files, and follow up. |
| Schedule | Put project work on a calendar so tasks run once or repeat. |
| Insights | Use Grades, Pulse, Reflection, and Analytics to understand activity, health, history, and trends. |
| System | Configure alerts, models, agents, workers, channels, and personality. |

## What OpenVibely Provides

| Capability | Product Outcome |
|---|---|
| Project workspaces | Keep repository context, model defaults, worker limits, schedules, memory, and integrations tied to a real codebase. |
| Chat-first planning | Start from a conversation when the work is unclear, then turn the plan into executable tasks. |
| Task board execution | Queue coding work, stream progress, inspect logs and threads, review changed files, and decide what ships. |
| Reusable agents | Capture system prompts, tools, skills, plugins, permissions, routing hints, and lifecycle behavior as reusable worker profiles. |
| Memory curation | Autonomously create, recall, update, and consolidate durable project memory so repeated context does not have to be re-explained. |
| Skill curation | OpenVibely learns from completed work and autonomously improves reusable standalone or agent-owned skills. |
| Reviewable changes | Use Git worktrees and GitHub integration so AI output becomes visible diffs and pull requests rather than hidden edits. |
| Automation | Schedule recurring work, chain dependent tasks, and run structured multi-agent workflows. |
| External channels | Create and monitor work through Slack, Telegram, GitHub, and inbound webhooks. |

## How The Docs Are Organized

| Section | Use It For |
|---|---|
| Start Here | Product overview, install, UI quickstart, first setup, and learning paths. |
| Web App Tour | The screens users click every day: Dashboard, Projects, Chat, Tasks, Schedule, Agents, Models, Workers, Alerts, and Insights. |
| Core Workflows | How UI actions become task state, worktrees, attachments, memory, skills, learning, and review. |
| Automation In The UI | Scheduling, task chains, and structured multi-agent workflows. |
| Channels | Slack, Telegram, GitHub, and webhooks as alternate front doors into project work. |
| Operate OpenVibely | Model providers, configuration, deployment, authentication, and troubleshooting. |
| Developer Reference | Optional lookup material for people extending or integrating with OpenVibely. |

## Source Verification

The docs were checked against OpenVibely source code, including domain models, configuration loading, UI rendering, source-wired product surfaces, and existing guides. The product navigation follows the actual app sidebar: Workspace, Insights, and System.
