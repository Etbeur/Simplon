//Fonction qui transforme les seconde en heure, minutes et secondes
function transformeEnSeconde(x){
  var y = x % 3600;
  var heure = (x - y)/3600;
  var secondes = x % 60;
  var minutes = (y - secondes)/60;
  return heure + "heures " + minutes + "minutes " + secondes + "secondes";
}
