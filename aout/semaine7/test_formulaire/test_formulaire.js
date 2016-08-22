// Exemple de récupération de données entrées par l'utilisateur

function validForm(){
  var chpNom = document.getElementById('chp-nom');
  var nom = chpNom.value;
  console.log('nom', nom);

  var chpReglement = document.getElementById('chx-reglement');
  var reg = chpReglement.checked;
  console.log('reg', reg);

  var chpLyon = document.getElementById('rbt-lyon');
  var lyon = chpLyon.checked;
  console.log('lyon', lyon);
}
