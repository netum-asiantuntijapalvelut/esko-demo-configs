---
name: quick-validate-changes
description: Instructions for quickly validating code changes locally.
---

# Quick validation of code changes

After code changes, you should always quickly validate them locally. Here are the instructions for doing that in the `frontend`, `server`, `api-tests` and `e2e`. You should always fix formatter and linter errors using automatic commands provided first, then manually.

## Backend and frontend API sync

Before validating changes locally, make sure that the backend and frontend are in sync. You can do this with the following command in the `frontend` directory:

```bash
npm run api:check
```

## Frontend

Navigate to the `frontend` directory and ensure that all dependencies are installed:

```bash
npm ci --ignore-scripts
```

Then, you can run formatting checks, linting, and type checking with the following commands:

```bash
npm run format:check
npm run lint
npm run typecheck
```

You can also build the frontend with:

```bash
NODE_ENV=production npm run build
```

You can fix formatting and linting issues with:

```bash
npm run format
npm run lint:fix
```

## Backend

Navigate to the `server` directory and ensure that all dependencies are installed:

```bash
just sync-all
```

Then, you can run formatting checks, linting, and type checking with the following commands:

```bash
just format-check
just lint
just typecheck
```

You can fix formatting and linting issues with:

```bash
just format
just lint-fix
```

## API tests

Navigate to the `api-tests` directory and ensure that all dependencies are installed:

```bash
just sync-all
```

Then, you can run formatting checks, linting, and type checking with the following commands:

```bash
just format-check
just lint
just typecheck
```

You can fix formatting and linting issues with:

```bash
just format
just lint-fix
```

## E2E tests

Navigate to the `e2e` directory and ensure that all dependencies are installed:

```bash
npm ci --ignore-scripts
```

Then, a simple typecheck will suffice:

```bash
npm run typecheck
```
