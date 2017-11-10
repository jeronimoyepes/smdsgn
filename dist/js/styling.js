$(document).ready(function($) {
    
    // registrar el cambio de tamaño de la pantalla
    var winWidth = $(window).width();
    $(window).resize(function () {
        // cuando el tamaño de la pantalla cambie y sea mayor a 991px el height sea igual al del banner
        if ($(this).width() != winWidth && $(this).width() > 992) {
            $(".banner .container .video iframe").height($(".cards").height());
        }
        else if ($(this).width() < 992) {
            $(".banner .container .video iframe").height(300);
        }
    });
    // las mismas reglas de arriba pero por fuera para que se ejecuten apenas cargue la página
    if (winWidth > 992) {
        $(".banner .container .video iframe").height($(".cards").height());
    }else if (winWidth < 992) {
        $(".banner .container .video iframe").height(300);
    }  
});
