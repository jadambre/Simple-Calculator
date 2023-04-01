//Récupération des éléments HTML nécessaires
const firstValue = document.getElementById("firstValue");
const operator = document.getElementById("operator");
const secondValue = document.getElementById("secondValue");
const btnCalculate = document.getElementById("btn-calculate");
const btnGame = document.getElementById("btn-game");
const btnReset = document.getElementById("btn-reset");
const textarea = document.querySelector("textarea");

//Fonction qui effectue des calculs simples en fonction des valeurs et de l'opérateur
function simpleCalc(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
      break;
    case "-":
      return firstValue - secondValue;
      break;
    case "/":
      return firstValue / secondValue;
      break;
    case "*":
      return firstValue * secondValue;
      break;
    default:
      alert(`${operator} est un opérateur invalide`);
      return "Opérateur invalide";
      break;
  }
}

//Ajout d'un écouteur d'événements au bouton de calcul
btnCalculate.addEventListener("click", function (event) {
  event.preventDefault(); // On empêche la page de se recharger
  //Appel de la fonction simpleCalc avec les valeurs des champs input et de l'opérateur
  const result = simpleCalc(
    parseInt(firstValue.value),
    operator.value,
    parseInt(secondValue.value)
  );
  textarea.value = result; //Affichage du résultat dans le champ textarea
});

//Ajout d'un écouteur d'événements au bouton de réinitialisation
btnReset.addEventListener("click", function (event) {
  event.preventDefault(); // On empêche la page de se recharger
  //Réinitialisation des valeurs de tous les champs input
  document.querySelectorAll("input").forEach((element) => (element.value = ""));
});
