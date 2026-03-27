import Link from 'next/link';

type PrevNextNavProps = {
    prev: { title: string; href: string } | null;
    next: { title: string; href: string } | null;
};

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
    if (!prev && !next) return null;

    return (
        <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
            {prev ? (
                <Link
                    href={prev.href}
                    className="group flex flex-col items-start gap-1 text-sm"
                >
                    <span className="text-foreground-muted group-hover:text-accent">
                        ← Previous
                    </span>
                    <span className="font-medium text-foreground group-hover:text-accent">
                        {prev.title}
                    </span>
                </Link>
            ) : (
                <div />
            )}
            {next ? (
                <Link
                    href={next.href}
                    className="group flex flex-col items-end gap-1 text-sm"
                >
                    <span className="text-foreground-muted group-hover:text-accent">
                        Next →
                    </span>
                    <span className="font-medium text-foreground group-hover:text-accent">
                        {next.title}
                    </span>
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
