function sendSignatureEntry(signatureEntry) {
    console.log("signatureEntry is", signatureEntry);
    // content modified from w3schools at https://www.w3schools.com/js/js_ajax_php.asp
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", "gethint.php?q=" + toString(signatureEntry), true);
    xmlhttp.send();
}
    // end of content modified from w3schools
