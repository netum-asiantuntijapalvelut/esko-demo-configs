---
name: write-e2e-tests
description: Instructions for writing end-to-end tests for the application.
---

# Writing E2E tests

End-to-end (E2E) tests are an important part of ensuring the quality and reliability of the application. They test the application as a whole, simulating real user interactions and verifying that the application behaves as expected.

When writing E2E tests, you should follow these best practices:

### ✅ Dos

- **Test behavior, not implementation**
  - Verify what the user sees/does (text, clicks, navigation), not _how_ it’s implemented.
- **Use helper functions under `tests/utils`**
  - If no existing helper covers your needs, resort to Playwright APIs, semantic selectors (`getByRole`/`getByLabel`/`getByText`), and only use `data-testid` when nothing semantic works.
  - You can create more helpers under `tests/utils/` if needed, but keep them generic and reusable.
- **Keep tests independent**
  - Each test should set up and tear down its own state; avoid order dependencies.
- **Mock external services**
  - Stub APIs, auth flows, 3rd-party integrations so tests run fast and reliably.
- **Use fixtures and test hooks**
  - For shared setup like login, test data, or launching browser.
- **Aim for readability**
  - Write tests as “executable specs” — future devs should understand the feature by reading the test.
- **Cover critical paths first**
  - Focus on login, checkout, data entry, etc. before minor edge cases.

### ❌ Don’ts

- **Don’t test styling or formatting**
  - Skip asserting `<h6>` vs `<h5>`, CSS class names, or pixel widths — these change often.
- **Don’t depend on fragile selectors**
  - Avoid `nth-child`, auto-generated IDs, or library-specific DOM structures (e.g. MUI class names).
- **Don’t couple to case-sensitive text**
  - Unless case matters for functionality, assert text in a case-insensitive way.
- **Don’t over-mock**
  - Don’t mock so much that the test stops reflecting real user experience.
- **Don’t use sleeps for waits**
  - Prefer `await expect(locator).toBeVisible()` or `waitForResponse` over `waitForTimeout(2000)`.
- **Don’t duplicate logic in tests**
  - If app behavior is complex, encapsulate in helper functions/fixtures instead of duplicating logic.
- **Don’t bloat with too many end-to-end tests**
  - Use Playwright for critical flows; push detailed unit logic into unit/integration tests.
