# Chat

Chat is the project-scoped conversation surface. It is meant for exploration, planning, follow-up, and turning natural language into executable work without leaving the selected project.

## What Users Do

Open `Chat` from the Workspace section of the sidebar. Pick the project first, then use the chat input to ask questions, plan changes, attach files, or orchestrate work.

| UI Capability | What It Enables |
|---|---|
| Project-scoped messages | Keep conversation grounded in the selected project. |
| Model and agent controls | Choose `Auto`, the default model, or a specific configured agent/model when available. |
| Chat modes | Choose `Orchestrate` when you want OpenVibely to take action, or `Plan` when you want safer planning and analysis first. |
| Attachments | Add files as extra context for the conversation. |
| Streaming responses | Watch answers arrive live instead of waiting for a full page refresh. |
| Clear history | Reset the conversation for the selected project when needed. |

## Plan And Orchestrate Modes

The chat input includes a mode selector with two options. OpenVibely defaults to `Orchestrate` when no mode is selected, and the selected mode is remembered per project in the browser.

| Mode | Use It When | Behavior |
|---|---|---|
| `Orchestrate` | You want Chat to help create, inspect, or coordinate real project work. | Enables action-oriented chat tools such as creating and managing tasks, reading project state, and coordinating workflow actions. |
| `Plan` | You want to think through an approach before anything is created or changed. | Keeps the conversation planning-oriented and limits action tools so the assistant can analyze, propose steps, and refine the plan first. |

A good default workflow is to start in `Plan` for vague or risky work, then switch to `Orchestrate` when the next task is clear.

## When To Use Chat

Use Chat when the task is not fully formed yet. Good examples include asking what changed in a project, breaking a vague goal into tasks, comparing implementation options, or asking OpenVibely to create follow-up work from a discussion.

Use Tasks instead when you already know the exact unit of work and want board state, scheduling, run/cancel controls, worktree review, chaining, or pull request actions.

## Typical Flow

1. Select the project in the sidebar.
2. Open Chat.
3. Pick `Plan` or `Orchestrate` from the chat input controls.
4. Ask a question or describe the goal.
5. Attach files if they help explain the request.
6. Use the response to continue planning, create tasks, or inspect existing project work.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Tasks](tasks.html) | Chat can lead into executable task work. |
| [Attachments](attachments.html) | Files can be attached to chat and task context. |
| [Agents](agents.html) | Agents define reusable behavior for execution and orchestration. |
