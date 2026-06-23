# Insights

Insights are the analysis and reflection surfaces in the OpenVibely sidebar. They help users understand project activity after tasks, schedules, agents, and channels have started producing work.

## Sidebar Pages

| UI Label | What Users Use It For |
|---|---|
| Grades | View proactive insights, health checks, knowledge signals, and idea grading. |
| Pulse | See upcoming work and generated pulse summaries. |
| Reflection | Review historical task activity and generated reflections. |
| Analytics | Token usage, cost, model breakdowns, execution rates, duration trends, agent usage, frequent tasks, and failure trends. |

## Analytics

Analytics is the quantitative view of how OpenVibely is being used. It includes:

**Token usage and cost**

- Token Usage chart showing input, output, cached, and reasoning tokens over time, filterable by model.
- Token Usage Breakdown table with per-provider, per-model columns for input tokens, output tokens, cache tokens, reasoning tokens, total tokens, and estimated cost.
- Model Breakdown by Tokens pie chart showing relative token share across configured models.

**Provider accounts**

OAuth-connected provider accounts (Anthropic, OpenAI) show a usage snapshot card so users can see which account is consuming capacity.

**Performance**

- Average Execution Time by Model so users can compare latency across providers and models.
- Execution rate, duration trend, agent usage, frequent task, and failure trend charts for task-level health.

**Skill Curation**

- Skill activity charts show when skills are selected, loaded, viewed, created, and edited.
- Top Skills highlights the reusable guidance seeing the most activity.
- Follow-through compares selected skills with later usage so teams can see whether routing choices are becoming useful task context.
- Top Agent/Skill Pairs shows which agents and skills are working together most often.
- Least Active Enabled Skills helps identify enabled skills that may need cleanup, consolidation, or clearer descriptions.

Analytics charts are rendered in the browser timezone so time-axis labels match local working hours. Long-range views can be used to inspect skill learning trends over time, not just short-term task usage.

## How Insights Fit The Workflow

Use the task board for live execution. Use Insights when you want to step back and answer questions like whether tasks are succeeding, which agents or models are most active, what work is coming up, and what historical trends are emerging. Use Analytics specifically to understand provider spend, token consumption by model, and execution performance.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Insights summarize task activity. |
| [Alerts](alerts.html) | Shows failures and follow-up events that may also appear in trends. |
