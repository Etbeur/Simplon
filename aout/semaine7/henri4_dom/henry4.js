// Création de variables

var reponse1 = document.getElementById('chp-reponse');
var reponse1_cache = document.getElementById('reponse1');
var reponse2_cache = document.getElementById('reponse2');
var question_suivante = document.getElementById('button_suivant');
var win = document.getElementById('bravo');
var loose = document.getElementById('perdu');
var reponseUser;


// Fonction pour récupérer les données entrées par l'utilisateur
function reponse(){
  // On attribut la valeur de chp-reponse
  var reponseUser = reponse1.value;
  // Si la réponse de l'utilisateur est correct
  if(reponseUser.toLowerCase() == "blanc"){
    // On affiche BRAVO
    win.style.display = "block";
    // On cache PERDU
    loose.style.display = "none";
    // sinon on affiche PERDU et on cache BRAVO
  }else{
    loose.style.display = "block";
    win.style.display = "none";
  }
}
