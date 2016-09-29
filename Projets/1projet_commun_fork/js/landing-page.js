$(document).ready(function(){
    $landing = $('.landing');
    $header = $('header');
    $main = $('main');
    $footer = $('footer');
    if (document.cookie === "") {
        document.cookie = "No need to relaunch the canvas landing page bro' :)"
        $header.hide();
        $main.hide();
        $footer.hide();
        function launchWebsite(){
            $landing.fadeOut(1000);
            $header.fadeIn(3000);
            $main.fadeIn(3000);
            $footer.fadeIn(3000);
        }
        setTimeout(launchWebsite, 9000);

    } else {
        $landing.hide();
    }



});
