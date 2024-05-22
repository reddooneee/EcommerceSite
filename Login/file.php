<?php

$db_host = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "sito";

// Creare la connessione
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Verificare la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

echo "Connesso al database MySQL con successo!";
?>