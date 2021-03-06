/// This code, with the exception of a few functions and lines of code, is modified from code released under the MIT-license by Szymon Nowak
var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var savePNGButton = wrapper.querySelector("[data-action=save-png]");
var canvas = wrapper.querySelector("canvas");
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'rgb(255, 255, 255)'
});

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  signaturePad.clear();
}

// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
window.onresize = resizeCanvas;
resizeCanvas();

function download(dataURL, filename) {
  /*These two lines are currently unused, they create a javascript Blob
  for use within the file, NOT for sending. These are importnat in being able to download a png.*/
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  //a.click(); //Commenting/uncommenting this allows the png file to be saved locally

  // We need to send the blob and associated data to the database
  var siteURL = window.location.href;
  var signature_status = getSignatureStatus(siteURL); // Determines whether the signature is for an adult or for a child
  dataURL = encodeURIComponent(dataURL); //Ensures safe transmission of data without mutation or truncating
  var signature_entry = createDataObject(signature_status, dataURL); //Prepares a JavaScript object

  console.log(signature_entry);

  //Create an HTTP request to transmit data to the server
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200) {
          console.log("SUCCESS!");
          window.location.assign("Sign%20In.html"); // Untested, but works when you do it manually
      }
  }

  //Covnert JavaScript object to JSON string
  var jsonSignatureObject = "sig="+JSON.stringify(signature_entry);
  console.log(jsonSignatureObject);

  //Perform data send
  xmlhttp.open("POST", "sendToDatabase.php");
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(jsonSignatureObject);

  window.URL.revokeObjectURL(url);
  signaturePad.clear(); // Added because sometimes the signature area does not clear after you click the checkbox.

}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

clearButton.addEventListener("click", function (event) {
  signaturePad.clear();
});

savePNGButton.addEventListener("click"
, function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL();
    download(dataURL, "signature.png");
  }
});