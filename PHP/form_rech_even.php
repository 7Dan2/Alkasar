<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>R&eacute;sum&eacute; recherche</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="form_rech_even.css" />
    <script src="main.js"></script>
</head>
<body>
    <div class="demande">
<h1>R&eacute;capitulatif de la demande&nbsp:<h1>
Immeuble&nbsp;:&nbsp;<?php echo $_POST["immeuble"];?><br>
B&acirc;timent&nbsp;:&nbsp;<?php echo $_POST["composant"];?><br>
Local&nbsp;:&nbsp;<?php echo $_POST["local"];?><br>
    <div class="send">
<input type="submit">
</div>
<div class="connection">
<?php
$mysqli = mysqli_connect("10.42.0.1", "Usid", "usid", "Suivi_consommations_energies");
if (mysqli_connect_errno($mysqli)) {
    echo "Echec lors de la connexion à MySQL : " . mysqli_connect_error();
}

?>
<?php
$mysqli = mysqli_connect("10.42.0.1", "Usid", "usid", "Suivi_consommations_energies");
if (mysqli_connect_errno($mysqli)) {
    echo "Echec lors de la connexion à MySQL : " . mysqli_connect_error();
}

$res = mysqli_query($mysqli, "SELECT 'A world full of ' AS _msg FROM DUAL");
$row = mysqli_fetch_assoc($res);
echo $row['_msg'];

$mysqli = new mysqli("10.42.0.1", "Usid", "usid", "Suivi_consommations_energies");
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT 'choices to please everybody.' AS _msg FROM DUAL");
$row = $res->fetch_assoc();
echo $row['_msg'];
?>








?>
</div>
    </div>
</body>
</html>

