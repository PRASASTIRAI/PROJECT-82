canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d") ;
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0, 2*Math.PI);
canvas.addEventListner("on_mousedown",my_mousedown);
function my_mousedown(){
color=document.getElementById("color").nodeValue
console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("x="+mouse_x+",y="+mouse_y);
circle=(mouse_x,mouse_y);
/*function for circle*/

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity//

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}






}
