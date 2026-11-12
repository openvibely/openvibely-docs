# Analytics

Open **Analytics** from the app rail to inspect project outcomes, performance, and usage.

## Outcomes And Usage

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

OAuth-connected provider accounts (Anthropic, OpenAI) show a live usage card so users can see which account is consuming capacity.

Analytics charts are rendered in the browser timezone so time-axis labels match local working hours. Long-range views can be used to inspect skill learning trends over time, not just short-term task usage.

Expand a chart to inspect it in a larger modal preview with interactive tooltips. Close the preview or press Escape to return to the dashboard.

## Live Provider Usage

Open **Analytics** from the app rail to see current OpenAI and Anthropic account limits, account identities, and plans. Usage cards request live provider data; a failed refresh does not display stale limits as current. Background monitoring creates deduplicated usage-limit alerts across projects.

Where your provider account offers usage-reset credits or grants, the usage controls let you view and redeem them. Availability and the reset result are determined by the provider.


## Account Usage Permissions

Provider usage and reset controls follow account ownership. Use only the accounts your signed-in user is authorized to inspect or reset; access to a project does not grant ownership of another user's provider account.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Review the work behind outcome metrics. |
| [Insights](insights.html) | Grades, Pulse, and Reflection cover health, upcoming work, and history. |
| [Alerts](alerts.html) | Review provider usage-limit alerts and task failures. |
