//Creation de variables
var question1 = "Chosisssez pierre, feuille, ciseau?";
var question2 = "Voulez-vous rejouer?";
var scoreJoueur = 0;
var scoreOrdinateur = 0;
var mancheJoueur = 0;
var mancheOrdinateur = 0;
var pointJoueur = "Votre score: ";
var pointOrdinateur = "Score de l'ordinateur: ";
//Creation de fonction qui seront utilisé tout au long du jeu.


//Fonction de condition de fin et possibilité de rejouer
function jeu(){
  while(mancheJoueur < 2 || mancheOrdinateur < 2){
    regles();
    if(scoreJoueur == 3 || scoreOrdinateur == 3){
      gagneManche(scoreJoueur, scoreOrdinateur);
      remiseAZeroScore(scoreJoueur, scoreOrdinateur);
    }
    if(mancheJoueur == 2 || mancheOrdinateur == 2){
      finPartie(mancheJoueur, mancheOrdinateur);
      break;
    }
  }
}

//Fonction avec choix, règles et conditions de victoire
function regles(){
  // choix joueur et ordinateur
  var ordinateur = Math.floor(Math.random() * 3);
  var joueur = prompt(question1).toLowerCase();
  //si joueur pierre
  if(joueur == 'pierre'){
    if(ordinateur == 2){
      scoreJoueur += 1;
      alert("Vous gagnez le point! \n\nVotre pierre écrase le ciseau.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    }else if(ordinateur == 1){
      scoreOrdinateur += 1;
      alert("L'ordinateur gagne le point! \n\nLa feuille recouvre votre pierre.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    }else{
      alert("Egalité");
    }
  //si joueur feuille
  }else if(joueur == 'feuille'){
    if(ordinateur === 0){
      scoreJoueur += 1;
      alert("Vous gagnez le point! \n\nVotre feuille recouvre la pierre.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    } else if(ordinateur == 2){
      scoreOrdinateur += 1;
      alert("L'ordinateur gagne le point! \n\nVotre feuille est coupée par les ciseaux.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    }else{
      alert("Egalité");
    }
  }
  //si joueur ciseau
  else if(joueur == 'ciseau'){
    if(ordinateur == 1){
      scoreJoueur += 1;
      alert("Vous gagnez le point! \n\nVotre ciseau coupe la feuille.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    }else if(ordinateur === 0){
      scoreOrdinateur += 1;
      alert("L'ordinateur gagne le point! \n\nLa pierre écrase votre ciseau.\n\n" + pointJoueur + scoreJoueur + " // " + pointOrdinateur + scoreOrdinateur);
    }else{
      alert("Egalité");
    }
  //Si saisie de l'utilisateur incorrect
  }else{
    alert("Vous n'avez pas saisie une valeur correcte");
  }
}

//Fonction remise à zero des scores
function remiseAZeroScore(x, y){
  if(x == 3 || y == 3){
     scoreJoueur = 0;
     scoreOrdinateur = 0;
  }
}

//Fonction remise à zéro des manches
function remiseAZeroManche(x, y){
  if(x == 2 || y == 2){
    mancheJoueur = 0;
    mancheOrdinateur = 0;
  }
}

//Fonction pour création de manche
function gagneManche(x, y){
  if(x == 3){
    mancheJoueur += 1;
    alert("Vous avez gagné la manche// vous: " + mancheJoueur + " // ordinateur: " +  mancheOrdinateur);
  } else if(y == 3){
    mancheOrdinateur += 1;
    alert("Vous avez perdu la manche// vous: " + mancheJoueur + " // ordinateur: " +  mancheOrdinateur);
  }
}

//Fonction pour fin de la partie
function finPartie(x, y){
  if(x == 2){
    gagne();
    rejouer();
  }else if(y == 2){
    perdu();
    rejouer();
  }
}

//Fonction  message partie gagné
function gagne(){
    alert("Vous avez GAGNE la partie // " + pointJoueur + mancheJoueur + " // " + pointOrdinateur + mancheOrdinateur);
}

//Fonction message partie perdu
function perdu(){
  alert("Vous avez PERDU la partie // " + pointJoueur + mancheJoueur + " // " + pointOrdinateur + mancheOrdinateur);
}

//Fonction pour rejouer partie
function rejouer(){
  if(confirm(question2)){
    remiseAZeroManche(mancheJoueur, mancheOrdinateur);
    jeu();
  } else {
    alert("Merci d'avoir jouer, à bientôt!");
  }
}

jeu();
