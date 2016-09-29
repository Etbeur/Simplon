var header = document.querySelector('header');
var headerContent = document.getElementById('header');
var canvasLogo = document.getElementsByClassName('canvas-logo')[0];
var navLinks = document.getElementsByClassName('nav-link');
var main = document.getElementsByTagName('main')[0];


var scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};
var onScroll = function() {
    if (scrollY() > 65) {
        header.style.position = "fixed";
        header.style.height = "50px";
        headerContent.style.height = "50px";
        canvasLogo.classList.add('canvas-logo-sm');
        main.style.paddingTop = "160px";
        for (var i = 0; i < navLinks.length; i++){
            navLinks[i].classList.add('nav-link-sm');
        }

    } else {
        header.style.position = "relative";
        header.style.height = "110px";
        headerContent.style.height = "110px";
        canvasLogo.classList.remove('canvas-logo-sm');
        main.style.paddingTop = "";
        for (var i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('nav-link-sm');
        }
    }
};
window.addEventListener('scroll', onScroll);
