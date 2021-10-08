canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="darkblue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(70,60,50,0,2*Math.PI);
ctx.stroke();

function circle(mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=2;
    ctx.arc(mouse_X,mouse_Y,50,0,2*Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    console.log(mouse_X + "  " + mouse_Y);
    circle(mouse_X,mouse_Y);
}

function Clear(){
    ctx.clearRect(
        0,0,800,600
    );
}

