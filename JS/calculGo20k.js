/* Cette fonction renvoie la quantité restante de liquide dans une citerne
A partir d'une hauteur mesurée, on arrondi au cm supérieur;
De cette valeur arrondie on donne la quantité de liquide restant dans la citerne.
*/

const getHeight = document.querySelector("#lectureFioul20k");
getHeight.addEventListener("input", calculGo20k);

function calculGo20k()
{
    let getFuelHeigtValue = document.getElementById("lectureFioul20k").value;
    //console.log("valeur lue jauge citerne 20k :" + " " + getFuelHeigtValue);

    let roundUpFuelHeightValue = Math.ceil(getFuelHeigtValue);
    //console.log("valeur lue arrondie à l'unité supérieure :" + " " + roundUpFuelHeightValue);

    let roundDownToIndex = Math.floor(roundUpFuelHeightValue -1);
    //console.log("Index à rechercher :" + " " + roundDownToIndex);

    const fuelQuantityPerCm = [8, 23, 42, 64, 89, 117, 148, 180, 216, 252, 291 ,332, 373, 418, 464, 511, 560, 609, 661, 714,
        764, 823, 880, 937, 997, 1056, 1118, 1181, 1243, 1308, 1373, 1440, 1508, 1577, 1645, 1716, 1786, 1859, 1931, 2005,
        2080, 2156, 2231, 2307, 2386, 2465, 2544, 2625, 2706, 2787, 2869, 2952, 3036, 3120, 3205, 3292, 3376, 3464, 3552, 3639,
        3727, 3817, 3907, 3997, 4087, 4178, 4270, 4363, 4455, 4549, 4642, 4736, 4831, 4927, 5021, 5118, 5214, 5311, 5409, 5506, 5604,
        5702, 5801, 5900, 6000, 6100, 6200, 6300, 6400, 6501, 6603, 6704, 6806, 6906, 7011, 7112, 7216, 7418, 7423, 7525, 7629, 7733,
        7838, 7941, 8046, 8151, 8255, 8359, 8465, 8570, 8675, 8780, 8887, 8992, 9097, 9204, 9309, 9414, 9520, 9627, 9732, 9838, 9945,
        10051, 10157, 10263, 10369, 10474, 10581, 10686, 10793, 10898, 11004, 11109, 11215, 11321, 11426, 11531, 11637, 11742, 11847,
        11952, 12056, 12161, 12264, 12369, 12474, 12578, 12681, 12784, 12887, 12990, 13093, 13196, 13298, 13399, 13502, 13603, 13704,
        13805, 13906, 14007, 14106, 14206, 14304, 14404, 14502, 14601, 14698, 14797, 14894, 14991, 15087, 15182, 15277, 15373, 15467,
        15561, 15655, 15749, 15841, 15933, 16026, 16116, 16208, 16298, 16387, 16476, 16565, 16652, 16739, 16826, 16912, 16997, 17082,
        17166, 17249, 17333, 17414, 17496, 17576, 17656, 17735, 17815, 17892, 17969, 18044, 18119, 18194, 18268, 18341, 18412, 18483, 
        18554, 18623, 18691, 18758, 18825, 18890, 18953, 19017, 19079, 19140, 19200, 19259, 19316, 19372, 19428, 19482, 19534, 19585,
        19636, 19683, 19730, 19775, 19819, 19861, 19901, 19940, 19976, 20011, 20044, 20073, 20101, 20125, 20148, 20166, 20179];
   
    let fuelRemainInTank = fuelQuantityPerCm[roundDownToIndex];
    //console.log("Quantité de produit restant :" + " " + fuelRemainInTank);
    
    //Détermination du pourcentage restant, appel de la fonction de calcul
    let percentLeftInTank = givePercent20k(fuelRemainInTank);
    //console.log("Pourcentage de produit restant :" + " " + percentLeftInTank);
    
    switch(roundDownToIndex)
    {
        case 32:
        alert("Citerne 20 000 litres \n Attention ! Moins de 10% de la capacité utile");
        break;
        case 67:
        alert("Citerne 20 000 litres \n Attention 25% de la capacité utile atteinte");
        break;
        case 110:
        alert("Citerne 20 000 litres \n Attention 50% de la capacité utile atteinte");
        break;
        default:
            fuelRemainInTank = fuelQuantityPerCm[roundDownToIndex];
    };
    

    document.getElementById("fuelRestant20k").innerHTML = fuelRemainInTank + " " + "soit :" + " " + percentLeftInTank;
}  
// Fin de la fonction calculGo20k


// Calcul de pourcentage, prend en paramètre la quantité restante déterminée dans "fuelRemainInTank"

function givePercent20k(aValue)
{
	this.aValue = aValue;
	//console.log("valeur du paramètre aVlue : " + aValue);
	
// Valeur du contenu utile de la citerne 20 000l
	const maxContentTank = 17496; //100%

	return Math.ceil((aValue/maxContentTank)*100) + " " + "%";
	
}
// Fin de la fonction de calcul de pourcentage

//Fin du fichier

