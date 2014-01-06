$(document).ready(function(){
		$('body').append('<div id="preloader"></div>');
		$("#preloader").css({
			'top': 0,
			'left': 0,
			'bottom': 0,
			'right': 0,
			'position': 'absolute',

			//your bg image
			'background': '#fff url(http://preloaders.net/preloaders/484/Instagram%20loading.gif) no-repeat center' 
			})

		$('body').preloader({
			complete: function(){

				// $("#preloader").fadeOut();

				//here comes your animations after page loads

			}
		})

		// click events etc.
	})