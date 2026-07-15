# Multi-Agent Workflows

Workflows coordinate multi-step, multi-agent execution. They are more structured than task chaining and are meant for work that needs explicit stages, quality gates, retries, budgets, or handoffs.

## Strategies

| Strategy | Meaning |
|---|---|
| Sequential | Run steps in order. |
| Parallel | Run independent steps concurrently. |
| Hybrid | Mix sequential and parallel stages. |
| Adaptive | Let the system choose based on task analysis. |

## Step Types

| Step Type | Purpose |
|---|---|
| Execute | Run a task with an agent. |
| Review | Review a previous output. |
| Vote | Let multiple agents vote on a decision. |
| Merge | Combine outputs from parallel steps. |
| Gate | Enforce pass/fail quality behavior. |
| Handoff | Summarize context for the next agent. |

## Workflow Controls

Workflow configuration can include max retries, quality threshold, cost budget, timeout, auto-rollback, and adaptive routing. These controls matter because workflows can generate more work than a single task.

## When To Use Workflows

Use workflows when the work has a known structure and needs coordination. Use task chaining when one task should simply trigger a known next task. Use Swarm mode when one goal should be planned dynamically into parallel worker-owned slices followed by optional review and merge roles.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Swarm Orchestration](swarm-orchestration.html) | A planner dynamically creates parallel worker, reviewer, and merger roles. |
| [Agents](agents.html) | Workflows coordinate agents. |
| [Task Chaining & Branch Lineage](task-chaining.html) | Chaining is simpler parent-child automation. |
