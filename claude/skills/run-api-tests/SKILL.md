---
name: run-api-tests
description: API testing instructions for the application.
---

# API Testing

All the test services and volumes (including E2E) are cleaned up automatically before API tests are run. The API tests are run in a separate test environment, so they do not affect the development environment. The tests are run against and empty database. All the data is cleared between and after the tests.

Usually when testing your changes, you would want to run only a subset of the tests that targets your changes. You can do this by running an individual test file or an individual test. You can also use the `-k` option to run all tests that match a certain pattern. This way you can find the issues faster.

After running the subset, you should run the whole suite to ensure that your changes do not break anything else.

To run the whole suite at the root level of the `buutti-developers` project, run:

```bash
./compose.sh test
```

An individual test file can be run separately in the following way:

```bash
./compose.sh test tests/test_skills.py
```

An individual test:

```bash
./compose.sh test tests/test_skills.py::test_create_skill
```

Run all tests that have `create` in their name. If a filename is specified, only tests from that file are matched::

```bash
./compose.sh test tests/test_skills.py -k "create"
```

The test services and volumes will be cleaned up automatically after the tests have run, but any resources that have been accidentally left running can be removed with:

```bash
./compose.sh down-tests
```

More information about API tests, including best practices, can be found in the [api-tests/README.md](../../../api-tests/README.md) file.
