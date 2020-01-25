const rand = document.querySelector('.rand');
const reset = document.querySelector('.reset');
const modeText = document.querySelector('.mode');
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');

const modes = ['source-over', 'screen', 'source-out', 'color-burn', 'soft-light'];

let mode = modes[Math.floor(Math.random() * modes.length)];
modeText.innerHTML = mode;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = "60px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("DRAW ON ME!", canvas.width/2, canvas.height/2);

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;
ctx.globalCompositeOperation = mode;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; // the function only works if mouse is down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue ++;
    if (hue >= 360) {
        hue = 0;
    }
    if(ctx.lineWidth >= 200 || ctx.lineWidth <=1) {
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

rand.addEventListener('click', () => {
    mode = modes[Math.floor(Math.random() * modes.length)];
    ctx.globalCompositeOperation = mode;
    modeText.innerHTML = mode;
})

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})