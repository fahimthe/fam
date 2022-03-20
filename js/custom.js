$(function(){
  // wow js
  new WOW().init();

  // BAnner Slider Part Start
  $('.banner_mian').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
  });

// back to To part Start
  $(".back2top_main").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000)
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 50) {
      $(".navbar").addClass("menu_bg");
    } else {
      $(".navbar").removeClass("menu_bg");
    }
    if (scrolling > 30) {
      $(".back2top_main").fadeIn(500);
    } else {
      $(".back2top_main").fadeOut(500);
    }

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }
  });










// back to To part Start
// $(".back2top_main").click(function(){
//   $("html, body").animate({
//     scrollTop:0
//   }, 1000)
//   });
  // $(window).scroll(function(){
  //   var scrolling = $(this).scrollTop();
  //   if(scrolling >200){
  //     $(".back2top_main").fadeIn(800);
  //   } else{
  //     $(".back2top_main").fadeOut(800);
  //   }
  //   if (scrolling >0) {
  //     $(".navbar").addClass("menu_bg");
  //   } else {
  //     $(".navbar").removeClass("menu_bg")
  //   }

  //   });

// mixitup Part Start
var mixer = mixitup('.mixit');


//  Customar Slider PArt Start
    $('.customer_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        prevArrow:'<i class="fa-solid fa-circle-arrow-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-circle-arrow-right next"></i>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000
      });

// Plus Minus Button
      $(function(){

        $('input[type="number"]').niceNumber();
      
      });


// light BOx Part start



lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  arrows: false,
  cssEase: 'linear',
  speed: 10000
})



// Timer Part Start
  var countDownDate = new Date("april 5, 2022 15:37:25").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo1").innerHTML = days +"<br>"+ "Days";
  
  document.getElementById("demo2").innerHTML = hours +"<br>"+ "Hours";
  document.getElementById("demo3").innerHTML =  minutes +"<br>"+ "Mins";
  document.getElementById("demo4").innerHTML =seconds +"<br>"+ "Sec ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
},0);

function Utils() {}
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

});

