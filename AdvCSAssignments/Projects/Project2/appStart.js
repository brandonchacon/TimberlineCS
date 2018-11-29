
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snowArray = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/**
 * Constructor for a single snow flake
 */

function snowFlake(x,y,r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle="#ffffff";
    ctx.fill();
  }
  
}
/** 
 * TODO: Complete the below to make lots of snow and 
 * populate the snowArray
 * Each snow flake must be of random sizes and populate
 * the screen randomly in the y and x directions
 * Feel free to add a parameter to specify the amount of snow
 */

function snow(){
  
}

/**
 * TODO:  Make the snow appear randomly appear on the screen
 */

function drawSnow(){
  //The command below is needed to clear the screen between each movement
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
      
  //The command below is needed to animate the snow
  window.requestAnimationFrame(drawSnow);  
}

/**
 * TODO: Complete the function below to move each snow flake to the 
 * top of the screen once it has reached the bottom.
 */
function moveSnow(){
  
}


/**
 * TODO: Complete the drawScene function below.
 * Inside this function, call the additional functions needed to
 * complete your scene
 */
function drawScene(){

}

drawScene();
