# Attachments As Context

Attachments add file context to chat messages and tasks. They are contextual inputs for a conversation or execution, not a general-purpose project file store and not automatically durable project memory.

Use attachments when the prompt needs something that is easier to provide as a file: screenshots, logs, specs, code snippets, generated reports, PDFs, or sample data.

## Where Users Add Attachments

| Surface | What Attachments Do |
|---|---|
| Chat | Give the project conversation extra context while planning, asking questions, or orchestrating work. |
| Queued Chat input | Attachments can stay associated with a queued prompt while an active turn finishes. |
| Tasks | Give task execution extra files to consider alongside the prompt and project context. |
| Follow-ups | Help explain review feedback, errors, screenshots, or additional instructions for the same task. |
| Slack, Telegram, Discord, and Email | Add channel-uploaded files to the shared Chat/task context, including supported images for vision-capable models. |

## What The UI Shows

Attachment components include file lists, empty states, image previews, download links, delete controls, and file-size formatting. The task creation modal supports multiple files with a max-size hint. Repeated drag-and-drop or file-picker additions accumulate instead of replacing earlier selections.

Composer attachments survive live-stream reconnects. When Chat creates a task from attached files, OpenVibely converts the attachment set before auto-starting the task; only a successfully converted task is activated, avoiding a run with partial context.

For Chat API-style flows, attachment URLs can be returned so clients can reference the uploaded files associated with the accepted message.

## How Attachments Become Context

| File Type | Typical Handling |
|---|---|
| Text/code files | Useful as inline context for prompts and review. |
| Images/screenshots | Useful for visual bugs, UI review, error dialogs, and design references. |
| PDFs/documents | Useful for specs, reports, migration notes, or external instructions. |
| Logs/output | Useful for failures, tests, deployment issues, and debugging requests. |

Attachments should support the prompt. If a file contains important durable project knowledge, ask OpenVibely to extract and preserve the durable lesson through normal memory behavior instead of assuming the attachment itself becomes memory.

## Good Attachment Use Cases

- Add a design note or issue description to a task.
- Attach a screenshot or sample output to explain a bug.
- Provide a spec or migration note during chat planning.
- Add logs from a failed deployment or test run.
- Include a small diff or patch for review discussion.
- Provide temporary context that should not become project memory.

## Boundaries

- Attachments are scoped to the chat message, queued input, task, or follow-up that uses them.
- Attachments do not replace repository files or project settings.
- Attachments do not automatically become durable managed memory.
- Attachments should not be used for secrets that should never be persisted.
- Large or ambiguous attachments still need clear prompting so the model knows what to inspect.

## Examples

| Use Case | Attachment Pattern |
|---|---|
| "Plan how to implement this API from the spec." | Attach the spec in Chat `Plan`. |
| "Fix this UI bug." | Attach a screenshot and describe the expected behavior. |
| "Continue the task using these failing test logs." | Attach logs to a task follow-up. |
| "Create implementation tasks from this product brief." | Attach the brief in Chat `Orchestrate`. |
| "Remember this architecture decision permanently." | Use the attachment as context, then rely on Memory Curator for durable memory if the completed work contains a lasting lesson. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Discord](discord.html) | Discord messages can include files and vision images. |
| [Email](email.html) | Email supports attachment-only intake and provider-specific limits. |
| [Slack](slack.html) | Slack app mentions and file-share events can carry attachments. |
| [Telegram](telegram.html) | Telegram messages can include photos, documents, and other supported attachment types. |
| [Chat](chat.html) | Chat messages can include attachments. |
| [Prompt Queue & Steering](prompt-queue-steering.html) | Queued prompts can preserve associated attachment context. |
| [Tasks](tasks.html) | Tasks can include attachments at creation and in detail flows. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Follow-ups can use attachments to continue one task. |
| [Memory](memory.html) | Memory is durable project knowledge; attachments are contextual inputs. |
