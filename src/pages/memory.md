# Memory

Memory preserves project knowledge across tasks. Main task models select relevant memories and update them during work, subject to project permissions. `System: Memory Curator` handles scheduled consolidation to keep the library focused.

The result is a project-aware learning loop: you explain an architecture decision, preference, incident, workflow constraint, or correction once; OpenVibely can preserve it in managed memory; later tasks receive the relevant context automatically.

Memory is project-local and repository-backed. OpenVibely stores managed memory under `.openvibely/memories` in the selected project repository, so the knowledge belongs to that codebase and can be reviewed like other project context.

## Why It Matters

| Capability | User Impact |
|---|---|
| Autonomous memory creation | The main model can save durable project facts when memory writes are enabled. |
| Context-aware recall | The main model selects relevant memories from the project index during execution. |
| Scheduled consolidation | `System: Memory Consolidation` periodically merges, splits, updates, or removes memory notes so the library remains accurate and useful. |
| Repository-backed files | Managed memory is stored under `.openvibely/memories` in the project repository. |
| Project scope | Each project has its own memory directory, so context does not bleed across unrelated repositories. |
| Skill partnership | Memory keeps durable project knowledge; Skill Curation keeps reusable task behavior and procedures. |

## Memory Curator

`System: Memory Curator` is a protected on-disk system agent. Its skills live under `.openvibely/agents/memory_curator/`. Users do not select it as the primary worker for normal tasks. Its scheduled consolidation uses scoped memory tools rooted at `.openvibely/memories`, skips normal repository-editing tools, and does not get a runtime git worktree.

| Memory Curator Skill | When It Runs | Purpose |
|---|---|---|
| `consolidate_memory` | scheduled | Maintains the project memory library through the visible `System: Memory Consolidation` scheduled task. |

The previous built-in per-turn recall and update hooks have been removed. The main model handles those decisions directly; scheduled consolidation remains separate.

## What Gets Remembered

Memory is for durable context future sessions should know:

- User preferences and repeated feedback.
- Product direction and architectural decisions.
- Workflow constraints and current-state facts.
- Incidents, corrections, and project-specific lessons.

OpenVibely should not store secrets, raw transcripts, provider noise, temporary attachments, one-off scratch work, or reusable procedures that belong in skills.

## Consolidation

When memory is enabled for a repository-backed project, OpenVibely can create and maintain a visible `System: Memory Consolidation` scheduled task assigned to `System: Memory Curator`.

That task uses the `consolidate_memory` skill to inspect the managed memory directory, keep `MEMORIES.md` as a compact index, merge duplicate topic files, split overloaded notes, remove stale or contradicted facts, and preserve the context that will actually help future work.

Because consolidation is a normal scheduled task, users can see it in the Schedule and task history instead of wondering when memory maintenance happens.

## How It Fits The UI

Use project settings and memory controls to decide whether a project should keep durable knowledge. When enabled for a repository-backed project, OpenVibely can create the memory directory, migrate legacy `.openvibely/memory` data to `.openvibely/memories`, and maintain the scheduled consolidation task for that project.

Memory appears in normal work as background help, not as a replacement for the user prompt. It can be stale, so task execution should still verify source-code facts before relying on them.

## Agent Permissions

Project settings → **Skills & Memory** controls memory reads and writes separately. Both are enabled for new projects. Agent permissions also constrain access. Memory Curator's scheduled work uses scoped access to the managed memory directory.

## Recommended Use

1. Enable memory for projects where persistent context will make future work better.
2. Keep sensitive data out of task prompts and chat if it should not become durable context.
3. Ask the main model to preserve durable knowledge; use scheduled consolidation to maintain the library.
4. Review `.openvibely/memories` when the project relies heavily on remembered context.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Projects](projects.html) | Memory is scoped to a project repository. |
| [Lifecycle Hooks](lifecycle-hooks.html) | Explains optional supporting hooks and scheduled maintenance. |
| [Task Lifecycle](task-lifecycle.html) | Shows where memory fits in the broader task flow. |
| [Agents](agents.html) | Agents can be configured with memory permissions. |
| [Skill Curation](skills-and-learning.html) | Skills capture reusable task behavior while memory captures durable project knowledge. |
| [Attachments As Context](attachments.html) | Attachments are temporary context; memory is durable project knowledge. |
