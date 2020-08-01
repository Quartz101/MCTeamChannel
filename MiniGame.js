var controlElement = 3;


function DoSomethingGood(){
  console.log("I'm fun");
  var canvas= document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (controlElement == 2) {
    var img = document.getElementById("virus1");
    controlElement = 1;
  } 
  else if (controlElement == 3) {
    var img = document.getElementById("virus2");
    controlElement = 2;
  } 
  else if (controlElement == 4) {
    var img = document.getElementById("virus3");
    controlElement = 3;
  } 
  else if (controlElement == 5) {
    var img = document.getElementById("virus4");
    controlElement = 4;
  } 
  else if (controlElement == 6) {
    var img = document.getElementById("virus5");
    controlElement = 5;
  } 
  else if (controlElement == 1) {
    var img = document.getElementById("virus0");
    controlElement = 0;
  } 
  else if (controlElement == 0) {
    var img = document.getElementById("virus0");          //attention output message: "You win! The evil Corona Virus has been stopped"
    controlElement = 0;
    console.log("You win! The evil Corona Virus has been stopped");
  } 
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}


function DoSomethingBad(){
  console.log("I'm naughty");
  var canvas= document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (controlElement == 0) {
    var img = document.getElementById("virus1");
    controlElement = 1;
  } 
  else if (controlElement == 1) {
    var img = document.getElementById("virus2");
    controlElement = 2;
  } 
  else if (controlElement == 2) {
    var img = document.getElementById("virus3");
    controlElement = 3;
  } 
  else if (controlElement == 3) {
    var img = document.getElementById("virus4");
    controlElement = 4;
  } 
  else if (controlElement == 4) {
    var img = document.getElementById("virus5");
    controlElement = 5;
  } 
  else if (controlElement == 5) {
    var img = document.getElementById("virus6");
    controlElement = 6;
  } 
  else if (controlElement == 6) {
    var img = document.getElementById("virus6");    //attention output message: "covid wins, you lose"
    controlElement = 6;
    console.log("The evil Corona virus has defeated you!");
  } 
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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







