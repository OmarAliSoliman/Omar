$(function(){
  'use strict';
  //Adjust Slider Height;
  var winh = $(window).height(),
      upperh = $('.upper-bar').innerHeight(),
      navh = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winh - (upperh + navh));

  // shuffle-image
  $('.futured-work ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');

    if($(this).data('class') === 'all')
    {
      $('.shuffle-img .col-md').css('opacity','1');
    }
    else
    {
      $('.shuffle-img .col-md').css('opacity','0.2');
      $($(this).data('class')).parent().css('opacity','1');
    }
  });

  //trager Nice Scroll

  $("body").niceScroll({
     cursorcolor: 'rgb(152, 147, 147)',
     cursorwidth: '8px',
     cursorborder: '1px solid rgb(152, 147, 147)',
 });

  //Adjust Floating point
  $(window).scroll(function(){
        if($(this).scrollTop() > 100)
        {
            $(".floting").fadeIn();
        }
        else
        {
            $(".floting").fadeOut();
        }
    });

    $(".floting").click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
    });

});
