//cambiar tamaño de la banda de colores dinámicamente
$(document).ready(function($) {

	var winWidth = $(window).width();
	$(window).resize(function () {
		if ($(this).width() != winWidth && $(this).width() > 991) {
			winWidth = $(this).width();

			$(".color-band").css("width", function(){

				var bandWidht = $(".container").width() - 578;

				return bandWidht;

			})

		}else {
			$(".color-band").css("width", "100%")
		}

	});

	if (winWidth > 991) {

		$(".color-band").css("width", function(){

			var bandWidht = $(".container").width() - 578;

			return bandWidht;

		})

	}else {
		$(".color-band").css("width", "100%")
	}

	$(".program .image-cont").css("height", function(){
		return $(this).parent().height()
	});

});
