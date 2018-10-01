<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title>Signature Data</title>
    
    <!-- Font Awesome Inclusion  -->
    <link href="font-awesome-4.7.0\css\font-awesome.min.css" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="Sign%20In_files/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="Sign%20In_files/starter-template.css" rel="stylesheet">
    
    <!-- Our own custom CSS styles -->
    <link href="our-custom-styles.css" rel="stylesheet">
    
    <!-- Our custom Javascript Scripts -->
    <script src="custom-js-scripts.js"></script>
    
</head>
<body>
    <div class="container">
        <div class="row"> <!-- The "row" displaying the date range select on the left and the display of data from the database to the right -->
            <div id="wrapper" class="col-sm-4"> 
                <div class="dateSelect range">
                    <form action="range.php">
                        Enter a start date:
                        <input type="date" name="dateStart"><br>
                        Enter an end date:
                        <input type="date" name="dateEnd"><br>
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div> <!-- End of dateRangeSelect -->
            <div id="dataDisplay" class="col">
                <h3>Totals</h3>
				<?php
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "meal_attendance";

				// Create connection
				$conn = new mysqli($servername, $username, $password, $dbname);
				// Check connection
				if ($conn->connect_error) {
					die("Connection failed: " . $conn->connect_error);
				} 

				$sql = "SELECT * FROM signature_entry";
				$result = $conn->query($sql);

				$adultBreakfast = 0;
				$adultLunch = 0;
				$childBreakfast = 0;
				$childLunch = 0;

				if ($result->num_rows > 0) {
					while($row = $result->fetch_assoc()) {
						$date = strtotime($row["signature_timestamp"]);
						if ($_GET["dateStart"] <= date('Y-m-d', $date) && date('Y-m-d', $date) <= $_GET["dateEnd"]) {
							if ($row["status"] == "adult") {
								if (date('H', $date) < 12) {
									$adultBreakfast ++;
								}
								else {
									$adultLunch ++;
								}
							}
							else if ($row["status"] == "child") {
								if (date('H', $date) < 12) {
									$childBreakfast ++;
								}
								else {
									$childLunch ++;
								}
							}
						}
					}
				} else {
					echo "0 results";
				}

				$breakfast = $adultBreakfast + $childBreakfast;
				$lunch = $adultLunch + $childLunch;
				$adult = $adultBreakfast + $adultLunch;
				$child = $childBreakfast + $childLunch;
				$total = $adult + $child;

				echo "<table>
						<tr>
							<th></th>
							<th>Breakfast</th>
							<th>Lunch</th>
							<th>Total</th>
						</tr>
						<tr>
							<th>Adult</th>
							<td>" . $adultBreakfast . "</td>
							<td>" . $adultLunch . "</td>
							<td>" . $adult . "</td>
						</tr>
						<tr>
							<th>Child</th>
							<td>" . $childBreakfast . "</td>
							<td>" . $childLunch . "</td>
							<td>" . $child . "</td>
						</tr>
						<tr>
							<th>Total</th>
							<td>" . $breakfast . "</td>
							<td>" . $lunch . "</td>
							<td>" . $total . "</td>
						</tr>
					</table>";
				$conn->close();
				?>
            </div>
        </div> <!-- End of row -->
    </div> <!-- End of container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="Sign%20In_files/tether.js"></script>
    <script src="Sign%20In_files/bootstrap.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="Sign%20In_files/ie10-viewport-bug-workaround.js"></script>

    <script src="https://mysqljs.com/mysql.js"></script>
</body></html>