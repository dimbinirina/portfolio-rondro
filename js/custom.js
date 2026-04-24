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
});
