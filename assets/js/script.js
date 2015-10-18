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


// New section

	// $(function() {
	//   $('a[href*=#]:not([href=#])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	//       var target = $(this.hash);
	//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//       if (target.length) {
	//         $('html,body').animate({
	//           scrollTop: target.offset().top-69
	//         }, 600);
	//         return false;
	//       }
	//     }
	//   });
	// });


});