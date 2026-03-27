import { type ReactNode } from 'react';
import { Sidebar } from '@/components/docs/Sidebar';
import { MobileNav } from '@/components/docs/MobileNav';

type DocsLayoutProps = {
    children: ReactNode;
};

export default function DocsLayout({ children }: DocsLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Mobile navigation */}
            <MobileNav />

            <div className="mx-auto flex max-w-7xl">
                {/* Left sidebar — hidden on mobile, visible on desktop */}
                <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col">
                    <div className="sticky top-0 h-screen overflow-y-auto border-r border-border bg-surface">
                        <Sidebar />
                    </div>
                </aside>

                {/* Main content area */}
                <main className="min-w-0 flex-1 px-6 py-10 lg:px-12">
                    {children}
                </main>

                {/* Right sidebar — table of contents placeholder */}
                <aside className="hidden xl:block xl:w-56 xl:shrink-0">
                    <div className="sticky top-0 h-screen overflow-y-auto py-10 pl-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                            On this page
                        </p>
                        {/* Table of contents will be added as a follow-up */}
                    </div>
                </aside>
            </div>
        </div>
    );
}
