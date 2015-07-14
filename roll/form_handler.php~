<h1>Here's a PHP page</h1>

<p>It starts as html, then code will be inside the php tag, saving 
a form to the database.

<?php
// How to report errors while I work?
// http://php.about.com/od/troubleshooting/qt/php_error_reporting.htm
ini_set('display_errors',1); 
error_reporting(-1);

/**
 * Step 1, create database at my server
 * 	Name Date Present Comment   -- Date is a timestamp
 * Step 2, google php database 
 *   http://www.w3schools.com/php/php_forms.asp
 *   http://www.w3schools.com/php/php_mysql_insert.asp
 */
$servername = "db153.pair.com";
$username = "scataldo_34";
$password = "mKgiCHYU";
$dbname = "scataldo_webdesign";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/** Show all the variables, printed without html formatting
$values = get_defined_vars();
print '<pre>';
print_r($values);
print '</pre>';
 */

// Get the variables, create a sql database statement to insert them
$name = $_POST['name'];
$present = $_POST['present'];
$comment = $_POST['comment'];
$date = date("Y-m-d H:i:s");
$sql = "INSERT INTO roll (Name, Present, Comment, Date)
	VALUES ('$name', '$present', '$comment', '$date')";

/** What is this:
 INSERT INTO roll (Name, Present, Comment, Date) VALUES ('Stephen Cataldo', 'Still not here', '');DELETE FROM `scataldo_webdesign`.`roll` ', '2015-07-14 16:46:52')
*/

// Send that statement to the database
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully: <p>$sql";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
