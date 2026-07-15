# Chat

Chat is your single control center for everything happening in a project. Describe what you want — a bug fix, a new feature, a refactor across multiple files — and Chat creates the tasks, runs them in parallel, and reports back. No terminal, no separate AI windows, no manual task wiring. One conversation drives the whole project.

## Chat As Your Single Control Center

The fundamental idea behind Chat is that you should never need more than one window open. Instead of keeping a terminal running, a separate AI session for research, another for writing code, and a third for tests, you stay on the Chat page and describe what you want done. OpenVibely creates the tasks, runs them, and reports back — all from that one conversation.

This matters most when a goal has multiple parts. Say you want to add a new feature with backend changes, frontend wiring, and tests. Rather than creating each task manually, switching between them, and tracking what finished, you describe the goal once in Chat and ask it to break the work apart. Chat creates the task cards, starts the independent ones in parallel, and remains the place you return to ask what is done, what is blocked, and what should happen next. Each task keeps its own thread, diff review, and lifecycle — but the original goal and the coordination stay in the Chat window.

Chat embeds clickable task links inline as it creates work, so you can jump to a task detail, review the diff, send a follow-up, and come back to Chat without losing your place in the conversation.

**What Chat can orchestrate from a single conversation:**

- Create one task, many independent tasks, or one coordinated swarm from a natural-language request
- Set a persistent goal on a task so the Goal Agent drives it to completion automatically
- Execute tasks and report their status back into the conversation
- Send follow-up instructions into individual task threads
- Inspect task state, changes, agent output, and lifecycle events
- Schedule work, manage alerts, and coordinate across the whole project
- Send proactive messages through saved Slack, Telegram, Discord, or Email outbound targets
- Accept steering or queue new prompts while a response is already in progress

That is the core OpenVibely flow: stay on the Chat page while the orchestrator handles the parallel work. The Tasks page is the board and review surface, but Chat is where the work begins and where coordination stays.

## How Chat Writes Task Prompts

When Chat creates a task, it does not paste your words verbatim. It rewrites your request into a detailed, actionable instruction the executing agent can work from immediately.

If you say "fix the login bug," Chat creates a prompt along the lines of "Debug and fix the login bug that prevents users from signing in. Investigate the authentication flow, identify the root cause, and implement a fix with tests." The agent receives something specific enough to act on — you never had to spell all that out.

This matters because the coding agent that runs the task has no memory of your conversation. The task prompt is everything it knows. A thin prompt produces thin results. Chat's rewrite closes that gap automatically.

**What gets embedded in the rewritten prompt:**

- The intent and scope of your request, expanded into a clear instruction
- Any file paths, code snippets, or configuration you pasted into Chat — included verbatim so the agent acts on the exact code you showed it
- Screenshots or attachments referenced alongside the relevant instruction
- Concrete acceptance criteria or constraints you mentioned in passing

You can always open the task and read the full prompt Chat wrote. If it missed something, edit it before the task runs. But in most cases Chat produces a prompt that would have taken several minutes to write yourself.

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

A good default workflow is to start in `Plan` for vague or risky work, then switch to `Orchestrate` when the next task is clear. Plan mode does not execute mutation markers or action text; Orchestrate-capable providers use runtime tool calls for real actions. When a `Plan` turn finishes, Chat surfaces a prompt to continue in `Orchestrate` mode so you can move from analysis to action without manually switching modes.

## Parallel Task Example

When a goal has multiple independent parts, ask Chat to split them explicitly:

```
Plan the changes needed for OAuth login, then create separate tasks for backend routes, UI wiring, tests, and docs. Run the independent tasks in parallel where possible and keep this chat updated as they finish.
```

In `Orchestrate` mode, Chat creates multiple task cards and can execute them immediately. Each task keeps its own status, thread, lifecycle events, diff review, and worktree actions — but the original Chat page stays the place to ask what is done, what is blocked, and what comes next.

## What Stays Centralized

- The selected project context stays fixed for the whole conversation.
- Chat history keeps the original goal, plan, and follow-up decisions together in one place.
- Task links produced by Chat open the relevant task detail without leaving the project workflow.
- Running chat turns can accept steering or queue follow-up prompts instead of forcing a new session.

## Outbound Messages

In `Orchestrate` mode, Chat can send messages through configured Slack, Telegram, Discord, and Email channels. Save allowed destinations under `Channels` -> `Outbound Message Targets`, optionally mark one Home target per platform, and ask Chat to send to the saved name or destination. Inbound Authorized Users and outbound targets are separate controls: one determines who may instruct OpenVibely, while the other determines where agents may proactively send.

By default, sends are limited to saved or Home targets. Operators can separately allow explicit unsaved destinations when that broader policy is required. See [Outbound Messaging](outbound-messaging.html) for target formats, project scope, and safety controls.

## Stop An Active Response

While Chat is generating, the send control becomes `Stop response`. Use it to cancel the active model run; the conversation records that cancellation instead of presenting the turn as a normal completion. This does not remove prompts already queued for later. Cancel a queued row separately if it should not run.

## Streaming And Reconnects

Chat reconnects live streams from the last received output offset and catches up from durable output before showing terminal completion. Composer attachments are preserved across the reconnect. If a browser or gateway connection drops briefly, wait for catch-up before resending the prompt to avoid duplicate work.

## Queueing And Steering

If Chat is already responding, a new prompt can become queued input for the next turn. When the UI offers active-turn steering, a prompt can instead redirect the current response. This keeps the project conversation responsive without forcing users to open another thread just to add context or correct scope.

## When To Use Chat

Use Chat when the task is not fully formed yet or when one goal needs coordinated parallel work. Good examples include asking what changed in a project, breaking a vague goal into tasks, comparing implementation options, asking OpenVibely to create follow-up work from a discussion, or managing several task threads from one central chat window.

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
| [Swarm Orchestration](swarm-orchestration.html) | Chat can create a coordinated parent with planner, worker, reviewer, and merger roles. |
| [Runtime Capabilities](runtime-capabilities.html) | Shows which actions Orchestrate, tasks, and providers can receive. |
| [Outbound Messaging](outbound-messaging.html) | Configures safe project-scoped destinations for proactive sends. |
| [Task Goals](task-goals.html) | Chat can set, pause, resume, and clear goals on tasks from Orchestrate mode. |
| [Prompt Queue & Steering](prompt-queue-steering.html) | Explains what happens when prompts arrive during an active chat turn. |
| [Tasks](tasks.html) | Chat can lead into executable task work. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Chat can inspect or send follow-ups into task threads. |
| [Attachments As Context](attachments.html) | Files can be attached to chat and task context. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Plan and Orchestrate expose different tool boundaries. |
| [Agents](agents.html) | Agents define reusable behavior for execution and orchestration. |
