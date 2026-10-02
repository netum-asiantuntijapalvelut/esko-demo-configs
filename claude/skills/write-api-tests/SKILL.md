---
name: write-api-tests
description: Instructions for writing API tests for the application.
---

# Writing API tests

API tests are an important part of ensuring the quality and reliability of the application. They test the backend API endpoints, verifying that they behave as expected under various conditions. API tests test a single enpoint at a time and the database state before and after the request.

Follow these best practices when writing API tests:

- **One concern per test**: Each test should check a _single_ endpoint behavior (one input/one outcome).
- **Arrange → Act → Assert → Auto-cleanup**: Each test should follow this general pattern
- **Readable names**: Name tests like `test_create_user_returns_created_and_saves_to_db`.
- **Use fixtures for setup/teardown** instead of doing it inline.
- **Don’t couple tests**: No test should depend on another test having run.
- **Check both response & side effects**: Verify HTTP response (status code, body) _and_ database state when relevant.
- **Test unhappy paths**: Permissions, auth failures, invalid data, not found, etc.
- **Automate cleanup**: Database and other state should be reset automatically, not manually.
- **Keep common fixtures in `conftest.py`** either on root level or in an appropriate subfolder so that they're auto-discovered.
- **Factory fixtures** for generating model instances. <mark>TODO: Should we use `pytest-factoryboy` for this?</mark>
- **Use `yield` in fixtures** for teardown.
- **Mock external app dependencies**: The tests should not depend on external environments except the database.
- **No global mutable state**: Don’t share mutable data between tests. Constants are fine if they are not liable to change.
- **Reuse preparation logic**: If many tests need the same pattern create a fixture that generates fresh data per test.
- **Do not hardcode primary keys**. E.g. always assuming `id=1`
