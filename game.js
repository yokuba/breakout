var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
ctx.fillStyle = getRandomColor();

function drawBall(){
  ctx.beginPath();
  ctx.arc( x, y, ballRadius, 0, Math.PI*2);

  ctx.fill();
  ctx.closePath();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx < ballRadius || x + dx > canvas.width-ballRadius){
    dx = -dx;
    ctx.fillStyle = getRandomColor();
  }
  if (y + dy > canvas.height-ballRadius || y + dy < ballRadius){
    dy = -dy;
    ctx.fillStyle = getRandomColor();

  }

  x += dx;
  y += dy;
}
setInterval(draw, 15);