---
name: connect-local-databases
description: Instructions for connecting to local databases (dev and test DB).
---

## Connecting to local databases

To connect to the local development database, use the following command when the backend services are running:

```bash
PGPASSWORD='buutti-developers-password' psql -h 127.0.0.1 -p 5432 -U developer -d developers
```

To connect to the local test database, use the following command when the test services are running:

```bash
PGPASSWORD='buutti-developers-password' psql -h 127.0.0.1 -p 5433 -U developer -d developers_test
```
