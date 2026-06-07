---
kind: openvibely.agent_skill
version: 1
skill:
    key: openvibely_doc_site_workflow
    name: OpenVibely Docs Site Workflow
    scope: project
    description: Maintain the OpenVibely docs site with UI-first content, source-verified product claims, static Node build/serve, and Docker preview validation.
---

Use this skill when working in the OpenVibely docs-site repository or updating docs-site content based on OpenVibely product behavior.

- Inspect the current docs source before editing. The site is generated from Markdown pages and a Node build script; do not assume a page, nav label, or generated route exists until you find it.
- Verify product claims against the OpenVibely app repository at `/Users/dubee/go/src/github.com/openvibely/openvibely` before documenting new features, especially lifecycle hooks, skills, memory, agents, schedules, alerts, and configuration.
- Keep docs copy user-facing and outcome-led. The overview should sell the value of OpenVibely as a self-hosted AI coding command center before listing mechanics.
- Keep navigation labels concise. Avoid verbose sidebar descriptions and avoid reintroducing removed automation topics unless explicitly requested.
- For product copy, Skill Curation, Memory Curator, UX, and removed-topic guardrails, apply `references/feature-copy-lessons.md`.
- For runtime, Docker preview, navigation, mobile UI, and removal workflow details, apply `references/completed-task-lessons.md` when relevant.
- When adding or updating project skills that should be merged to main, keep them under `.openvibely/skills/` and verify they are not ignored. The repo should ignore local OpenVibely state with `.openvibely/*` while unignoring `!.openvibely/skills/`; confirm with `git check-ignore -v .openvibely/skills/<skill>/SKILL.md` and `git status .openvibely/skills/`.
- When asked what project skills exist or how to invoke them, use `skills_list` and `skill_view` as the source of truth instead of assuming `.openvibely/skills/` exists in the current task worktree; follow-up worktrees may not include newly created skill files even though the project skill library does.
- After editing source or build code, run `npm run build` and fix all errors before completion.
- If a Docker preview is running and Docker is reachable, rebuild/restart the preview container so `http://localhost:4173` reflects the changes. If Docker is unavailable, report that clearly.
- When deleting or renaming docs topics, scan source and generated output for stale titles, links, and close variants, then rebuild so removed pages do not linger in `dist`.
