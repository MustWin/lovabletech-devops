function getRandom(){
  return Math.floor(Math.random() * 10);
}

function main(){
  var colors = ['#78ffd6','#000046','#1CB5E0','#56CCF2','#2F80ED','#0575E6'];

  setInterval(function(){
    console.log(colors[getRandom()]);
  }, 1000);
}

main();
