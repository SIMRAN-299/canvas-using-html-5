/*let c;
let w=10;

function myfun(){
    c=document.getElementById("mycolor").value;
    w=document.getElementById("mywidth").value;

}
const canvas=document.querySelector('#draw');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle=c;
ctx.lineJoin='round';
ctx.lineCap='round';
let temp=0;
let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=c;
console.log(typeof `${c}`);

function draw(e){
  if(!isDrawing)return;
console.log(e);
ctx.strokeStyle=`${c}`;
ctx.beginPath();
ctx.moveTo(lastX,lastY);
ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
ctx.lineWidth=w;

hue++;

[lastX,lastY]=[e.offsetX,e.offsetY];

}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',function(e){
  isDrawing=true;
  lastX=e.offsetX;
  lastY=e.offsetY;
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);
*/