# Worker Capacity & Dispatch

Workers control how much AI task execution OpenVibely can run at once. Capacity keeps a busy project, expensive hosted model, or local machine from being overwhelmed while still allowing Chat to remain responsive as the orchestration surface.

## What Users Configure

Open `Workers` from the System section of the sidebar.

| Capacity Layer | What It Protects |
|---|---|
| Global capacity | Overall execution slots across the instance. |
| Project limits | Prevent one selected project from consuming all execution capacity. |
| Model limits | Prevent one provider or model config from being overloaded. |
| Worker timeout | Stops stalled executions from holding capacity forever. |

## Dispatch Boundary

| Work Type | Capacity Behavior |
|---|---|
| Normal task execution | Must acquire available worker capacity before running. |
| Task follow-ups | Respect worker limits and queue when capacity is full. |
| Scheduled task runs | Enter task execution like other task work and wait for capacity if needed. |
| Chained child tasks | Do not run until unblocked, then still need capacity. |
| Interactive Chat | Bypasses task worker limits so the orchestrator remains responsive. |

This boundary is intentional. Chat can keep planning, creating tasks, inspecting state, or queuing prompts while task workers are busy doing repository work.

## What Users See

| State | Meaning |
|---|---|
| `pending` | The task exists but has not been claimed for execution. |
| `queued` | OpenVibely accepted the work and is waiting for execution capacity or dispatch. |
| `running` | A worker has claimed the execution slot and the model is working. |
| `blocked` | A dependency, such as a parent chain trigger, prevents the task from starting. |
| `completed`, `failed`, `cancelled` | The task reached a terminal state and the slot is released. |

When a running or follow-up execution releases capacity, queued work can be dispatched.

## When To Change Worker Settings

- Lower limits when using expensive hosted models.
- Lower limits when a provider rate-limits heavily.
- Lower limits when local Ollama or the host machine becomes saturated.
- Raise limits when you have enough machine capacity and provider quota.
- Set project limits when one repository should not block work in others.
- Use model limits when a specific provider or model config is slower than the rest.

## Examples

| Scenario | Result |
|---|---|
| One project limit is full and a task follow-up arrives | The follow-up is accepted and queued until a slot frees. |
| The model limit is full but a user sends a Chat message | Chat can still respond because interactive Chat bypasses task capacity. |
| A scheduled task reaches its next run time while workers are busy | It waits like normal task execution. |
| A chained child is still blocked | Worker capacity does not matter until the parent trigger unblocks it. |

## What It Does Not Do

- It does not rate-limit every Chat interaction.
- It does not make a model provider accept unlimited requests.
- It does not decide whether generated code is safe to merge.
- It does not override task dependencies or blocked chain state.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Workers execute task board work. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Follow-ups queue when task capacity is full. |
| [Orchestrate From Chat](orchestrate-from-chat.html) | Chat can stay central while workers run tasks in parallel. |
| [Models](models.html) | Model configs can define per-model worker limits. |
| [Projects](projects.html) | Projects can define project-level worker limits. |
