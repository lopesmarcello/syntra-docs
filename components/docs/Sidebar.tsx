import Link from 'next/link';
import { docsNavigation } from '@/config/docs-navigation';
import { SidebarItem } from './SidebarItem';

export function Sidebar() {
    return (
        <nav className="flex-1 overflow-y-auto py-6">
            <div className="mb-6 px-3">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-foreground"
                >
                    <span className="text-xl font-bold">Syntra</span>
                    <span className="rounded bg-accent-soft px-1.5 py-0.5 text-xs font-medium text-accent">
                        docs
                    </span>
                </Link>
            </div>
            <div className="space-y-6 px-2">
                {docsNavigation.map((section) => (
                    <div key={section.title}>
                        <h4 className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                            {section.title}
                        </h4>
                        <ul className="space-y-1">
                            {section.items.map((item) => (
                                <SidebarItem key={item.href ?? item.title} item={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
}
