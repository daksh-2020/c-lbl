canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=1;
ctx.rect(175, 145,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=5;
ctx.arc(290, 210,40,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=5;
ctx.arc(390, 210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=5;
ctx.arc(490, 210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth=5;
ctx.arc(340, 250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth=5;
ctx.arc(440, 250,40,0,2 * Math.PI);
ctx.stroke();