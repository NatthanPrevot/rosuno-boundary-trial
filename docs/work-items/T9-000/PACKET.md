WORK_ITEM: T9-000
TYPE: PROCESS
BRANCH: wi/T9-000-t0-setup
BASE_SHA: 59ce13d5c85163620906f964fe083eac88738c3a
MIGRATIONS: none
ALLOWED_SCOPE:
- .github/scripts/rosuno-guard.sh
- .github/scripts/rosuno-guard-trust.sh
- .github/workflows/rosuno-guard.yml
- .github/workflows/p0.yml
- .claude/settings.json
FORBIDDEN_SCOPE:
- .env

# T9-000 — T0 trial setup (disposable trial repository only)

Installs the Candidate A guard v3, the workflow_run trusted runner (trial values), the "P0 control foundation"
stand-in (job test) and the candidate Builder settings on the trial repository, for T0 trials 1-3.
