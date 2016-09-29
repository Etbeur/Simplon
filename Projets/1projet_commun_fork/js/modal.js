$(document).ready(function(){
    $('.apercu, .fa-plus').click(function(){
        $id = this.id;
        $('body').css({
            "overflow": "hidden"
        });
        $('.modal').fadeIn();
        if ($id === "apercu_romain" || $id == "apercu_romain_plus") {
            $('.modal-content').append("<img class='img' src='pix/dessin_romain.jpg' alt='aperçu canvas'><a href='users/Romain/perso/index.html'>Voir le canvas de Romain</a>");
        } else if ($id === "apercu_raph" || $id === "apercu_raph_plus") {
            $('.modal-content').append("<img class='img' src='pix/dessin_raph.jpg' alt='aperçu canvas'><a id='btn-grille' style='cursor:crosshair'>Afficher la grille</a>");
            $('#btn-grille').one('click', function(){
                $('.modal-content img').remove();
                $('<img class="img" src="pix/dessin_raph_g.jpg" alt="aperçu canvas">').insertBefore(this)
                $(this).html("À vous de <a href='http://codepen.io/dirago/pen/kkbZbB' target='_blank' style='text-decoration:underline;color:#ea1d53'>jouer</a> !")
            });
        } else
            console.log('erreur');
    });
    $('.btn-close').click(function(){
        $('.modal').hide();
        $('.modal-content img, .modal-content a').remove();
        $('body').css({
            "overflow": "visible"
        });
    });
});
