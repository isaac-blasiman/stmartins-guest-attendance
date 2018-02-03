var myCanvas = document.getElementById("active-signature-box");
var canvasContext = myCanvas.getContext("2d");

function ouch(the_element, the_event) {
    var mouseX = the_event.clientX;
    var mouseY = the_event.clientY;
    alert("mouseX is " + mouseX + ", mouseY is " + mouseY);
    canvasContext.beginPath();
    canvasContext.moveTo(0, 0);
    canvasContext.lineTo(mouseX, mouseY)
    canvasContext.stroke();
}
// We'll get the mouse position and try to draw where the mouse is going there.