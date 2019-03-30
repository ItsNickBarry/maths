let assert = require('assert');

require('./index.js');

// uncomment this line to make a compromise
// global.Math = Maths;

describe('Math', function () {
  it('no longer imposes its tyranny upon us', function () {
    assert.throws(() => Math);
  });
});

describe('Maths', function () {
  it('is available to the hardworking programmer, as is natural and just', function () {
    assert.doesNotThrow(() => Maths);
  });
});
