---
name: run-app
description: Instructions for running the application.
---

# Running the application

The whole application can be run with frontend with the following command from the project root:

```bash
./compose.sh migrate && ./compose.sh seed && ./compose.sh develop
```

This will apply migrations, seed the database, and start database, server, backend services and the frontend, all as separate services.

The server will be available at https://localhost:8000 and the frontend at https://localhost:8080.

To start only backend services and the database, run (after migrations and seeding):

```bash
./compose.sh server
```

You can also host the frontend on the backend server as a single service, similarly as in the test environment, with the following commands:

```bash
cd frontend
npm ci --ignore-scripts
npm run build
cd ..
cp -r frontend/dist/* server/static/
./compose.sh deployment
```

Then in browser, navigate to https://localhost:8000.

You can remove all services, excluding volumes and test services, with:

```bash
./compose.sh down
```

And all services including volumes and test services with:

```bash
./compose.sh down-all
```
