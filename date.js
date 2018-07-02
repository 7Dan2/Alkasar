function maDate(){
date = new Date();
year = date.getFullYear();
var month = ["janvier", "f&eacute;vrier", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "septembre", "octobre", "novembre", "d&eacute;cembre"];
var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
day = date.getDate();
document.getElementById("date1").innerHTML = days[date.getDay()]+ "&nbsp;" +day+ "&nbsp;" +month[date.getMonth()]+ "&nbsp" +year;
}
maDate()