---
name: run-e2e-tests
description: End-to-end testing instructions for the application.
---

# E2E Testing

All the test services and volumes (including API tests) are cleaned up automatically before E2E tests are run. The E2E tests are run in a separate test environment, so they do not affect the development environment. The test database is seeded with test data before the tests are run. Test environment will be cleaned up also after the tests are run.

Usually when testing your changes, you would want to run only a subset of the tests that targets your changes. You can do this by running an individual test file or an individual test. You can also use the `-g` option to run all tests that match a certain pattern. This way you can find the issues faster.

After running the subset, you should run the whole suite to ensure that your changes do not break anything else.

To run the whole E2E test suite, use the following command from the `buutti-developers` project root:

```bash
./compose.sh e2e
```

An individual test file can be run separately in the following way:

```bash
./compose.sh e2e tests/login.spec.ts
```

And an individual test:

```bash
./compose.sh e2e tests/login.spec.ts -g "should redirect"
```

You can use the `--keep-up-on-fail` option to keep the test environment running if any of the tests fail. This way you can debug the issue. You can stop the test environment with `Ctrl+C`.

```bash
./compose.sh e2e --keep-up-on-fail
```

The test services and volumes will be cleaned up automatically after the tests have run, but any resources that have been accidentally left running can be removed with:

```bash
./compose.sh down-tests
```

More information about E2E tests, including best practices, can be found in the [e2e/README.md](../../../e2e/README.md) file.
