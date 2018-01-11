var colors = ['#78ffd6','#3a7bd5','#1CB5E0','#56CCF2','#2F80ED','#0575E6', '#3399ff'];

function getRandom(){
  return Math.floor(Math.random() * colors.length);
}

function returnLinearGradient(){
  var str = "linear-gradient(to right, " + colors[getRandom()] + ", " + colors[getRandom()] + ")"
  var alt = colors[getRandom()];
  return alt;
}

function main(){
  setInterval(function(){
    $('#banner').css('background', returnLinearGradient());
  }, 2000);
}

$(document).ready(function(){
  console.log('ready');
  main();
})
