var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card6 = document.getElementById('card6');
var card7 = document.getElementById('card7');
var card8 = document.getElementById('card8');
var card9 = document.getElementById('card9');
var card10 = document.getElementById('card10');

// Définitions des couleurs
var colorStarts = ["chartreuse", "chartreuse", "gold", "gold", "salmon", "salmon", "orchid", "orchid", "MediumSpringGreen", "MediumSpringGreen"];
// Tableau de cartes
var totalCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
// Nombre de paires trouvées
var totalFound = 0;
// Temps total
var totalTime = 20;
var pluriel;
// Lors du click sur une carte, on stock la couleur et la carte
var choices = {
  color: [],
  card: []
};

// Déclenchement du chrono dès que la première carte a été retourné
  var chrono = setInterval(timer, 1000);

// Boucle for qui assigne une couleur aleatoirement à chaque carte
for (var i = 0; i < totalCards.length; i++){
  var aleatoire = Math.floor(Math.random() * colorStarts.length);
  console.log('nb aleatoire', aleatoire);
  totalCards[i].style.color = colorStarts[aleatoire]
  var colorOk = colorStarts.indexOf(colorStarts[aleatoire])
  colorStarts.splice(colorOk,1);
  console.log('couleur aleatoire', colorStarts[aleatoire]);
  console.log('tab', colorStarts);
}

// Fonction qui affiche la couleur la carte cliquée
function showCard(card) {
  card.style.backgroundColor = card.style.color;
  choices.card.push(card);
  choices.color.push(card.style.color);
  console.log('tab choice', choices);
  if(choices.color.length > 1) setTimeout(verifColor, 300);
  if(totalFound == 5 ) endGame();
};

// Fonction qui vérifie si la couleur d'une carte correspond à une autre
function verifColor(){
  if(choices.color[0] == choices.color[1]){
    choices.card = [];
    choices.color = [];
    totalFound += 1;
    console.log("total Paires", totalFound);
  }else {
    choices.card[0].style.backgroundColor = "#b0b3b2";
    choices.card[1].style.backgroundColor = "#b0b3b2";
    choices.card = [];
    choices.color = [];
  };
}

// Gestion du compte à rebours et de son affichage
function timer(){

  // Mise au pluriel du mot secondes
  if(totalTime <= 1){
    pluriel = "";
  }else{
    pluriel = "s";
  }

  // On récupère le timer et on y ajoute le temps et l'unité
  document.getElementById('timer').innerText = "Temps restant: " + totalTime + " seconde" + pluriel;
  document.getElementById('timer').classList.add("timerGlobal");

  // Dès que le temps est entre 10 et 5 il devient orange
  if(totalTime < 11 && totalTime > 5){
    document.getElementById('timer').classList.remove("timerGlobal");
    document.getElementById('timer').classList.add("hotTime");

  // Dès que le temps est à 5 et moins, il devient rouge et clignotte
  }else if(totalTime < 6){
    document.getElementById('timer').classList.remove("timerGlobal");
    document.getElementById('timer').classList.add("moneyTime");
  }

  // Si toutes les cartes sont trouvées, on affiche "bravo" et on stop le temps
  if (totalFound == 5){
    document.getElementById('affichage').innerText = "Bravo";
    document.getElementById('affichage').classList.add("gagne");
    clearInterval(chrono);
  }

  // Si le temps est égal à 0, on remet le timer à 0 et on affiche "perdu"
  if(totalTime <= 0){
    totalTime = 0;
    document.getElementById('timer').innerText = "Temps restant: " + "0" + " seconde";
    document.getElementById('affichage').innerText = "Perdu";
    document.getElementById('affichage').classList.add("perd");
    endGame();
    clearInterval(chrono);
  }
  totalTime --;
}

// Fonction qui empêche le clic sur les cartes si la partie est perdue
function endGame(){
  for(var i = 0; i < totalCards.length; i++){
    totalCards[i].onclick = function () {
      return false;
    };
  }
}
