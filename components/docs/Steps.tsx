import { type ReactNode } from 'react';

type StepsProps = {
    children: ReactNode;
};

export function Steps({ children }: StepsProps) {
    return (
        <div className="my-6 ml-4 border-l-2 border-border pl-6 *:mb-8 [&>*:last-child]:mb-0">
            {children}
        </div>
    );
}

type StepProps = {
    title: string;
    children: ReactNode;
};

export function Step({ title, children }: StepProps) {
    return (
        <div className="relative">
            <div className="absolute -left-[2.1rem] flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-surface text-xs font-semibold">
                <span className="text-foreground-muted">→</span>
            </div>
            <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
            <div className="text-sm text-foreground">{children}</div>
        </div>
    );
}
