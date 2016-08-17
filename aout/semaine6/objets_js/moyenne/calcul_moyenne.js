//Création objet
var eleves = [
    {prenom:'Lea',nom:'Petit', note:10},
    {prenom:'Joe',nom:'Martin', note:15},
    {prenom:'Bob',nom:'Dupond', note:12}
];

//Définition des variables
var somme = 0;
var moyenne;
var note;


//Fonction qui calcule la moyenne d'un parametre(objet) donné.
function calculMoyenneClasse(listeEleves){
  for(var i = 0; i < listeEleves.length; i++){
    note = listeEleves[i].note;
    somme += note;
    moyenne = somme/listeEleves.length;
  }
  return moyenne.toFixed(2);
}
