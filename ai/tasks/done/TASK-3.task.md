# TASK-3: Audit Missing Docs and Create Per-Section Content Tasks

## Context
27 MDX files across 7 sections currently contain only `> Content coming soon.` placeholders. This task audits every empty page, cross-references source material from the `ai/` directory and any available CLI README/source, then produces 7 focused writing tasks (TASK-4 through TASK-10) — one per section — so content can be written and reviewed independently. A full build check validates no pages are broken after the audit.

## References
- **Agent**: [task-planner](../agents/task-planner.agent.md)
- **Instructions**:
  - [architecture](../instructions/architecture.instructions.md)

## Dependencies
None

## Steps
1. [x] **Audit all 27 empty MDX files** — for each file, note: intended audience, what Syntra feature it covers, and which source files in `ai/` (agents, instructions, config) or the project README apply.

   Files to audit (grouped by section):
   - `getting-started/index.mdx`
   - `commands/index.mdx`
   - `configuration/index.mdx`, `configuration/templates.mdx`, `configuration/project-detection.mdx`
   - `guides/index.mdx`, `guides/first-project.mdx`, `guides/writing-tasks.mdx`, `guides/migrating.mdx`
   - `agents/index.mdx`, `agents/code-generator.mdx`, `agents/bug-fixer.mdx`, `agents/code-reviewer.mdx`, `agents/task-planner.mdx`, `agents/custom.mdx`
   - `adapters/index.mdx`, `adapters/claude-code.mdx`, `adapters/copilot.mdx`, `adapters/cursor.mdx`, `adapters/custom.mdx`
   - `instructions/index.mdx`, `instructions/architecture.mdx`, `instructions/deploy.mdx`, `instructions/security.mdx`, `instructions/style.mdx`, `instructions/testing.mdx`, `instructions/custom.mdx`

2. [x] **Cross-reference source material** — for each section, map relevant source files:
   - `ai/agents/*.agent.md` → `agents/` section
   - `ai/instructions/*.instructions.md` → `instructions/` section
   - `ai/config.yml` + `README.md` → `getting-started/`, `commands/`, `configuration/` sections
   - `ai/skills/` and `ai/tasks/` conventions → `guides/` section
   - `ai/config.yml` adapters block → `adapters/` section

3. [x] **Create TASK-4** — `getting-started` section content (index overview, concepts clarification if needed).

4. [x] **Create TASK-5** — `commands` section content (all CLI commands: init, add, sync, done, validate, template).

5. [x] **Create TASK-6** — `configuration` section content (config reference, templates, project detection).

6. [x] **Create TASK-7** — `guides` section content (first project, writing tasks, team workflow, migrating).

7. [x] **Create TASK-8** — `agents` section content (index, code-generator, bug-fixer, code-reviewer, task-planner, custom).

8. [x] **Create TASK-9** — `adapters` section content (index, claude-code, copilot, cursor, custom).

9. [x] **Create TASK-10** — `instructions` section content (index, architecture, deploy, security, style, testing, custom).

10. [x] **Run `npm run build`** — confirm all pages compile and no broken static paths or MDX parsing errors.

## Acceptance Criteria
- [x] All 27 empty MDX files are catalogued with a clear content brief (what to write, what source to draw from).
- [x] 7 sub-tasks (TASK-4 through TASK-10) are created in `ai/tasks/active/`, each scoped to one section.
- [x] Each sub-task references the relevant source files and has specific acceptance criteria.
- [x] `npm run build` passes with no errors before this task is marked done.

## Notes
- Content sourcing priority: `ai/` files are the primary reference; CLI README/source fills gaps.
- Do not write the actual MDX content in this task — only the audit findings and sub-task files.
- `guides/team-workflow.mdx` already has content; skip it during audit.
- Existing partial content in `getting-started/quick-start.mdx`, `getting-started/installation.mdx`, and `getting-started/concepts.mdx` should be reviewed but not overwritten unless they also contain `> Content coming soon.`.
