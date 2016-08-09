var voyelles = "aeiouy";
var rep;
// la fonction reçoit un caractère en paramètre et doit renvoyer true si le texte contient une voyelle, false sinon
function estUneVoyelle( lettre ){
  if(voyelles.indexOf(lettre) != -1){
    rep = true;
  } else{
    rep = false;
  }
  return rep;
}

console.log("estUneVoyelle('f') :", estUneVoyelle('f') ); // false
console.log("estUneVoyelle('a') :", estUneVoyelle('a') ); // true
console.log("estUneVoyelle() :", estUneVoyelle() ); // false


// la fonction reçoit un texte en paramètre et renvoie true si il contient une ou plusieurs voyelles, sinon false
 function contientUneVoyelle( texte ){
    for(var i = 0; i < texte.length ; i++){
      reg = /[aeiouy]+/gi;
        if(texte[i].match(reg)) {
            return true;
        }
      }
      return false;
    }

// la fonction reçoit un texte en paramètre et doit renvoyer le nombre de voyelles présentes
function compteVoyelle( texte ){
    var compteur = 0;
    for(var i = 0; i < texte.length ; i++){
      reg = /[aeiouy]+/gi;
      compteur += texte[i].search(reg) + 1;

  }
    return compteur;
}


// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
function enleveVoyelle( texteAModifier ){
  for(var i = 0; i < texteAModifier.length; i++){
    reg = /[aeiouy]+/gi;
    newText = texteAModifier.replace(reg,"");
  }
  return newText;
}

var resultat = enleveVoyelle("Coucou"); // doit renvoyer Cc

console.log('resultat :', resultat);
