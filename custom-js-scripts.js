var container = document.getElementById("container");
var myCanvas = document.createElement("canvas");
container.insertBefore(myCanvas, container.firstChild);
var signaturePad = new SignaturePad(myCanvas);
// myCanvas.height = 50vw;
// myCanvas.width = 50vw;