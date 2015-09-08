// jshint devel:true
$(function () {

    var mn = $(".menu");
    var mns = "main-nav-scrolled";
    var hdr = $('header').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }

    });

    $(".down").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
    });

    var $body = $('body');
    var heroWrapper = $('.illustration');
    window.contentH = $body.height();
    window.heroWrapperH = $(".illustration").height();
    window.heroH = heroWrapper.height();
    window.parRatio = Math.round( (contentH/heroH) + 5 );

    $(window).scroll(function() {
        window.scrollPos = $(window).scrollTop();
        $('.illustration').css('transform', 'translate3d(0px,'+(-scrollPos/window.parRatio)+"px"+',0px)');
    });



    $(window).scroll(function(){
        var top = ($(window).scrollTop() > 0) ? $(window).scrollTop() : 1;
        $('.block-title').stop(true, true).fadeTo(0.3, 1 / top);
        $('.block-title').css('top', top * 1.3);
    });





});