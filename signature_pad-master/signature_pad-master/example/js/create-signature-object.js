/// create-signature-object.js
/// Provides functionality to create a signature_entry object with a timestamp, status, and image, given the status and image blob data.
/// Written by Isaac Blasiman 3/29/18

// Pulls from post by https://stackoverflow.com/users/9951/e-satis on https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file?page=1&tab=votes#tab-top

// PARAMETER(S): siteURL - a http:\\ or https:\\ url.
// RETURNS:          The type of signature, "adult" or "child", based on the URL of the page that
//                           getSignatureType() is being called from.
//                           Or, returns an error message if the URL has neither "Adult" or "Child" in it.
function getSignatureType(siteURL) {
    if (siteURL.indexOf("Adult") >=0) {            // The URL has "Adult" in it, so we are at the "Adult" status signature page.
      signature_type = "adult"
    } else if (siteURL.indexOf("Child") >= 0) { // The URL has "Child" in it, so we are at the "Child" status signature page.
      signature_type = "child"
    } else {                                                  // The URL does not have "Adult" or "Child" in it, so we are at the wrong URL.
      error_msg = "ERROR: The signature does not have an 'adult' or 'child' status associated with it!";
      signature_type = error_msg;
    }
    return signature_type;
}

// PARAMETER(S): Blob - An image encoded as a blob data set
// RETURNS:          Given a blob, creates a custom signature_object data type of the form {timestamp: <timestamp>, status: <string>, image: <blob>};
function createDataObject(Blob) {
    siteURL = window.location.href;
    console.log(typeof(siteURL));
    signature_type = getSignatureType(siteURL);

    var current_time = new Date(); // Gets the current time stamp
    var signature_object = {timestamp: current_time.toString(), status: signature_type, image: Blob};
    return signature_object;
}