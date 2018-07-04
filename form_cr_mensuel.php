<html>
    <head>
        <title>Resume CR mensuel</title>
    </head>
<body>
<?php
$fp=fopen("cr.txt", "a");
fwrite($fp, "Compte-rendu du");
fwrite($fp, $_POST["date"]);
fwrite($fp, $_POST["nom"]);
fwrite($fp, $_POST["id"]);
fwrite($fp, $_POST["en2_1"]);
fwrite($fp, $_POST["en2_2"]);
fwrite($fp, $_POST["emb_1"]);
fwrite($fp, $_POST["emb_2"]);
fwrite($fp, $_POST["ccr_1"]);
fwrite($fp, $_POST["ccr_2"]);
fwrite($fp, $_POST["tec1_1"]);
fwrite($fp, $_POST["tec1_2"]);
fwrite($fp, $_POST["tec2_1"]);
fwrite($fp, $_POST["tec2_2"]);
fwrite($fp, $_POST["tec3_1"]);
fwrite($fp, $_POST["tec3_1"]);
fwrite($fp, $_POST["localTransfo"]);
?>
<H1> Compte-rendu mensuel du <?php echo $_POST["dateOfday"]?></h1>
Nom&nbsp;:&nbsp;<?php echo $_POST["nom"]; ?><br>
ID&nbsp;:&nbsp;<?php echo $_POST["id"];?><hr>
Vous &ecirc;tes connect&eacute; sur le serveur:&nbsp;<?php echo $_SERVER['REMOTE_ADDR'];?><br>
Etat de la connection &agrave; la base de donn&eacute;es: 
<?php
$servername = "10.42.0.1";
$username = "Usid";
$password = "usid";
$dbName = "Suivi_consommations_energies";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbName);
// Check connection
if ($conn->connect_error) {
    die("Connection echou&eacute;e !: " . $conn->connect_error);
}
echo "Connection r&eacute;ussie !";
//Inserting datas
$sql = "INSERT INTO Mensuelle (ID_Mensuelle, Date, h_clim1_EN2, h_clim2_EN2, h_clim1_EMB, h_clim2_EMB, h_clim1_CCR, h_clim2_CCR,
 h_clim1_TEC1, h_clim2_TEC1, h_clim1_TEC2, h_clim2_TEC2, h_clim1_TEC3, h_clim2_TEC3, h_clim3_loc_transfo, h_clim1_sh_athena, h_clim2_sh_athena,
 h_clim1_sh_comcept, h_clim2_sh_comcept, h_GF1_A1, h_GF1_B1, h_GF2_A1, h_GF2_B1, h_comp_air_dem1_GE_EN2, h_comp_air_dem2, h_GE1_EN2, h_GE2_EN2, h_GE1_EN3, h_GE2, EN3, h_GE1_23, h_GE2_23,
 h_diesel_vernon, h_diesel_et_asi_vernon, GO_cit1_30k, GO_cit2_30k, GO_cit1_23, GO_cit_VRN)
VALUES ('$_POST[id]', '$_POST[date]', '$_POST[en2_1]',  '$_POST[en2_2]', '$_POST[emb_1]', '$_POST[emb_2]', '$_POST[ccr_1]', '$_POST[ccr_2]', '$_POST[tec1_1]', '$_POST[tec1_2]',
'$_POST[tec2_1]', '$_POST[tec2_2]', '$_POST[tec3_1]', '$_POST[tec3_2]', '$_POST[localTransfo]', '$_POST[sathena1]', '$_POST[sathena2]', '$_POST[scomcept1]', '$_POST[scomcept2]',
'$_POST[ge10023]', '$_POST[ge20023]')";
echo "Donn&eacute;es enregistr&eacute;es dans la base de donn&eacute;es";
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "Saisie enregistr&eacute;e, derni&egravere ID entr&eacute;e: " .$last_id;
} else {
    echo "Erreur: " . $sql . "<br>" . $conn->error;
    }
?> 
<h2>Heures de fonctionnement climatiseurs</h2>
    <h4>EN2</h4>
        <p>Climatiseur&nbsp;1/EN2&nbsp;:&nbsp;<strong><?php echo $_POST["en2_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/EN2&nbsp;:&nbsp;<strong><?php echo $_POST["en2_2"];?></strong>&nbsp;heures</p>
    <h4>EMB</h4>
        <p>Climatiseur&nbsp;1/EMB&nbsp;:&nbsp;<strong><?php echo $_POST["emb_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/EMB&nbsp;:&nbsp;<strong><?php echo $_POST["emb_2"];?></strong>&nbsp;heures</p>
    <h4>CCR</h4>
        <p>Climatiseur&nbsp;1/CCR&nbsp;:&nbsp;<strong><?php echo $_POST["ccr_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/CCR&nbsp;:&nbsp;<strong><?php echo $_POST["ccr_2"];?></strong>&nbsp;heures</p>
    <h4>TEC1</h4>
        <p>Climatiseur&nbsp;1/TEC1&nbsp;:&nbsp;<strong><?php echo $_POST["tec1_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/TEC1&nbsp;:&nbsp;<strong><?php echo $_POST["tec1_2"];?></strong>&nbsp;heures</p>
    <h4>TEC2</h4>
        <p>Climatiseur&nbsp;1/TEC2&nbsp;:&nbsp;<strong><?php echo $_POST["tec2_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/TEC2&nbsp;:&nbsp;<strong><?php echo $_POST["tec2_2"];?></strong>&nbsp;heures</p>
    <h4>TEC3</h4>
        <p>Climatiseur&nbsp;1/TEC3&nbsp;:&nbsp;<strong><?php echo $_POST["tec3_1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur&nbsp;2/TEC3&nbsp;:&nbsp;<strong><?php echo $_POST["tec3_2"];?></strong>&nbsp;heures</p>
    <h4>Local transfo</h4>
        <p>Climatiseur&nbsp;3/Local&nbsp;transfo&nbsp;:&nbsp;<strong><?php echo $_POST["localTransfo"];?></strong>&nbsp;heures</p>
    <h4>Shelter Ath&eacute;na</h4>
        <p>Climatiseur 1&nbsp;:&nbsp;<strong><?php echo $_POST["sathena1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur 2&nbsp;:&nbsp;<strong><?php echo $_POST["sathena2"];?></strong>&nbsp;heures</p>
    <h4>Shelter Comcept</h4>
        <p>Climatiseur 1&nbsp;:&nbsp;<strong><?php echo $_POST["scomcept1"];?></strong>&nbsp;heures</p>
        <p>Climatiseur 2&nbsp;:&nbsp;<strong><?php echo $_POST["scomcept2"];?></strong>&nbsp;heures</p>
<h2>Groupes de production eau glac&eacute;e</h2>
        <p>GF 1 A1&nbsp;:&nbsp;<strong><?php echo $_POST["gf1a1j"];?></strong>&nbsp;heures</p>
        <p>GF 1 B1&nbsp;:&nbsp;<strong><?php echo $_POST["gf1b1j"];?></strong>&nbsp;heures</p>
        <p>GF 2 A1&nbsp;:&nbsp;<strong><?php echo $_POST["gf2a1j"];?></strong>&nbsp;heures</p>
        <p>GF 1 B1&nbsp;:&nbsp;<strong><?php echo $_POST["gf2b1j"];?></strong>&nbsp;heures</p>
<h2>Heures de fonctionnement groupes &eacute;lectrog&egrave;nes</h2>
    <p>GE1&nbsp;0023&nbsp;:&nbsp;<strong><?php echo $_POST["ge10023"]?></strong>&nbsp;heures</p>
    <p>GE2&nbsp;0023&nbsp;:&nbsp;<strong><?php echo $_POST["ge20023"]?></strong>&nbsp;heures</p>
    <p>GE1&nbsp;0035&nbsp;:&nbsp;<strong><?php echo $_POST["ge10035"]?></strong>&nbsp;heures</p>
    <p>GE2&nbsp;0035&nbsp;:&nbsp;<strong><?php echo $_POST["ge20035"]?></strong>&nbsp;heures</p>
    <p>GE1&nbsp;0104&nbsp;:&nbsp;<strong><?php echo $_POST["ge10104"]?></strong>&nbsp;heures</p>
    <p>GE2&nbsp;0104&nbsp;:&nbsp;<strong><?php echo $_POST["ge20104"]?></strong>&nbsp;heures</p>
<h2>Consommation fioul</h2>
    <p>Citerne&nbsp;30000l&nbsp;1&nbsp;:&nbsp;<strong><?php echo $_POST["outlec1"]?></strong>&nbsp;litres</p>
    <p>Citerne&nbsp;30000l&nbsp;2&nbsp;:&nbsp;<strong><?php echo $_POST["lecture4"]?></strong>&nbsp;litres</p>
    <p>Citerne&nbsp;20000l&nbsp;1&nbsp;:&nbsp;<strong><?php echo $_POST["lecture2"]?></strong>&nbsp;litres</p>
<h2>Pneumatique</h2>
    <p>Compresseur&nbsp;d air CCR&nbsp;:&nbsp;<strong><?php echo $_POST["compccr"]?></strong>&nbsp;heures</p>
    <p>Compresseur 1 demarrage GE&nbsp;:&nbsp;<strong><?php echo $_POST["comp1demge"]?></strong>&nbsp;heures</p>
    <p>Compresseur 2 demarrage GE&nbsp;:&nbsp;<strong><?php echo $_POST["comp2demge"]?></strong>&nbsp;heures</p>


<footer>
Document g&eacute;n&eacute;r&eacute;&nbsp;le&nbsp;:&nbsp; 
<?php echo date("d/m/Y");
?>
&nbsp;&agrave;
<?php 
echo date("h:i:sa");
?>
</footer>
<?php
fclose($fp);
?>


</body>
</html>