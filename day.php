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

$sql = "SELECT * FROM signature_entry";
$result = $conn->query($sql);

$adultBreakfast = 0;
$adultLunch = 0;
$childBreakfast = 0;
$childLunch = 0;

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		if ($row["status"] == "adult") {
			if ($row["signature_timestamp"] < 12) {
				$adultBreakfast ++;
			}
			else {
				$adultLunch ++;
			}
		}
		else if ($row["status"] == "child") {
			if ($row["signature_timestamp"] < 12) {
				$childBreakfast ++;
			}
			else {
				$childLunch ++;
			}
		}
    }
} else {
    echo "0 results";
	$conn->close();
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