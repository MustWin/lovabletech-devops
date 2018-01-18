var colors = [
  'rgba(52,194,219,0.5)',
  'rgba(52,180,219,0.5)',
  'rgba(52,166,219,0.5)',
  'rgba(52,152,219,0.5)',
  'rgba(52,138,219,0.5)',
  'rgba(52,124,219,0.5)',
  'rgba(52,110,219,0.5)',
  'rgba(52,208,219,0.5)',
  'rgba(52,219,216,0.5)',
  'rgba(52,219,202,0.5)',
];

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}

function returnLinearGradient() {
  return colors[getRandom()];
}

function main() {
  setInterval(function() {
    $('.background-tint').css('background-color', returnLinearGradient());
  }, 2000);
}

$(document).ready(function() {
  //console.log('ready');
  main();
});
