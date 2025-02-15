// Barba Load Wrapper
barba.hooks.beforeEnter(() => {

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
 

// Counter 

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// For personal use
// Found via: https://codepen.io/ntenebruso/pen/QWLzVjY

var cursorinner = document.querySelector('.cursor-inner');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousedown', function(){
   cursorinner.classList.add('click');
   cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
   cursorinner.classList.remove('click')
   cursorinner.classList.remove('cursorinnerhover')
});


// Open/close navigation when clicked .nav-icon
$(document).ready(function(){
   $('.nav-icon').click(function(){
      if ($('main').hasClass('nav-active')) {
         $("main").addClass('nav-inactive');
         $("main").removeClass('nav-active');
         $('body').removeClass('fixed-position');
      } else {
         $("main").addClass('nav-active');
         $("main").removeClass('nav-inactive');
         $('body').addClass('fixed-position');
      }
   });
   $(document).keydown(function(e){
      if(e.keyCode == 27) {
         if ($('main').hasClass('nav-active')) {
            $("main").removeClass('nav-active');
         } 
      }
   });
});

$(document).ready(function(){
// https://css-tricks.com/moving-backgrounds-with-mouse-position/
// Navigation Mouse position Top-Bottom Hover
let root = document.querySelector('.nav-content-wrap');
let navContentWrap = document.querySelector('.nav-content-wrap');
let navContent = document.querySelector('.nav-content');

navContent.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX - navContentWrap.offsetLeft + "px");
  root.style.setProperty('--mouse-y', e.clientY - navContentWrap.offsetTop + "px");
});

});

// Activate Burst Homepage
$(document).ready(function() {
   $('.burst-sports').on('mouseenter mouseleave', function() {
      $('.section-home-header').toggleClass('burst-sports-active');
      $('.home-header-link').not(this).toggleClass('inactive');
      $(this).toggleClass('active');
   });
   $('.burst-entertainment').on('mouseenter mouseleave', function() {
      $('.section-home-header').toggleClass('burst-entertainment-active');
      $('.home-header-link').not(this).toggleClass('inactive');
      $(this).toggleClass('active');
   });
   $('.burst-influencers').on('mouseenter mouseleave', function() {
      $('.section-home-header').toggleClass('burst-influencers-active');
      $('.home-header-link').not(this).toggleClass('inactive');
      $(this).toggleClass('active');
   });
   $('.content-burst').on('mouseleave', function() {
      $('.section-home-header').removeClass('burst-sports-active');
      $('.section-home-header').removeClass('burst-entertainment-active');
      $('.section-home-header').removeClass('burst-influencers-active');
   });
});

// Activate Links Navigation
$(document).ready(function() {
   $('.nav-link').on('mouseenter mouseleave', function() {
      $('.nav-link').not(this).toggleClass('inactive');
      $(this).toggleClass('active');
   });
});


// Hover Tricks Links
$(".tricks-link").each(function (index, element){
   var tl1 = new TimelineLite({paused:true});
   tl1.to($(element).find(".og .letter"), 0.5, {y: "-100%", opacity: 0, stagger: .02, ease: "power2.inOut"})
   element.animation1 = tl1;
})

$(".tricks-link").each(function (index, element){
   var tl2 = new TimelineLite({paused:true});
   tl2.to($(element).find(".alt .letter"), 0.5, {y: "0%", opacity: 1, stagger: .02, ease: "power2.inOut"})
   element.animation2 = tl2;
})

$(".tricks-link").mouseenter(function(){
   this.animation1.play();
   this.animation2.play();
})

$(".tricks-link").mouseleave(function(){
   this.animation1.reverse();
   this.animation2.reverse();
})

// Scrolltrigger

$(document).ready(function(){

// Scrolltrigger
ScrollTrigger.refresh();
gsap.registerPlugin(ScrollTrigger);

// Scrolltrigger Animation : Section Intro Parallax
$(".section-intro").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".section-intro .overlay");
 
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         scrub: .5,
         markers: false,
      }
   });
   tl.to(targetElement, {
      yPercent: 10,
      ease: "none"
   });
});

// Scrolltrigger Animation : Section Prefooter Parallax
$(".section-prefooter").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".section-prefooter .overlay");
 
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         scrub: .5,
         markers: false,
      }
   });
   tl.to(targetElement, {
      yPercent: 10,
      ease: "none"
   });
});

// Scrolltrigger Animation : Phones Homepage
$(".section-how").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".section-how .phones .iphone-image");
 
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         start: "0% 100%",
         end: "70% 0%",
         scrub: .5,
         markers: false,
      }
   });
   tl.from(targetElement, {
      yPercent: 50,
      stagger: .05,
      ease: "power2.inOut"
   });
});

// Scrolltrigger Animation : Homepage Pin Points
$(".section-map .map-box").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".section-map .pin-point");
 
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         toggleActions: "restart none none none",
         start: "0% 90%",
         end: "100% 10%",
      }
   });
   tl.from(targetElement, {
      opacity: 0,
      duration: .75,
      scale: 0,
      stagger: .2,
      ease: "expo.out"
   });
});

// Scrolltrigger Animation : Logo Bar
$(".section-logos").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".section-logos .single-logo");
 
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         toggleActions: "restart none none none",
      }
   });
   tl.from(targetElement, {
      yPercent: 75,
      opacity: 0,
      ease: "power2.inOut"
   });
});

}); // END Document Ready Function

$(document).ready(function() {
   ScrollTrigger.refresh(true);
   $( "body" ).removeClass( "fixed-position" );
});



}); // End Barba Load Wrapper


// Barba Load Wrapper
barba.hooks.beforeEnter(() => {

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 200) {
			  $('main').addClass('scrolled');
		 } else {
			  $('main').removeClass('scrolled');
		 }
	});

   var img = $('.triangle');
	if(img.length > 0){
   	var offset = img.offset();
    	function mouse(evt){
        	var center_x = (offset.left) + (img.width()/2);
        	var center_y = (offset.top) + (img.height()/2);
        	var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        	var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        	var degree = (radians * (180 / Math.PI) * -1) + 180; 
        	img.css('transform', 'translate(-50%, -24%) rotate('+degree+'deg)');
    	}
	}

	$('.targets-animation-wrapper').on('mouseenter', function() {
		$(document).mousemove(mouse);
	});
	
	$('.targets-animation-wrapper').on('mouseleave', function() {
		$(document).unbind();
		img.css('transform', 'translate(-50%, -24%) rotate(0deg)');
	});


   $(document).ready(function() {
      $('.video-wrap').click(function () {    
         $player = $(this).find("#how-video")[0];
         if($player.paused){
            $player.play();
            $('#video-overlay').addClass('active');
          }
          else{
            $player.pause();
            $('#video-overlay').removeClass('active');
          }
      });
      $(document).on('keydown',function (e) {

            $player = $(this).find("#how-video")[0];
            if($player.paused){
               $('#video-overlay').addClass('active');
            }
            else{
               $('#video-overlay').removeClass('active');
         
         }
     });
   });


});
