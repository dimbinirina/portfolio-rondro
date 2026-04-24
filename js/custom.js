$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $(".header").addClass('header-fixed');
        }else{
            $(".header").removeClass('header-fixed');
        }
        return false;
    });
    $('.kl-list-slide-hero').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 8000,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '40px'
  });
    const returnUp = document.querySelector(".ruturn-up");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // Afficher après 100px de scroll
            returnUp.classList.add("show");
        } else {
            returnUp.classList.remove("show");
        }
    });
    $("#to-header").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#wrapper").offset().top - 1500
            }, 200);
        }
    });
    var nav_height = 20;
    var sections = $('section');
    var nav = $('.kl-navbar-menu');

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');

        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - nav_height
            }, 200);
        }
    });

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
});
