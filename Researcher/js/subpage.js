$(function(){
   let slider = $('.year')
   let slickOptions = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   if ($(window).width() < 1280) {
      slider.slick(slickOptions);
  }
   $(window).resize(function() {
      if ($(window).width() < 1280) {
          // 1280px 미만에서는 슬라이더를 초기화
          slider.not('.slick-initialized').slick(slickOptions);
      } else {
          // 1280px 이상에서는 슬라이더를 해제
          slider.slick('unslick');
      }
  });
  
  

   

   
})