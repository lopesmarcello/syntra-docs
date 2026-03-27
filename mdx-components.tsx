import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Callout } from '@/components/docs/Callout';
import { Steps, Step } from '@/components/docs/Steps';
import { CodeBlock } from '@/components/docs/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">{children}</h1>
        ),
        h2: ({ children, id }) => (
            <h2 id={id} className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
                {children}
            </h2>
        ),
        h3: ({ children, id }) => (
            <h3 id={id} className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {children}
            </h3>
        ),
        h4: ({ children, id }) => (
            <h4 id={id} className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                {children}
            </h4>
        ),
        h5: ({ children, id }) => (
            <h5 id={id} className="mt-4 scroll-m-20 text-lg font-semibold tracking-tight">
                {children}
            </h5>
        ),
        h6: ({ children, id }) => (
            <h6 id={id} className="mt-4 scroll-m-20 text-base font-semibold tracking-tight">
                {children}
            </h6>
        ),
        p: ({ children }) => (
            <p className="leading-7 not-first:mt-6">{children}</p>
        ),
        a: ({ href, children }) => {
            if (href?.startsWith('/') || href?.startsWith('#')) {
                return (
                    <Link href={href} className="font-medium text-accent underline underline-offset-4 hover:text-accent-hover">
                        {children}
                    </Link>
                );
            }
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-4 hover:text-accent-hover">
                    {children}
                </a>
            );
        },
        ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
        ),
        ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
        ),
        li: ({ children }) => <li>{children}</li>,
        blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-border pl-6 italic text-foreground-muted">
                {children}
            </blockquote>
        ),
        code: ({ children, className }) => {
            // Inline code (no language class)
            if (!className) {
                return (
                    <code className="relative rounded bg-surface-subtle px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground">
                        {children}
                    </code>
                );
            }
            return <code className={className}>{children}</code>;
        },
        pre: ({ children }) => (
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-800">
                {children}
            </pre>
        ),
        table: ({ children }) => (
            <div className="my-6 w-full overflow-y-auto">
                <table className="w-full">{children}</table>
            </div>
        ),
        tr: ({ children }) => (
            <tr className="m-0 border-t p-0 even:bg-zinc-50 dark:even:bg-zinc-900">{children}</tr>
        ),
        th: ({ children }) => (
            <th className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right">
                {children}
            </td>
        ),
        hr: () => <hr className="my-4 border-border" />,
        ...components,
        // Shared doc components available in MDX files
        Callout,
        Steps,
        Step,
        CodeBlock,
    };
}
