// var myCanvas = document.getElementById("active-signature-box");
var container = document.getElementById("container");
var myCanvas = document.createElement("canvas");
myCanvas.length="200";
myCanvas.height="400";
myCanvas.width="400";
myCanvas.id="active-signature-box";
container.insertBefore(myCanvas, container.firstChild);
var canvasContext = myCanvas.getContext("2d");

function ouch(the_element, the_event) {
    var mouseX = the_event.clientX;
    var mouseY = the_event.clientY;
    alert("mouseX is " + mouseX + ", mouseY is " + mouseY);
    canvasContext.beginPath();
    canvasContext.moveTo(0, 0);
    canvasContext.lineTo(mouseX, mouseY)
    canvasContext.stroke();
    imageData = canvasContext.getImageData(0, 0, 400, 400);
    console.log(imageData);
    console.log(typeof imageData);
}
// We'll get the mouse position and try to draw where the mouse is going there.