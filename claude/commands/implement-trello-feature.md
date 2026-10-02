---
description: Implement a feature from a Trello ticket URL. Finds the Trello card by URL, reads its description and acceptance criteria, combines it with extra backend/frontend/test requirements, then runs the /implement-feature workflow.
argument-hint: Ticket URL, plus optional implementation notes (DB models, API endpoints, integrations, frontend behavior, test expectations)
allowed-tools: SlashCommand, Read, Grep, Glob, TodoWrite, mcp__trello__*
---

Implement the feature described by the Trello ticket URL given in the user input below.

User input: $ARGUMENTS

The input may contain:

- A Trello ticket URL
- Optional implementation notes
- Optional technical constraints
- Optional desired DB models, API endpoints, request/response models, integrations, frontend behavior, API tests, or E2E tests

Your job:

1. Extract the target ticket URL from the Buutti Developers board and any extra implementation guidance from the input.
2. Use the Trello MCP to find the matching ticket by URL on the Buutti Developers board. Trello accepts the short link ID as a card identifier — use that _directly_. State which ticket you selected.
3. If the ticket cannot be found by URL, stop and ask a concise clarification question before making code changes.
4. Read the card details thoroughly, including description, checklist items, labels, comments, and recent card history when they help clarify scope.
5. Combine the Trello requirements with the user-provided technical guidance into a single, self-contained feature/change description. Treat explicit user guidance as higher priority. Scope it to only the feature required for the selected ticket.

Then hand the assembled description to the delivery workflow: invoke the `/implement-feature` command via the SlashCommand tool, passing the combined requirements (and any user notes) as its argument.
