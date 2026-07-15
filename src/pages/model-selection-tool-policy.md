# Model Selection & Tool Policy

Model selection decides which provider configuration runs a prompt. Tool policy decides what that run is allowed to do. Together they explain why the same project can feel different in Plan mode, Orchestrate mode, a task run, or a provider-specific model configuration.

## Where Users Choose Models

| Surface | Selection Behavior |
|---|---|
| App settings | Defines model configs and the default model. |
| Project settings | Can set a project-specific default. |
| Chat | Lets users choose Auto, default, or a specific configured model/agent where available. |
| Tasks | Can use the default model or a task-specific override. |
| Agents | Can carry reusable model and behavior preferences. |
| Schedules and webhooks | Reuse the task or configured defaults when creating work. |

## Selection Order

When a user does not choose a one-off model, OpenVibely falls back through configured defaults. The practical reading is simple: a task-specific choice is most explicit, project/app defaults cover routine work, and agent choices help make repeated role-based work consistent.

If no usable model is configured, OpenVibely cannot run AI work until the Models setup is completed.

## Mode-Gated Tool Policy

| Mode Or Surface | Tool Boundary |
|---|---|
| Chat `Plan` | Read-only planning and analysis. Mutating tools are blocked by transport-level policy, not only by prompt wording. |
| Chat `Orchestrate` | Action-oriented chat tools can inspect project state, create/manage tasks, schedule work, and coordinate workflow actions. |
| Task execution | Uses task runtime tools appropriate to the task, selected model, assigned agent, and project. |
| Task follow-up | Preserves task context and available scoped runtime tools while respecting worker capacity. |
| Provider-native tools | Some tools, such as provider web search, are executed by the provider and are not local repository tools. |

## What Users See

Plan mode is safest when the user wants an approach, comparison, or review before action. Orchestrate mode is the core control surface when the user wants Chat to create, run, inspect, or manage real work. Task execution is where repository-changing work happens and becomes reviewable through task output and diffs.

## Provider Differences

| Provider | Practical Difference |
|---|---|
| Anthropic | Supports Anthropic auth paths and provider-managed tool behavior where configured. |
| OpenAI | Supports OpenAI auth paths, OAuth account/workspace details, and provider-managed web/search-style tools where configured. |
| Ollama | Runs against a local or configured Ollama base URL and is useful when local model control matters. |
| OpenAI-compatible | Runs OpenAI-style Chat Completions providers, gateways, and local runtimes through built-in presets or a custom endpoint. Presets include hosted routers such as OpenRouter, NVIDIA NIM, DeepInfra, Fireworks, Groq, Mistral, Cerebras, Together, Hugging Face Router, DeepSeek, Moonshot, and regional/local options such as DashScope/Qwen, Z.AI/GLM, StepFun, Tencent TokenHub, vLLM, LM Studio, SGLang, and LiteLLM. |
| Mixture of Models | Runs private, tool-free reference calls first, then lets the configured aggregator act with only the tools supported by its provider and policy. |

Provider features differ. Tool availability should be read from the selected mode and configured provider rather than assumed from the model name alone. OpenAI-compatible presets provide endpoint and discovery defaults, but they do not guarantee identical provider-native tools across every backend.

## Examples

| User Need | Recommended Surface |
|---|---|
| "Read this code and propose the safest migration plan." | Chat `Plan` |
| "Create backend, frontend, and test tasks for this feature." | Chat `Orchestrate` |
| "Run this known code change with the fast local model." | Task with a specific model override |
| "Use my reviewer agent for PR cleanup." | Task or Chat action with the reviewer agent selected |
| "Ask the model to search externally if supported." | Provider/model config that supports provider-native search tools |

## What It Does Not Do

- Plan mode does not rely only on the assistant being told to behave; mutating tools are blocked.
- Orchestrate mode does not mean every request changes files; it means action tools are available when appropriate.
- Provider-native tools are not the same as local repository tools.
- Choosing a stronger model does not skip worker capacity, review, or merge safety.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Runtime Capabilities](runtime-capabilities.html) | Lists task, swarm, schedule, goal, messaging, and GitHub capability groups. |
| [Mixture of Models](mixture-of-models.html) | Reference calls are private and tool-free; aggregator policy controls action. |
| [Chat](chat.html) | Explains Plan and Orchestrate from the user perspective. |
| [Chat](chat.html) | Shows how Chat coordinates multiple tasks from one window. |
| [Models Overview](models.html) | Covers model setup and defaults. |
| [Model Providers](model-providers.html) | Provider-specific setup details. |
| [Worker Capacity & Dispatch](workers.html) | Model configs participate in capacity control. |
