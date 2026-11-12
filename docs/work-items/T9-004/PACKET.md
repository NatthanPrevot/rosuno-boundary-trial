WORK_ITEM: T9-004
TYPE: PROCESS
BRANCH: wi/T9-004-guard-app
BASE_SHA: d842a250e6aae9aaa6231eab7d4aff4c2980687c
MIGRATIONS: none
ALLOWED_SCOPE:
- .github/workflows/rosuno-guard.yml
FORBIDDEN_SCOPE:
- .env

# T9-004 — T0 security correction (disposable trial repository only)

Trial 1 showed that a PR-defined GitHub Actions job named rosuno-guard satisfied the required check. This work item
publishes the trusted rosuno-guard status only with a token of the dedicated owner-controlled GitHub App (key held
in environment rosuno-guard-status, deployment branch `main`), so that the required check can be pinned to that App.
