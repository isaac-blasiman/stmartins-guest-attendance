var container = document.getElementById("container");
var myCanvas = document.createElement("canvas");
container.insertBefore(myCanvas, container.firstChild);
var signaturePad = new SignaturePad(myCanvas);
