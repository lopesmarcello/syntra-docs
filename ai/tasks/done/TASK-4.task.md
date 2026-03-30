# TASK-4: Author Getting Started Section Content

## Context
The `getting-started` section still has an empty landing page and needs a cohesive narrative that matches the existing Installation, Quick Start, and Core Concepts pages. This task writes the missing overview content and aligns onboarding flow language so first-time users can reliably move from zero setup to their first task execution.

## References
- **Agent**: [code-generator](../agents/code-generator.agent.md)
- **Instructions**:
  - [architecture](../instructions/architecture.instructions.md)
  - [style](../instructions/style.instructions.md)

## Dependencies
TASK-3

## Steps
1. [ ] Use `ai/tasks/active/TASK-3-audit.md` as the source brief for `content/docs/getting-started/index.mdx` and confirm audience, feature scope, and source files before writing.
2. [ ] Replace the `> Content coming soon.` placeholder in `content/docs/getting-started/index.mdx` with complete content covering: what Syntra is, who it is for, source-of-truth model, and recommended next pages.
3. [ ] Review `content/docs/getting-started/{quick-start,installation,concepts}.mdx` for consistency with the new intro narrative and correct factual/wording issues only when necessary.
4. [ ] Ensure links and command examples remain consistent with the existing docs set (`/docs/getting-started/*`, `/docs/commands/*`, and `ai/config.yml` behavior).
5. [ ] Run a section sanity pass to ensure no placeholders remain in the getting-started section and content style matches existing MDX patterns.

## Acceptance Criteria
- [ ] `content/docs/getting-started/index.mdx` contains complete, non-placeholder content.
- [ ] The new content explicitly identifies target users and explains Syntra’s single-source-of-truth workflow.
- [ ] Any edits to `quick-start`, `installation`, or `concepts` are minimal, factual, and non-destructive.
- [ ] Cross-links in getting-started pages resolve to valid docs routes.
- [ ] No new placeholders are introduced.

## Notes
- Primary sources: `ai/config.yml`, `content/docs/getting-started/{installation,quick-start,concepts}.mdx`, `content/docs/guides/team-workflow.mdx`, `content/docs/commands/{init,sync}.mdx`.
- Do not change other sections in this task.
