// JavaScript Document
	$(document).ready(function(){ 

		$("li.dot1").click( function(){ $
			(".masthead").removeClass('bgintro2 , bgintro3 , bgintro4').addClass("bgintro1");
			$(this).parent().find('li').removeClass('active');
			$(this).toggleClass("active");
		});
	
		$("li.dot2").click( function(){ $
			(".masthead").removeClass('bgintro1 , bgintro3 , bgintro4').addClass("bgintro2");
			$(this).parent().find('li').removeClass('active');
			$(this).toggleClass("active");

		});
	
		$("li.dot3").click( function(){ $
			(".masthead").removeClass('bgintro1 , bgintro2 , bgintro4').addClass("bgintro3");
			$(this).parent().find('li').removeClass('active');
			$(this).toggleClass("active");

		}); 
		$("li.dot4").click( function(){ $
			(".masthead").removeClass('bgintro1 , bgintro2 , bgintro3').addClass("bgintro4");
			$(this).parent().find('li').removeClass('active');
			$(this).toggleClass("active");

		}); 

});