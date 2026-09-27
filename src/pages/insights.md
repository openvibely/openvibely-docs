# Insights

Insights are the analysis and reflection surfaces in the OpenVibely sidebar. They help users understand project activity after tasks, schedules, agents, and channels have started producing work.

## Sidebar Pages

| UI Label | What Users Use It For |
|---|---|
| Grades | View proactive insights, health checks, knowledge signals, and idea grading. |
| Pulse | See upcoming work and generated pulse summaries. |
| Reflection | Review historical task activity and generated reflections. |
| Analytics | Outcomes, supporting task evidence, agent and model comparisons, learning signals, automations, and provider usage. |

## Analytics

Analytics is the quantitative view of whether project work is producing useful outcomes and where attention is needed. Select a time window and optional project filters; metric definitions keep completed runs, achieved goals, and merged work distinct.

**Overview and outcomes**

- Outcome KPIs and trends connect tasks worked on, run success, goal achievement, first-run success, follow-up work, and merge completion.
- The outcome funnel makes each eligible denominator explicit.
- Improvement, attention, and actionable-exception cards surface slow, costly, repeatedly failing, or reworked tasks.
- Supporting task evidence lets users inspect the tasks behind aggregate results.

**Agents, models, automations, and learning**

- Compare agents and model configurations by outcomes, reliability, follow-up rate, runtime, and effort.
- Inspect Automation graph invocation and node behavior.
- Connect skill selection and usage to task outcomes, productive agent/skill pairs, and skills that may need clearer guidance or cleanup.

**Token usage and cost**

- Token Usage chart showing input, output, cached, and reasoning tokens over time, filterable by model.
- Token Usage Breakdown table with per-provider, per-model columns for input tokens, output tokens, cache tokens, reasoning tokens, total tokens, and estimated cost.
- Model Breakdown by Tokens pie chart showing relative token share across configured models.

**Provider accounts**

OAuth-connected provider accounts (Anthropic, OpenAI) show a usage snapshot card so users can see which account is consuming capacity.

Analytics charts are rendered in the browser timezone so time-axis labels match local working hours. Long-range views can be used to inspect skill learning trends over time, not just short-term task usage.

## How Insights Fit The Workflow

Use the task board for live execution. Use Insights when you want to step back and ask whether tasks reach their goals, which agents, models, skills, or automations produce strong outcomes, what work is coming up, and what historical trends are emerging. Use Analytics to connect outcome and task evidence with provider spend, token consumption, execution performance, and learning.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Insights summarize task activity. |
| [Alerts](alerts.html) | Shows failures and follow-up events that may also appear in trends. |
