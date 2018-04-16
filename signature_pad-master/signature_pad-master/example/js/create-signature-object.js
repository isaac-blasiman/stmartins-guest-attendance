/// create-signature-object.js
/// Provides functionality to create a signature_entry object with a timestamp, status, and image, given the status and image blob data.
/// Written by Isaac Blasiman 3/29/18

var MySqlJS_script = document.createElement("script"); // These two lines "include" the MySqlJS script to allow us to work with the Database directly from JavaScript.
MySqlJS_script.src = "https://mysqljs.com/mysql.js";       // Modified from Stack Overflow, see Attribution 2 at bottom of file.

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
    current_time = current_time.toISOString().slice(0, 19).replace('T', ' '); // Converts the timestamp to a SQL-readable format. Modified from Stack Overflow, see attribution 1 at bottom of file.
    var signature_object = {timestamp: current_time.toString(), status: signature_status, image: Blob};
    return signature_object;
}

// PARAMETER(S): None
// RETURNS: Nothing
// WHAT IT DOES: Runs the MySqlJS service to access the database.
function executeMySqlJS() {
    MySql.Execute( // From the examples at http://www.mysqljs.com/
        "sql8.freemysqlhosting.net",
        "sql8173720",
        "S4EsfUDHt7",
        "sql8173720",
        "select * from Users",
        function (data) {
            console.log(JSON.stringify(data,null,2));
    }); // End of code from http://www.mysqljs.com/
}

// ATTRIBUTIONS
// 1.  URL: https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
//      POSTED BY: https://stackoverflow.com/users/4354249/farside
// 2. URL: https://stackoverflow.com/questions/779739/how-do-i-include-a-remote-javascript-file-in-a-greasemonkey-script 
//     POSTED BY: https://stackoverflow.com/users/2749/emmett
// 3. URL: https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file?page=1&tab=votes#tab-top
//     POSTED BY: https://stackoverflow.com/users/9951/e-satis