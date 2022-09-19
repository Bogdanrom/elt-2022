$('.slider-home__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    infinite:true,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: 'linear',
    responsive:[
    {
       breakpoint: 830,
       settings: "unslick"
    },
    ]   
 });