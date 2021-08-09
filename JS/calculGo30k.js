/* 

Ce fichier regroupe des fonctions pour le calcul de quantité restante de liquide dans une citerne 30 300 litres.
Il est utlisé deux fois sur deux citernes à la contenance identique, mais au pourcentage de remplissage différent.

A partir d'une hauteur mesurée, on arrondi au cm supérieur (pour éviter les erreurs de lecture);
De cette valeur arrondie on donne la quantité de liquide restant dans la citerne à partir d'un tableau contenant les contenances.

On indique en sortie la quantité restante ainsi que son équivalement en pourcentage de la capacité nominale
Le pourcentage est confié à la fonction "givePercent"

*/

// Bouclage des champs input
// Récupération de la liste des sélecteurs
const getAllHeights = document.querySelectorAll(".input30kFuelHeight");

// Détermination de la longueur de nombre de sélecteur concernés
const getAllHeightsLength = getAllHeights.length;

//Parcours de la liste de sélecteurs. Chaque modification de valeur déclenche la fonction de calcul
for ( i = 0 ; i < getAllHeightsLength ; i++ )
{
	getAllHeights[i].addEventListener("input", (event) =>
	{
		calculGo30k(event.target.value)
	});
}

//Fonction de calcul de la quantité de produit restant prenant en paramètre la valeur lue en entrée
function calculGo30k(value)
{
	//La valeur entrée, si elle comporte une décimale, est arrondie à l'entier supérieur
    let roundUpFuelHeightValue = Math.ceil(value);
    console.log("valeur lue arrondie à l'unité supérieure : " + " " + roundUpFuelHeightValue);

	//On diminue cette valeur de 1 pour faire coîncider avec la matrice des quantités 
    let roundDownToIndex = Math.floor(roundUpFuelHeightValue -1);
    console.log("Index à rechercher :" + " " + roundDownToIndex);

	//Matrice des quantités pour chaque centimètre
    const fuelQuantityPerCm = [20, 50, 90, 130, 180, 230, 280, 340, 400, 470, 530, 600, 670, 750, 820, 900, 980, 1060, 1150, 1230,
        1320, 1410, 1500, 1590, 1690, 1780, 1880, 1980, 2080, 2180, 2280, 2380, 2490, 2600, 2700, 2810, 2920, 3030, 3140, 3260,
        3370, 3490, 3600, 3720, 3840, 3960, 4080, 4200, 4320, 4440, 4570, 4690, 4820, 4940, 5070, 5200, 5330, 5460, 5590, 5720, 5850, 5980,
        6110, 6250, 6380, 6520, 6650, 6790, 6920, 7060, 7200, 7340, 7470, 7610, 7750, 7890, 8030, 8180, 8320, 8460,
        8600, 8740, 8890, 9030, 9180, 9320, 9470, 9610, 9760, 9900, 10050, 10190, 10340, 10490, 10640, 10780, 10930, 11080, 11230, 11380,
        11530, 11680, 11830, 11980, 12130, 12280, 12430, 12580, 12730, 12880, 13030, 13180, 13330, 13480, 13630, 13780, 13940, 14090, 14240, 14390,
        14540, 14690, 14850, 15000, 15150, 15300,15545, 15610, 15760, 15910, 16060, 16210, 16360, 16520, 16670, 16820, 16970, 17120, 17270, 17420, 
        17570, 17720, 17870, 18020, 18170, 18320, 18470, 18620, 18770, 18920, 19070, 19220, 19370, 19520, 19660, 19810, 19960, 20110, 20250, 20400, 
        20540, 20690, 20830, 20980, 21120, 21270, 21410, 21560, 21700, 21840, 21980, 22120, 22270, 22410, 22550, 22690, 22830, 22960, 23100, 23240, 
        23380, 23510, 23650, 23780, 23920, 24050, 24190, 24320, 24450, 24580, 24710, 24840, 24970, 25100, 25230, 25360, 25480, 25610, 25730, 25860,
        25980, 26100, 26220, 26340, 26460, 26580, 26700, 26810, 26930, 27040, 27160, 27270, 27380, 27490, 27600, 27700, 27810, 27920, 28020, 28120,
        28220, 28320, 28420, 28520, 28610, 28710, 28800, 28890, 28980, 29007, 29150, 29240, 29320, 29400, 29480, 29550, 29630, 29700, 29770, 29830, 
        29900, 29960, 30200, 30700, 30120, 30170, 30210, 30250, 30280, 30300
      ];

	//Dans une variable, on appelle l'index de la matrice correspondante à la valeur arrondie
    let fuelRemainInTank = fuelQuantityPerCm[roundDownToIndex];
    console.log("Quantité de produit restant :" + " " + fuelRemainInTank);
    
    //Recupération de l'élément ayant le focus
    const getActiveElement = document.activeElement.id;
    console.log("Elément actif :" + " " + getActiveElement);

    //Détermination du pourcentage restant, appel de la fonction de calcul de pourcentage
    let percentLeftInTank = givePercent(getActiveElement, fuelRemainInTank);
    console.log("Pourcentage restant : " + " " + percentLeftInTank);
    
        
	//Adaptation de la sortie en fonction du focus
	if(getActiveElement === "lectureFioul30k1")
	{
		const inputOne = document.getElementById('fuelRestant30k1');
		inputOne.innerHTML = fuelRemainInTank + " " + "soit :" + " " + percentLeftInTank;
		
	}
	if(getActiveElement === "lectureFioul30k2")
	{
		const inputTwo = document.getElementById('fuelRestant30k2');
		inputTwo.innerHTML = fuelRemainInTank + " " + "soit :" + " " + percentLeftInTank;
	}
 } 
//Fin de la fonction de calcul de produit restant



//Calcul de pourcentage de produit restant

//En paramètre on entre sur quelle citerne appliquer le calcul et la contenance 
function givePercent(tankNumber, aValue)
{
	this.tankNumber = tankNumber;
	this.aValue = aValue;
	
	// Valeurs de contenu utile max pour chaque citerne
	var maxContentTank1 = 25980; //100%
	var maxContentTank2 = 27600; //100%
	
	if(tankNumber == "lectureFioul30k1")
	{
		return Math.ceil((aValue/maxContentTank1)*100) + " " + "%"
	}
	if(tankNumber == "lectureFioul30k2")
	{
		return Math.ceil((aValue/maxContentTank2)*100) + " " + "%"
	}
}
// Fin de la fonction de calcul de pourcentage

//Fin du fichier