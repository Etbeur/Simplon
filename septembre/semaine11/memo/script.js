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

var colorStarts = ["chartreuse", "chartreuse", "gold", "gold", "salmon", "salmon", "orchid", "orchid", "MediumSpringGreen", "MediumSpringGreen"];
var totalCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
var totalFound = 0;
var totalTime = 15;
var cardFound = [];
var pluriel;
var choices = {
  color: [],
  card: []
};

function game(){
  // Déclenchement du chrono dès que la page est chargée
  var chrono = setInterval(timer, 1000);

  // Boucle for qui assigne une couleur aleatoirement à chaque carte
  for (var i = 0; i < totalCards.length; i++){
    var aleatoire = Math.floor(Math.random() * colorStarts.length);
    console.log('nb aleatoire', aleatoire);
    totalCards[i].style.color = colorStarts[aleatoire]
    var colorOk = colorStarts.indexOf(colorStarts[aleatoire])
    colorStarts.splice(colorOk,1);
    console.log('couleur aleatoire', colorStarts[aleatoire]);
    console.log('carte 1/2/3...', totalCards[i].style.color);
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
    console.log('table carte trouvé', cardFound);
  };

  // Fonction qui vérifie si la couleur d'une carte correspond à une autre
  function verifColor(){
    if(choices.color[0] == choices.color[1]){
      cardFound.push(choices.card);
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
    win();
  }

  function win(){
    if(totalFound == 5){
      document.getElementById('affichage').innerText = "Bravo";
      document.getElementById('affichage').classList.add("gagne");
      clearInterval(chrono);
    }
  }

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
    if (totalTime < 6){
      document.getElementById('timer').classList.remove("timerGlobal");
      document.getElementById('timer').classList.add("moneyTime");
    }
    // Si toutes les cartes sont trouvées, on stop le temps
    if (totalFound == 5){
      clearInterval(chrono);
    }

    // Si le temps est égal à 0, on remet le timer à 0
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

  // Fonction qui empêche le clic une fois la partie perdu
  function endGame(){
    for(var i = 0; i < totalCards.length; i++){
      totalCards[i].onclick = function () {
        return false;
      };
    }
  }

  function stopClick(){
    for(var i = 0; i < cardFound.length; i++){
      cardFound[i].onclick = function () {
        return false;
      };
    }
  }
}
