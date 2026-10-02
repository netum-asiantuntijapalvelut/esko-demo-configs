---
name: seed-local-database
description: Instructions for seeding the local development database.
---

# Seeding the local development database

Before seeding, you have to run the migration script to make sure that the database schema is up to date. From project root:

```bash
./compose.sh migrate`
```

To seed the local development database, run the following command from the project root:

```bash
./compose.sh seed
```
