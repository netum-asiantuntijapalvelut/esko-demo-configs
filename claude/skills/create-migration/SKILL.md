---
name: create-migration
description: Instructions for creating a new database migration.
---

# Creating a new database migration

1. Run `./compose.sh migrate` from the project root to make sure that the database is up to date.
2. Modify the entity in the feature that owns it, and import it in `server/src/models.py` if it is not there yet.
3. Run `./compose.sh migrate revision --autogenerate -m "<name-of-migration>"`
4. Inspect the generated file under `alembic/versions`. Modify if necessary.
5. Run migrations with `./compose.sh migrate`. To verify downgrades, run `./compose.sh migrate downgrade -1`.
