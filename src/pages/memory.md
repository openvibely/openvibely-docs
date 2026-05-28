# Memory

Memory is how OpenVibely stops acting like a brand-new assistant on every task. The built-in `System: Memory Curator` autonomously turns completed work into durable project knowledge, recalls the right pieces before future runs, and consolidates the memory library so it stays focused instead of becoming a transcript dump.

The result is a project-aware learning loop: you explain an architecture decision, preference, incident, workflow constraint, or correction once; OpenVibely can preserve it in managed memory; later tasks receive the relevant context automatically.

Memory is project-local and repository-backed. OpenVibely stores managed memory under `.openvibely/memories` in the selected project repository, so the knowledge belongs to that codebase and can be reviewed like other project context.

## Why It Matters

| Capability | User Impact |
|---|---|
| Autonomous memory creation | After completed work, Memory Curator reviews the retained task transcript and creates or updates focused memory files only when there is durable project knowledge worth saving. |
| Context-aware recall | Before task execution, Memory Curator selects relevant memory and returns a compact context block instead of dumping every remembered note into the prompt. |
| Scheduled consolidation | `System: Memory Consolidation` periodically merges, splits, updates, or removes memory notes so the library remains accurate and useful. |
| Repository-backed files | Managed memory is stored under `.openvibely/memories` in the project repository. |
| Project scope | Each project has its own memory directory, so context does not bleed across unrelated repositories. |
| Skill partnership | Memory keeps durable project knowledge; Skill Curation keeps reusable task behavior and procedures. |

## Memory Curator

`System: Memory Curator` is a protected built-in system agent. Users do not select it as the primary worker for normal tasks. It runs around the task lifecycle with scoped memory tools rooted at `.openvibely/memories`, skips normal repository-editing tools, and does not get a runtime git worktree.

| Memory Curator Skill | When It Runs | Purpose |
|---|---|---|
| `recall_memory` | `before_run` | Reads the project memory index and relevant topic files, then returns only the facts useful for the current task. |
| `update_memory` | `after_complete` | Reviews completed task context and updates managed memory only when there is durable project knowledge worth saving. |
| `consolidate_memory` | scheduled | Maintains the project memory library through the visible `System: Memory Consolidation` scheduled task. |

This is autonomous memory management, not manual note taking. Work happens, useful facts become managed memory, later tasks receive the relevant parts automatically, and scheduled maintenance keeps the store clean over time.

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

Agents can be allowed to read or write project memory. The Memory Curator has protected scoped access to the managed memory directory so lifecycle hooks can recall, update, and consolidate project memory without exposing arbitrary repository writes.

## Recommended Use

1. Enable memory for projects where persistent context will make future work better.
2. Keep sensitive data out of task prompts and chat if it should not become durable context.
3. Let Memory Curator create and maintain project knowledge while Skill Curation captures reusable task behavior.
4. Review `.openvibely/memories` when the project relies heavily on remembered context.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Projects](projects.html) | Memory is scoped to a project repository. |
| [Task Lifecycle](task-lifecycle.html) | Memory recall and updates run through lifecycle hooks around task execution. |
| [Agents](agents.html) | Agents can be configured with memory permissions. |
| [Skill Curation](skills-and-learning.html) | Skills capture reusable task behavior while memory captures durable project knowledge. |
| [Attachments](attachments.html) | Attachments are temporary context; memory is durable project knowledge. |
