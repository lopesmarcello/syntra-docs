export const THEME_STORAGE_KEY = 'theme-preference';

/**
 * User-configurable theme preference.
 */
export type ThemePreference = 'light' | 'dark' | 'system';

/**
 * Concrete UI theme mode applied to the document.
 */
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeState {
    preference: ThemePreference;
    resolved: ResolvedTheme;
}

export const DEFAULT_THEME_STATE: ThemeState = {
    preference: 'system',
    resolved: 'light',
};

/**
 * Checks whether a value is a valid theme preference.
 *
 * @param value Unknown value to validate.
 * @returns True when value is a supported theme preference.
 */
export function isThemePreference(value: unknown): value is ThemePreference {
    return value === 'light' || value === 'dark' || value === 'system';
}

/**
 * Resolves an effective theme from user preference and system mode.
 *
 * @param preference User preference (or system fallback).
 * @param systemPrefersDark Whether OS/browser currently prefers dark mode.
 * @returns Effective theme that should be applied to the UI.
 */
export function resolveTheme(
    preference: ThemePreference,
    systemPrefersDark: boolean,
): ResolvedTheme {
    if (preference === 'system') {
        return systemPrefersDark ? 'dark' : 'light';
    }

    return preference;
}

/**
 * Resolves initial theme state from persisted preference and system mode.
 *
 * @param storedPreference Persisted preference from storage (if any).
 * @param systemPrefersDark Whether OS/browser currently prefers dark mode.
 * @returns Initial preference and effective resolved theme.
 */
export function getInitialThemeState(
    storedPreference: ThemePreference | null,
    systemPrefersDark: boolean,
): ThemeState {
    const preference = storedPreference ?? DEFAULT_THEME_STATE.preference;

    return {
        preference,
        resolved: resolveTheme(preference, systemPrefersDark),
    };
}

/**
 * Creates an inline script that applies the persisted theme before hydration.
 *
 * @returns Script source that syncs the root `dark` class with browser state.
 */
export function getThemeInitializationScript(): string {
    return `try{const storageKey=${JSON.stringify(THEME_STORAGE_KEY)};const stored=window.localStorage.getItem(storageKey);const preference=stored==='light'||stored==='dark'||stored==='system'?stored:'system';const systemPrefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;const resolved=preference==='system'?(systemPrefersDark?'dark':'light'):preference;document.documentElement.classList.toggle('dark',resolved==='dark');}catch{document.documentElement.classList.remove('dark');}`;
}

/**
 * Reads a persisted user theme preference from storage.
 *
 * @param storage Storage-like object (e.g. localStorage).
 * @returns Stored preference when valid, otherwise null.
 */
export function readStoredThemePreference(
    storage: Pick<Storage, 'getItem'>,
): ThemePreference | null {
    const stored = storage.getItem(THEME_STORAGE_KEY);

    if (!isThemePreference(stored)) {
        return null;
    }

    return stored;
}
