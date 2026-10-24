# Skill Curation

The main model selects relevant skills from the available indexes while working. Skills provide reusable instructions for tasks, including built-in support for creating and editing Word documents, PDFs, spreadsheets, and presentations.

Project settings → **Skills & Memory** controls skill reads and writes independently. New projects allow skill reads but disable skill writes. Global skill writes require a separate switch and enabled skill writes. Existing projects retain their previous permissions.

## Dependency Approval

When a selected skill requires a missing tool, OpenVibely asks for approval before installing it. Installation progress appears in the conversation. After the dependency is installed successfully, the pending skill request resumes. Approving an installation does not grant permission to change skills.

## The Skills Page

Open `Skills` from the sidebar. The Skills page lists all skills in scope for the selected project: standalone and agent-owned, global and project-scoped.

Each skill card shows the skill name, key, scope, and current state badges. Use the per-card dropdown to create, edit, enable or disable, toggle always-use, or archive a skill. Use the collection toolbar to search, filter by state or scope, sort, and select skills for confirmed bulk deletion.

To add a skill manually, click `+ Create Skill`. To import a pre-written standalone skill package, use `Import Skill Package`.

## Skill States

| State | What It Means |
|---|---|
| Enabled | Default. The skill is available for routing and appears in the routing context. |
| Disabled | Hidden from routing. The skill does not appear as a routing candidate and is excluded from the `skills_list` tool output. Use this to suppress a skill without deleting it. |
| Always Use | Forces the skill into every task run for its scope, regardless of routing selection. Stored in the `SKILLS.md` index. Use sparingly; always-use skills add context to every task even when they may not be relevant. |
| Archived | Soft-deleted. Archived skills are removed from normal views and routing but remain on disk. |

The always-use toggle can be set from the skill card dropdown or from the create/edit modal. A skill can be both always-use and enabled; a disabled skill's always-use flag has no effect while it is disabled.

## How A Task Uses Skills

A task's main model chooses and reads relevant skills directly. Optional enabled lifecycle hooks can also support the run:

```text
route_task
-> before_run
-> normal task execution
-> after_complete
```

| Step | What It Does |
|---|---|
| `route_task` | Optional custom routing hook; built-in Skill Curator routing has been removed. |
| `before_run` | Adds extra context before the main task starts when a hook is configured. |
| Normal execution | Runs the user’s task prompt with the chosen execution profile and model. |
| `after_complete` | Can review completed work when a learning hook is enabled and skill writes are permitted. |

Lifecycle activity is supporting work. The user-facing result is still the task output, thread, changes, and review state shown in the Tasks UI.

## Skill Curator

Skill Curator maintains skill libraries through scheduled work and optional after-complete learning. Its learning hook is disabled by default and can be enabled in the agent's lifecycle settings.

| Skill Curator Skill | Purpose |
|---|---|
| `observe_task_for_learning` | Reviews completed task context and decides whether a skill should be improved. |
| `maintain_skill_library` | Maintains reusable standalone skills during scheduled maintenance. |

Main models select skills during the task. Skill Curator handles separate library maintenance and, when enabled, learning from completed work.

## Importing Skill Packages

A standalone skill package can be either a `SKILL.md` file or a folder containing `SKILL.md`. The package body describes the reusable behavior, and optional support files can live under `references/`, `templates/`, `scripts/`, or `assets/`.

When importing, choose whether the skill should be global or project-scoped. Project-scoped imports stay tied to the selected project and can override a global skill with the same key.

Standalone imports must not declare `agent.key`. Agent-owned skills belong to a specific agent and are managed through the agent skill surfaces and lifecycle curation, not the standalone package import flow.

## Standalone Skills

Standalone skills are shared reusable skills. They are used when a task does not have a specific assigned agent.

```text
<root>/skills/SKILLS.md
<root>/skills/<skill_key>/SKILL.md
```

Use standalone skills for knowledge that should help many tasks, many agents, or future tasks that run without a selected agent.

## Agent-Owned Skills

Agent-owned skills belong to one specific agent. They are used when a task is assigned to that agent.

```text
<root>/agents/<agent_key>/SKILLS.md
<root>/agents/<agent_key>/skills/<skill_key>/SKILL.md
```

Use agent-owned skills for role-specific behavior, repository responsibilities, review habits, or workflow knowledge that should stay with that agent.

Assigned-agent routing only sees that agent’s skills. No-agent routing uses standalone skills. Keeping those scopes separate prevents one agent’s private behavior from leaking into unrelated work.

## Global And Project Scope

Skills can live globally or inside a project.

| Scope | Meaning |
|---|---|
| Global | Shared across projects. |
| Project | Specific to the selected project and repository. |

When the same skill key exists globally and in the project, the project skill wins. This lets a project override broad reusable guidance with local conventions.

## Learning After Completion

When enabled, `observe_task_for_learning` receives task context such as the assigned agent, selected skills, task transcript, and write policy after completion. It can then use scoped write tools to improve the right skill library.

| Tool | Allowed Write Scope |
|---|---|
| `skill_manage` | Writes standalone skills only. |
| `agent_skill_manage` | Writes only skills owned by the agent used for the completed task. |

This optional learning loop records repeatable behavior in the right skill library for future runs. Main models read and update project memories themselves; Memory Curator handles scheduled memory consolidation.

## Scheduled Skill Maintenance

`System: Skill Library Maintenance` is a scheduled task assigned to Skill Curator. That scheduled maintenance job keeps the standalone skill library useful over time.

Agent-owned skills are managed through after-complete curation for tasks that ran with an assigned agent. In that path, `agent_skill_manage` is server-scoped to that task’s agent, so OpenVibely can improve role-specific skills without touching unrelated agents.

## Guardrails

- Lifecycle hook skills come from the lifecycle agent that owns the hook.
- Task skills come from the current task’s routing scope.
- No-agent tasks route standalone skills.
- Assigned-agent tasks route only that assigned agent’s skills.
- `skill_manage` cannot write agent-owned skills.
- `agent_skill_manage` cannot write standalone skills or another agent’s skills.
- Project scope overrides global scope for matching skill keys.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Lifecycle Hooks](lifecycle-hooks.html) | Shows hook timing, boundaries, and supporting behavior in more detail. |
| [Task Lifecycle](task-lifecycle.html) | Shows where hooks fit around task execution. |
| [Agents](agents.html) | Explains agent profiles, lifecycle hooks, and agent-owned skills. |
| [Memory](memory.html) | Covers autonomous project memory recall, updates, and consolidation. |
| [Scheduled Task Runs](scheduled-tasks.html) | Covers recurring system maintenance and user schedules. |
