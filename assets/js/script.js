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
	    $('.top').height(WinHeight - 220);
	    $('.arrow').height(WinHeight - 220);
	    $('.available').height(WinHeight - 220);
	    $('.content').css('top', WinHeight - 220);

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


// OnScroll fadeout for top section elements + Top & Bottom bumping

	$(window).scroll(function () {

	    var scrollTop = $(window).scrollTop();
	    var winHeight = $(window).height();
	    var docHeight = $(document).height();

	    $('.fadeout').css({'opacity': 1-(scrollTop/500)}); // or use .top to fadeout background as well
	    $('.fadeout-quick').css({'opacity': 1-(scrollTop/100)});
	    $('.top').css({'top': -(scrollTop/3)});
	    $('.arrow').css({'top': -(scrollTop/33)});

		if(scrollTop + winHeight == docHeight) {

		   $('.bumpBottom').addClass('bumpedBottom');

		} else {

			if(scrollTop === 0) {

			  $('.bumpTop').addClass('bumpedTop');
			  
			} else {

				$('.bumpBottom').removeClass('bumpedBottom');
				$('.bumpTop').removeClass('bumpedTop');

			}
		}

	});


// Hamburger icon animation
 
	$(".navbar-toggle").on("click", function () {
	    $(this).toggleClass("active");
	});


// Smooth scrolling with jquery.scrollTo.min.js

    $(".btn-group a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, {offset:-69}); 
    });


// Page transition animation
	
	var $animsition = $('.animsition');
	$animsition
	.animsition();


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

// Contacts: label styles

	$('input, textarea').on('focusin', function() {
	  $(this).parent().find('label').addClass('cf-active');
	});

	$('input, textarea').on('focusout', function() {
	  if (!this.value) {
	    $(this).parent().find('label').removeClass('cf-active');
	  }
	});

// Contacts: validation & captcha maths

	$('#nameFrom').on('input', function() {
		
		var input=$(this);
		var is_name=input.val();

		if (is_name) {

			input.removeClass("not-valid").addClass("valid");

		} else { 
			
			input.removeClass("valid").addClass("not-valid");

		}
	});


	$('#emailFrom').on('input', function() {

		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());

		if (is_email) {

			input.removeClass("not-valid").addClass("valid");

		} else { 

			input.removeClass("valid").addClass("not-valid");

		}
	});


	var n1 = Math.round(Math.random() * 4 + 1);
	var n2 = Math.round(Math.random() * 4 + 1);

	$("#captcha_label").html(n1 + " + " + n2 + " = ");

	$("#captcha").on('input', function() {

		var input=$(this);
		var is_captcha=input.val();

	    if ((n1 + n2) == is_captcha) {

	        input.removeClass('not-valid').addClass('valid');

	    } else {

	        input.removeClass('valid').addClass('not-valid');

	    }
	});


	$('#message').keyup(function(event) {

		var input=$(this);
		var message=$(this).val();

		console.log(message);

		if (message) {

			input.removeClass("not-valid").addClass("valid");

		} else {

			input.removeClass("valid").addClass("not-valid");

		}	
	});


	$("#contact_send").click(function(event){

		var nameFromVal=$("#nameFrom").val();
		var emailFromVal=$("#emailFrom").val();
		var messageVal=$("#message").val();

		var v1=$("#nameFrom").hasClass("valid");
		var v2=$("#emailFrom").hasClass("valid");
		var v3=$("#captcha").hasClass("valid");
		var v4=$("#message").hasClass("valid");

		if ( v1 && v2 && v3 && v4 ) {

			$("#contact_send").addClass("disabled").html("sending ...");

			$.post("php/sendemail.php",{nameFrom:nameFromVal,emailFrom:emailFromVal,message:messageVal},
				
				function(data){

					$("#contact-message-required").addClass("display-none");
					$("#contact-message-sent").removeClass("display-none");
					$("#contact_send").addClass("display-none");

				});

		} else {

			event.preventDefault();
			$("#contact-message-sent").addClass("display-none");
			$("#contact-message-required").removeClass("display-none");

		}

	});
	

// About: Waypoints for Skills section

	var skills = $('.skills');
	var skills1 = $('#skills-1');
	var skills2 = $('#skills-2');
	var skills3 = $('#skills-3');
	var skills4 = $('#skills-4');
	var skillsOffset = '300px';

	skills1.waypoint(function(direction) {
	    if (direction == 'up') {
	        
	        skills.removeClass("skills-active");
	        skills1.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});

	skills1.waypoint(function(direction) {
	    if (direction == 'down') {
	        
	        skills.removeClass("skills-active");
	        skills1.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});


	skills2.waypoint(function(direction) {
	    if (direction == 'up') {
	        
	        skills.removeClass("skills-active");
	        skills2.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});

	skills2.waypoint(function(direction) {
	    if (direction == 'down') {
	        
	        skills.removeClass("skills-active");
	        skills2.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});


	skills3.waypoint(function(direction) {
	    if (direction == 'up') {
	        
	        skills.removeClass("skills-active");
	        skills3.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});

	skills3.waypoint(function(direction) {
	    if (direction == 'down') {
	        
	        skills.removeClass("skills-active");
	        skills3.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});


	skills4.waypoint(function(direction) {
	    if (direction == 'up') {
	        
	        skills.removeClass("skills-active");
	        skills4.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});

	skills4.waypoint(function(direction) {
	    if (direction == 'down') {
	        
	        skills.removeClass("skills-active");
	        skills4.addClass("skills-active");
	    }
	    },{ offset: skillsOffset
	});





});