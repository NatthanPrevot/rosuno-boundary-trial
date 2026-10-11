import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('lowercases and joins words with hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('collapses punctuation and whitespace runs, trims edges', () => {
  assert.equal(slugify('  --Rosuno!!  Boundary   Trial?? '), 'rosuno-boundary-trial');
});

test('strips diacritics', () => {
  assert.equal(slugify('Crème Brûlée à la Señora'), 'creme-brulee-a-la-senora');
});

test('supports a custom separator', () => {
  assert.equal(slugify('Fork Workflow Test', { separator: '_' }), 'fork_workflow_test');
  assert.equal(slugify('a.b c', { separator: '.' }), 'a.b.c');
});

test('throws TypeError on non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
});

// INTENTIONAL FAILURE: security test proving required CI blocks failing code.
// Do not fix. slugify('Hello World') returns 'hello-world', not 'HELLO_WORLD'.
test('INTENTIONAL FAILURE: required CI check must block this branch', () => {
  assert.equal(slugify('Hello World'), 'HELLO_WORLD');
});
