import { type ReactNode } from 'react';

type CodeBlockProps = {
    children: ReactNode;
    filename?: string;
    language?: string;
};

/**
 * Syntax-highlighted code blocks via rehype-pretty-code + shiki.
 * rehype-pretty-code transforms <pre><code> at compile time.
 * This component wraps the output with optional filename display.
 */
export function CodeBlock({ children, filename }: CodeBlockProps) {
    return (
        <div className="relative my-6">
            {filename && (
                <div className="flex items-center rounded-t-lg border border-b-0 border-border bg-surface-subtle px-4 py-2">
                    <span className="text-xs font-medium text-foreground-muted">
                        {filename}
                    </span>
                </div>
            )}
            <div className={filename ? 'rounded-b-lg' : ''}>{children}</div>
        </div>
    );
}
