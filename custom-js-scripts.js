var myCanvas = document.getElementById("active-signature-box");
var canvasContext = myCanvas.getContext("2d");

function ouch(the_element, the_event) {
    canvasContext.beginPath();
    canvasContext.rect(10,20,100,50);
    canvasContext.stroke();
}
// We'll get the mouse position and try to draw where the mouse is going there.