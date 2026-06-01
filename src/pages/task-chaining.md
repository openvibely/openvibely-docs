# Task Chaining & Branch Lineage

Task chaining connects dependent pieces of work. A parent task can create or unblock a child task when a trigger is met, so multi-step work can advance without losing the relationship between the steps.

Use chaining when one task's output should feed a known next task. Use Chat Orchestrate when you want one central conversation to decide, create, run, and manage several tasks interactively.

## What Users See

| Concept | User Impact |
|---|---|
| Parent task | The task whose result controls the next step. |
| Child task | A dependent task created or unblocked by the parent. |
| Blocked status | A child can be visible but not runnable until the parent reaches the trigger. |
| Inherited category | If the child category is empty, it follows the parent category instead of defaulting somewhere unrelated. |
| Branch lineage | Repository-backed child tasks remember base branch and base commit context. |
| Lineage depth | Helps show that a task is part of a chain rather than a standalone item. |

## Chain Configuration

| Field | Purpose |
|---|---|
| `enabled` | Whether chaining is active. |
| `trigger` | Trigger condition such as `on_completion` or `on_planning_complete`. |
| `child_agent_id` | Agent to use for the child task; empty means default behavior. |
| `child_model` | Model override for the child. |
| `child_category` | Category for the child; empty means inherit the parent category. |
| `child_title` | Explicit child title, otherwise derived from the parent. |
| `child_prompt_prefix` | Prefix added to parent output for the child prompt. |
| `child_chain_config` | Nested chain configuration for multi-level workflows. |

## When It Triggers

A chain trigger is evaluated from parent task progress. The most common pattern is `on_completion`: when the parent finishes, the child becomes eligible to run with the parent result available as part of the next prompt.

A child task can be pre-created for visibility and marked `blocked` until its trigger condition is satisfied. That makes the workflow visible on the board without pretending the child is ready to run.

## Branch Lineage

For repository-backed work, lineage is not only a task relationship. OpenVibely also preserves branch context so dependent work knows what it is based on.

| Lineage Detail | Why It Matters |
|---|---|
| Base branch | Shows the target branch the chain started from. |
| Base commit SHA | Preserves the exact starting point for the child. |
| Worktree branch | Gives each task isolated changes. |
| Non-terminal descendants | Prevent destructive cleanup of parent branches while children still depend on them. |

## Chaining Versus Orchestrate

| Need | Better Fit |
|---|---|
| A known sequence where step two depends on step one | Task chaining |
| A planner task that should hand off implementation when complete | Task chaining |
| One chat window coordinating several independent tasks | Chat Orchestrate |
| Parallel task creation, steering, and inspection from a conversation | Chat Orchestrate |
| Manual review between every step | Task chaining with blocked children or Chat Orchestrate |

## What It Does Not Do

- It does not make unrelated tasks share one worktree.
- It does not run a child before its parent reaches the configured trigger.
- It does not remove the need to review parent and child diffs separately.
- It does not replace Chat Orchestrate for interactive multi-task coordination.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Orchestrate From Chat](orchestrate-from-chat.html) | Best for centrally managing parallel or evolving work. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Best when continuing the same task is enough. |
| [Task Lifecycle](task-lifecycle.html) | Explains blocked and terminal states. |
| [Git Worktrees & Merge Safety](git-worktrees.html) | Explains isolated branches and safe review. |
| [Tasks](tasks.html) | Task chains are managed from task workflows. |
