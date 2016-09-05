// Création de variable et passage du bandeau résultat à readOnly afin que l'utilisateur ne puisse pas le modifier
var result = document.getElementById('resultat');
result.readOnly = true;

// Fonction qui remet la calculatrice à zéro
function reset(){
  result.value = "";
}

// Fonction qui permet de récupérer les id des chiffres et signes et de les
function tous(blocId){
  var x = document.getElementById(blocId).value;
  result.value += x;
  console.log('id est', x);
}

// Fonction finalisant le calcul et affichant le résultat final.
function egal(){
  var x = document.getElementById('resultat').value;
  // eval permet de calculer des chiffres ou nombres contenus dans une chaine de caractère.
  var final_result = eval(x);
  result.value = final_result;
  // Affichage d'une phrase si division par zéro à la place d'Infinity
  if(result.value == Infinity){
    result.value = "Devide by zero is not possible";
  }
}

// Fonction qui permet d'effacer le dernier caractère affiché à l'écran si erreur de frappe
function back(){
  x = result.value;
  var longueur = x.length;
  var last = longueur - 1;
  x = x.substring(0, last);
  result.value = x;
}

function modulo(){
  result.value = result.value /100;
}
