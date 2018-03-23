/// This code, with the exception of a few functions, is modified from code released under the MIT-license by Szymon Nowak
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
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  // We need to send the blob and associated data to the database
  var signature_entry = getDataObject(blob);

  window.URL.revokeObjectURL(url);
  signaturePad.clear(); // Added because sometimes the signature area does not clear after you click the checkbox.
  window.location.assign("Sign%20In.html");
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

savePNGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL();
    download(dataURL, "signature.png");
  }
});

// The functions after this line are not part of the code by Szymon Nowak

// RETURNS: The type of signature, "adult" or "child", based on the URL of the page that getSignatureType() is being called from.
//                  Or, returns an error message if the URL has neither "Adult" or "Child" in it.
function getSignatureType() {
    siteURL = window.location.href;
    if (siteURL.indexOf("Adult") >=0) {            // The URL has "Adult" in it, so we are at the "Adult" status signature page.
      signature_type = "adult"
    } else if (siteURL.indexOf("Child") >= 0) { // The URL has "Child" in it, so we are at the "Child" status signature page.
      signature_type = "child"
    } else {                                                  // The URL does not have "Adult" or "Child" in it, so we are at the wrong URL.
      error_msg = "ERROR: The signature does not have an 'adult' or 'child' status associated with it!";
      signature_type = error_msg;
      alert (error_msg);
    }
    return signature_type;
}

function getDataObject(Blob) {
    signature_type = getSignatureType();
    var current_time = new Date(); // Gets the current time stamp
    var signature_object = {timestamp: current_time.toString(), status: signature_type, image: Blob};
    return signature_object;
}