$(document).ready(function() {

// Removing the last child for links on touchscreen devices

	// $('ul.nav a').on("touchstart", function (e) {

	// 	var el = this;
	// 	var par = el.parentNode;
	// 	var next = el.nextSibling;
	// 	par.removeChild(el);
	// 	setTimeout(function() {par.insertBefore(el, next);}, 0);

// });


// Top section "Background Height & Content Top Margin" resizer

	$(window).resize(function() {

		var WinHeight = $(window).height();
	    $('.top').height(WinHeight - 100);
	    $('.arrow').height(WinHeight - 100);
	    $('.available').height(WinHeight - 100);
	    $('.content').css('top', WinHeight - 100);

	});

	$(window).trigger('resize');


// Toggle Available tile on touchscreen devices
	
	$(".available-top").on("click", function () {

		if ($(".available-box").css("margin-right") == "-176px") {

			$(".available-box").css("margin-right","0px");

		} else {

			$(".available-box").css("margin-right","-176px");

		}
	});


// OnScroll navbar resizer
	
	var cbpAnimatedHeader = (function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;

		function init() {
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$("#top-nav").addClass("navbar-default-small");
			}
			else {
				$("#top-nav").removeClass("navbar-default-small");
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();


// OnScroll fadeout for top section elements

	$(window).scroll(function () {
	    var scrollTop = $(window).scrollTop();
	    var height = $(window).height();

	    $('.fadeout').css({'opacity': 1-(scrollTop/500)}); // or use .top to fadeout background as well
	    $('.top').css({'top': -(scrollTop/3)});
	    $('.arrow').css({'top': -(scrollTop/33)});

	});


// Hamburger icon animation 
 
	$(document).ready(function () {
		$(".navbar-toggle").on("click", function () {
		    $(this).toggleClass("active");
		});
	});


// Smooth scrolling with jquery.scrollTo.min.js

    $(".btn-group a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, {offset:-69}); 
    });


// Page transition animation

	$(document).ready(function() {
	  var $animsition = $('.animsition');
	  $animsition
	    .animsition();
	});


// Layouts Slider

	$('.slider-layouts').bxSlider({

	  pagerCustom: '#pager-layouts',
	  controls: false,
	  mode: 'horizontal',
	  easing: 'ease-out',
	  preloadImages: 'visible',
	  slideMargin: 40,
	  touchEnabled: false

	});


	$(".layouts-item").click( function(){
		
		$(this).parents().eq(3).find('img').removeClass('layouts-item-activ');
		$(this).toggleClass("layouts-item-activ");

	});

// Colors Slider

	$('.slider-colors').bxSlider({

	  pagerCustom: '#pager-colors',
	  controls: false,
	  mode: 'horizontal',
	  easing: 'ease-out',
	  preloadImages: 'visible',
	  slideMargin: 40,
	  touchEnabled: false

	});


	$(".colors-item").click( function(){
		
		$(this).parents().eq(3).find('img').removeClass('colors-item-activ');
		$(this).toggleClass("colors-item-activ");

	});


// Final Slider

	$('.slider-final').bxSlider({

	  controls: false,
	  mode: 'horizontal',
	  easing: 'ease-out',
	  preloadImages: 'visible',
	  slideMargin: 40,
	  touchEnabled: true,
	  auto: true,
	  autoHover: true

	});

// Fluidbox.js plugin

	$(function () {

		$('a[rel="fluidbox"]').fluidbox();

    });

// Typed.js plugin

    $(function(){

        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 3000,
            loop: false,
            contentType: 'html',
            loopCount: false,
        });
    });

// Contacts, styles for lables

	$('input, textarea').on('focusin', function() {
	  $(this).parent().find('label').addClass('cf-active');
	});

	$('input, textarea').on('focusout', function() {
	  if (!this.value) {
	    $(this).parent().find('label').removeClass('cf-active');
	  }
	});


});