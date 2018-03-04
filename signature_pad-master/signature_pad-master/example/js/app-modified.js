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
  var thing = getDataObject(blob);

  window.URL.revokeObjectURL(url);
  signaturePad.clear(); // Added because sometimes the signature area does not clear after you click the checkbox.
  window.location.assign("file:///C:/Users/Isaac/Documents/GitHub/stmartins-guest-attendance/Sign%20In.html");
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
function getDataObject(Blob) {
    // Avoiding "magic numbers"
    var lunch_cutoff = 12; // We are assuming that Lunch begins at 12:00 Noon
    var breakfast = "Breakfast";
    var lunch = "Lunch";

    var timestamp = new Date();
    var current_date = (timestamp.getMonth()+1).toString() + "/" + timestamp.getDate().toString()
          + "/" + timestamp.getFullYear().toString(); // Get the date
    var current_time = timestamp.getHours().toString() + ":" + timestamp.getMinutes().toString(); // Get the time
    if (timestamp.getHours() < lunch_cutoff) { // Get the meal: lunch or breakfast?
        var meal = breakfast;
    }
    else {
        var meal = lunch;
    }
    var signature_object = {date: current_date, time: current_time, meal: meal, image: Blob};
    return signature_object;
}