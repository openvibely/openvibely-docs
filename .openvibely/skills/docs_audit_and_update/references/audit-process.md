# Docs Audit Process Reference

Use this file during a docs audit triggered by a commit hash or release version. It covers the domain map, triage rules, source-path signals, and per-area docs targets.

---

## Domain Map — Source Paths → Docs Areas

When scanning `git diff <base>..HEAD --name-only`, group files by domain and map to the docs areas below.

| Source path pattern | Docs area to check |
|---|---|
| `web/templates/pages/chat.templ` | `chat.md`, `orchestrate-from-chat.md` |
| `web/templates/pages/task_detail.templ` | `tasks.md`, `task-lifecycle.md`, `task-threads-followups.md`, `task-diffs-review.md` |
| `web/templates/pages/tasks.templ` | `tasks.md` |
| `web/templates/pages/agents.templ` | `agents.md` |
| `web/templates/pages/skills.templ` | `skills-and-learning.md` |
| `web/templates/pages/models.templ` | `models.md`, `model-providers.md` |
| `web/templates/pages/analytics.templ` | `insights.md` |
| `web/templates/pages/workers.templ` | `workers.md` |
| `web/templates/pages/projects.templ` | `projects.md` |
| `web/templates/pages/dashboard.templ` | `dashboard.md` |
| `web/templates/pages/scheduling*.templ` | `scheduling.md` |
| `web/templates/pages/alerts*.templ` | `alerts.md` |
| `web/templates/components/diff_viewer.templ` | `task-diffs-review.md` |
| `web/templates/components/task_detail_helpers.templ` | `tasks.md`, `task-lifecycle.md` |
| `web/templates/layout/sidebar.templ` | nav in `scripts/build.mjs` |
| `internal/models/task_goal.go` | `task-goals.md` (may need new page) |
| `internal/models/usage.go` | `insights.md` |
| `internal/handler/task_goal_handler.go` | `task-goals.md` |
| `internal/handler/lifecycle_handler.go` | `task-lifecycle.md`, `lifecycle-hooks.md` |
| `internal/handler/agent_skills_handler.go` | `agents.md` |
| `internal/handler/agent_lifecycle_form.go` | `agents.md`, `lifecycle-hooks.md` |
| `internal/handler/analytics_handler.go` | `insights.md` |
| `internal/handler/workers_handler.go` | `workers.md` |
| `internal/handler/channels_*` | `channels.md`, `slack.md`, `telegram.md` |
| `internal/agentskills/skills_index.go` | `skills-and-learning.md` |
| `internal/service/lifecycle_runtime.go` | `task-lifecycle.md`, `lifecycle-hooks.md` |
| `internal/service/usage_analytics_service.go` | `insights.md` |
| `internal/builtinskills/builtin/agents/*/` | `agents.md` system curators table |
| `internal/database/migrations/` | Check what entity was added — map to feature area |
| `internal/llm/prompt/utils.go` | `model-providers.md` effort/reasoning section |
| `internal/worktree/` | `git-worktrees.md` |
| `internal/webhook/` | `webhooks.md` |
| `internal/attachment/` | `attachments.md` |

---

## Triage Rules — What Is and Is Not Docs-Worthy

### Always document
- New user-facing pages or dedicated UI sections (tabs, panels, new routes)
- New first-class features with their own model, service, and handler (e.g. Task Goals, Analytics token tracking)
- Changes to how existing features behave that users would act on differently
- New configuration options or settings that affect outcomes
- New system agents or skills added to the built-in agent roster
- New model families or effort/reasoning mode support
- New channel surfaces or capabilities on existing channels (Slack, Telegram)
- Any change where the existing docs would actively mislead a user

### Do not document
- Bug fixes and correctness patches unless the fix changes a documented behavior
- UI polish (button styling, spacing, color tweaks, copy adjustments) unless it changes a documented workflow step
- One-off new model identifiers by name — prefer updating provider capability guidance and model/effort tables instead
- Internal refactors with no user-visible behavior change
- Test files, migration files with no user-visible schema effect, CI config

### Escalate to user before deciding
- Removals or deprecations of existing features
- Changes that could go on multiple pages — ask where the user wants the canonical treatment
- Anything where the source behavior is genuinely ambiguous after reading the code

---

## Docs Coverage Checklist

When a large diff spans many areas, use this checklist to avoid missing a coverage zone. For each area, check whether the diff touched its source paths and whether existing docs would still be accurate.

- [ ] Dashboard
- [ ] Projects
- [ ] Chat (Plan mode, Orchestrate mode, task creation, prompt enrichment, goal management from chat)
- [ ] Tasks (task detail, goal panel, changes tab, lifecycle tab, thread/follow-ups, steering)
- [ ] Agents (agent list, detail tabs: Details / Skills / Lifecycle Hooks, system curators table)
- [ ] Skills (Skills page UI, skill states: enabled/disabled/always-use/archived)
- [ ] Models (supported models table, effort/reasoning modes per model, recommended setup)
- [ ] Scheduling
- [ ] Alerts
- [ ] Memory (Memory Curator facts, recall/consolidation, on-disk agent path)
- [ ] Configuration
- [ ] Review Workflows (diff viewer, approval steps)
- [ ] Capabilities (task goals, task chaining, prompt queue/steering, attachments, webhooks)
- [ ] Channels (shared channel behavior, Slack, Telegram)
- [ ] Platforms
- [ ] Gateway & Ops
- [ ] Lifecycle Hooks (hook types, pills, tool scope/permissions)
- [ ] Skill Curation (after-complete curation, skill library maintenance)
- [ ] Workers (global/project limits, live stats, quick tuning)
- [ ] Git Worktrees / Merge Safety

---

## Per-Area Docs Targets Quick Reference

| Area | Primary page | Secondary pages |
|---|---|---|
| Task Goals | `task-goals.md` | `tasks.md`, `agents.md`, `channels.md`, `slack.md`, `telegram.md` |
| Skills Page / Skill States | `skills-and-learning.md` | `agents.md` |
| Analytics / Token Usage | `insights.md` | — |
| Agent UI Tabs | `agents.md` | `lifecycle-hooks.md` |
| Task Lifecycle Tab | `task-lifecycle.md` | `tasks.md` |
| Task Thread Steering | `task-threads-followups.md` | `prompt-queue-steering.md` |
| Memory Curator | `memory.md` | `agents.md` |
| Model Effort/Reasoning | `model-providers.md` | `models.md` |
| Chat Orchestration | `chat.md` | `orchestrate-from-chat.md` |
| Workers / Parallelism | `workers.md` | — |
| Diff Viewer | `task-diffs-review.md` | — |

---

## Recommended Report Format

After completing an audit, produce:

1. **Priority table** — columns: `#`, `Feature`, `Priority (P0–P3)`, `Target Page(s)`, `New Page?`
2. **Detail block per item** — feature description, why it matters, what's in source (file paths + commit hashes), suggested section/heading
3. **Exclusions list** — what was found but is not docs-worthy and why

Priority guide:
- **P0** — New feature with zero docs coverage; a user would not know it exists
- **P1** — Existing docs would actively mislead the user about how a feature works
- **P2** — Existing docs are incomplete but not wrong; users would notice a gap
- **P3** — Minor additions, cross-links, or one-line updates to keep docs current

---

## Source Verification Checklist

Before writing any claim in docs, verify it in source:

- [ ] Read the model file (`internal/models/*.go`) for field names and status values
- [ ] Read the handler (`internal/handler/*.go`) for route behavior and what's returned
- [ ] Read the service (`internal/service/*.go`) for business logic and side effects
- [ ] Read the template (`web/templates/pages/*.templ` or `components/*.templ`) for UI labels, tab names, button text, badge names
- [ ] Read built-in agent/skill files (`internal/builtinskills/builtin/agents/*/`) for system agent names and skill keys
- [ ] Check the JS effort config array in `web/templates/pages/models.templ` for exact model identifiers and supported effort levels
- [ ] Check migration files (`internal/database/migrations/`) to confirm a feature is fully shipped, not just scaffolded

Do not document a feature based on commit messages alone — always read the code.
