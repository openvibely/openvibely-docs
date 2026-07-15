# Webhook Triggers

Webhooks let trusted external systems create project-scoped OpenVibely tasks. Use them for event-driven work such as deployment follow-ups, monitoring alerts, issue triage, release checks, or scheduled jobs from another tool.

A webhook is a task entry point. It is not an interactive Chat session and it does not bypass task review, worker capacity, or project boundaries.

## What Users Configure

Open `Channels`, choose Webhooks, and create a webhook for the project that should receive work.

| Field | User Impact |
|---|---|
| Project | Chooses where created tasks appear. |
| Name | Helps operators recognize the external system. |
| Enabled | Turns task creation on or off without deleting the webhook. |
| Secret | Lets the sender prove it is allowed to use the webhook. |
| System instructions | Guides how OpenVibely should interpret incoming events. |
| Title template | Controls the generated task title. |
| Prompt template | Controls the generated task prompt. |
| Default priority | Sets the priority for created tasks. |

## Trigger Boundary

Each webhook call creates one task in the configured project. The created task uses the webhook's routing/token information, configured prompt shaping, and default priority, then appears in normal OpenVibely task workflows.

Webhook-created work is marked as webhook-originated so operators can distinguish it from UI-created work.

## Authentication

Webhook endpoints use a path token for inbound routing and a secret for authentication when configured. Senders can authenticate with the configured secret header or supported signature form. If a webhook has a secret, unauthenticated calls should be rejected.

Keep webhook URLs and secrets private. Rotate secrets if they are exposed, and disable webhooks that are no longer in active use.

## Recommended Workflow

1. Create a webhook for one project.
2. Copy the generated URL/token and secret into the external system.
3. Send a test payload from the UI or the external system.
4. Confirm the created task appears in the intended project.
5. Review the generated title and prompt before enabling broader automation.
6. Monitor failures through Alerts and task history.

## Examples

| External Event | Created Task Pattern |
|---|---|
| Monitoring alert | Investigate the alert and propose or apply a fix. |
| Deployment failure | Read logs from the payload and create a remediation task. |
| Issue triage | Convert an issue event into a scoped task for the project. |
| Release checklist | Run a known verification prompt at a release gate. |
| External scheduler | Create a task in OpenVibely without relying on the built-in Schedule page. |

## What It Does Not Do

- It does not create multiple tasks from one webhook call.
- It does not give the sender arbitrary project access beyond the configured webhook behavior.
- It does not skip task review, diffs, or merge safety.
- It does not replace Slack, Telegram, Discord, or Email for interactive conversations.
- It does not require users to manually assign agents to external channels.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Webhooks are one of several external entry points. |
| [Tasks](tasks.html) | Webhook-created work appears as normal project work. |
| [Worker Capacity & Dispatch](workers.html) | Webhook-created tasks still need execution capacity. |
| [Alerts](alerts.html) | Failed webhook-originated work can create attention notices. |
| [Configuration](configuration.html) | Operators control runtime and integration settings. |
