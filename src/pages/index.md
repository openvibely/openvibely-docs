# OpenVibely Docs

The only recursive self-improvement command center for software teams.

OpenVibely turns one Chat into the control plane for your entire AI development workflow. Describe a goal once, then let it fan out into parallel task sessions, live agent execution, reviewable diffs, scheduled follow-ups, and durable project learning.

Agents do the work. You stays in command. Inspect any thread, review any diff, steer any task, and keep the whole plan moving from the original conversation.

Goal loops drive unfinished work forward. Memory Curator preserves project context. Skill Curator turns completed tasks into sharper reusable workflows. Every run can make the next one better, while your team stays in control.

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

The docs start with a high-level user guide, then go deeper into the subfeatures that matter during real work: central Chat orchestration, prompt queueing and steering, task diffs, review comments, worktrees, schedules, alerts, memory, models, agents, channels, and operations.

| Section | Use It For |
|---|---|
| Get Started | Product overview, feature hub, install, UI quickstart, first setup, and learning paths. |
| Workspace | Daily project screens: Dashboard, Projects, Chat, Orchestrate from Chat, Tasks, Schedule, and Alerts. |
| Agents | Reusable worker profiles, Memory, Skill Curation, Personalities, and Multi-Agent Workflows. |
| Capabilities | Task lifecycle, prompt queue and steering, task diffs, review workflows, worktrees, attachments, scheduled tasks, task chaining, and insights. |
| Channels | Slack, Telegram, GitHub, and webhooks as alternate front doors into project work. |
| Models | Model configs, provider setup, defaults, and worker capacity. |
| Platforms | Deployment, authentication, configuration, and environment setup. |
| Gateway & Ops | API reference, routes, troubleshooting, glossary, and machine-readable docs. |

## Source Verification

The docs were checked against OpenVibely source code, including domain models, configuration loading, UI rendering, source-wired product surfaces, and existing guides. The product navigation follows the actual app sidebar: Workspace, Insights, and System.
