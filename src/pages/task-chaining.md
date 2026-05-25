# Task Chaining

Task chaining lets a parent task create or unblock a child task when a trigger condition is met. This supports planner-to-implementer handoffs and multi-step delegation.

## Chain Configuration

| Field | Purpose |
|---|---|
| `enabled` | Whether chaining is active |
| `trigger` | Trigger condition such as `on_completion` or `on_planning_complete` |
| `child_agent_id` | Agent to use for child task; empty means default |
| `child_model` | Model override for the child |
| `child_category` | Category for child task; empty means same as parent |
| `child_title` | Explicit title, otherwise derived from parent |
| `child_prompt_prefix` | Prefix added to parent output for child prompt |
| `child_chain_config` | Nested chain configuration for multi-level workflows |

## Lifecycle Behavior

Child tasks can be pre-created for visibility and marked `blocked` until the parent reaches the configured trigger. `lineage_depth`, `base_branch`, and `base_commit_sha` preserve chain context for repository work.

## When To Use Chaining

Use chaining when one task's output should directly feed a known next step. Use [Multi-Agent Workflows](workflows.html) when you need explicit parallelism, votes, gates, handoffs, budgets, or adaptive routing.
