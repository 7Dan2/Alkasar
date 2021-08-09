function validateFormEven() {
    var d = document.forms["form_evenements"]["dateOfday"].value;
    var i = document.forms["form_evenements"]["immeuble"].value;
    var n = document.forms["form_evenements"]["nom"].value;
    var id = document.forms["form_cr_mensuel"]["id"].value;
    if (d == "") {
        alert("Merci de renseigner la date");
        return false;
    }
    if (i == "") {
        alert("Renseigner un immeuble");
        return false;
    }
   if (n == "") {
        alert("Veuillez indiquer votre nom");
        return false;
    }
    
}