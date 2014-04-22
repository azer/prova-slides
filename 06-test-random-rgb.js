var randomRGB = require("./05-random-rgb");
var test = require("prova");

test('getting different rgb color each time', function (assert) {
  var color = randomRGB();
  assert.plan(2);
  assert.equal(color.length, 3);
  assert.notDeepEqual(randomRGB(), color);
});

show();

function show () {
  if (typeof document == 'undefined') return;

  var html = '';
  var i = 10;
  var color = '';

  while (i--) {
    color = "rgb(" + randomRGB().join(',') + ")";
    html += '<div style="float:left; height: 100%; width: 10%; background: ' + color + '"></div>';
  }

  document.body.innerHTML = html;

  setTimeout(show, 1000);
}
