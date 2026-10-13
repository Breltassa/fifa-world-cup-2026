
/* Quelle:Chat GPT */
<?php

$vorname = $_POST["vorname"];
$nachname = $_POST["nachname"];
$email = $_POST["email"];
$artikel = $_POST["artikel"];
$groesse = $_POST["groesse"];
$zahlung = $_POST["zahlung"];

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Bestellung</title>
</head>
<body>

<h1>Vielen Dank für deine Bestellung!</h1>

<p><strong>Vorname:</strong> <?= htmlspecialchars($vorname) ?></p>
<p><strong>Nachname:</strong> <?= htmlspecialchars($nachname) ?></p>
<p><strong>E-Mail:</strong> <?= htmlspecialchars($email) ?></p>
<p><strong>Artikel:</strong> <?= htmlspecialchars($artikel) ?></p>
<p><strong>Größe:</strong> <?= htmlspecialchars($groesse) ?></p>
<p><strong>Zahlung:</strong> <?= htmlspecialchars($zahlung) ?></p>

</body>
</html>