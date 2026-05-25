# Memory

Memory lets OpenVibely retain useful project knowledge across future chat and task work. It is project-local and repository-backed, so memory belongs to the selected project rather than to the whole server.

## What Users Should Know

| Concept | User Impact |
|---|---|
| Project setting | Memory is enabled or disabled per project. |
| Repository-backed files | Extracted knowledge is stored under `.openvibely/memory` in the project repository. |
| No fallback store | A project needs a local repository path for memory files. |
| Extraction | Completed tasks, chat, and thread interactions can produce reusable knowledge. |
| Consolidation | Existing memory can be cleaned up and combined into more useful project notes. |

## How It Fits The UI

Use project settings and memory controls to decide whether a project should keep durable knowledge. Treat memory as part of the repository's working context: it can help future work, but it should not become a place for secrets, temporary attachments, or unreviewed policy decisions.

## Agent Permissions

Agents can be allowed to read or write project memory. These permissions matter because they change what durable knowledge an agent can use or update during work.

## Recommended Use

1. Enable memory only for projects where persistent context is useful.
2. Keep sensitive data out of task prompts and chat if it should not become durable context.
3. Let completed work produce memory when it captures repeatable project knowledge.
4. Review memory files in the repository if the project relies on them heavily.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Projects](projects.html) | Memory is scoped to a project. |
| [Agents](agents.html) | Agents can be configured with memory permissions. |
| [Attachments](attachments.html) | Attachments are temporary context; memory is durable project knowledge. |
