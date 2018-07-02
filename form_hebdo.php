<html>
<body>
<?php
$fp=fopen("hebdo.txt", "w");
?>
<H1>Relev&eacute;s hebdomadaire du <?php echo $_POST["dateOfday"];?></h1>
Nom&nbsp;:&nbsp;<?php echo $_POST["nom"]; ?><br>
ID&nbsp;:&nbsp;<?php echo $_POST["id"];?><hr>
Vous etes connect&eacute; sur le serveur:&nbsp;<?php echo $_SERVER['REMOTE_ADDR'];?><br>
Etat de la connection &agrave; la base de donn&eacute;es: <?php
$servername = "localhost";
$username = "Usid";
$password = "usid";
$dbName = "Suivi_consommations_energies";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection ecou&eacute;e !: " . $conn->connect_error);
}
$sql = "INSERT INTO Hebdomadaire (ID_Hebdomadaire, Date, Num_semaine) 
VALUES ('180626', '180625', '26')";



echo "Connection r&eacute;ussie !";
?> 
<h2>Climatiseurs / a&eacute;raulique</h2>
<h4>TEC 1</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_tec1"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_tec1"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_tec1"];?></strong>&#37;</p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_tec1"];?></strong>&#37;</p>
<h4>TEC 2</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_tec2"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_tec2"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_tec2"];?></strong>&#37;</p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_tec2"];?></strong>&#37;</p>
<h4>CCR</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_ccr"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_ccr"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_ccr"];?>&#37;</strong></p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_ccr"];?></strong>&#37;</p>
<h4>EMB</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_emb"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_emb"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_emb"];?>&#37;</strong></p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_emb"];?></strong>&#37;</p>
<h4>TEC 3</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_tec3"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_tec3"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_tec3"];?>&#37;</strong></p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_tec3"];?></strong>&#37;</p>
<h4>Local transfo.</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_loctrans"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_loctrans"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_loctrans"];?>&#37;</strong></p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_loctrans"];?></strong>&#37;</p>
<h4>EN2</h4>
    <p>Unit&eacute; en service:&nbsp;<strong><?php echo $_POST["num_en2"];?></strong></p>
    <p>Temp&eacute;rature de reprise:&nbsp;<strong><?php echo $_POST["tem_en2"];?></strong>°C</p>
    <p>Hygrometrie Relative:&nbsp;<strong><?php echo $_POST["hr_en2"];?>&#37;</strong></p>
    <p>Pourcentage ouverture de la vanne eau glac&eacute;e:&nbsp;<strong><?php echo $_POST["vf_en2"];?></strong>&#37;</p>
    <hr>
