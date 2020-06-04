(function($){
  "use strict";

  $(document).on('ready',function() {
    // inline background image function call
    background();
    // Show or hide the sticky footer button
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".scroll-to-top").fadeIn(200);
      } else {
          $(".scroll-to-top").fadeOut(200);
      }
    });

    // Animate the scroll to top
    $(".scroll-to-top").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, 300);
    });

  });

  $(window).on("load", function() {
    //preloader
    $(".preloader").delay(300).animate({
      "opacity" : "0"
      }, 300, function() {
      $(".preloader").css("display","none");
    });
  });

  // header search 
  $(".header-serch-btn").on('click', function(){
    if ($(this).hasClass('toggle-close')) {
        $(this).removeClass('toggle-close').addClass('toggle-open');
        $('.header-top-search-area').addClass('open');
    }
    else {
        $(this).removeClass('toggle-open').addClass('toggle-close');
        $('.header-top-search-area').removeClass('open');
    }
  });

  // close search area when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.header-serch-btn, .header-serch-btn *, .header-top-search-area, .header-top-search-area *')) {
      $('.header-top-search-area').removeClass('open');
      $('.header-serch-btn').addClass('toggle-close');
    }
  });

  // mobile menu js
  $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
    const element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
    }
    else {
      element.addClass("open");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
    }
  });

  //js code for menu toggle
  $(".menu-toggle").on("click", function() {
      $(this).toggleClass("is-active");
  });
  
   // menu options custom affix
   var fixed_top = $(".header-section");
   $(window).on("scroll", function(){
       if( $(window).scrollTop() > 50){  
           fixed_top.addClass("animated fadeInDown menu-fixed");
       }
       else{
           fixed_top.removeClass("animated fadeInDown menu-fixed");
       }
   });

  // header-top 
  $('.header-top-open-btn').on('click', function(){
    $('.header-top').addClass('open');
  });

  $('.header-top .close-btn').on('click', function(){
    $('.header-top').removeClass('open');
  });

  // inline background image function
  function background() {
    var img =$('.bg_img');
    img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
    });
  };

  $('.login-open-btn').on('click', function(){
    $('.login-section').addClass('active');
  });

  $('.login-close').on('click', function(){
    $('.login-section').addClass('duration');
    setTimeout(RemoveClass, 2000);
    setTimeout(RemoveClass2, 2000);
  });

  function RemoveClass() {
    $('.login-section').removeClass("active");
  }
  function RemoveClass2() {
    $('.login-section').removeClass("duration");
  }


  $('.signup-open-btn').on('click', function(){
    $('.signup-section').addClass('active');
  });

  $('.signup-close, .switch-login-page-btn').on('click', function(){
    $('.signup-section').addClass('duration');
    setTimeout(signupRemoveClass, 2000);
    setTimeout(signupRemoveClass2, 2000);
  });

  function signupRemoveClass() {
    $('.signup-section').removeClass("active");
  }
  function signupRemoveClass2() {
    $('.signup-section').removeClass("duration");
  }

   // wow js init
  new WOW().init();

  $('.testimonial-content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-thumb-slider'
  });
  $('.testimonial-thumb-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.testimonial-content-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  $('#profitTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#missionVissionTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $(window).on("scroll", sidebarFixed);

  function sidebarFixed() {
    var element = $(".sidebar");
    var hieghtThreshold = $(window).scrollTop() > 500;
    var hieghtThreshold_end = $('.inner-hero-section').offset().top + $(".privacy-section").outerHeight(true);
    var scroll = $(window).scrollTop();
    if(scroll = hieghtThreshold && scroll <= hieghtThreshold_end){
      element.addClass('active');
    }else{
      element.removeClass('active');
    }
  }

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('ul.privacy-list li').each( function() {
    $('ul.privacy-list li a').on( 'click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 100
      }, 300, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  $('.user-panel-sidebar-btn').on('click', function(){
    $('.user-panel-sidebar').slideToggle();
  });


})(jQuery);
