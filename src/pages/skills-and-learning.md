# Skill Curation

OpenVibely gets better the more you use it. Skill Curator can observe completed work, decide what is worth keeping as reusable behavior, and autonomously create or improve skills so future tasks inherit better project and agent guidance.

This does not replace the task itself. Your task still runs normally with the selected model and, when chosen, the assigned agent. The curation work happens around that task as supporting lifecycle activity.

## The Skills Page

Open `Skills` from the sidebar. The Skills page lists all skills in scope for the selected project: standalone and agent-owned, global and project-scoped.

Each skill card shows the skill name, key, scope, and current state badges. Use the per-card dropdown to create, edit, enable or disable, toggle always-use, or archive a skill. The search bar filters by name or key.

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

A task run can include these lifecycle steps:

```text
route_task
-> before_run
-> normal task execution
-> after_complete
```

| Step | What It Does |
|---|---|
| `route_task` | Lets Skill Curator prepare useful existing skills before the task starts. |
| `before_run` | Adds extra context before the main task starts when a hook is configured. |
| Normal execution | Runs the user’s task prompt with the chosen execution profile and model. |
| `after_complete` | Lets Skill Curator review completed work and improve the right skill library afterward. |

Lifecycle activity is supporting work. The user-facing result is still the task output, thread, changes, and review state shown in the Tasks UI.

## Skill Curator

Skill Curator is the built-in system agent that owns the lifecycle skills used for routing and learning.

| Skill Curator Skill | Purpose |
|---|---|
| `route_task` | Reads available skill indexes and selects the skills that fit the task. |
| `observe_task_for_learning` | Reviews completed task context and decides whether a skill should be improved. |
| `maintain_skill_library` | Maintains reusable standalone skills during scheduled maintenance. |

Skill Curator is what makes the feature autonomous. It can prepare existing reusable knowledge before a task runs, then decide whether the completed work taught OpenVibely something worth keeping for the next run.

## Importing Skill Packages

A standalone skill package can be either a `SKILL.md` file or a folder containing `SKILL.md`. The package body describes the reusable behavior, and optional support files can live under `references/`, `templates/`, `scripts/`, or `assets/`.

When importing, choose whether the skill should be global or project-scoped. Project-scoped imports stay tied to the selected project and can override a global skill with the same key.

Standalone imports must not declare `agent.key`. Agent-owned skills belong to a specific agent and are managed through the agent skill surfaces and lifecycle curation, not the standalone package import flow.

## Bundled Workflow Skills

OpenVibely includes standalone skills for reusable workflows. The [GitHub Autonomous SDLC Skill](github-autonomous-sdlc.html) uses generic GitHub capabilities to create a visible, scheduled issue-to-pull-request workflow. It is a skill rather than a channel feature; configure GitHub under `Channels`, then run the skill from a project task or task-thread turn.

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

After a task finishes, `observe_task_for_learning` receives task context such as the assigned agent, selected skills, task transcript, and write policy. It can then use scoped write tools to improve the right skill library.

| Tool | Allowed Write Scope |
|---|---|
| `skill_manage` | Writes standalone skills only. |
| `agent_skill_manage` | Writes only skills owned by the agent used for the completed task. |

This is the skill learning loop: OpenVibely sees what worked, records repeatable behavior in the right skill library, and makes that guidance available to future task runs. Memory Curator handles the separate project-memory loop for durable context and decisions.

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
