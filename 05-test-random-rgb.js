var randomRGB = require("./05-random-rgb");
var test = require("prova");

test('getting different rgb color each time', function (assert) {
  var color = randomRGB();
  assert.plan(2);
  assert.equal(color.length, 3);
  assert.notDeepEqual(randomRGB(), color);
});
