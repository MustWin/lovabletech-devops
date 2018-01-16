var colors = ['rgba(51,153,255,0.5)','rgba(58,123,213,0.5)','rgba(28,181,224,0.5)','rgba(86,204,242,0.5)','rgba(47,128,237,0.5)','rgba(47,128,237,0.5)'];

function getRandom(){
  return Math.floor(Math.random() * colors.length);
}

function returnLinearGradient(){
  return colors[getRandom()];
}

function main(){
  setInterval(function(){
    $('.background-tint').css('background-color', returnLinearGradient());
  }, 2000);
}

$(document).ready(function(){
  console.log('ready');
  main();
})
