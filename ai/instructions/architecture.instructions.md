# Architecture Instructions

## Project Overview
This is a **next.js** project written in **TypeScript**.

## Language Standards
- TypeScript with strict mode enabled
- No `any` types unless justified with a `// TODO: type properly` comment
- All public APIs, function parameters, and return types must be explicitly typed
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `unknown` over `any` when the type is genuinely not known
- Enums: prefer `as const` objects over TypeScript enums

## Project Structure
<!-- UPDATE THIS to match your actual project structure -->
```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable UI components
│   ├── ui/           # Base/primitive components
│   └── features/     # Feature-specific components
├── lib/              # Shared utilities, helpers, constants
├── hooks/            # Custom React hooks
├── services/         # API calls and external service integrations
├── types/            # Shared TypeScript types and interfaces
└── styles/           # Global styles and theme
```

## Module Organization
- **Single Responsibility**: Each file/module has one clear purpose
- **No circular dependencies**: If A imports B, B must not import A (directly or indirectly)
- **Explicit exports**: Only export what other modules need; keep internals private
- **Co-location**: Keep related files together (component + test + styles + types)

## Naming Conventions
- **Files**: camelCase for utilities (`dateUtils.ts`), PascalCase for components (`DatePicker.tsx`)
- **Variables/Functions**: camelCase (`getUserById`)
- **Types/Interfaces/Classes**: PascalCase (`UserProfile`)
- **Constants**: UPPER_SNAKE_CASE for true constants (`MAX_RETRY_COUNT`), camelCase for config objects
- **Booleans**: prefix with `is`, `has`, `should`, `can` (`isLoading`, `hasPermission`)

## Import Order
1. External libraries (`react`, `next`, third-party)
2. Internal aliases (`@/lib`, `@/components`, `@/services`)
3. Relative imports from parent directories (`../`)
4. Relative imports from same directory (`./`)
5. Type-only imports last (`import type { ... }`)

Separate each group with a blank line.

## Error Handling
- Use error boundaries for UI error recovery
- API routes: return consistent error shapes `{ error: string, code: string }`
- Never swallow errors silently; always log or re-throw
- Use custom error classes for domain-specific errors

## Dependencies
- Do not install new dependencies without explicit approval
- Prefer well-maintained packages with active communities
- Check bundle size impact before adding frontend dependencies
- Document why each non-obvious dependency exists

## AI Agent Boundaries
- **Do NOT** create new folders outside the existing structure
- **Do NOT** install or suggest new dependencies without asking
- **Do NOT** refactor unrelated code when completing a task
- **Do NOT** change configuration files (tsconfig, eslint, etc.) unless the task requires it
- **DO** follow existing patterns in the codebase even if you'd do it differently
- **DO** ask for clarification if a task conflicts with these instructions
