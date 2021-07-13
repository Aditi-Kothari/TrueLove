$(document).ready(function(){
    $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $(".navbar").toggleClass("nav-toggle");
    })
    $(window).on("scroll load",function(){

        $("#menu").removeClass('fa-times');
            $(".navbar").removeClass("nav-toggle");

     if($(window).scrollTop() > 60){
         $("header").addClass("header-active");
     }else{
        $("header").removeClass("header-active");
     }
        
    })
})
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },  
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      }, 
  });