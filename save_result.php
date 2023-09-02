<?php
// Include the database connection 
include("db.php");

// Check if the request method is POST and if the required parameters are set
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["winner"]) && isset($_POST["board"])) {
    // Retrieve the POST data
    $winner = $_POST["winner"];
    $board = $_POST["board"];

    // SQL query to insert the game result into the database
    $sql = "INSERT INTO game_results (winner, board) VALUES ('$winner', '$board')";

    // Run the SQL query and handle the result
    if ($conn->query($sql) === TRUE) {
        // Echo a success message
        echo "Game result saved successfully.";
    } else {
        // Echo an error message
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    // If the request is invalid or missing required parameters, echo an error message
    echo "Invalid request.";
}

// Close the database connection
$conn->close();
?>