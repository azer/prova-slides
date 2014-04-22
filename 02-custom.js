var test = require('tape');
var prettify = require('prettify-error');

test.createStream({ objectMode: true }).on('data', function (row) {
  if (row.error) console.error('  %s', prettify(row.error, 2));
});

test("passing with no errors", function (assert) {
  assert.plan(1);
  assert.ok(true);
});

test("making false assertions", function (assert) {
  assert.plan(1);
  assert.equal(3.14, 3.15);
});
