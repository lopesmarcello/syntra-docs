# Testing Instructions

## Test Stack
- **Unit/Integration**: Vitest or Jest
- **Component Tests**: React Testing Library
- **E2E**: Playwright

## Test File Conventions
- **Location**: Co-located with source — `Button.tsx` → `Button.test.tsx` in the same folder
- **File naming**: `{filename}.test.ts` or `{filename}.test.tsx`
- **Test data/fixtures**: `__fixtures__/` folder next to tests when shared across files

## What to Test
- Business logic and utility functions — always
- Edge cases: empty inputs, null/undefined, boundary values, error states
- Integration points: API calls, database queries, external services
- User-facing behavior in components
- Error handling paths

## What NOT to Test
- Simple getters/setters with no logic
- Framework internals (don't test that React renders a div)
- Implementation details (don't test internal state, private methods)
- Third-party library behavior
- Type-only validations (TypeScript handles those)
- One-line wrappers that just delegate to another function

## Test Structure
Follow the **Arrange → Act → Assert** pattern. One behavior per test.

```typescript
describe('isDateAfterToday', () => {
  it('returns true when date is in the future', () => {
    // Arrange
    const futureDate = '2099-01-01';

    // Act
    const result = isDateAfterToday(futureDate);

    // Assert
    expect(result).toBe(true);
  });

  it('returns false for today', () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    expect(isDateAfterToday(today)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isDateAfterToday('')).toBe(false);
  });

  it('returns false for invalid date', () => {
    expect(isDateAfterToday('not-a-date')).toBe(false);
  });
});
```

## Naming Convention
- **describe block**: The function/component/module name
- **it/test block**: Describes the expected behavior starting with a verb
  - Good: `it('returns false for invalid date')`
  - Good: `it('displays error message when submission fails')`
  - Bad: `it('test invalid date')`
  - Bad: `it('should work')`


## Mocking
- Mock at the **boundary**: API calls, database, file system, timers
- Never mock the function you're testing
- Use `vi.fn()` / `jest.fn()` for function mocks
- Use `vi.spyOn()` / `jest.spyOn()` when you need to preserve original behavior
- Reset mocks in `beforeEach` or use `vi.restoreAllMocks()`
- For dates/time: use `vi.useFakeTimers()` with a fixed date

## Coverage
- Target: 80%+ line coverage overall
- Critical business logic: 100% branch coverage
- Don't write meaningless tests just to hit coverage numbers — uncovered simple code is better than poorly tested complex code

## AI Instructions for Writing Tests
- When creating a new function, always create the corresponding test file
- Write tests for the happy path first, then edge cases, then error cases
- If modifying an existing function, update its tests to cover the new behavior
- Run existing tests mentally before modifying them — don't break passing tests
- If a task doesn't mention tests, still write them for any new logic
