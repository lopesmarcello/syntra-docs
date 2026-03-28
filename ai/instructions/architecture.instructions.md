# Architecture Instructions

## Project Overview
This is a **next.js** documentation site written in **TypeScript**. The project serves documentation for Syntra using Next.js App Router. Content is stored as MDX files in `content/docs/` and rendered by pages in `app/docs/`. Reusable UI and documentation-specific components live in `components/`.

## Language Standards
- TypeScript with strict mode enabled
- No `any` types unless justified with a `// TODO: type properly` comment
- All public APIs, function parameters, and return types must be explicitly typed
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `unknown` over `any` when the type is genuinely not known
- Enums: prefer `as const` objects over TypeScript enums

## Project Structure
```
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── docs/             # Documentation pages
│       ├── layout.tsx    # Docs layout
│       └── [[...slug]]/  # Dynamic doc pages
│           └── page.tsx
├── components/           # React components
│   ├── ThemeToggle.tsx   # Shared components
│   └── docs/             # Documentation-specific components
│       ├── Callout.tsx
│       ├── CodeBlock.tsx
│       ├── DocContent.tsx
│       ├── MobileNav.tsx
│       ├── PageHeader.tsx
│       ├── PrevNextNav.tsx
│       ├── Sidebar.tsx
│       ├── SidebarItem.tsx
│       └── Steps.tsx
├── config/               # Configuration files
│   └── docs-navigation.ts # Documentation navigation structure
├── content/              # MDX content and documentation
│   └── docs/             # Organized by topic (adapters/, agents/, commands/, etc.)
├── lib/                  # Shared utilities and helpers
│   ├── docs.ts          # Documentation file utilities
│   ├── theme.ts         # Theme utilities
│   └── theme.test.mjs   # Tests
├── public/               # Static assets
├── ai/                   # AI configuration and instructions
│   ├── config.yml        # Agent configuration
│   ├── agents/           # Agent definitions
│   ├── instructions/     # Instruction modules
│   ├── skills/           # Skill definitions
│   └── tasks/            # Task definitions
├── mdx-components.tsx    # MDX component mappings
└── (Config files: next.config.ts, tsconfig.json, etc.)
```

## Module Organization
- **Single Responsibility**: Each file/module has one clear purpose
- **No circular dependencies**: If A imports B, B must not import A (directly or indirectly)
- **Explicit exports**: Only export what other modules need; keep internals private
- **Co-location**: Keep related files together (component + test + styles + types)

## Naming Conventions
- **Files**: camelCase for utilities and config (`docs.ts`, `theme.ts`, `docs-navigation.ts`), PascalCase for components (`ThemeToggle.tsx`, `Sidebar.tsx`)
- **Directories**: kebab-case for content organization (`getting-started/`, `api-reference/`), lowercase for code directories (`components/`, `lib/`, `config/`)
- **Variables/Functions**: camelCase (`getDocBySlug`, `applyResolvedTheme`)
- **Types/Interfaces/Classes**: PascalCase (`DocFrontmatter`, `NavItem`, `ThemeState`)
- **Constants**: UPPER_SNAKE_CASE for true constants (`CONTENT_DIR`, `THEME_STORAGE_KEY`), camelCase for config objects (`docsNavigation`)
- **Booleans**: prefix with `is`, `has`, `should`, `can` (`isLoading`, `hasPermission`)

## Import Order
1. External libraries (`react`, `next`, third-party)
2. Internal aliases (`@/lib`, `@/components`, `@/config`)
3. Relative imports from parent directories (`../`)
4. Relative imports from same directory (`./`)
5. Type-only imports last (`import type { ... }`)

Separate each group with a blank line.

**Example:**
```typescript
import { useEffect, useState } from 'react';

import { getDocBySlug } from '@/lib/docs';
import { ThemeToggle } from '@/components/ThemeToggle';
import type { NavSection } from '@/config/docs-navigation';

import { helper } from '../utils';

import { local } from './local';
```

## Error Handling
- Never swallow errors silently; always log or re-throw
- When handling user input validation (e.g., file parsing), validate gracefully with fallbacks
- For async operations, use `try/catch` with `await` rather than raw Promise chains

## Next.js Patterns
This is a documentation site using Next.js App Router:
- **Server Components** by default — only add `'use client'` when you need interactivity or browser APIs (e.g., `ThemeToggle.tsx`)
- **Data fetching**: Fetch during build time or in Server Components (e.g., `getDocBySlug` in `lib/docs.ts`)
- **MDX Integration**: Content is in `content/docs/` (markdown + frontmatter), rendered in `app/docs/[[...slug]]/page.tsx`
- **Metadata**: Export `metadata` or `generateMetadata` from page files
- **Styling**: Global styles in `app/globals.css`, MDX component styling in `components/docs/`

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
