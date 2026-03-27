import { type ReactNode } from 'react';

type DocContentProps = {
    children: ReactNode;
};

export function DocContent({ children }: DocContentProps) {
    return (
        <div className="min-w-0 flex-1">
            <div className="docs-content mx-auto max-w-3xl text-foreground-muted">
                {children}
            </div>
        </div>
    );
}
