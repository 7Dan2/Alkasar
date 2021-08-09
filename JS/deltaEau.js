//fonction permettant de calculer une soustraction
function deltaEau()
{
    var dischargePressureValue = document.getElementById("dispress").value;
    var oilPressureValue = document.getElementById("oilpress").value;
    var difoil = oilPressureValue  - dischargePressureValue;
    var pecond = document.getElementById("econd").value;
    var pscond = document.getElementById("scond").value;
    var difecond = pscond - pecond;
    var peegl = document.getElementById("peeg").value;
    var psegl = document.getElementById("pseg").value;
    var difeg = peegl - psegl;
    document.getElementById("outoil").innerHTML = difoil;
    document.getElementById("deltaecond").innerHTML = difecond;
    document.getElementById("deltaeeg").innerHTML = difeg;
}
deltaEau();