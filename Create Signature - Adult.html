<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title>Sign In</title>
    
    <!-- Font Awesome Inclusion  -->
    <link href="font-awesome-4.7.0\css\font-awesome.min.css" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="Sign%20In_files/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="Sign%20In_files/starter-template.css" rel="stylesheet">
    
    <!-- Our own custom CSS styles -->
    <link href="our-custom-styles.css" rel="stylesheet">
    
    <!-- ### This content within this block is modified from code copyrighted 2018 by Szimon Novak under the MIT License, -->
    <!-- and is therefore itself under the MIT license. ###-->

    <!-- Link to a modified version of the signature_pad code -->
    <link rel="stylesheet" href="signature_pad-master/signature_pad-master/example/css/signature-pad-modified.css">
    
    <!-- ### End of MIT Licensed content ### -->
    
  </head>

  <body>
    <!-- ### This content within this block is modified from code copyrighted 2018 by Szimon Novak under the MIT License, -->
    <!-- and is therefore itself under the MIT license. ###-->
    <div id="signature-pad" class="signature-pad">
        <div class="signature-pad--body">
            <canvas id="canvas"></canvas>
        </div>
        <div class="signature-pad--footer">
            <div class="signature-pad--actions">
                <div class="button-container" id="x-button">
                    <button type="button" class="clear badge badge-pill badge-danger" id="round-x-button" data-action="clear"><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <div class="description">
                    <span>Please Sign Here / </span><br><span>Favor de Ingrese Aquí</span>
                </div>
                <div class="button-container">
                    <button type="button" class="save badge badge-pill badge-success" id="round-checkbox" data-action="save-png" onclick = "sendSignature()"><i class="fa fa-check" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </div>
    <!-- ### End of MIT Licensed content ### -->
    
    <!-- Link to MySqlJS functionality, allows us to push and pull from the MySQL DB using JavaScript -->
    <script src="https://mysqljs.com/mysql.js"></script>

    <!-- ### This content within this block is modified from code copyrighted 2018 by Szimon Novak under the MIT License, -->
    <!-- and is therefore itself under the MIT license. ###-->
    <script src="signature_pad-master/signature_pad-master/example/js/signature_pad.js"></script>
    <script src="signature_pad-master/signature_pad-master/example/js/create-signature-object.js"></script> <!-- Added by Isaac Blasiman. -->
    <script src="signature_pad-master/signature_pad-master/example/js/send-signature-entry.js"></script> <!-- Added by Isaac Blasiman. -->
    <script src="signature_pad-master/signature_pad-master/example/js/app-modified.js"></script> <!-- This needs to be after the 'create-signature-object' and 'create-signature-entry' scripts, since it uses their functions' -->
    <!-- ### End of MIT Licensed content ### -->
    
    <script>
        function sendSignature() {
            documentCanvas = document.getElementById("canvas");
            newDataURL = documentCanvas.toDataURL(); // Create a Data URL
            newBlob = dataURLToBlob(newDataURL); // Create a Blob with the Data URL using the function from signature_pad
            signatureStatus = getSignatureStatus(window.location.href);
            signatureObject = createDataObject(signatureStatus, newBlob);
            console.log(signatureObject);
        }
        
        // This function taken from signature_pad-master/signature_pad-master/example/js/app-modified.js,
        // written by Szimon Novak and modified by Isaac Blasiman
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
    </script>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "meal_attendance";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO signature_entry (

</body>