export type NavItem = {
    title: string;
    href?: string;
    items?: NavItem[];
};

export type NavSection = {
    title: string;
    items: NavItem[];
};

export const docsNavigation: NavSection[] = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', href: '/docs/getting-started' },
            { title: 'Installation', href: '/docs/getting-started/installation' },
            { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
            { title: 'Core Concepts', href: '/docs/getting-started/concepts' },
        ],
    },
    {
        title: 'CLI Commands',
        items: [
            { title: 'Overview', href: '/docs/commands' },
            { title: 'syntra init', href: '/docs/commands/init' },
            { title: 'syntra add', href: '/docs/commands/add' },
            { title: 'syntra sync', href: '/docs/commands/sync' },
            { title: 'syntra validate', href: '/docs/commands/validate' },
            { title: 'syntra done', href: '/docs/commands/done' },
            { title: 'syntra template', href: '/docs/commands/template' },
        ],
    },
    {
        title: 'Instructions',
        items: [
            { title: 'Overview', href: '/docs/instructions' },
            { title: 'Architecture', href: '/docs/instructions/architecture' },
            { title: 'Style', href: '/docs/instructions/style' },
            { title: 'Testing', href: '/docs/instructions/testing' },
            { title: 'Security', href: '/docs/instructions/security' },
            { title: 'Deploy', href: '/docs/instructions/deploy' },
            { title: 'Custom Instructions', href: '/docs/instructions/custom' },
        ],
    },
    {
        title: 'Agents',
        items: [
            { title: 'Overview', href: '/docs/agents' },
            { title: 'Code Generator', href: '/docs/agents/code-generator' },
            { title: 'Code Reviewer', href: '/docs/agents/code-reviewer' },
            { title: 'Task Planner', href: '/docs/agents/task-planner' },
            { title: 'Bug Fixer', href: '/docs/agents/bug-fixer' },
            { title: 'Custom Agents', href: '/docs/agents/custom' },
        ],
    },
    {
        title: 'Adapters',
        items: [
            { title: 'Overview', href: '/docs/adapters' },
            { title: 'GitHub Copilot', href: '/docs/adapters/copilot' },
            { title: 'Claude Code', href: '/docs/adapters/claude-code' },
            { title: 'Cursor', href: '/docs/adapters/cursor' },
            { title: 'Custom Adapters', href: '/docs/adapters/custom' },
        ],
    },
    {
        title: 'Configuration',
        items: [
            { title: 'Overview', href: '/docs/configuration' },
            { title: 'Config Reference', href: '/docs/configuration/config-reference' },
            { title: 'Project Detection', href: '/docs/configuration/project-detection' },
            { title: 'Templates', href: '/docs/configuration/templates' },
        ],
    },
    {
        title: 'Guides',
        items: [
            { title: 'Overview', href: '/docs/guides' },
            { title: 'First Project', href: '/docs/guides/first-project' },
            { title: 'Writing Tasks', href: '/docs/guides/writing-tasks' },
            { title: 'Team Workflow', href: '/docs/guides/team-workflow' },
            { title: 'Migrating', href: '/docs/guides/migrating' },
        ],
    },
];

// Flat list of all pages for prev/next navigation
export const allDocPages: { title: string; href: string }[] = docsNavigation.flatMap(
    (section) => section.items.filter((item) => item.href).map((item) => ({ title: item.title, href: item.href! }))
);
