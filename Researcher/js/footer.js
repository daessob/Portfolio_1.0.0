$(function(){
   let observatory_slide = $('.observatory_slide').bxSlider({
      slideWidth: 240,
      slideMargin: 16,
      maxSlides: 5,
      minSlides: 1,
      moveSlides: 1,
      shrinkItems:true,
      pager:false,
      auto: true,
      // autoControlsCombine: true,
      prevSelector: '.observatory_btn_l', prevText:'<span class="material-symbols-outlined">navigate_before</span>',
      nextSelector: '.observatory_btn_r', nextText:'<span class="material-symbols-outlined">navigate_next</span>',
   })
   $('.observatory_controls .observatory_btn_stop').click(function(){
      $('.observatory_controls .observatory_btn_stop').css('display','none')
      $('.observatory_controls .observatory_btn_go').css('display','block')
      observatory_slide.stopAuto()
   })
   $('.observatory_controls .observatory_btn_go').click(function(){
      $('.observatory_controls .observatory_btn_go').css('display','none')
      $('.observatory_controls .observatory_btn_stop').css('display','block')
      observatory_slide.startAuto()
   })

   let bodyBottom = $('html, body').height();

   $('.quick_top').click(function(){
      $('html, body').stop().animate({
         scrollTop: 0
      }, 500)
   })
   $('.quick_bottom').click(function(){
      $('html, body').stop().animate({
         scrollTop: bodyBottom
      }, 500)
   })
   $(window).scroll(function(){
      if($(this).scrollTop() >= 200) {
         $('.quick_top').stop().slideDown(400)
      } else {
         $('.quick_top').stop().slideUp(400)
      }
      if($(this).scrollTop() > $('html, body').height() - $(window).height() - 1) {
         $('.quick_bottom').stop().slideUp(400)
      } else {
         $('.quick_bottom').stop().slideDown(400)
      }
   })
})