WORK_ITEM: TR-002
TYPE: FEATURE
BRANCH: wi/TR-002-ct1
BASE_SHA: 59ce13d5c85163620906f964fe083eac88738c3a
MIGRATIONS: none
ALLOWED_SCOPE:
- src/*
- test/*
FORBIDDEN_SCOPE:
GOAL: Disposable trial CT-1 only (not Rosuno). Add src/ct1.js exporting ct1Marker(), which returns the string "ct1", and test/ct1.test.js with one node:test test for it. Match the existing module style in src/.
TESTS: npm test
NOTES: No dependencies. No other files.
