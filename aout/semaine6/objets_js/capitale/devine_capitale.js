//Creation de variables et objets
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


function jeu(){
  choix_pays();
  pays_trouve.push(tab[index].pays);
  reponseUser = prompt(question + tab[index].pays);
  chance--;
  if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase() && bonne_rep == 3){
    alert("Bravo!");
  } else if(reponseUser.toLowerCase() != tab[index].capitale.toLowerCase() && chance === 0){
    alert("Perdu!");
  } else if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase()){
    chance = 3;
    bonne_rep++;
    jeu();
  }else if (reponseUser.toLowerCase() != tab[index].capitale.toLowerCase()) {
    nouvelle_chance();
  }
}

function nouvelle_chance(){
  chance--;
  reponseUser = prompt(question + tab[index].pays);
  if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase() && bonne_rep == 3){
    alert("Bravo!");
  } else if(reponseUser.toLowerCase() != tab[index].capitale.toLowerCase() && chance === 0){
    alert("Perdu!");
  } else if(reponseUser.toLowerCase() == tab[index].capitale.toLowerCase()){
    chance = 3;
    bonne_rep++;
    jeu();
  }else if (reponseUser.toLowerCase() != tab[index].capitale.toLowerCase()) {
    nouvelle_chance();
  }
}

function choix_pays(){
  index = Math.floor(Math.random() * tab.length);
  for(var i = 0; i < pays_trouve.length; i++){
    if(tab[index].pays == pays_trouve[i]){
      choix_pays();
    }else if(pays_trouve.length == tab.length){
      break;
    }
  }
}

jeu();
