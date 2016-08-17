//Définition des variables.
var tab = [
    {pays: 'France', capitale: 'Paris'},
    {pays: 'Espagne', capitale: 'Madrid'},
    {pays: 'Italie', capitale: 'Rome'},
    {pays: 'Belgique', capitale: 'Bruxelles'}
];

var pays_trouve = [];
var question = "Quelle est la capitale de ce pays: ";
var bonne_rep = 0;
var chance = 3;
var index;
var reponseUser;
var reponse;


//Fonction principale
function jeu(){
  //tirage d'un pays au sort
  choix_pays();
  //Une fois le pays tiré, on l'ajoute à un tableau pour éviter de tirer deux fois le même.
  pays_trouve.push(tab[index].pays);
  //On pose la question au joueur
  reponseUser = prompt(question + tab[index].pays);
  //On enlève une chance
  chance--;
  //Si le joueur a 4 bonnes réponses
  if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase() && bonne_rep == 3){
    alert("Bravo!");
    //Si le joueur se trompe plus de 3 fois de suite
  } else if(reponseUser.toLowerCase() != tab[index].capitale.toLowerCase() && chance === 0){
    alert("Perdu!");
    //Si réponse juste, on remet le nombre de chance à 3 et on augmente bonne_rep
  } else if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase()){
    chance = 3;
    bonne_rep++;
    jeu();
    //Lancement de la fonction nouvelle_chance() si le joueur se trompe
  }else if (reponseUser.toLowerCase() != tab[index].capitale.toLowerCase()) {
    nouvelle_chance();
  }
}

//Fonction qui se lance si le joueur se trompe
function nouvelle_chance(){
  //On enlève une chance vu que la fonction est lancé en cas d'erreur
  chance--;
  reponseUser = prompt(question + tab[index].pays);
  //Si le joueur a 4 bonnes réponses
  if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase() && bonne_rep == 3){
    alert("Bravo!");
    //Si le joueur se trompe plus de 3 fois de suite
  } else if(reponseUser.toLowerCase() != tab[index].capitale.toLowerCase() && chance === 0){
    alert("Perdu!");
    //Si réponse juste, on remet le nombre de chance à 3 et on augmente bonne_rep
  } else if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase()){
    chance = 3;
    bonne_rep++;
    jeu();
    //Lancement de la fonction nouvelle_chance() si le joueur se trompe
  }else if (reponseUser.toLowerCase() != tab[index].capitale.toLowerCase()) {
    nouvelle_chance();
  }
}

//Fonction qui permet de vérifier si un pays a déjà été tiré au sort
function choix_pays(){
  index = Math.floor(Math.random() * tab.length);
  for(var i = 0; i < pays_trouve.length; i++){
    if(tab[index].pays == pays_trouve[i]){
      choix_pays();
      //Si tous les pays ont été tiré, on stop la recherche
    }else if(pays_trouve.length == tab.length){
      break;
    }
  }
}

jeu();
