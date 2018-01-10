function getRandom(){
  return Math.floor(Math.random() * 6);
}

function returnLinearGradient(){
  var colors = ['#78ffd6','#000046','#1CB5E0','#56CCF2','#2F80ED','#0575E6'];
  var str = "linear-gradient(to right, " + colors[getRandom()] + ", " + colors[getRandom()] + ")"
  var alt = colors[getRandom()];
  return alt;
}

function main(){
  setInterval(function(){
    $('#banner').css('background', returnLinearGradient());
  }, 3000);
}

$(document).ready(function(){
  console.log('ready');
  main();
})
