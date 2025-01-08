$(function(){
   


   // 비주얼메인
   
   let visual_option;
      
   if($(window).width() < 601){
      visual_option = {
         mode:'horizontal',
         auto:true,
         wrapperClass:'visual_box', // 슬라이드 전체 박스 클래스
         prevSelector: '.visual_btn_l', prevText:'<span class="material-symbols-outlined">navigate_before</span>',
         nextSelector: '.visual_btn_r', nextText:'<span class="material-symbols-outlined">navigate_next</span>',
         pagerCustom: '.visual_pager',
         pagerType: 'short',      
      }
   } else {
      visual_option = {
         mode:'fade',
         wrapperClass:'visual_box', // 슬라이드 전체 박스 클래스
         prevSelector: '.visual_btn_l', prevText:'<span class="material-symbols-outlined">navigate_before</span>',
         nextSelector: '.visual_btn_r', nextText:'<span class="material-symbols-outlined">navigate_next</span>',
         pagerCustom: '.visual_pager',
         pagerType: 'full',      
      }
   }

   let visual = $('.visual').bxSlider(visual_option)

   // 올해의 주목할 현상
   $('.thisYear').slick({
      centerMode: true,
      centerPadding: '0px',
      // variableWidth: true,
      slidesToShow: 1,
      dots: true,
      prevArrow:$('.thisYear_btn_l'),
      nextArrow:$('.thisYear_btn_r'),
      customPaging : function(slider, i) {
         var title = $(slider.$slides[i]).data('dot-title');
         return '<a class="pager__item"> '+title+' </a>';
      }
   })
   $('.slick-dots').wrap("<div class='dots_wrap'></div>")
   

      
   // 모바일 와이드 배너
   const wideBnr_top = $('.wideBnr_outer').offset().top;
   let wideBnr_width = $('.wideBnr_outer').width()

   $(window).scroll(function(){
      let wideBnr_height;

      if ($(this).scrollTop() + 600 < wideBnr_top) {
         wideBnr_height = 0
      } else if ($(this).scrollTop() + 600 > wideBnr_top) {
         wideBnr_height = $(this).scrollTop() + 600 - wideBnr_top

         if (wideBnr_height > wideBnr_width) {
            wideBnr_height = wideBnr_width
         }
      }

      let tabletWidth = $(this).width()

      if(tabletWidth>601){
         $('.wideBnr .bnr_img').css('display','none')
      } else {
         $('.wideBnr .bnr_img').stop().css('display','block').animate({
            height: wideBnr_height
         }, 200)
      }
   })
   $(window).resize(function(){
      const wideBnr_top = $('.wideBnr_outer').offset().top;
      let wideBnr_width = $('.wideBnr_outer').width()

      $(window).scroll(function(){
         let wideBnr_height;

         if ($(this).scrollTop() + 600 < wideBnr_top) {
            wideBnr_height = 0
         } else if ($(this).scrollTop() + 600 > wideBnr_top) {
            wideBnr_height = $(this).scrollTop() + 600 - wideBnr_top

            if (wideBnr_height > wideBnr_width) {
               wideBnr_height = wideBnr_width
            }
         }

         let tabletWidth = $(this).width()

         if(tabletWidth>601){
            $('.wideBnr .bnr_img').css('display','none')
         } else {
            $('.wideBnr .bnr_img').stop().css('display','block').animate({
               height: wideBnr_height
            }, 200)
         }
      })
   })

   // 천문학 자료실
   let deviceWidth = $(window).width()
   let slideNum;
   let slideWd;

   if (deviceWidth < 601) {
      slideWd = 736
      slideNum = 1
   } else if (deviceWidth >= 601 && deviceWidth < 1024) {
      slideWd = 472
      slideNum = 2
   } else {
      slideWd = 308
      slideNum = 4
   }  

   
   let slider = $('.library').bxSlider({
      mode:'horizontal',
      moveSlides : 1,
      pager : false,
      wrapperClass: 'library_wrapper',
      slideMargin: 16,
      slideWidth: slideWd,
      minSlides: slideNum,
      maxSlides: slideNum,
      touchEnabled:false,
      prevSelector: '.library_btn_l', prevText:'<span class="material-symbols-outlined">arrow_back</span>',
      nextSelector: '.library_btn_r', nextText:'<span class="material-symbols-outlined">arrow_forward</span>',
   })

   $(window).resize(function(){
      let deviceWidth = $(window).width()
      let slideNum;
      let slideWd;

      if (deviceWidth < 601) {
         slideWd = 736
         slideNum = 1
      } else if (deviceWidth >= 601 && deviceWidth < 1024) {
         slideWd = 472
         slideNum = 2
      } else {
         slideWd = 308
         slideNum = 4
      }  

      slider.reloadSlider({
         mode:'horizontal',
         moveSlides : 1,
         pager : false,
         wrapperClass: 'library_wrapper',
         slideMargin: 16,
         slideWidth: slideWd,
         minSlides: slideNum,
         maxSlides: slideNum,
         touchEnabled:false,
         prevSelector: '.library_btn_l', prevText:'<span class="material-symbols-outlined">arrow_back</span>',
         nextSelector: '.library_btn_r', nextText:'<span class="material-symbols-outlined">arrow_forward</span>',
      })
   })
   $('.library01_popup_img').bxSlider({
      mode:'fade',
      wrapperClass: 'library_popup_wrapper',
      prevText:'<span class="material-symbols-outlined">navigate_before</span>',
      nextText:'<span class="material-symbols-outlined">navigate_next</span>',
      pager: false,

   })
   $('.library_img01').click(function(){
      $('.library01_popup').css('display','flex')
   })
   $('.library01_popup_btn_close').click(function(){
      $('.library01_popup').css('display','none')
   })


   // 천문학 역사
   $( ".history_accordion" )
      .accordion({
        header: "> div > h3",
        heightStyle: "content",
      })

      let winWidth = $(window).width();
      let boxWidth = $('.history_img').height();
      if(winWidth >= 1024){
         //1.681:1
          $('.history_accordion .group>div').height(boxWidth - 188);
      } else if (winWidth >= 601) {
         $('.history_accordion .group>div').height(200)
      }
       else {
         $('.history_accordion .group>div').height('auto')
      }

      $(window).resize(function(){
         let winWidth = $(window).width();
         let boxWidth = $('.history_img').height();
            //max-width값인 500px아래서만 작동
         if(winWidth >= 1024){
               //1.681:1
            $('.history_accordion .group>div').height(boxWidth - 188);
         } else if (winWidth >= 601) {
            $('.history_accordion .group>div').height(200)
         } else {
            $('.history_accordion .group>div').height('auto')
         }   
   });
   $('.group01 h3').click(function(){
      $('.history_img img').css('opacity','0').attr("src", "./images/history01.jpg").animate({opacity:1},'slow')
   })
   $('.group02 h3').click(function(){
      $('.history_img img').css('opacity','0').attr("src", "./images/history02.jpg").animate({opacity:1},'slow')
   })
   $('.group03 h3').click(function(){
      $('.history_img img').css('opacity','0').attr("src", "./images/history03.jpg").animate({opacity:1},'slow')
   })
   $('.group04 h3').click(function(){
      $('.history_img img').css('opacity','0').attr("src", "./images/history04.jpg").animate({opacity:1},'slow')
   })

   
   //천문학 소통공간
   let snsBox_Width;
   if(winWidth >= 1024){
      snsBox_Width = 308;
   } else if (winWidth >= 601) {
      snsBox_Width = 488;
   }
    else {
      snsBox_Width = 568;
   }

   let sns_box = $('.sns_box').bxSlider({
      slideWidth: snsBox_Width,
      slideMargin: 16,
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      shrinkItems:true,
      pager:false,
      prevSelector: '.sns_btn_l', prevText:'<span class="material-symbols-outlined">arrow_back</span>',
      nextSelector: '.sns_btn_r', nextText:'<span class="material-symbols-outlined">arrow_forward</span>',
   })
   
   $(window).resize(function(){
      let winWidth = $(window).width();
      let snsBox_Width;
      if(winWidth >= 1024){
         snsBox_Width = 308;
      } else if (winWidth >= 601) {
         snsBox_Width = 488;
      } else {
         snsBox_Width = 568;
      }

      sns_box.reloadSlider({
         slideWidth: snsBox_Width,
         slideMargin: 16,
         minSlides: 1,
         maxSlides: 3,
         moveSlides: 1,
         shrinkItems:true,
         pager:false,
         prevSelector: '.sns_btn_l', prevText:'<span class="material-symbols-outlined">arrow_back</span>',
         nextSelector: '.sns_btn_r', nextText:'<span class="material-symbols-outlined">arrow_forward</span>',
      })
   })
   
   // 천문대 링크
   // let observatory_slide = $('.observatory_slide').bxSlider({
   //    slideWidth: 240,
   //    slideMargin: 16,
   //    maxSlides: 5,
   //    minSlides: 1,
   //    moveSlides: 1,
   //    shrinkItems:true,
   //    pager:false,
   //    auto: true,
   //    // autoControlsCombine: true,
   //    prevSelector: '.observatory_btn_l', prevText:'<span class="material-symbols-outlined">navigate_before</span>',
   //    nextSelector: '.observatory_btn_r', nextText:'<span class="material-symbols-outlined">navigate_next</span>',
   // })
   // $('.observatory_controls .observatory_btn_stop').click(function(){
   //    $('.observatory_controls .observatory_btn_stop').css('display','none')
   //    $('.observatory_controls .observatory_btn_go').css('display','block')
   //    observatory_slide.stopAuto()
   // })
   // $('.observatory_controls .observatory_btn_go').click(function(){
   //    $('.observatory_controls .observatory_btn_go').css('display','none')
   //    $('.observatory_controls .observatory_btn_stop').css('display','block')
   //    observatory_slide.startAuto()
   // })

})