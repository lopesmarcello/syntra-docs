# TASK-3 Audit Report: Missing Docs Catalog and Source Mapping

## Scope
This audit covers all 27 MDX files that currently contain only `> Content coming soon.` across 7 sections:
- `getting-started`
- `commands`
- `configuration`
- `guides`
- `agents`
- `adapters`
- `instructions`

Reviewed-but-not-placeholder pages (for context only):
- `content/docs/getting-started/quick-start.mdx`
- `content/docs/getting-started/installation.mdx`
- `content/docs/getting-started/concepts.mdx`
- `content/docs/guides/team-workflow.mdx`
- `content/docs/commands/{init,add,sync,done,validate,template}.mdx`
- `content/docs/configuration/config-reference.mdx`

## Section Source Mapping (Primary References)

### getting-started
- `ai/config.yml`
- `content/docs/getting-started/{installation,quick-start,concepts}.mdx`
- `content/docs/guides/team-workflow.mdx`
- `content/docs/commands/{init,sync}.mdx`

### commands
- `content/docs/commands/{init,add,sync,done,validate,template}.mdx`
- `ai/config.yml` (task directory/id behavior and adapter toggles)
- `content/docs/guides/team-workflow.mdx` (workflow sequencing)

### configuration
- `ai/config.yml` (canonical schema and examples)
- `content/docs/configuration/config-reference.mdx`
- `content/docs/commands/{init,template,sync,validate}.mdx`

### guides
- `ai/skills/syntra-task.skill.md`
- `ai/tasks/active/TASK-2.task.md`
- `ai/tasks/active/TASK-3.task.md`
- `ai/tasks/done/TASK-1.task.md`
- `content/docs/guides/team-workflow.mdx`

### agents
- `ai/agents/code-generator.agent.md`
- `ai/agents/bug-fixer.agent.md`
- `ai/agents/code-reviewer.agent.md`
- `ai/agents/task-planner.agent.md`

### adapters
- `ai/config.yml` (`adapters.*.enabled`, `instructionsMode`)
- `content/docs/getting-started/concepts.mdx` (adapter output table)
- `content/docs/commands/sync.mdx` (generated file targets)

### instructions
- `ai/instructions/architecture.instructions.md`
- `ai/instructions/deploy.instructions.md`
- `ai/instructions/security.instructions.md`
- `ai/instructions/style.instructions.md`
- `ai/instructions/testing.instructions.md`

## 27-File Content Brief Catalog

### getting-started

1) `content/docs/getting-started/index.mdx`
- Intended audience: New users evaluating Syntra for the first time.
- Feature focus: Product overview, value proposition, source-of-truth workflow.
- Source files: `ai/config.yml`, `content/docs/getting-started/concepts.mdx`, `content/docs/guides/team-workflow.mdx`.

### commands

2) `content/docs/commands/index.mdx`
- Intended audience: Users who need a command quick-reference and command selection guidance.
- Feature focus: CLI command map, when to use each command, common workflow order.
- Source files: `content/docs/commands/{init,add,sync,done,validate,template}.mdx`, `content/docs/guides/team-workflow.mdx`, `ai/config.yml`.

### configuration

3) `content/docs/configuration/index.mdx`
- Intended audience: Maintainers configuring Syntra behavior per project.
- Feature focus: `ai/config.yml` overview and section relationships.
- Source files: `ai/config.yml`, `content/docs/configuration/config-reference.mdx`.

4) `content/docs/configuration/templates.mdx`
- Intended audience: Teams standardizing project bootstrap across repositories.
- Feature focus: Template lifecycle (`syntra template save/list`) and reuse strategy.
- Source files: `content/docs/commands/template.mdx`, `content/docs/commands/init.mdx`, `ai/config.yml`.

5) `content/docs/configuration/project-detection.mdx`
- Intended audience: Users wanting to understand/override detected project metadata.
- Feature focus: What `syntra init` detects (`project` fields), expected inputs, troubleshooting mismatches.
- Source files: `content/docs/commands/init.mdx`, `content/docs/configuration/config-reference.mdx`, `ai/config.yml`.

### guides

6) `content/docs/guides/index.mdx`
- Intended audience: Users moving from reference docs to practical workflows.
- Feature focus: Guide map and recommended reading path.
- Source files: `content/docs/guides/{team-workflow,first-project,writing-tasks,migrating}.mdx`.

7) `content/docs/guides/first-project.mdx`
- Intended audience: First-time adopters applying Syntra to an existing repo.
- Feature focus: End-to-end first setup from init → customize → task → sync → execute → validate.
- Source files: `content/docs/getting-started/{installation,quick-start,concepts}.mdx`, `content/docs/guides/team-workflow.mdx`, `content/docs/commands/{init,add,sync,validate}.mdx`.

8) `content/docs/guides/writing-tasks.mdx`
- Intended audience: Engineers/product leads writing high-quality `.task.md` files.
- Feature focus: Task anatomy, step granularity, acceptance criteria quality, references/dependencies.
- Source files: `ai/skills/syntra-task.skill.md`, `ai/agents/task-planner.agent.md`, `ai/tasks/active/TASK-2.task.md`, `ai/tasks/active/TASK-3.task.md`, `ai/tasks/done/TASK-1.task.md`.

9) `content/docs/guides/migrating.mdx`
- Intended audience: Teams migrating from manual adapter edits to canonical `ai/` workflow.
- Feature focus: Migration checklist, source-of-truth transition, validation and drift prevention.
- Source files: `content/docs/getting-started/concepts.mdx`, `content/docs/commands/{sync,validate}.mdx`, `ai/config.yml`.

### agents

10) `content/docs/agents/index.mdx`
- Intended audience: Teams selecting which agents to use.
- Feature focus: Agent model overview, role boundaries, selection guidance.
- Source files: `ai/agents/{code-generator,bug-fixer,code-reviewer,task-planner}.agent.md`.

11) `content/docs/agents/code-generator.mdx`
- Intended audience: Users assigning implementation tasks.
- Feature focus: Stepwise execution behavior, scope discipline, reporting format.
- Source files: `ai/agents/code-generator.agent.md`, `ai/instructions/{architecture,style,testing,security}.instructions.md`.

12) `content/docs/agents/bug-fixer.mdx`
- Intended audience: Users triaging and fixing defects.
- Feature focus: diagnosis-first flow, minimal fix principle, regression tests.
- Source files: `ai/agents/bug-fixer.agent.md`, `ai/instructions/{testing,style,architecture}.instructions.md`.

13) `content/docs/agents/code-reviewer.mdx`
- Intended audience: Reviewers enforcing quality gates.
- Feature focus: review order (correctness/security/architecture/testing/style), severity model, feedback format.
- Source files: `ai/agents/code-reviewer.agent.md`, `ai/instructions/{security,testing,style,architecture}.instructions.md`.

14) `content/docs/agents/task-planner.mdx`
- Intended audience: Users converting vague asks into executable tasks.
- Feature focus: decomposition rules, step quality, acceptance criteria quality, dependency planning.
- Source files: `ai/agents/task-planner.agent.md`, `ai/instructions/{architecture,testing}.instructions.md`, `ai/tasks/*/*.task.md` examples.

15) `content/docs/agents/custom.mdx`
- Intended audience: Teams defining additional domain-specific agents.
- Feature focus: custom agent authoring pattern, instruction linking, output contract and constraints.
- Source files: `ai/agents/*.agent.md` (pattern), `ai/instructions/*.instructions.md`, `ai/config.yml`.

### adapters

16) `content/docs/adapters/index.mdx`
- Intended audience: Teams using one or more AI coding tools.
- Feature focus: adapter concept, generated outputs, and canonical-source model.
- Source files: `ai/config.yml`, `content/docs/getting-started/concepts.mdx`, `content/docs/commands/sync.mdx`.

17) `content/docs/adapters/claude-code.mdx`
- Intended audience: Claude Code users.
- Feature focus: Claude adapter output files, enable/disable behavior, sync expectations.
- Source files: `ai/config.yml` (`adapters.claude.*`), `content/docs/commands/sync.mdx`.

18) `content/docs/adapters/copilot.mdx`
- Intended audience: GitHub Copilot users.
- Feature focus: Copilot output files (`.github/copilot-instructions.md`, `.github/agents/*.md`), config toggles, sync flow.
- Source files: `ai/config.yml` (`adapters.copilot.*`), `content/docs/commands/sync.mdx`, `content/docs/getting-started/concepts.mdx`.

19) `content/docs/adapters/cursor.mdx`
- Intended audience: Cursor users.
- Feature focus: Cursor output rules format, instruction mode behavior, sync flow.
- Source files: `ai/config.yml` (`adapters.cursor.*`), `content/docs/commands/sync.mdx`.

20) `content/docs/adapters/custom.mdx`
- Intended audience: Contributors building community adapters.
- Feature focus: adapter contract, source files to consume from `ai/`, expected generated output behavior.
- Source files: `ai/config.yml`, existing adapter docs/pages as implementation baseline.

### instructions

21) `content/docs/instructions/index.mdx`
- Intended audience: Teams defining coding standards and constraints.
- Feature focus: instruction purpose, lifecycle, and how agents consume them.
- Source files: `ai/instructions/*.instructions.md`, `ai/agents/*.agent.md`.

22) `content/docs/instructions/architecture.mdx`
- Intended audience: Maintainers authoring architecture guidance.
- Feature focus: project structure, module boundaries, naming/import rules.
- Source files: `ai/instructions/architecture.instructions.md`.

23) `content/docs/instructions/deploy.mdx`
- Intended audience: Teams codifying release and CI/CD policies.
- Feature focus: branching, commit conventions, pipeline and environment constraints.
- Source files: `ai/instructions/deploy.instructions.md`.

24) `content/docs/instructions/security.mdx`
- Intended audience: Teams codifying secure coding requirements.
- Feature focus: secrets handling, validation, output encoding, dependency safety.
- Source files: `ai/instructions/security.instructions.md`.

25) `content/docs/instructions/style.mdx`
- Intended audience: Teams standardizing formatting and implementation patterns.
- Feature focus: formatting conventions, function shape rules, Next.js patterns.
- Source files: `ai/instructions/style.instructions.md`.

26) `content/docs/instructions/testing.mdx`
- Intended audience: Teams standardizing test strategy and quality gates.
- Feature focus: test scope, structure, naming, mocking, and coverage expectations.
- Source files: `ai/instructions/testing.instructions.md`.

27) `content/docs/instructions/custom.mdx`
- Intended audience: Teams adding bespoke instruction modules.
- Feature focus: naming conventions, integration into agent references, maintenance workflow.
- Source files: `ai/instructions/*.instructions.md`, `ai/agents/*.agent.md`, `ai/config.yml`.
