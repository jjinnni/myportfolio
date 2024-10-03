$(document).ready(function(){

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: false, // 자동 슬라이드 비활성화
        allowSlideNext: false, // 다음 슬라이드 비활성화
        allowSlidePrev: false, // 이전 슬라이드 비활성화
      },
  }
  });

  $(".wrap .menubtn button").on("click", function() {
    $("nav").css("left", "0");
  });
  $("nav .navbtn button").on("click", function() {
    $("nav").css("left", "-100%");
  });
  $("nav .menu li a").on("click", function() {
    $("nav").css("left", "-100%");
  });
  
});