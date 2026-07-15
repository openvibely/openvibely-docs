# Outbound Messaging

Outbound Message Targets control where Chat and task agents may proactively send messages through Slack, Telegram, Discord, and Email. Targets are saved per project and use the credentials already configured for each channel.

## Configure Targets

Open `Channels`, select the current project, and open `Outbound Message Targets`.

| Field | Meaning |
|---|---|
| Platform | Slack, Telegram, Discord, or Email. |
| Type | Channel or user DM where the platform supports both. |
| Name | A friendly destination such as `ops`, addressable as `slack:#ops`. |
| Target | Platform channel/chat/user ID or an email address. |
| Thread/Topic | Optional Slack thread, Telegram topic, or Discord thread destination. |
| Home | Marks the preferred destination for that platform in the project. |
| Default subject | Optional subject used by an Email target. |

Click `Test` on a saved target before relying on it for task completion or operational notifications.

## Inbound And Outbound Security

| Control | Scope | Question It Answers |
|---|---|---|
| Authorized Users / Senders | System-level across projects | Who may instruct OpenVibely through this channel? |
| Outbound Message Targets | Project-scoped | Where may agents in this project send? |
| Allow explicit unsaved targets | Project-scoped | May agents send to arbitrary destinations that were not saved? |

These controls are intentionally independent. Authorizing a person to send instructions does not automatically make that person an outbound target. Authorized channel users and senders may be eligible as direct recipients, but other arbitrary destinations require the explicit-unsaved-target policy.

Keep `Allow explicit unsaved targets` disabled unless the project genuinely needs dynamic destinations. Saved and Home targets are preferred first.

## Ask Chat To Send

Use Chat in `Orchestrate` mode and name a saved target or describe the destination. If the destination is ambiguous, Chat can list the available targets before sending.

```text
Send "deployment completed" to slack:#ops.
Message discord:#release that the build is ready for review.
Email email:#client with the default subject and a short status update.
Send the backup result to the Telegram Home target.
```

Plan mode does not execute outbound sends. A model/provider must support the `send_message` runtime capability, and the selected agent's tool policy must allow it.

## Direct Target Formats

Direct formats are primarily useful when explicit unsaved targets are enabled or when an authorized channel identity is addressed directly.

| Platform | Examples |
|---|---|
| Slack | `slack:C123`, `slack:user:U123` |
| Telegram | `telegram:-100123`, `telegram:123456789` |
| Discord | `discord:channel:<channel_id>`, `discord:channel:<channel_id>:<thread_id>`, `discord:user:<user_id>` |
| Email | `email:person@example.com` |

Prefer friendly saved names in routine prompts so raw platform IDs do not spread through task instructions.

## Agent And Task Use

Runtime-capable task turns and task follow-ups may receive `send_message` based on provider support and agent/tool policy. This allows a long-running task to report a result without moving the work outside its reviewable OpenVibely thread.

Outbound sends affect external systems immediately. Review destination and message intent carefully, especially when explicit unsaved targets are enabled.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Configure platform credentials and inbound authorization. |
| [Chat](chat.html) | Use Orchestrate mode to send messages. |
| [Runtime Capabilities](runtime-capabilities.html) | Explains when action tools are available. |
| [Projects](projects.html) | Targets and explicit-target policy belong to the selected project. |
