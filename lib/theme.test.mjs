import test from 'node:test';
import assert from 'node:assert/strict';

import {
    DEFAULT_THEME_STATE,
    getInitialThemeState,
    getThemeInitializationScript,
    readStoredThemePreference,
    resolveTheme,
    THEME_STORAGE_KEY,
} from './theme.ts';

test('DEFAULT_THEME_STATE is deterministic for server rendering', () => {
    assert.deepEqual(DEFAULT_THEME_STATE, {
        preference: 'system',
        resolved: 'light',
    });
});

test('resolveTheme uses system preference when mode is system', () => {
    assert.equal(resolveTheme('system', true), 'dark');
    assert.equal(resolveTheme('system', false), 'light');
});

test('resolveTheme honors explicit user override', () => {
    assert.equal(resolveTheme('dark', false), 'dark');
    assert.equal(resolveTheme('light', true), 'light');
});

test('readStoredThemePreference returns null for invalid value', () => {
    const fakeStorage = {
        getItem: () => 'neon',
    };

    assert.equal(readStoredThemePreference(fakeStorage), null);
});

test('readStoredThemePreference returns persisted override when valid', () => {
    const fakeStorage = {
        getItem: key => (key === THEME_STORAGE_KEY ? 'dark' : null),
    };

    assert.equal(readStoredThemePreference(fakeStorage), 'dark');
});

test('getInitialThemeState defaults to system when no override is stored', () => {
    assert.deepEqual(getInitialThemeState(null, true), {
        preference: 'system',
        resolved: 'dark',
    });

    assert.deepEqual(getInitialThemeState(null, false), {
        preference: 'system',
        resolved: 'light',
    });
});

test('getInitialThemeState uses stored override when available', () => {
    assert.deepEqual(getInitialThemeState('light', true), {
        preference: 'light',
        resolved: 'light',
    });

    assert.deepEqual(getInitialThemeState('dark', false), {
        preference: 'dark',
        resolved: 'dark',
    });
});

test('getThemeInitializationScript references the theme storage key', () => {
    assert.match(getThemeInitializationScript(), new RegExp(THEME_STORAGE_KEY));
});
