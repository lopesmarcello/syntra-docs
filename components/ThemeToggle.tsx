'use client';

import { useEffect, useState } from 'react';
import {
    DEFAULT_THEME_STATE,
    THEME_STORAGE_KEY,
    getInitialThemeState,
    readStoredThemePreference,
    type ResolvedTheme,
    type ThemeState,
    type ThemePreference,
} from '@/lib/theme';

function applyResolvedTheme(theme: ResolvedTheme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

function getThemeStateFromBrowser(systemPrefersDark: boolean): ThemeState {
    return getInitialThemeState(
        readStoredThemePreference(window.localStorage),
        systemPrefersDark,
    );
}

export function ThemeToggle() {
    const [{ preference, resolved: resolvedTheme }, setThemeState] = useState<ThemeState>(
        DEFAULT_THEME_STATE,
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const syncThemeState = (systemPrefersDark: boolean) => {
            const nextThemeState = getThemeStateFromBrowser(systemPrefersDark);

            applyResolvedTheme(nextThemeState.resolved);
            setThemeState(nextThemeState);
        };

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            syncThemeState(event.matches);
        };

        syncThemeState(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    const toggleTheme = () => {
        const nextPreference: ThemePreference = resolvedTheme === 'dark' ? 'light' : 'dark';
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);

        const nextThemeState = getInitialThemeState(nextPreference, systemPrefersDark);

        applyResolvedTheme(nextThemeState.resolved);
        setThemeState(nextThemeState);
    };

    const label = resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    const icon = resolvedTheme === 'dark' ? '☀️' : '🌙';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-base text-foreground-muted transition-colors hover:bg-surface-subtle hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            aria-label={label}
            title={`${label} (current: ${preference})`}
            aria-pressed={resolvedTheme === 'dark'}
        >
            <span aria-hidden>{icon}</span>
        </button>
    );
}
