# Skill Curation

OpenVibely gets better the more you use it. Skill Curator can observe completed work, decide what is worth keeping, and autonomously create or improve reusable skills so future tasks inherit better project and agent knowledge.

This does not replace the task itself. Your task still runs normally with the selected model and, when chosen, the assigned agent. The curation work happens around that task as supporting lifecycle activity.

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

This is the learning loop: OpenVibely sees what worked, records repeatable knowledge in the right place, and makes that knowledge available to future task runs.

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
| [Task Lifecycle](task-lifecycle.html) | Shows where hooks fit around task execution. |
| [Agents](agents.html) | Explains agent profiles, lifecycle hooks, and agent-owned skills. |
| [Memory](memory.html) | Covers durable project knowledge that complements skills. |
| [Scheduled Tasks](scheduled-tasks.html) | Covers recurring system maintenance and user schedules. |
