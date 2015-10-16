$(document).ready(function() {

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



});