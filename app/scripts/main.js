// jshint devel:true
$(function () {

    var mn = $(".menu");
    var mns = "main-nav-scrolled";
    var hdr = $('header').height();
    var hasCreatedObjects = false;


    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }

        var y = $(this).scrollTop();

        if (y >= 3028) {
            //console.log(y);
           //alert("beau gosse");
            if (!hasCreatedObjects) {
                hasCreatedObjects = true;
                $('#myStat1, #myStat2, #myStat3, #myStat4, #myStat5, #myStat6, #myStat7, #myStat8, #myStat9').circliful();

            }
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




    $('#menu--icon').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#site-container').toggleClass('open');
    });






});