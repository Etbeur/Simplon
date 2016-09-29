function particule(){
//couleur de groupe rouge
  var rama = "Rama";// jaune
  var raph = "Raph";// violet
  var david = "David";// bleu
  var romain = "Romain";//orange
  var oualid = "Oualid";//vert
	var denseness = 10;// densité des particules
	var parts = [];// tout s'efface
	var mouse = {x:-0,y:0};// tout disparait si on enlève la ligne
	var mouseOnScreen = true;// voir son utilité
	var itercount = -0;
	var itertot = 150;
	this.initialize = function(canvas_id){ // tout disparait
		canvas = document.getElementById(canvas_id);// tout disparait
		context = canvas.getContext('2d');// tout disparait
		canvas.width = window.innerWidth;// tout disparait
		canvas.height = window.innerHeight;// tout disparait
		bgCanvas = document.createElement('canvas');// tout disparait
		bgContext = bgCanvas.getContext('2d');// tout disparait
		bgCanvas.width = window.innerWidth;// tout disparait
		bgCanvas.height = window.innerHeight;// tout disparait
		canvas.addEventListener('mousemove', MouseMove, false);// mouvement des particules grace à la souris
		canvas.addEventListener('mouseout', MouseOut, false); // voir sa vrai utilité :
		start();	}

	var start = function(){

    bgContext.font = '180px verdana'; // taille des particules pour afficher les lettres:
		bgContext.fillText(rama, 500, 150);// 200 margin left, 25 margin-top: 100 texte aligner sur la même ligne


    bgContext.font = '180px Arial'; // taille des particules pour afficher les lettres:
		bgContext.fillText(raph, 100, 350);// 200 margin left, 25 margin-top: 100 texte aligner sur la même ligne

    bgContext.font = '180px impact italic bold'; // taille des particules pour afficher les lettres:
		bgContext.fillText(david, 950, 350);// 200 margin left, 25 margin-top:

    bgContext.font = '180px bold'; // taille des particules pour afficher les lettres:
		bgContext.fillText(romain, 100, 650);// 200 margin left, 25 margin-top:

    bgContext.font = 'italic 140px Calibri'; // taille des particules pour afficher les lettres:
		bgContext.fillText(oualid, 950, 650);// 200 margin left, 25 margin-top:*/

		clear();// voir son utilité
		getCoords();// le texte disparait
	}

	var getCoords = function(){
		var imageData, pixel, height, width;// voir son utilité
		imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);// le texte disparait
		// quickly iterate over all pixels - leaving density gaps
	    for(height = 0; height < bgCanvas.height; height += denseness){// tout disparait
            for(width = 1; width < bgCanvas.width; width += denseness){// tout disparait
               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];// 3 de texte , 4 un texte
                  //Pixel is black from being drawn on.
                  if(pixel == 255) {// le texte disparait, limiter a 255 px
                    drawCircle(width, height);// le texte disparait
      }
    }
  }

        setInterval( update, 0 );// rapiditer d'affichage du texte au dessus de 90 ralentissement
	}

	var drawCircle = function(x, y){

		var startx = (Math.random() * canvas.width);
		var starty = (Math.random() * canvas.height);

		var velx = (x - startx) / itertot;
		var vely = (y - starty) / itertot;

    parts.push(
			{c: '#' + (Math.random() * 8461 | 2).toString(14),// 18 filtre de couleur, si on change les opérations cela change les couleurs la division ne marche pas
      /*{c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
      /*x: x, //goal position // plus de souris*/
      y: y,// aucune utilité*/
			 x3: startx, //start position
			 y3: starty,
			 r: true, //Released (to fly free!)// blocage des particules
			 v:{x:velx , y: vely}
			}
		)
	}
	var update = function(){
		var i;
		itercount++;// tout explose
		clear();
		for (i = 0; i < parts.length; i++){// tout disparait


			if (parts[i].r == true){// blocage des particules
				//Fly into infinity!!
				parts[i].x3 += parts[i].v.x;
		        parts[i].y3 += parts[i].v.y;
			//Perhaps I should check if they are out of screen... and kill them?
			}
      if (itercount == itertot){
				parts[i].v = {x:(Math.random()* 2) * 0.1 - 0.2,y:(Math.random()*0.01)};// parts[i].v = {x:(Math.random() + 5) + 2 - 1 , y:(Math.random() * 0) *  0};
         // avec le math random de x qui est de 0 ou de 0.11 on peut manipuler grâàce à ce calcul un temps d'arrêt donné.
				parts[i].r = true;// true pour faire exploser

//parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 0};

			}

			dx = parts[i].x - mouse.x;// aucune action de la souris
	        dy = parts[i].y - mouse.y;// aucune action de la souris
	        sqrDist =  Math.sqrt(dx*dx + dy*dy);// aucune action de la souris

			if (sqrDist < 2){// aucune action de la souris
				parts[i].r = false;// aucune action de la souris
			}// aucune action de la souris

			//Draw the circle
			context.fillStyle = parts[i].c;
			context.beginPath();
			context.arc(parts[i].x3, parts[i].y3,4 ,15 , Math.PI*1, true);
			context.closePath();
	    	context.fill();// le texte disparait
		}
	}
	var MouseMove = function(e) {
	    if (e.layerX || e.layerX == 0) {
	    	//Reset particule positions
	    	mouseOnScreen = false;
	        mouse.x = e.layerX - canvas.offsetLeft;
	        mouse.y = e.layerY - canvas.offsetTop;
	    }
	}
	var MouseOut = function(e) {
		mouseOnScreen = true;// true les particules disparait en plus gros bloque
		mouse.x = 0;
		mouse.y = 0;
	}
	//Clear the on screen canvas
	var clear = function(){
		context.fillStyle = '#111';// background color
		context.beginPath();
  		context.rect(0, 0, canvas.width, canvas.height);
 		context.closePath();
 		context.fill();
	}
}
var particule = new particule();
particule.initialize("canvas");
