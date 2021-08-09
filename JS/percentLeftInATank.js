// Cette fonction doit renvoyer le pourcentage restant dans une citerne
// selon la citerne choise, le contenu utile n'est pas le même.
// Il faut donc adapter la fonction sur la citerne pour laquelle une valeur est saisie
//

// Récupération de la quantité restante
let getHeightValue = sessionStorage.getItem('fuelRemainInTank');
console.log('hauteur en storage : ' + getHeightValue);

let getInputOne = document.querySelector("#lectureFioul30k1");
//getInputOne.addEventListener("mouseup", (event) =>
//	{
//		
////		calculGo30k(event.target.value)
//	});



let getInputTwo = document.querySelector("#lectureFioul30k2");

// Recupération du focus
const getActiveElement = document.activeElement;
console.log("Element actif :" + " " + getActiveElement.id)

//Adaptation de la sortie en fonction du focus
	if(getActiveElement === getInputOne)
	{
		alert('focus');
		const inputOne = document.getElementById('fuelRestant30k1');
		inputOne.innerHTML= "coucou 1";
		//inputOne.innerHTML = fuelRemainInTank + " " + "soit :" ;
		
	}
	if(getActiveElement === getInputTwo)
	{
		const inputTwo = document.getElementById('fuelRestant30k2');
		inputTwo.innerHTML = "coucou 2"
//		inputTwo.innerHTML = fuelRemainInTank + " " + "soit :";
	}



//Calcul de pourcentage
// Valeurs de contenu
const maxContentTank10 = 25980; //100%
const maxContentTank2 = 27600; //100%


//En paramètre on entre la valeur de contenu mesuré
function givePercent(getHeightValue)
{
	if(givenInputNumber == getInputOne)
	{
		return Math.ceil((givenValue/maxContentTank1)*100) + " " + "%"
	}
	if(givenInputNumber == getInputTwo)
	{
		return Math.ceil((givenValue/maxContentTank2)*100) + " " + "%"
	}
}
//givePercent();	
