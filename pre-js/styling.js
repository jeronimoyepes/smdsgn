$(document).ready(function($) {
    
    // registrar el cambio de tamaño de la pantalla
    var winWidth = $(window).width();
    $(window).resize(function resizeActivated () {
        console.log("hola");
        if ($(this).width() != winWidth && $(this).width() > 991) {
            $(".banner .container .video iframe").height($(".cards").height());
        }
    });
    $(".banner .container .video iframe").height($(".cards").height());
});
