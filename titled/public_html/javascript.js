/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//rectangle
var ux = 0;
var uy = 0;
var canvas = document.getElementById("eyedee");
var ctx = canvas.getContext("2d");
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
update();
document.body.addEventListener("keydown",onKeyDown);
document.body.addEventListener("mousedown",onMouseDown);
function onKeyDown(event) {
    if (event.keyCode == 38 || event.keyCode == 87 ){
        uy--;
    } else if (event.keyCode == 40 || event.keyCode == 83 ){
        uy++;
    } else if (event.keyCode == 37 || event.keyCode == 65 ){
        ux--;
    }else if (event.keyCode == 39 || event.keyCode == 68 ){
        ux++;
    }
}
function onMouseDown(event){
    ux= event.clientX;
    uy= event.clientY;
update();
}
function update(){
    ctx.fillRect(ux,uy,10,10);
    requestAnimationFrame(update);
}

//ctx.beginPath();
//ctx.moveTo(20,20);
//ctx.lineTo(200,10);
//ctx.lineTo(100,200);
//ctx.lineTo(20,20);
//ctx.stroke();
//ctx.closePath();

//ctx.fillRect(100,100,10,10);
////circle
//ctx.fillStyle = "#ff0000";
//ctx.strokeStyle = "#00ff00";
//ctx.lineWidth= 30;
//ctx.beginPath();
//ctx.arc(200,200,100,0,Math.PI);
//ctx.fill();
//ctx.stroke();
//ctx.closePath();