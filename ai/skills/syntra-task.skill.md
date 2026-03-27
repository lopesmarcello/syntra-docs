---
name: syntra-task
description: "Create a Syntra task from a brief description by asking clarifying questions and producing a valid task file. Trigger: /task {brief} (alias: /syntra-task)."
user-invocable: true
---

# Syntra Task Skill

Create a fully structured Syntra task file from a short user brief.

---

## Trigger

Use this skill when the user runs:


`/task {brief description}`

Example:

`/task add role-based authorization checks to project routes`

Backwards-compatible alias:

`/syntra-task {brief description}`

---

## The Job

1. Parse the brief description from the command input
2. Read Syntra task rules from project files (ai/config.yml, task conventions, instructions, and agents)
3. Ask 3-5 essential clarifying questions using lettered options
4. Generate one task file using the Syntra Task model
5. Save the task in the configured active task directory

Important: Do NOT implement code. Only create the task file.

---

## Step 1: Gather Required Context

Before creating the task, inspect:

- ai/config.yml for:
  - tasks.idPrefix
  - tasks.activeDir
  - tasks.doneDir
- ai/instructions/*.instructions.md to pick relevant instructions
- ai/agents/*.agent.md to choose the best execution agent (default: code-generator)

If any required config is missing, use defaults:

- idPrefix: TASK-
- activeDir: active

---

## Step 2: Ask Clarifying Questions

Ask only what is needed to remove ambiguity. Keep it to 3-5 questions with lettered options so users can reply quickly (example: 1B, 2A, 3D).

Focus on:

- Scope boundaries
- Impacted area/module
- Definition of done
- Testing expectations
- Dependencies or ordering constraints

Question format:

1. What is the intended scope for this task?
  A. Minimal change (single focused update)
  B. Medium scope (multiple related files)
  C. Broad scope (cross-module changes)
  D. Other: [please specify]

2. Which area is primarily affected?
  A. UI/frontend
  B. Backend/API
  C. Data/model layer
  D. Tooling/CI/dev-experience

3. What level of testing is required?
  A. Unit tests only
  B. Integration tests
  C. Unit + integration
  D. Follow existing test coverage only

---

## Step 3: Build Task Content Using Syntra Task Model

Create exactly one task file matching this structure:

```markdown
# [TASK-ID]: [Short descriptive title]

## Context
[2-4 clear sentences: what, why, expected outcome]

## References
- **Agent**: [agent-name](../agents/agent-name.agent.md)
- **Instructions**:
  - [instruction-1](../instructions/instruction-1.instructions.md)
  - [instruction-2](../instructions/instruction-2.instructions.md)

## Dependencies
[Either "None" or explicit prerequisite tasks]

## Steps
1. [ ] Concrete implementation step
2. [ ] Concrete implementation step
3. [ ] Concrete implementation step

## Acceptance Criteria
- [ ] Verifiable outcome criterion
- [ ] Edge-case or behavior criterion
- [ ] Relevant tests added/updated and passing

## Notes
[Optional constraints, trade-offs, or sequencing notes]
```

Rules:

- Task ID must use configured prefix and next available number when possible
- Steps must be specific, ordered, and reviewable
- Acceptance criteria must be objectively verifiable
- Do not include unrelated refactors or extra scope

---

## Step 4: Save Location and Naming

Save task file to:

- ai/tasks/{activeDir}/{taskId}.task.md

Where activeDir and taskId come from project config and generated ID.

Critical:

- You MUST create this file directly using available file-editing tools.
- Do NOT print the full task as copy/paste output for the user.
- After writing, read the file back once to confirm it exists and content is complete.
- If file tools are unavailable, use a shell command to create the file and then verify it exists.

Shell fallback example:

`mkdir -p ai/tasks/{activeDir}`
`cat > ai/tasks/{activeDir}/{taskId}.task.md <<'EOF'`
[task markdown content]
`EOF`

---

## Output to User

After creating and verifying the file, return:

- Created task ID
- File path
- 1-2 sentence summary of task intent
- Any open assumptions requiring confirmation

If sync is not automatic in this project, remind the user to run:

- `syntra sync`

