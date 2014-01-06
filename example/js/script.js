$(document).ready(function(){
	$('body').preloader({
		start: function(total){
			$("#total").html(total);
		},
		progress: function(loaded, total){
			$("#loaded").html(loaded);
		},
		complete: function(){
			$("#preloader").fadeOut()
		}
	})
})