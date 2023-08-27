const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 50;

const context = canvas.getContext("2d");

let x=null ;
let y=null; 
context.linewidth = 5;

let draw = false;
context.strokstyle = "#010600";

window.addEventListener("mousedown" , (e)=>(draw=true));
window.addEventListener("mouseup" , (e)=>(draw=false));
window.addEventListener("mousemove" , (e)=>{
if(x==null || y== null || !draw){
    x=e.clientX;
    y=e.clientY;
    return;
}
let currentX = e.clientX ,
currentY = e.clientY;

context.beginpath();
context.moveTo(x , y);
context.lineTo(currentX , currentY);
context.strok();

x= currentX;
y=currentY;

});
document.getElementById("clear").onclick =function (){
    context.clearRect(0,0,canvas.width , canvas.height)
}
document.querySelectorAll('.colorChange').forEach(ele =>{ele.onclick = function () {
  console.log("clicked");
  context.strokstyle = ele.style.backgroundVolour
};
})
