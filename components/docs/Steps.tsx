import { type ReactNode } from 'react';

type StepsProps = {
    children: ReactNode;
};

export function Steps({ children }: StepsProps) {
    return (
        <div className="my-6 ml-4 border-l-2 border-zinc-200 pl-6 dark:border-zinc-700 *:mb-8 [&>*:last-child]:mb-0">
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
            <div className="absolute -left-[2.1rem] flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-900">
                <span className="text-zinc-600 dark:text-zinc-400">→</span>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
            <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
        </div>
    );
}
