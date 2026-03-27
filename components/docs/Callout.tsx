import { type ReactNode } from 'react';

type CalloutVariant = 'info' | 'warning' | 'tip' | 'danger';

const variantStyles: Record<CalloutVariant, { wrapper: string; icon: string }> = {
    info: {
        wrapper: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
        icon: 'ℹ️',
    },
    warning: {
        wrapper: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
        icon: '⚠️',
    },
    tip: {
        wrapper: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950',
        icon: '💡',
    },
    danger: {
        wrapper: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950',
        icon: '🚨',
    },
};

type CalloutProps = {
    variant?: CalloutVariant;
    title?: string;
    children: ReactNode;
};

export function Callout({ variant = 'info', title, children }: CalloutProps) {
    const styles = variantStyles[variant];

    return (
        <div className={`my-6 flex gap-3 rounded-lg border p-4 ${styles.wrapper}`}>
            <span className="mt-0.5 text-base leading-none">{styles.icon}</span>
            <div className="flex-1 text-sm leading-6">
                {title && <p className="mb-1 font-semibold">{title}</p>}
                <div>{children}</div>
            </div>
        </div>
    );
}
