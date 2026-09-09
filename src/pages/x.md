# X Channel

The X channel lets approved people create or continue OpenVibely work by mentioning the account connected to a project. Configure and monitor it from `Channels`; use the web app to review resulting tasks, changes, and settings.

## Configure X

1. Create or select an X developer app with OAuth 1.0a user authentication and read/write permission.
2. Generate a consumer key, consumer secret, access token, and access token secret for the account OpenVibely will use.
3. Open `Channels`, select `X (formerly Twitter)`, enter all four values, and choose a mention polling interval from 15 to 300 seconds.
4. Save and use `Test connection` to verify the authenticated account.

Credential fields are write-only: leaving one blank while editing preserves its saved value, and saved secrets are not shown. Removing the integration removes the credentials and stops mention polling.

Your X developer account must be allowed to read mentions and post tweets through the required X API endpoints. OpenVibely cannot grant provider access or bypass account-tier restrictions.

## Authorize Mention Authors

X inbound access is denied by default. Under `Authorized mention authors for this project`, add each allowed person's immutable numeric X user ID. This allowlist is project-scoped, so an identity can use only projects where that ID is authorized.

Usernames are optional labels, not security identities. Use the numeric X user ID from X when granting access.

## Replies And Outbound Posts

`Post assistant responses as replies` controls whether responses to X-created Chat or task work are posted as replies. X output is constrained to the platform's 280 weighted-character limit; longer responses are shortened safely before posting.

For a proactive `send_message` action, create an X outbound target named for its use, such as `announcements`. X supports only the connected account as a destination: address it as `x:me`. Arbitrary users, direct messages, and thread IDs are not supported.

## Project And Task Behavior

Authorized mentions enter the same project-aware Chat and task workflows as other channels. They can create visible work, queue follow-up input, and receive the normal cancellation and capacity behavior. Disabling or removing X stops future polling; work already created in OpenVibely remains available in its project.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Channels Overview](channels.html) | Explains shared channel setup and authorization concepts. |
| [Outbound Messaging](outbound-messaging.html) | Explains saved targets and proactive agent messages. |
| [Tasks](tasks.html) | Review and continue work created from a mention. |
| [Worker Capacity & Dispatch](workers.html) | X-created task work uses normal execution capacity. |
