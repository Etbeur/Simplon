/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */

// longueur
var texte = "un texte";

// TODO
var nombreDeCaracteres = texte.length;
console.log('nombre de caracteres', nombreDeCaracteres); // 8

// TODO
var quatriemeCaractere = texte[3];
console.log('quatrieme caractere', quatriemeCaractere ); // t

// TODO
var quatriemeEtCinquiemeCaracteres = texte.substring(3,5);
console.log('quatrieme et cinquieme caractere', quatriemeEtCinquiemeCaracteres ); // te

// TODO
var majuscule = texte.toUpperCase();
console.log('majuscule', majuscule ); // UN TEXTE

// TODO
var premierMot = texte.slice(0,2);
console.log('premierMot', premierMot ); // un

// TODO
var premierMotMaj = texte.slice(0,2).toUpperCase();
console.log('premierMotEnMajuscule', premierMotMaj ); // UN



/*
 * nombres
 * fonctions utiles : parseInt , parseFloat, isNaN
 */

var valeur1 = parseInt('15');
var somme = valeur1 + 3;
console.log('somme == 18', somme == 18 ); // true

var age = 32;
// TODO
console.log("J'ai " + age + " ans" ); // j'ai 32 ans

/*
* boucles & tableaux
 */

var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var nombreDeMails = mails.length;
console.log('nombreDeMails', nombreDeMails );

var dernierMail = mails[mails.length -1];
console.log('dernierMail', dernierMail );

var queDesGmail = true;
// est ce que tout les mails sont gmail
for( var i = 0 ; i < mails.length ; i++ ){
  if(mails[i].includes("gmAil".toLowerCase())){
    queDesGmail = true;
  }else {
    mqueDesGmail = false;
  }

}

console.log('tous les mails sont gmail : ', mailsMinuscule );

// mettre les mails en minuscules
var mailsMinuscule = [] ;
for( var i = 0 ; i < mails.length ; i++ ){
  mailsMinuscule.push(mails[i].toLowerCase());
}
console.log('mails en minuscules', mailsMinuscule );

var mails_ = [];
// TODO : remplacez les @ par des _
for (var i = 0; i < mails.length; i ++){
  mails_.push(mails[i].replace('@', '_'));
}
console.log('mails avec underscore', mails_);

var mails_espace = [];
// TODO : supprimez les .com
for (var i = 0; i < mails.length; i ++){
  mails_espace.push(mails[i].replace('.com', ''));
}
console.log('mails avec espace', mails_espace);
