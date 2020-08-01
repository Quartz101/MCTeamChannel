var controlElement = 3;


function DoSomethingGood(){
  console.log("I'm fun");
  var canvas= document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (controlElement == 2) {
    var img = document.getElementById("virus1");
    controlElement = 1;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 3) {
    var img = document.getElementById("virus2");
    controlElement = 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 4) {
    var img = document.getElementById("virus3");
    controlElement = 3;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 5) {
    var img = document.getElementById("virus4");
    controlElement = 4;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 6) {
    var img = document.getElementById("virus5");
    controlElement = 5;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 1) {
    var img = document.getElementById("virus0");
    controlElement = 0;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 0) {
    var img = document.getElementById("virus0");
    alert("You win! The evil Corona Virus has been stopped");
    randomVirus();
  } 

}


function DoSomethingBad(){
  console.log("I'm naughty");
  var canvas= document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (controlElement == 0) {
    var img = document.getElementById("virus1");
    controlElement = 1;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 1) {
    var img = document.getElementById("virus2");
    controlElement = 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 2) {
    var img = document.getElementById("virus3");
    controlElement = 3;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 3) {
    var img = document.getElementById("virus4");
    controlElement = 4;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 4) {
    var img = document.getElementById("virus5");
    controlElement = 5;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 5) {
    var img = document.getElementById("virus6");
    controlElement = 6;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else if (controlElement == 6) {
    var img = document.getElementById("virus6");
    alert("The evil Corona virus has defeated you!");
    randomVirus();
  } 
}

function randomVirus() {
  console.log("Random Virus");
  var canvas= document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  controlElement = Math.floor(Math.random() * 7);
  console.log(controlElement);
  if (controlElement == 0) {
    var img = document.getElementById("virus0");
  }
  else if (controlElement == 1) {
    var img = document.getElementById("virus1");
  }
  else if (controlElement == 2) {
    var img = document.getElementById("virus2");
  }
  else if (controlElement == 3) {
    var img = document.getElementById("virus3");
  }
  else if (controlElement == 4) {
    var img = document.getElementById("virus4");
  }
  else if (controlElement == 5) {
    var img = document.getElementById("virus5");
  }
  else if (controlElement == 6) {
    var img = document.getElementById("virus6");
  }
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}







