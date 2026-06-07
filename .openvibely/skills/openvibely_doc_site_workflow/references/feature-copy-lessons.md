# OpenVibely Docs Feature Copy Lessons

Use this reference when updating the OpenVibely docs site for newly added product capabilities or user copy feedback. For runtime, preview, navigation/mobile UX, and removal workflow details, use `completed-task-lessons.md`.

## Source Verification

- Verify new OpenVibely product claims against `/Users/dubee/go/src/github.com/openvibely/openvibely` before editing docs.
- Prefer reading upstream feature guides, commits, built-in agents/skills, route handlers, service code, and scheduled-task setup instead of inferring behavior from names.

## Product Wording Preferences Learned From Prior Docs Work

- Lead overview copy with the user payoff: OpenVibely is a self-hosted AI coding command center that keeps work project-aware, reviewable, scheduled, and improving over time.
- Frame Chat as the central orchestration surface: one conversation can coordinate work through tasks, so users do not need separate terminal windows or many project tabs open. Explain that users can type a goal, let Chat launch or coordinate tasks, follow inline task links, and return to the same conversation.
- Keep high-value Chat orchestration copy near the top of `chat.md`, before mode mechanics or reference tables. Briefly highlight capabilities in the opening overview so users understand the one-window control-center value without scrolling.
- When documenting Chat task creation, highlight prompt enrichment as a core orchestration benefit: Chat does not paste the user's casual words verbatim, it rewrites them into a detailed task prompt with actionable scope, investigation steps, acceptance criteria, and any supplied file paths, snippets, screenshots, or attachments. Explain why this matters: the executing coding agent only receives the task prompt, not the full Chat conversation, so the rewrite automatically carries the missing context into the task.
- When documenting Chat Plan/Orchestrate modes, connect the modes to that one-window workflow: Plan clarifies direction, Orchestrate turns the plan into task execution, and post-plan prompts help continue into Orchestrate.
- When documenting Task Goals, connect them to Chat Orchestrate mode: Chat can create a task and immediately set a persistent goal on it, then manage goals with `set_task_goal`, `clear_task_goal`, `get_task_goal`, `pause_task_goal`, and `resume_task_goal` where supported by mode.
- When documenting model setup recommendations, lead with Codex `gpt-5.5` at `high` reasoning effort as the recommended baseline. Explain that it is the tuned/default setup for most code generation, multi-file edits, test writing, and debugging; reserve `xhigh` for harder cases, and present Claude Opus at `medium` as the secondary option when appropriate.
- Do not mention CLI support, CLI auth paths, or CLI-specific provider behavior in public docs unless the user explicitly asks for it; support is being removed.
- Keep navigation labels short and concrete. The user rejected verbose labels and descriptions in the sidebar.
- Do not use `Autonomous Skill Curation` as a page or nav label; use `Skill Curation` while explaining in body copy that the behavior is autonomous.
- Avoid wording that makes users sound responsible for routing skills. Say OpenVibely curates, selects, creates, and improves reusable skills as work completes.
- Avoid repetitive phrasing such as `selected model and assigned agent, or no-agent task`. Prefer: `Your task still runs normally with the selected model and, when chosen, the assigned agent.`

## Docs Update Triage

- Do not add docs entries for bug-fix-only changes unless the user explicitly asks for release-note-style coverage.
- Treat small reviewer affordances such as Diff Viewer copy filename, collapse/expand, and color polish as usually not docs-worthy unless they change a documented workflow in a meaningful way.
- Avoid documenting one-off model identifiers such as a newly added Claude version by name; prefer durable provider capability guidance, such as which Codex and Anthropic reasoning/effort modes OpenVibely supports.
- When documenting Models or Model Providers, and especially when the user asks which models or versions are supported, include exact supported model/version tables sourced from `web/templates/pages/models.templ` option values and JS effort arrays. Show per-model effort support and call out models with no effort dropdown rather than describing only broad provider families.
- When a user downscopes an audit item as `not worth mentioning`, remove it from the implementation plan rather than preserving it as a lower-priority docs update.

## UI-First Feature Pages

- If a page already exists but reads like a conceptual reference, strengthen it with an actual UI walkthrough before adding more abstraction: what page users open, what panels/tables/badges they see, what each column means, and the click path to change settings.
- For operational controls such as Workers, document how controls affect product behavior with concrete examples. Cover global limits, per-project limits, special values such as project `0` meaning `no limit`, live refresh behavior when relevant, and quick tuning patterns based on symptoms users can observe.
- When documenting worker capacity, make the parallelism impact explicit: global capacity caps total running task execution, project capacity caps how many tasks one project can run at once, and Chat remains the orchestration surface even while task execution queues behind those limits.

## Skill Curation Facts To Preserve

- Task lifecycle hooks include `route_task`, `before_run`, and `after_complete` behavior.
- After-complete learning can improve scoped standalone skills and, when a task used an assigned agent, skills owned by that assigned agent via `agent_skill_manage`.
- Scheduled `System: Skill Library Maintenance` primarily keeps standalone skills useful and discoverable, and may maintain non-system agent-owned skill packages when the guidance is agent-specific; do not imply it creates, edits, routes, reassigns, archives, or otherwise changes agent configurations.
- Explain the distinction clearly: scheduled maintenance keeps reusable skill packages healthy, while after-complete curation improves selected or assigned-agent-owned skills from completed work patterns.

## Memory Curator Facts To Preserve

- Highlight autonomous memory creation, management, and consolidation as a major product value: OpenVibely learns project knowledge as users work.
- Document Memory Curator as a protected system agent with memory-focused tools such as `recall_memory`, `update_memory`, and scheduled consolidation.
- Enabling memory creates or maintains a visible scheduled consolidation task. Present this as repo-local, controlled project memory rather than a generic chatbot transcript store.
- High-visibility pages for this message are the homepage, Features Overview, Memory, Agents, Scheduled Tasks, Task Lifecycle, and setup/onboarding pages.

## Docs-Site Content Pattern

- Prefer a hybrid structure: high-level overview pages that let users quickly get the gist, plus focused deep-dive pages for features and subfeatures.
- Keep feature pages user-facing first, then add implementation details only where they help users understand behavior, scope, safety, or configuration.
- When removing deprecated or unwanted feature topics, scan both source and generated output for page names, links, and close variants; deleted source pages should not remain discoverable in generated `dist`.

## Removed Topic Guardrails

- Do not reintroduce docs pages or nav links for `Templates`, `Patterns`, `Architect Mode`, `Backlog Suggestions`, or `Autonomous Builds` unless the user explicitly asks to restore them.
- After broad docs edits, scan source and generated output for those exact feature-page terms to make sure they remain absent.
