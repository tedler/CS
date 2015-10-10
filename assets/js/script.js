$(document).ready(function() {

// Top section "Background Height & Content Top Margin" resizer

	$(window).resize(function() {

		var WinHeight = $(window).height();
	    $('.top').height(WinHeight - 150);
	    $('.content').css('top', WinHeight - 100);

	});

	$(window).trigger('resize');


// Comments for the next section
	

});