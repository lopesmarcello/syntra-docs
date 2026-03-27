# Code Style Instructions

## Formatting
- **Indentation**: 2 spaces
- **Line length**: 100 characters max
- **Semicolons**: Required
- **Quotes**: Single quotes for strings, double quotes in JSX
- **Trailing commas**: Always in multi-line structures
- **Braces**: Same-line opening brace, always use braces for conditionals (no one-liners)
- **Parentheses**: Omit around single arrow function parameters

## Comments
- Explain **why**, not **what** — the code should be readable on its own
- `// TODO: description (TICKET-ID)` for known technical debt
- `// HACK: explanation` for intentional workarounds that should be revisited
- No commented-out code in committed files — use version control
- No redundant comments like `// increment counter` above `counter++`

### JSDoc
- Required on all exported functions, types, and interfaces
- Not needed on internal/private functions unless logic is complex
- Include `@param`, `@returns`, and `@throws` when applicable
- Use `@example` for non-obvious utility functions

## Function Shape
- **Max length**: ~40 lines — if longer, extract helper functions
- **Max parameters**: 3 positional; use an options/config object beyond that
- **Early returns**: Prefer guard clauses over nested conditionals
- **Pure functions**: Prefer pure functions where possible; isolate side effects
- **Arrow vs function**: Arrow for callbacks and short utilities, `function` for top-level declarations
- **Async**: Always `async/await` over raw Promises; never mix `.then()` and `await`


## Next.js Patterns
- **Server Components** by default — only add `'use client'` when you need interactivity or browser APIs
- **Data fetching**: Fetch in Server Components or Route Handlers, not in `useEffect`
- **Server Actions**: Use for mutations (forms, updates, deletes)
- **Route Handlers**: Use for external API integrations or when you need fine control over the response
- **Metadata**: Export `metadata` or `generateMetadata` from page/layout files
- **Loading/Error states**: Use `loading.tsx` and `error.tsx` conventions


## Linting & Formatting Tools
<!-- UPDATE: Reference your actual config files -->
- **ESLint**: Enforces code quality rules — see `.eslintrc`
- **Prettier**: Enforces formatting — see `.prettierrc`
- AI-generated code must pass both without modifications

## What AI Must Follow
- Match the style of surrounding code, even if it differs from these guidelines
- When in doubt, look at existing files in the same directory for patterns
- Never reformat existing code unless the task explicitly asks for it
