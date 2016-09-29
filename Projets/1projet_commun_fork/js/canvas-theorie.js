// Je stocke mon élément canvas dans une variable
var canvas = document.getElementById('canvas-theorie');
// Je récupère son contexte qui peut être en 2D ou en 3D (webGL)
var ctx = canvas.getContext('2d');
var h = canvas.height;
var w = canvas.width;

// function showMyDraw() {
//     // Je stocke mon élément canvas dans une variable
//     var canvas = document.getElementById('canvas-theorie');
//     // Je récupère son contexte qui peut être en 2D ou en 3D (webGL)
//     var ctx = canvas.getContext('2d');
// }

function autoGrid(ctx, h, w){
    var xWidth = w,
        yHeight = h,
        i = 0,
        j = 0,
        k = 0,
        l = 0;

    // Je génère les "petits" quadrillages en premier
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (i < yHeight) {i = i + 25; ctx.moveTo(0, i); ctx.lineTo(xWidth, i);}
    while (j < xWidth) {j = j + 25; ctx.moveTo(j, 0); ctx.lineTo(j, yHeight);}
    ctx.strokeStyle = "#ccc";
    ctx.stroke();

    // Je génère ensuite les "gros" quadrillages
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (k < xWidth) {k = k + 100; ctx.moveTo(k, 0); ctx.lineTo(k, yHeight);}
    while (l < yHeight) {l = l + 100; ctx.moveTo(0, l); ctx.lineTo(xWidth, l);}
    ctx.strokeStyle = "#999"
    ctx.stroke();
}

// window.addEventListener('load', function() {
//     autoGrid(ctx, h, w);
//     showMyDraw();
// });

$(document).ready(function(){
    autoGrid(ctx, h, w);

    $('#first_code').click(function(){
        $(this).hide();
        $('#second_code').fadeIn("slow");
        // J'initialise mon premier tracé
        ctx.beginPath();
        // Je définis l'épaisseur du tracé, le contour et le remplissage
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "#ea1d53";
    });
    $('#second_code').click(function(){
        $(this).hide();
        $('#third_code').fadeIn('slow')
        // Je me place au point (100,200)
        ctx.moveTo(100,200);
        // Je trace un trait jusqu'au point (150,100)
        ctx.lineTo(150,100);
        // Un autre vers le point (200,200)
        ctx.lineTo(200,200);
        // Je ferme mon tracé
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    });
    $('#third_code').click(function(){
        $(this).hide();
        $('#fourth_part').fadeIn('slow')
    })

})
