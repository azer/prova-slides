module.exports = randomRGB;

function randomRGB () {
  return [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  ];
}
