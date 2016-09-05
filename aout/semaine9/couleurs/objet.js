var CouleurAleatoire = function(){
  this.couleurs = ['red', 'yellow', 'green'];
  this.aleatoire = function(){
    var hasard = Math.round(Math.random() * (this.couleurs.length - 1));
    return this.couleurs[hasard];
  };
};

function changeCouleurFond(){
  var couleur = new CouleurAleatoire();
  var couleurHasard = couleur.aleatoire();
  document.body.style.backgroundColor = couleurHasard;
  console.log('couleurHasard', couleurHasard);
}
