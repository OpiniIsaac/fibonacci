const { assert } = require('chai');
const { describe, it } = require('mocha');
const fibonacci = require('../app');

describe('fibonacci', () => {
  it('first test', () => {
    assert.equal(fibonacci(0), 0);
  });
  it('second test', () => {
    assert.equal(fibonacci(1), 1);
  });
  it('third test', () => {
    assert.equal(fibonacci(3), 2);
  });
});
