<?php
//Receive AJAX request from app-modified.js
$json = json_decode($_POST['sig'], true); 

$timestamp = $json['timestamp'];
$status = $json['status'];

/*Binary string sent from Javascript was defined as urlencoded 
before being sent so we can use it without altering encoding*/
$image = $json['image'];

//SQL Connection and Write begins here
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

//Define query with received info as parameters
$sql = 'INSERT INTO signature_entry (signature_timestamp, status, image) VALUES ("'.$timestamp.'", "'.$status.'", "'.$image.'")';

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>