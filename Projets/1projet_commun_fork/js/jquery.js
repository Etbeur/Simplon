$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top)
        }else{
            scroll =  ($target.offset().top)
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(window).on('scroll', function () {
   var articles = $('article')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
  articles.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active-a');
      nav.find('li').removeClass('active');
      nav.find('span').addClass('nav-text');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-a');
      nav.find('a[href="#'+$(this).attr('id')+'"] > li').addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"] > li > span').removeClass('nav-text');
    }
  });
});
