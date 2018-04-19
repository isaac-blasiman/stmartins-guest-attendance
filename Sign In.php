<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <link rel="icon" href="<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    <title>Sign In</title>
    
    <!-- Font Awesome Inclusion  -->
    <link href="font-awesome-4.7.0\css\font-awesome.min.css" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="Sign%20In_files/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="Sign%20In_files/starter-template.css" rel="stylesheet">
    
    <!-- Our own custom CSS styles -->
    <link href="our-custom-styles.css" rel="stylesheet">
    
  </head>

  <body>
      <div class="starter-template">
        <a class="btn btn-secondary btn-lg custom-tile-button" href="Create Signature - Adult.php">
            <div id="adult-status-button-content">
                <i class="fa fa-male fa-5x" aria-hidden="true"></i>
                <i class="fa fa-female fa-5x" aria-hidden="true"></i>
                <p>Adult / Adulto</p>
            </div>
        </a>
        <span id="responsive-spacing"></span>
        <a class="btn btn-secondary btn-lg custom-tile-button" id="child-status-icon" href="Create Signature - Child.html">
            <div id="child-status-button-content">
                <i class="fa fa-child fa-3x" aria-hidden="true"></i>
                <i class="fa fa-female fa-3x" aria-hidden="true"></i>
                <p>Child / Niño</p>
            </div>
        </a>
      </div><!-- /starter-template-->
	  <?php // Referencing https://www.w3schools.com/php/php_mysql_update.asp
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
    
	      $sql = "INSERT INTO signature_entry (id, signature_timestamp, status, image) 
          VALUES (" . $signatureObject.id . ", " . $signatureObject.timestamp . ", " . $signatureObject.status . ", " . $signatureObject.image . ")";
          $result = $conn->query($sql);
          $conn->close();
      ?>
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="Sign%20In_files/jquery-3.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="Sign%20In_files/tether.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="Sign%20In_files/bootstrap.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="Sign%20In_files/ie10-viewport-bug-workaround.js"></script>  

</body></html>