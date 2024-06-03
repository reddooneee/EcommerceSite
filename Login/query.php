<?php
include 'connect.php';

$conn = connectDatabase();

//Prende i dati dal form
$codice_fiscale = $_POST['codice_fiscale'];
$nome = $_POST['nome'];
$cognome = $_POST['cognome'];
$email = $_POST['email'];
$indirizzo = $_POST['indirizzo'];
$citta = $_POST['citta'];
$telefono = $_POST['telefono'];

// Prepare the query
$stmt = $conn->prepare ("INSERT INTO clienti (nome, cognome, email, indirizzo, citta, telefono, codice_fiscale) VALUES ('$nome', '$cognome', '$email', '$indirizzo', '$citta', '$telefono', '$codice_fiscale')");

// Execute the query
$stmt->execute();

echo "Inserimento avvenuto correttamente";

// Close the statement and connection
$stmt->close();
$conn->close();