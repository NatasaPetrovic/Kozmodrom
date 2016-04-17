$(document).ready(function () {

    $('#traka').hide();
    $("#logo_jumbo").hide();
    $("#anchor").hide();
    $(".navbar-default").hide();
    hideAllExcept("#centar");


    $("ul.nav li a").click(function () {

        $link = $(this).attr("value");
        $($link).show();
        hideAllExcept($link);
    });


    setTimeout(function () {
        $('#traka').show("slide", {
            direction: "left"
        }, 1000);
        $(".navbar-default").fadeIn(4000);
    }, 250);
    setTimeout(function () {
        $("#logo_jumbo").fadeIn(2500);
        $("#anchor").fadeIn(3600);

    }, 1250);



    $(".vest").css('height', 'auto');
    $(".vest").equalHeights();

    $(window).resize(function () {
        $(".vest").css('height', 'auto');
        $(".vest").equalHeights();
    });


    $('#anchor').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
   
   

});

$.fn.equalHeights = function () {
    var heights = $(this).map(function () {
        return $(this).height();
    }).get(),

                  maxHeight = Math.max.apply(null, heights);

    $(this).height(maxHeight);
}


function hideAllExcept(visible) {
    $("#centar").hide();
    $("#decija_radionica").hide();
    $("#pripreme").hide();
    $("#kursevi_odrasli").hide();
    $("#crkvena_muzika").hide();
    $("#projekti").hide();
    $("#kontakt").hide();
    $(visible).fadeIn(1000);
}