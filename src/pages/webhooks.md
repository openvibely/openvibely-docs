# Webhooks

Webhooks let trusted external systems create project-scoped OpenVibely tasks. Use them for event-driven work such as deployment follow-ups, monitoring alerts, issue triage, or scheduled jobs from another tool.

## What Users Configure

Open `Channels`, choose Webhooks, and create a webhook for the project that should receive work. Each webhook has a display name, enabled state, secret, prompt shaping options, and default priority.

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

## Recommended Workflow

1. Create a webhook for one project.
2. Copy the generated URL/token and secret into the external system.
3. Send a test payload from the UI or the external system.
4. Confirm the created task appears in the intended project.
5. Review the generated title and prompt before enabling broader automation.

## Safety Guidance

Keep webhooks project-specific and rotate secrets if they are exposed. Disable a webhook when an external system no longer needs to create tasks.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Webhooks are one of several external entry points. |
| [Projects](projects.html) | Every webhook-created task lands in a project. |
| [Tasks](tasks.html) | Webhook-created work is reviewed and run as normal task work. |
