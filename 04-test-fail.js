var test = require("prova");

test("passing with no errors", function (assert) {
  assert.plan(1);
  assert.ok(true);
});

test("making false assertions", function (assert) {
  assert.plan(1);
  assert.equal(3.14, 3.15);
});
