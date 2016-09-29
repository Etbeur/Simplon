// On nomme le contexte en 2d et on récupère l'id du cavas
var canvas = document.getElementById("monCanvas");
var context = canvas.getContext("2d");

// Création d'un dégradé de couleur sur le haut de l'écran
var ciel = context.createLinearGradient(0,450,0,50);
ciel.addColorStop(0,"BurlyWood");  // couleur au départ style sable
ciel.addColorStop(0.1, "white"); // couleur des vague devant le sable
ciel.addColorStop(0.6,"DodgerBlue"); //couleur eau de mer
ciel.addColorStop(0.8,"orangeRed");  // couleur intermédiaire
ciel.addColorStop(0.8,"orange"); //début du rapprochement du ciel
ciel.addColorStop(1,"cornFlowerBlue"); // couleur final
context.fillStyle = ciel; // On remplit le context avec la variable ciel qui contient nos 3 couleurs
context.fillRect(0,0,canvas.width, canvas.height);

// Soleil qui apparaitra au fond du dessin
context.beginPath();
context.filter = "blur(1px)";
context.arc(600, 130, 50, 0, Math.PI*1, true);
context.strokeStyle = "orange";
context.fillStyle = "orangeRed";
context.fill();
context.stroke();
context.filter = "none";

// Granulé sur le sable
var granule = context.createLinearGradient(0, 450, 0, 50);
granule.addColorStop(0,"rgba(162, 158, 162, 0.1)");
granule.addColorStop(1,"rgba(162, 158, 162, 0.1)");
context.fillStyle = granule;
context.fillRect(0,440,canvas.width,160);


// implantation d'un cocotier et de 3 dauphins
var cocotier = new Image();
cocotier.src = 'images/cocotier1.png';
var dauphin = new Image();
dauphin.src = 'images/dauphin1.png';
cocotier.addEventListener('load', function(){
  context.filter = "blur(2px)";
  context.drawImage(cocotier, 370, 220);
  context.filter ="none";
  context.drawImage(dauphin, 200, 140);
  context.drawImage(dauphin, 130, 180);
  context.drawImage(dauphin, 210, 200);
});



// Ajout d'oiseau au loin dans le ciel
context.beginPath();
context.lineWidth = "1";
context.strokeStyle = "white";
context.moveTo(80,15);
context.quadraticCurveTo(70, 60, 70, 10);
context.moveTo(150,60);
context.quadraticCurveTo(150, 100, 140, 60);
context.moveTo(600,20);
context.quadraticCurveTo(580, 60, 580, 25);
context.stroke();
