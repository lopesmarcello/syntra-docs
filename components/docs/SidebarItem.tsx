'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/config/docs-navigation';

type SidebarItemProps = {
    item: NavItem;
    depth?: number;
};

export function SidebarItem({ item, depth = 0 }: SidebarItemProps) {
    const pathname = usePathname();
    const isActive = item.href ? pathname === item.href : false;

    if (item.href) {
        return (
            <li>
                <Link
                    href={item.href}
                    className={[
                        'block rounded-md px-3 py-1.5 text-sm transition-colors',
                        depth > 0 ? 'ml-3' : '',
                        isActive
                            ? 'bg-accent-soft font-medium text-accent'
                            : 'text-foreground-muted hover:bg-surface-subtle hover:text-foreground',
                    ].filter(Boolean).join(' ')}
                >
                    {item.title}
                </Link>
            </li>
        );
    }

    return (
        <li>
            <span className="block px-3 py-1.5 text-sm font-medium text-foreground-muted">
                {item.title}
            </span>
            {item.items && (
                <ul className="mt-1 space-y-1">
                    {item.items.map((child) => (
                        <SidebarItem key={child.href ?? child.title} item={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
}
