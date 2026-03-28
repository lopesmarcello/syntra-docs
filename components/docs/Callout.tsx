import { type ReactNode } from 'react';

type CalloutVariant = 'info' | 'warning' | 'tip' | 'danger';

const variantStyles: Record<CalloutVariant, { wrapper: string; icon: string }> = {
    info: {
        wrapper: 'border-callout-info-border bg-callout-info-bg dark:border-callout-info-border dark:bg-callout-info-bg',
        icon: 'ℹ️',
    },
    warning: {
        wrapper: 'border-callout-warning-border bg-callout-warning-bg dark:border-callout-warning-border dark:bg-callout-warning-bg',
        icon: '⚠️',
    },
    tip: {
        wrapper: 'border-callout-tip-border bg-callout-tip-bg dark:border-callout-tip-border dark:bg-callout-tip-bg',
        icon: '💡',
    },
    danger: {
        wrapper: 'border-callout-danger-border bg-callout-danger-bg dark:border-callout-danger-border dark:bg-callout-danger-bg',
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
        <div
            className={`my-6 flex gap-3 rounded-lg border p-4 ${styles.wrapper}`}
            style={{
                borderColor: `var(--callout-${variant}-border)`,
                backgroundColor: `var(--callout-${variant}-bg)`,
            }}
        >
            <span className="mt-0.5 text-base leading-none">{styles.icon}</span>
            <div className="flex-1 text-sm leading-6">
                {title && <p className="mb-1 font-semibold">{title}</p>}
                <div>{children}</div>
            </div>
        </div>
    );
}
