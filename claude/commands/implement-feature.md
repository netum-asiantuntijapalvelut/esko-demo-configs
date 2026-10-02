---
description: Drive the two-phase delivery pipeline — backend first (implement → API tests → review → refine), then frontend (implement → E2E tests → review → refine) — for a feature or change described in plain text. Every step is gated; the test run/fix loops iterate automatically until green.
argument-hint: Feature/change description, plus optional notes (DB models, API endpoints, integrations, frontend behavior, test expectations)
allowed-tools: Task, Read, Grep, Glob, Bash, TodoWrite
---

Deliver the feature or change described below through the staged, two-phase pipeline.

Feature/change request: $ARGUMENTS

## How to run it

Subagents run in isolation and cannot call each other, so you (the main thread) drive every stage with the Task tool. Pass state between stages through the working tree (`git diff`/`git status`) and the `.temp/*.md` artifacts (`plan.md`, the per-lens `review-<lens>.md` files and the consolidated `review.md`, and the transient `test-failures.md`). Give each subagent only what it needs (the relevant artifact paths / instruction) plus any user clarifications — not the whole conversation.

The pipeline runs in two phases — **backend first, then frontend** — each fully implemented, tested, reviewed and refined before moving on. **Pause for explicit yes/no approval at every gate marked 🚪.** Inside a test loop, the runner↔fixer iterations run automatically (no gate) until the suite is green or a hard blocker is hit; the gate comes after the loop.

**Scope each phase's review and refine (important).** Nothing is committed between the phases, so `git diff` shows _every_ change made so far — you must not rely on it alone to decide what a phase reviews. In each reviewer's and the code-refiner's prompt, state explicitly which area it must look at and that it should **ignore the other phase's already-handled changes**:

- **Phase 1** → only the backend changes (`server/`, migrations, shared modules).
- **Phase 2** → only the frontend changes (`frontend/`); the regenerated API client was already reviewed in phase 1, so exclude it.

### Phase 1 — Backend

1. **Plan** — Run the `planner` subagent (writes `.temp/plan.md`). Present the plan.
   🚪 **"Approve the plan and proceed to backend implementation? (yes/no)"**
2. **Backend implement** — Run the `backend-implementer` subagent (reads `.temp/plan.md`, implements the server/backend parts, and regenerates the typed API client to match the new schema). Present the summary, including the **API surface for the frontend** (keep it for phase 2).
   🚪 **"Proceed to writing API tests? (yes/no)"**
3. **Write API tests** — Run the `api-test-writer` subagent (reads `.temp/plan.md` + the backend `git diff`; writes API tests, does not run them). Present the summary.
   🚪 **"Proceed to running API tests? (yes/no)"**
4. **API test run & fix loop** (loop is automatic):
   a. Run the `test-runner` subagent, telling it to run **only the API suite**.
   b. If it reports FAIL: run the `test-result-fixer` subagent (reads `.temp/test-failures.md` + `.temp/plan.md`), then go back to 4a. Repeat until PASS — **without asking the user**.
   c. **Safety:** on a hard blocker or no progress across iterations, stop and surface it to the user instead of looping indefinitely.
   🚪 **"API tests green — proceed to backend review? (yes/no)"**
5. **Backend review** (parallel, multi-perspective — focus on the backend changes):
   a. Run these **seven** reviewer subagents **in parallel** (one message, all Task calls together), each focused on the backend changes and writing its own file: `reviewer-naming`, `reviewer-code-style`, `reviewer-architecture`, `reviewer-apis`, `reviewer-api-tests`, `reviewer-bugs`, `reviewer-security` → `.temp/review-<lens>.md`. **Do not run `reviewer-e2e-tests`** (no E2E tests exist yet).
   b. Run the `review-synthesizer` subagent, telling it to merge exactly those seven lens files into `.temp/review.md`.
   c. Present the consolidated review.
   🚪 **"Proceed to applying the backend review? (yes/no)"**
6. **Backend code refine** — Run the `code-refiner` subagent (reads `.temp/plan.md` + `.temp/review.md` + the backend `git diff`); it applies both sections of the review. Present the summary.
   🚪 **"Proceed to the backend regression test run? (yes/no)"**
7. **Backend regression** (loop is automatic):
   a. Run the `test-runner` subagent on the **API suite**; if it reports FAIL, run the `test-result-fixer` and re-run until PASS (same safety guard as step 4).
   🚪 **"Backend phase complete — proceed to frontend implementation? (yes/no)"**

### Phase 2 — Frontend

8. **Frontend implement** — Run the `frontend-implementer` subagent, **passing it the backend API surface** from step 2; it reads `.temp/plan.md` + `git diff`/`git status`, verifies the API client is in sync (the backend phase already regenerated it), and implements the frontend. Present the summary.
   🚪 **"Proceed to writing E2E tests? (yes/no)"**
9. **Write E2E tests** — Run the `e2e-test-writer` subagent (reads `.temp/plan.md` + the `git diff`; writes E2E tests, does not run them). Present the summary.
   🚪 **"Proceed to running E2E tests? (yes/no)"**
10. **E2E test run & fix loop** (loop is automatic):
    a. Run the `test-runner` subagent, telling it to run **only the E2E suite**.
    b. If it reports FAIL: run the `test-result-fixer` subagent, then go back to 10a. Repeat until PASS — **without asking the user**.
    c. **Safety:** on a hard blocker or no progress, stop and surface it to the user.
    🚪 **"E2E tests green — proceed to frontend review? (yes/no)"**
11. **Frontend review** (parallel — focus on the frontend changes):
    a. Run these **seven** reviewer subagents **in parallel**, each focused on the frontend changes and writing its own file: `reviewer-naming`, `reviewer-code-style`, `reviewer-architecture`, `reviewer-apis`, `reviewer-e2e-tests`, `reviewer-bugs`, `reviewer-security` → `.temp/review-<lens>.md`. **Do not run `reviewer-api-tests`**.
    b. Run the `review-synthesizer` subagent, telling it to merge exactly those seven lens files into `.temp/review.md`.
    c. Present the consolidated review.
    🚪 **"Proceed to applying the frontend review? (yes/no)"**
12. **Frontend code refine** — Run the `code-refiner` subagent (reads `.temp/plan.md` + `.temp/review.md` + the frontend `git diff`). Present the summary.
    🚪 **"Proceed to the frontend regression test run? (yes/no)"**
13. **Frontend regression** (loop is automatic):
    a. Run the `test-runner` subagent on the **E2E suite**; if it reports FAIL, run the `test-result-fixer` and re-run until PASS (same safety guard).
    b. **If any backend bugs were discovered or backend code (`server/`) was touched during phase 2** — e.g. a phase-2 reviewer flagged a backend issue, or a fix reached into the backend — also run the `test-runner` on the **API suite** and run the same fixer loop until it is green, so the backend stays regression-free.

Finally, produce: a final checklist, a short commit message with a detailed description, any open questions/ambiguities, remaining risks, and suggested follow-ups.
