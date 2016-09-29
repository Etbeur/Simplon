$(document).ready(function(){
    $('object').mouseenter(function(){
        $(this).after('<p id="bubble1" class="bubble bubble1"></p>');
        $(this).after('<p id="bubble2" class="bubble bubble2"></p>');
        $(this).after('<p id="bubble3" class="bubble bubble-text animated pulse">Guess who\'s there !</p>');
        $('#bubble1').fadeIn('slow');
        $('#bubble2').delay(500).fadeIn('slow');
        $('#bubble3').delay(1000).fadeIn('slow');
    });
    $('object').mouseleave(function(){
        $('.signature').find('#bubble1, #bubble2, #bubble3').remove();
    });
});
