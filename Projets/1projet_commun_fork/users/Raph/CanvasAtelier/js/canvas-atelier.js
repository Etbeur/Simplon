/* 3D View of a house by Simplon.co Lyon ^_^ */

// Je stocke mon élément canvas dans une variable
var canvas = document.getElementById('canvas');
// Je récupère son contexte qui peut être un dessin en 2D ou en 3D (webGL)
var ctx = canvas.getContext('2d');
var h = canvas.height;
var w = canvas.width;

/*--------- Votre dessin ---------*/

function showMyDraw() {
  // Ciel
  ctx.beginPath();
  ctx.fillStyle = "deepskyblue";
  ctx.fillRect(0,0,canvas.width, canvas.height);

  // Pelouse
  ctx.beginPath();
  ctx.fillStyle = "green"
  ctx.fillRect(0,350,600,250);
  ctx.strokeStyle = "#004D00";
  ctx.strokeRect(0,350,600,0);

  // // Barrière blanche
  // ctx.beginPath();
  // ctx.fillStyle = "white";
  // ctx.fillRect(585,325,10,50);
  // ctx.fillRect(565,325,10,50);
  // ctx.fillRect(545,325,10,50);
  // ctx.fillRect(525,325,10,50);
  // ctx.fillRect(505,325,10,50);
  // ctx.fillRect(85,325,10,50);
  // ctx.fillRect(65,325,10,50);
  // ctx.fillRect(45,325,10,50);
  // ctx.fillRect(25,325,10,50);
  // ctx.fillRect(5,325,10,50);
  // ctx.fillRect(0,360,600,10);
  // ctx.fillRect(0,330,600,10);
  //   // Pointes
  // ctx.beginPath();
  // ctx.moveTo(585,325);
  // ctx.lineTo(590,320);
  // ctx.lineTo(595,325);
  // ctx.moveTo(565,325);
  // ctx.lineTo(570,320);
  // ctx.lineTo(575,325);
  // ctx.moveTo(545,325);
  // ctx.lineTo(550,320);
  // ctx.lineTo(555,325);
  // ctx.moveTo(525,325);
  // ctx.lineTo(530,320);
  // ctx.lineTo(535,325);
  // ctx.moveTo(505,325);
  // ctx.lineTo(510,320);
  // ctx.lineTo(515,325);
  // ctx.moveTo(5,325);
  // ctx.lineTo(10,320);
  // ctx.lineTo(15,325);
  // ctx.fill();
  //
  // // Ombre arbre
  // ctx.beginPath();
  // ctx.moveTo(65,425);
  // ctx.lineTo(100,455);
  // ctx.lineTo(100,475);
  // ctx.lineTo(50,433);
  // ctx.fillStyle = "rgba(0, 77, 0, 0.5)"
  // ctx.fill();
  //
  // // Arbre
  // ctx.beginPath();
  // ctx.fillStyle = "saddlebrown";
  // ctx.fillRect(45,325,20,100);
  // ctx.beginPath();
  // ctx.arc(55,425,10,0,Math.PI,false);
  // ctx.fill();
  // ctx.beginPath();
  // ctx.moveTo(55,335);
  // ctx.lineTo(55,420);
  // ctx.strokeStyle = "#ccc"
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.fillStyle = "#006600";
  // ctx.strokeStyle = "#003300"
  // ctx.arc(40,310,30,0,Math.PI*2,true);
  // ctx.fill();
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.arc(70,300,40,0,Math.PI*2,true);
  // ctx.fill();
  // ctx.stroke();

    // Devant de la maison
  ctx.beginPath();
  ctx.fillStyle = "blanchedalmond";
  ctx.fillRect(100,300,200,200);
  ctx.strokeStyle = "burlywood";
  ctx.strokeRect(100,300,200,200);
  ctx.closePath();

      // Toit avant
  ctx.beginPath();
  ctx.moveTo(250,200);
  ctx.lineTo(300,300);
  ctx.lineTo(100,300);
  ctx.closePath();
  ctx.fillStyle = "peru";
  ctx.strokeStyle = "sienna";
  ctx.fill();
  ctx.stroke();

    // Côté de la maison
  ctx.beginPath();
  ctx.moveTo(300,500);
  ctx.lineTo(500,400);
  ctx.lineTo(500,200);
  ctx.lineTo(300,300);
  ctx.closePath();
  ctx.fillStyle = "blanchedalmond";
  ctx.strokeStyle = "burlywood";
  ctx.fill();
  ctx.stroke();

    // Coté du toit
  ctx.beginPath();
  ctx.moveTo(250,200);
  ctx.lineTo(375,150);
  ctx.lineTo(500,200);
  ctx.lineTo(300,300);
  ctx.closePath();
  ctx.fillStyle = "peru";
  ctx.strokeStyle = "sienna";
  ctx.fill();
  ctx.stroke();

    // Devant du garage
  ctx.beginPath();
  ctx.fillStyle = "blanchedalmond";
  ctx.fillRect(300,400,150,100);
  ctx.strokeStyle = "burlywood";
  ctx.strokeRect(300,400,150,100);
  ctx.closePath();

    // Côté du garage
  ctx.beginPath();
  ctx.moveTo(450,500);
  ctx.lineTo(550,450);
  ctx.lineTo(550,350);
  ctx.lineTo(450,400);
  ctx.closePath();
  ctx.fillStyle = "blanchedalmond";
  ctx.strokeStyle = "burlywood";
  ctx.fill();
  ctx.stroke();

    // Devant du toit garage
  ctx.beginPath();
  ctx.moveTo(300,400);
  ctx.lineTo(360,325);
  ctx.lineTo(450,325);
  ctx.lineTo(450,400);
  ctx.fillStyle = "peru";
  ctx.strokeStyle = "sienna";
  ctx.fill();
  ctx.stroke();

    // Côté du toit garage
  ctx.beginPath();
  ctx.moveTo(550,350);
  ctx.lineTo(450,325);
  ctx.lineTo(450,400);
  ctx.fillStyle = "peru";
  ctx.strokeStyle = "sienna";
  ctx.fill();
  ctx.stroke();

  // // Soleil
  // ctx.beginPath();
  // ctx.filter = "blur(10px)";
  // ctx.arc(0,0,100,0,Math.PI*2,true);
  // ctx.lineWidth = 2
  // ctx.fillStyle = "gold";
  // ctx.strokeStyle = "yellow";
  // ctx.fill();
  // ctx.stroke();
  //
  // // Allée garage
  // ctx.beginPath();
  // ctx.filter = "none";
  // ctx.lineWidth = 100;
  // ctx.strokeStyle="grey";
  // ctx.moveTo(375,500);
  // ctx.quadraticCurveTo(375,550,435,700);
  // ctx.stroke();
  //
  // // Allée porte
  // ctx.beginPath();
  // ctx.lineWidth = 50;
  // ctx.strokeStyle="grey";
  // ctx.moveTo(200,500);
  // ctx.quadraticCurveTo(200,550,250,700);
  // ctx.stroke();
  //
  // // Porte garage
  //
  // ctx.beginPath();
  // ctx.moveTo(325,500);
  // ctx.lineTo(325,425);
  // ctx.lineTo(425,425);
  // ctx.lineTo(425,500);
  // ctx.lineWidth = 3;
  // ctx.fillStyle = "#F2F2F2";
  // ctx.strokeStyle = "grey";
  // ctx.fill();
  // ctx.stroke();
  //
  // // Striures garage
  // ctx.lineWidth = 1;
  // ctx.beginPath();
  // ctx.moveTo(340, 438);
  // ctx.lineTo(410,438);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  // ctx.moveTo(340, 448);
  // ctx.lineTo(410,448);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  // ctx.moveTo(340, 458);
  // ctx.lineTo(410,458);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  // ctx.moveTo(340, 468);
  // ctx.lineTo(410,468);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  // ctx.moveTo(340, 478);
  // ctx.lineTo(410,478);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  // ctx.moveTo(340, 488);
  // ctx.lineTo(410,488);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  //
  // // Porte maison
  // ctx.beginPath();
  // ctx.fillStyle = "#F2F2F2";
  // ctx.fillRect(175,425,50,75);
  // ctx.strokeStyle = "lightgrey";
  // ctx.strokeRect(175,425,50,75);
  //
  // // Poignée porte
  // ctx.beginPath();
  // ctx.arc(212,462,3,0,Math.PI*2, true);
  // ctx.fillStyle = "grey";
  // ctx.fill();
  //
  // // Fenêtre devant gauche
  // ctx.beginPath();
  // ctx.lineWidth = 2;
  // ctx.fillStyle = "#FFF";
  // ctx.fillRect(125,325,50,50);
  // ctx.strokeStyle = "grey";
  // ctx.strokeRect(125,325,50,50);
  //
  // // Intérieur fenêtre gauche
  // ctx.beginPath();
  // ctx.lineWidth = 1;
  // ctx.moveTo(132,375);
  // ctx.lineTo(165,350);
  // ctx.lineTo(175,350);
  // ctx.moveTo(165,350);
  // ctx.lineTo(165,325);
  // ctx.strokeStyle = "grey";
  // ctx.stroke();
  //
  // // Fenêtre (volet electrique) droit
  // ctx.beginPath();
  // ctx.lineWidth = 2;
  // ctx.fillStyle = "#FFF";
  // ctx.fillRect(225,325,50,50);
  // ctx.strokeStyle = "grey";
  // ctx.strokeRect(225,325,50,50);
  // ctx.moveTo(230,330);
  // ctx.lineTo(270,330);
  // ctx.moveTo(230,335);
  // ctx.lineTo(270,335);
  // ctx.moveTo(230,340);
  // ctx.lineTo(270,340);
  // ctx.moveTo(230,345);
  // ctx.lineTo(270,345);
  // ctx.moveTo(230,350);
  // ctx.lineTo(270,350);
  // ctx.moveTo(230,355);
  // ctx.lineTo(270,355);
  // ctx.moveTo(230,360);
  // ctx.lineTo(270,360);
  // ctx.moveTo(230,365);
  // ctx.lineTo(270,365);
  // ctx.moveTo(230,370);
  // ctx.lineTo(270,370);
  // ctx.strokeStyle = "#D9D9D9";
  // ctx.stroke();
  //
  // // Fenêtre côté garage
  // ctx.beginPath();
  // ctx.lineWidth = 2;
  // ctx.moveTo(425,265);
  // ctx.lineTo(475,240);
  // ctx.lineTo(475,290);
  // ctx.lineTo(425,315);
  // ctx.closePath();
  // ctx.fillStyle = "white"
  // ctx.strokeStyle = "grey";
  // ctx.fill();
  // ctx.stroke();
  // // Montant central fenêtre
  // ctx.beginPath();
  // ctx.moveTo(450,252);
  // ctx.lineTo(450,303);
  // ctx.moveTo(450,280);
  // ctx.lineTo(444,283);
  // ctx.stroke();
  //
  // // Boite aux lettres
  // ctx.beginPath();
  // ctx.lineWidth = 4;
  // ctx.moveTo(162,600);
  // ctx.lineTo(162, 570);
  // ctx.strokeStyle = "white"
  // ctx.stroke();
  // ctx.lineWidth = 1;
  // ctx.fillStyle = "lightgrey";
  // ctx.fillRect(150,560,15,15);
  // ctx.strokeStyle = "grey";
  // ctx.strokeRect(150,560,15,15);
  // ctx.beginPath();
  // ctx.fillRect(160,565,15,15);
  // ctx.strokeRect(160,565,15,15);
  // ctx.beginPath();
  // ctx.moveTo(175,565);
  // ctx.lineTo(165,560);
  // ctx.lineTo(150,560);
  // ctx.lineTo(160,565);
  // ctx.closePath();
  // ctx.fill();
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.moveTo(160,580);
  // ctx.lineTo(150,575);
  // ctx.lineTo(150,560);
  // ctx.lineTo(160,565);
  // ctx.fill();
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.moveTo(158,570);
  // ctx.lineTo(158,555);
  // ctx.strokeStyle = "red";
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.fillStyle = "red";
  // ctx.fillRect(153,555,5,5);
  //
  // // Oiseau
  // ctx.beginPath();
  // ctx.strokeStyle="white";
  // ctx.moveTo(550,50);
  // ctx.lineWidth = 2;
  // ctx.quadraticCurveTo(530,60,525,75);
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.strokeStyle="white";
  // ctx.moveTo(500,60);
  // ctx.lineWidth = 2;
  // ctx.quadraticCurveTo(530,60,525,75);
  // ctx.stroke();
  //
  // // Avion
  // ctx.filter = "blur(1px)";
  // var grd = ctx.createLinearGradient(425, 75, 350, 50);
  // grd.addColorStop(0, "white");
  // grd.addColorStop(1, "deepskyblue");
  // ctx.beginPath();
  // ctx.strokeStyle = grd;
  // ctx.moveTo(450,25);
  // ctx.lineTo(350,50);
  // ctx.stroke();
  //
  // // Poubelle de tri
  // ctx.beginPath();
  // ctx.filter = "none";
  // ctx.arc(30,582,5,0,Math.PI*2,true);
  // ctx.fillStyle = "#333";
  // ctx.fill();
  // ctx.beginPath();
  // ctx.fillStyle = "lightgrey"
  // ctx.fillRect(35,570,25,30);
  // ctx.strokeStyle = "grey";
  // ctx.strokeRect(35,570,25,30);
  // ctx.beginPath();
  // ctx.moveTo(35,600);
  // ctx.lineTo(30,582);
  // ctx.lineTo(30,556);
  // ctx.lineTo(35,570);
  // ctx.fill();
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.moveTo(30,552);
  // ctx.lineTo(55,552);
  // ctx.lineTo(60,570);
  // ctx.lineTo(35,570);
  // ctx.fillStyle = "yellow"
  // ctx.fill();
  //
  // // Overboard
  // ctx.beginPath();
  // ctx.arc(400,525,8,0,Math.PI*2,true);
  // ctx.fillStyle = "#333";
  // ctx.fill();
  // ctx.beginPath();
  // ctx.moveTo(400,525);
  // ctx.lineTo(375,535);
  // ctx.strokeStyle = "red"
  // ctx.lineWidth = 7;
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.arc(375,535,8,0,Math.PI*2,true);
  // ctx.fillStyle = "#333";
  // ctx.fill();
  // ctx.beginPath();
  // ctx.arc(375,535,3,0,Math.PI*2,true);
  // ctx.fillStyle = "#000";
  // ctx.fill();
  //
  // // Nuage
  // ctx.fillStyle = "#99e6ff";
  // ctx.beginPath();
  // ctx.filter = "blur(1px)";
  // ctx.arc(270,75,30,0,Math.PI*2,false);
  // ctx.lineWidth = 2;
  // ctx.strokeStyle = "#e6f9ff"
  // ctx.stroke();
  // ctx.arc(295,80,15,0,Math.PI*2,false);
  // ctx.arc(230,75,20,0,Math.PI*2,false);
  // ctx.arc(240,75,25,0,Math.PI*2,false);
  // ctx.fill();
  //
  // // Ombre garage
  // ctx.beginPath();
  // ctx.moveTo(450,500);
  // ctx.lineTo(550,560);
  // ctx.lineTo(620,480);
  // ctx.lineTo(550,450);
  // ctx.fillStyle = "rgba(0, 77, 0, 0.5)";
  // ctx.fill();
  //
  // // Ombre maison droite
  // ctx.beginPath();
  // ctx.moveTo(550,450);
  // ctx.lineTo(560,455);
  // ctx.lineTo(600,420);
  // ctx.lineTo(550,400);
  // ctx.fill();
  //
  // // Ombre maison devant
  // ctx.beginPath();
  // ctx.moveTo(550,560);
  // ctx.lineTo(150,550);
  // ctx.lineTo(100,500);
  // ctx.lineTo(451,500);
  // ctx.fill();
  //
  // // Ombre toit
  // ctx.beginPath();
  // ctx.moveTo(360,400);
  // ctx.lineTo(450,325);
  // ctx.lineTo(360,325);
  // ctx.lineTo(300,400);
  // ctx.fillStyle = "rgba(121,76,32,0.5)";
  // ctx.fill();
  // ctx.filter = "none";
}

window.addEventListener('load', function(){
  showMyDraw();
  autoGrid(ctx, h, w);
})

// Création du quadrillage d'aide, pour afficher/cacher
function autoGrid(ctx, h, w){
    var xWidth = w,
        yHeight = h,
        i = 0;

    // Je génère les "petits" quadrillages en premier
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (i < yHeight) {i = i + 25; ctx.moveTo(0, i); ctx.lineTo(xWidth, i);}
    i = 0;
    while (i < xWidth) {i = i + 25; ctx.moveTo(i, 0); ctx.lineTo(i, yHeight);}
    i = 0;
    ctx.strokeStyle = "#ccc";
    ctx.stroke();

    // Je génère ensuite les "gros" quadrillages
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (i < xWidth) {i = i + 100; ctx.moveTo(i, 0); ctx.lineTo(i, yHeight);}
    i = 0;
    while (i < yHeight) {i = i + 100; ctx.moveTo(0, i); ctx.lineTo(xWidth, i);}
    ctx.strokeStyle = "#999"
    ctx.stroke();
}
function removeGrid() {
  // Réinitialisation de la grille
  showMyDraw();
}

function showGrid() {
    // Réinitialisation de la grille
    showMyDraw();
    // Réinitialisation de la grille
    autoGrid(ctx, h, w);
}
