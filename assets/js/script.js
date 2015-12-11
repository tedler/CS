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
	    $('.content').css('top', WinHeight - 100);

	});

	$(window).trigger('resize');


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

// Fluidbox

	$(function () {
		    $('a').fluidbox();

    });






});