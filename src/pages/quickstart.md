# Quickstart

Use this UI-first flow to get from an installed OpenVibely app to a running AI coding task.

## 1. Start OpenVibely

| Installation | Start It |
|---|---|
| macOS desktop | Open `OpenVibely` from `~/Applications` or Spotlight. |
| Linux desktop | Open `OpenVibely` from the application menu or run `openvibely-desktop`. |
| Windows desktop | Open `OpenVibely Desktop` from the Start Menu. |
| macOS or Linux binary | Run `openvibely`, then open `http://localhost:3001`. Press `Ctrl+C` to stop it. |
| Windows binary | Open `OpenVibely Server` from the Start Menu, then open `http://localhost:3001`. |
| Source checkout | Run `./start.sh`, then open `http://localhost:3001`. |

See [Installation](installation.html) if OpenVibely is not installed yet.

## 2. Add A Model In The App

Open **Settings → Models** and create a model configuration. For the shortest Codex path, add `gpt-5.6-sol` with `medium` reasoning effort and set it as the default model.

| Provider Path | Typical Setup |
|---|---|
| OpenAI | OAuth or API key auth for Codex models. Suggested starting model: `gpt-5.6-sol`; if its model config does not specify a reasoning effort, the runtime uses `medium`. |
| Anthropic | OAuth or API key auth for Claude models. Useful as a secondary coding model. |
| Ollama | Local model server, defaulting to `http://localhost:11434` when no base URL is set. |
| OpenAI-compatible | Use a built-in preset or custom endpoint for OpenAI-style Chat Completions providers and gateways. Presets include OpenRouter, NVIDIA NIM, DeepInfra, Fireworks, Groq, Mistral, Cerebras, Together, Hugging Face Router, DeepSeek, Qwen / DashScope, Z.AI / GLM, Tencent TokenHub, LiteLLM, vLLM, LM Studio, SGLang, and more. |

Use the preset list when your provider appears there; OpenVibely can fill the expected endpoint pattern and try model discovery. Use `Custom OpenAI-Compatible` for a gateway or local runtime that needs its own base URL, auth header, extra headers/body, or manual model ID.

Set a default model if you want new tasks to work without choosing a model every time. See [Model Providers](model-providers.html) for the full provider setup guide.

## 3. Create A Project

Open the plus menu beside the project tabs, or the project selector on a narrow layout, and choose `Create New Project`. A project gives Chat, Tasks, Schedule, Workers, Alerts, Memory, Insights, and Channels their shared workspace.

Choose either a local repository path or a repository URL. Local paths are enabled by default in desktop mode, but server mode requires `OPENVIBELY_ENABLE_LOCAL_REPO_PATH`.

Once you have several projects, select **All projects** to manage their work together. Individual tabs keep each project's workspace available. The far-left app rail switches pages; the task list beside it manages work in Active, Completed, Backlog, and Scheduled groups. See [Workspace Overview](dashboard.html).

## 4. Start From Chat Or Tasks

| If You Know The Exact Work | If You Need To Explore First |
|---|---|
| Click **+ New task** above the left task list, beside search, to start a new task. In All projects, choose its owning Project in Details. Write the request in the composer, adjust properties in Details, and send the first message to create it. | Open `Chat`, ask about the project or describe the request, attach files if useful, then let the conversation guide task creation. |

## 5. Run And Watch Progress

Creating an Active task starts execution; Backlog saves it for later. Watch status in the left task list while the thread stays open. Select other tasks, right-click for available actions, or drag tasks between categories as work progresses. The list works as a vertical Kanban, including across projects when All projects is selected.

Open **Tasks** from the app rail when you prefer side-by-side columns, filters, or batch actions. Live events update task state, and Alerts can notify you about failures or follow-up events.

## 6. Review Before Shipping

Open the task detail view to inspect the prompt, thread, execution output, attachments, changed files, review comments, worktree state, and pull request options when a repository is attached.

## Next Steps

| Want To... | Read Next |
|---|---|
| Understand the main surfaces | [Workspace Overview](dashboard.html), [Projects](projects.html), [Chat](chat.html), and [Tasks](tasks.html) |
| Configure reusable AI behavior | [Agents](agents.html) and [Models](models.html) |
| Automate recurring work | [Schedule](schedule.html) and [Scheduled Task Runs](scheduled-tasks.html) |
| Review code safely | [Git Worktrees & Merge Safety](git-worktrees.html) and [Task Lifecycle](task-lifecycle.html) |
