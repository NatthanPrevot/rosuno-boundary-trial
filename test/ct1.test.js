import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ct1Marker } from '../src/ct1.js';

test('returns the ct1 marker', () => {
  assert.equal(ct1Marker(), 'ct1');
});
