var controlElement = 3;

function showFlower() {
  console.log("Hi");
  var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flower");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  var canvas= document.getElementById("issueCan");
  var ctx = canvas.getContext("2d");
  controlElement = Math.floor(Math.random() * 8);
  console.log(controlElement);
  if (controlElement == 0) {
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
  }
  else if (controlElement == 1) {
    var img = document.getElementById("dehydration");
  }
  else if (controlElement == 2) {
    var img = document.getElementById("ironDef");
  }
  else if (controlElement == 3) {
    var img = document.getElementById("lackSun");
  }
  else if (controlElement == 4) {
    var img = document.getElementById("nitrogenDef");
  }
  else if (controlElement == 5) {
    var img = document.getElementById("overWater");
  }
  else if (controlElement == 6) {
    var img = document.getElementById("pestProblem");
  }
  else if (controlElement == 7) {
    var img = document.getElementById("potassiumDef");
  }
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function water() {
  if (controlElement == 1){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
}

function healthy() {
  if (controlElement == 0){
    alert("Yay! The plant is happy");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function dry() {
  if (controlElement == 5){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function pest() {
  if (controlElement == 6){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function sun() {
  if (controlElement == 3){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function iron() {
  if (controlElement == 2){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function nitrogen() {
  if (controlElement == 4){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}

function potassium() {
  if (controlElement == 7){
    alert("Yay! You saved the plant");
    var canvas= document.getElementById("issueCan");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("healthyLeaf");
    console.log("Hi healthy");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } 
  else {
    alert("Sorry! Try again");
    var canvas= document.getElementById("mainCan");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("flowerDead");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
  }
}