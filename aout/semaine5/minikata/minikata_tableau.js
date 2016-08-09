var prenom = "paul";

// TODO : ajouter une majuscule
prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();

console.log('prenom avec premiere lettre en majuscule', prenom); //Paul

var users = ["joe", "lea", "bob", "ann"];

// TODO : ajouter une majuscule à tous les prenoms de la liste
var newUsers = [];
for (var i = 0; i < users.length; i++){
  newUsers += users[i].charAt(0).toUpperCase() + users[i].slice(1).toLowerCase() + " ";
}
console.log('Prenoms avec premiere lettre en majuscule', newUsers); //Joe, Lea, Bob, Ann

// TODO : liste des prenoms qui commencent par une voyelle
// TODO : liste des prenoms qui commencent par une console
var voyelles = "aeiouy";
var prenomVoyelles = [];
var prenomConsonne = [];
for (var i = 0; i < users.length; i++){
  if(voyelles.indexOf(users[i].charAt(0))){
    prenomVoyelles.push(users[i]);
    console.log(prenomVoyelles);
  }else{
    prenomConsonne.push(users[i]);
    console.log(prenomConsonne);
  }
}


var notes = [10, 12, 13, 4, 8];
somme = 0;
// TODO : calcul de la somme
for(var i = 0; i < notes.length; i++){
  somme += notes[i];
}


console.log('somme des notes', somme);


// TODO : calcul de la moyenne
moyenne = 0;
somme = 0;
for(var i = 0; i < notes.length; i++){
  somme += notes[i];
  moyenne = somme/notes.length;
}
console.log('moyenne', moyenne );


var nouvelleNote = 12;
// TODO : ajouter la note à liste
notes.push(nouvelleNote);
console.log(notes);


// TODO : calcul de la nouvelle somme
somme += nouvelleNote;
console.log('somme des notes', somme);


// TODO : calcul de la nouvelle moyenne
moyenne = somme/notes.length;
console.log('moyenne',moyenne );


// TODO : trouvez la note la plus haute
var bonneNote = 0;
for(var i = 0; i < notes.length; i++){
  if(notes[i] > bonneNote){
    bonneNote = notes[i];
  }
}
console.log('meilleure note', bonneNote );

// TODO : trouvez la note la plus basse
var mauvaiseNote = 20;
for(var i = 0; i < notes.length; i++){
  if(notes[i] < mauvaiseNote){
    mauvaiseNote = notes[i];
  }
}

console.log('plus mauvaise note', mauvaiseNote);


// TODO : passage en fonctions
function calculSomme( tableauDeNotes ){
  var somme = 0;
  for(var i = 0; i < tableauDeNotes.length; i++){
    somme += tableauDeNotes[i];
  }
    return somme;
}

function calculMoyenne( tableauDeNotes ){
  var moyenne;
  var somme = 0;
  for(var i = 0; i < tableauDeNotes.length; i++){
    somme += tableauDeNotes[i];
    moyenne = somme/tableauDeNotes.length;
  }
    return moyenne;
}
console.log(calculSomme(notes));
console.log(calculMoyenne(notes));
