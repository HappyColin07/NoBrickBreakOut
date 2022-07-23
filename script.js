let $canvas = document.getElementById("myCanvas");
let ctx = $canvas.getContext("2d");
let x = $canvas.width/2
let y = $canvas.height - 30;



let dx = 2;
let dy = -2;

let cho = 0;
let spancho = document.getElementById('cho');

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = ($canvas.width-paddleWidth)/2;

let rightPressed = false;
let leftPressed = false;
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(e){
    console.log(e.keyCode);
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37){
        leftPressed = true;
    }
}
function keyUp(e){
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37){
        leftPressed = false;
    }
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,310,paddleWidth,paddleHeight);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.closePath();
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

}
function draw(){
    ctx.clearRect(0, 0,$canvas.width, $canvas.height);
    drawBall();
    drawPaddle();
    if (x> 390 || x< 10) {
        dx = -dx;
    }
    if (y + dy < 10) {
        dy = -dy;
    }
    else if(y + dy> $canvas.height-10){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy= -dy;
        }
        else{
            alert("게임 오버");
            clearInterval(set_id);
            document.location.reload();
        }
    }
    if(rightPressed && paddleX < $canvas.width-paddleWidth){
        paddleX +=7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -=7;
    }
    x += dx;
    y += dy;
    }

let set_id = setInterval(draw, 10);