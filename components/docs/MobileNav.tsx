'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <div className="flex h-14 items-center justify-between border-b border-border bg-surface px-4">
                <span className="font-semibold text-foreground">Syntra docs</span>
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded-md p-2 text-foreground-muted hover:bg-surface-subtle hover:text-foreground"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    {open ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-background"
                    onClick={() => setOpen(false)}
                >
                    <div className="flex h-14 items-center justify-between border-b border-border px-4">
                        <span className="font-semibold text-foreground">Syntra docs</span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-md p-2 text-foreground-muted hover:bg-surface-subtle"
                            aria-label="Close menu"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Sidebar />
                    </div>
                </div>
            )}
        </div>
    );
}
