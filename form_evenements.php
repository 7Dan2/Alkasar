<html>
<body>
<?php
$fp=fopen("evenements.txt", "a");
fwrite($fp, $_POST["ID"]);
fwrite($fp, $_POST["dateOfday"]);
fwrite($fp, $_POST["nom"]);
fwrite($fp, $_POST["immeuble"]);
fwrite($fp, $_POST["composant"]);
fwrite($fp, $_POST["local"]);
fwrite($fp, $_POST["equipement"]);
fwrite($fp, $_POST["constat"]);
fwrite($fp, $_POST["mesureprise"]);
fwrite($fp, $_POST["resultat"]);
fwrite($fp, $_POST["complement"]);

?>


Ev&egrave;nement num&eacute;ro&nbsp;:&nbsp;<?php echo $_POST["ID"];?><br>
En date du&nbsp;:&nbsp;<?php echo $_POST["dateOfday"];?><br><hr>
Nom&nbsp;:&nbsp;<?php echo $_POST["nom"]; ?><br>
Immeuble&nbsp;:&nbsp;<?php echo $_POST["immeuble"];?><br>
B&acirc;timent&nbsp;:&nbsp;<?php echo $_POST["composant"];?><br>
Local&nbsp;:&nbsp;<?php echo $_POST["local"];?><br>
<strong>Equipement concern&eacute;&nbsp;:&nbsp;</strong><?php echo $_POST["equipement"];?><br>
Constatation&nbsp;:&nbsp;<?php echo $_POST["constat"];?><br>
Mesure(s) prise(s)&nbsp;:&nbsp;<?php echo $_POST["mesureprise"];?><br>
R&eacute;sultat&nbsp;:&nbsp;<?php echo $_POST["resultat"];?><br>
Compl&eacute;ment&nbsp;:&nbsp;<?php echo $_POST["complement"];?><br><br>
Document g&eacute;n&eacute;r&eacute;&nbsp;le&nbsp;:&nbsp; 
<?php echo date("d/m/Y");
?>
&agrave;
<?php echo date("h:i:sa");
?>
<?php
fclose($fp);
?>
<?php
try
{   
    $bdd = new PDO('mysql:host=localhost;dbname=Suivi_consommations_energies;charset=utf8', 'Usid', '');
}
    catch (Exeption $e)
{
    die('Erreur : ' . $e->getMessage());
}
$reponse = $bdd->query('SELECT * FROM Suivi_consommations_energies');
?>
</body>
</html>
