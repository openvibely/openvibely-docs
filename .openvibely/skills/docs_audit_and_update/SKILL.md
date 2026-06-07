---
kind: openvibely.agent_skill
version: 1
skill:
    key: docs_audit_and_update
    name: OpenVibely Docs Audit And Update
    scope: project
    description: Audit the OpenVibely app repository for changes since a commit hash or release version and update the docs site accordingly.
---

Use this skill when the user gives a commit hash, tag, or release version and asks you to compare OpenVibely app changes since that point against the docs site, then plan or perform documentation updates.

## Workflow

1. Establish scope before editing.
   - Resolve the base ref with `git rev-parse <ref>` or release/tag lookup.
   - Use the OpenVibely app repo history as source of truth: `git log --oneline <base>..HEAD`, `git diff --name-status <base>..HEAD`, and targeted `git diff <base>..HEAD -- <path>`.
   - If the user asks for audit only, produce a prioritized plan and do not edit docs.

2. Triage for docs-worthiness.
   - Document user-visible features, workflows, configuration, model/provider behavior, channels, task/agent behavior, scheduling, worker/dispatch behavior, capabilities, lifecycle hooks, skills, memory, review flows, attachments, webhooks, gateway/ops, and safety behavior.
   - Skip bug fixes, transient implementation details, minor UI polish, and low-value controls unless they change how users perform a workflow.
   - If a change is borderline, ask or mark it lower priority rather than inflating docs.

3. Compare against existing docs direction before writing.
   - Read the relevant docs pages and navigation/build config first.
   - Prefer UI-first explanations: describe what users see, where they click, what the state means, and what outcome to expect.
   - Use `openvibely_doc_site_workflow` and its references for site build, copy, and guardrails.

4. Plan updates by priority.
   - P0: brand-new feature or workflow with no docs coverage.
   - P1: major existing page gaps that users will hit.
   - P2: meaningful corrections or cross-links for existing docs.
   - P3: brief mentions that improve discoverability.

5. Update docs with source-verified claims.
   - Prefer editing existing pages over creating new pages unless the feature is first-class enough to warrant its own page.
   - When creating a page, add it to navigation and related links where appropriate.
   - Include only stable product behavior; avoid mentioning provider CLI support or other deprecated/soon-to-be-removed internals.
   - For model/provider docs, include recommended defaults when requested: primary recommendation is Codex `gpt-5.5` with `high` reasoning effort; secondary Claude Opus recommendation is `medium` effort.

6. Cover orchestration and dispatch concepts clearly when touched.
   - Chat should be described as the central orchestrator: one conversation can plan, create, coordinate, and monitor tasks without separate terminals or windows.
   - Note that Chat rewrites/enriches user requests into actionable task prompts because the task-running agent receives the task prompt, not the full chat history.
   - If task goals are in scope, document that Chat Orchestrate mode can create tasks and set/manage goals for them.
   - If workers are in scope, document how global and per-project limits affect parallel task execution, including that project limit `0` means no project-specific cap.

7. Validate and report.
   - Run the docs build after edits, normally `npm run build` from the docs site.
   - Smoke-check generated pages or rendered output for new/changed sections.
   - Report what changed, what was intentionally excluded, and any source files or commits that substantiate major claims.

See `references/audit-process.md` for the source-path map, checklist, and report format.