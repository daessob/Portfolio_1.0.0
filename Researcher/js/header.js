$(function(){
   $('.sitemap').click(function(){
      if($('.hdr').hasClass("active_hdr")){
         $('.hdr').removeClass("active_hdr");
         $('.hdr .logo img').attr('src','./images/logo_white.png')
      }
      $('.mobileMenu_box').animate({
         right:0
      }, 200)
      $('.mobileMenu_bg').delay(200).fadeIn(200)
      $('.search_box').slideUp()
   })
   $('.close_btn').click(function(){
      $('.mobileMenu_bg').fadeOut(100)
      $('.mobileMenu_box').delay(100).animate({
         right:'-100%'
      }, 200)
      
   })

   const mobileMenu = $('.mobileMenu>ul>li')
   let index = 0;
   $('.mobileMenu>ul>li').click(function(){
      
      index = $(this).index()
      mobileMenu.removeClass('active_menu')
      mobileMenu.eq(index).addClass('active_menu')
   })

   $('.lnb li').mouseover(function(){
      $('.hdr').addClass('active_hdr')
      $('.hdr .logo img').attr('src','./images/logo_black.png')
   })
   $('.lnb li').mouseleave(function(){
      $('.hdr').removeClass('active_hdr')
      $('.hdr .logo img').attr('src','./images/logo_white.png')
   })


   // const lnb = $('.lnb>li')
   // $('.lnb>li').hover(function(){
   //    index = $(this).index()
   //    lnb.eq(index).children('ul').stop().fadeToggle()
   // })
   $('.lnb>li').hover(function(){
      $('.lnb>li>ul').stop().slideToggle()
      $('.lnb .lnb_bg').stop().slideToggle()
   })
   
   $('.search').click(function(){
      $('.search_box').slideToggle()
   })
   $('.search_box').mouseover(function(){
      $('.hdr').addClass('active_hdr')
      $('.hdr .logo img').attr('src','./images/logo_black.png')
   })
   $('.search_box').mouseleave(function(){
      $('.hdr').removeClass('active_hdr')
      $('.hdr .logo img').attr('src','./images/logo_white.png')
   })
   $('.search_box').mouseleave(function(){
      $(this).slideUp()
   })
   $('.search').click(function(){
      if($('.hdr').hasClass("active_hdr")){
         $('.hdr').removeClass("active_hdr");
         $('.hdr .logo img').attr('src','./images/logo_white.png')
      }else{
         $('.hdr').addClass("active_hdr");
         $('.hdr .logo img').attr('src','./images/logo_black.png')
      }
      
   })
})