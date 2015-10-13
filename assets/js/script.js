$(document).ready(function() {

// Top section "Background Height & Content Top Margin" resizer

	$(window).resize(function() {

		var WinHeight = $(window).height();
	    $('.top').height(WinHeight - 100);
	    $('.content').css('top', WinHeight - 100);

	});

	$(window).trigger('resize');


// Comments for the next section
	
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

// Comments for the next section

	$(window).scroll(function () {
	    var scrollTop = $(window).scrollTop();
	    var height = $(window).height();

	    $('.fadeout').css({'opacity': 1-(scrollTop/350)});
	    $('.fadeout').css({'top': -(scrollTop/3)});

	});



});