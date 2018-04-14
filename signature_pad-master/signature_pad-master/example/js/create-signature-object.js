/// create-signature-object.js
/// Provides functionality to create a signature_entry object with a timestamp, status, and image, given the status and image blob data.
/// Written by Isaac Blasiman 3/29/18

// Pulls from post by https://stackoverflow.com/users/9951/e-satis on https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file?page=1&tab=votes#tab-top

// PARAMETER(S):
// siteURL: an http:\\ or https:\\ url.
// RETURNS:
// The status of signature, "adult" or "child", based on the URL of the page that
// getSignatureType() is being called from.
// Or, returns an error message if the URL has neither "Adult" or "Child" in it.
function getSignatureStatus(siteURL) {
    if (siteURL.indexOf("Adult") >=0) {            // The URL has "Adult" in it, so we are at the "Adult" status signature page.
      signature_status = "adult"
    } else if (siteURL.indexOf("Child") >= 0) { // The URL has "Child" in it, so we are at the "Child" status signature page.
      signature_status = "child"
    } else {                                                  // The URL does not have "Adult" or "Child" in it, so we are at the wrong URL.
      error_msg = "ERROR: The signature does not have an 'adult' or 'child' status associated with it!";
      signature_status = error_msg;
    }
    return signature_status;
}

// PARAMETER(S):
// Blob: An image encoded as a blob data set
// signature_status: A string indicating the status of the signature. The status is either 'adult' or 'child'
// RETURNS:
// Given a blob, creates a custom signature_object data type of the form {timestamp: <timestamp>, status: <string>, image: <blob>};
function createDataObject(signature_status, Blob) {
    var current_time = new Date(); // Gets the current time stamp
    current_time = current_time.toISOString().slice(0, 19).replace('T', ' '); // Converts the timestamp to a SQL-readable format. From Stack Overflow, see Attribution 1 at bottom of file.
    var signature_object = {timestamp: current_time.toString(), status: signature_status, image: Blob};
    return signature_object;
}

// ATTRIBUTIONS
// 1.  URL: https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
//      POSTED BY: https://stackoverflow.com/users/4354249/farside