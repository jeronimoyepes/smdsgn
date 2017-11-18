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

        // que el alto de las imagenes de los programas en la pestaña programas sea igual al alto de las descripciones
        if (winWidth > 900) {
            $(".program-cont .program-sect .image").each(function (i) {
                $(this).height($(this).prev().height());
            });

            $(".news-cont .new-sect .image").each(function (i) {
                $(this).height($(this).prev().height());
            });

        }
        else if ($(this).width() < 992) {
            $(".program-cont .program-sect .image").height(350);

            $(".news-cont .new-sect .image").height(350);
        }
    });
    
    // las mismas reglas de arriba pero por fuera para que se ejecuten apenas cargue la página
    if (winWidth > 992) {
        $(".banner .container .video iframe").height($(".cards").height());
    }else if ($(this).width() < 992) {
        $(".banner .container .video iframe").height(300);
    } 
    
    // imagenes de programas en la pestaña programas
    if (winWidth > 900) {
        $(".program-cont .program-sect .image").each(function (i) {
            $(this).height($(this).prev().height());
        });

        $(".news-cont .new-sect .image").each(function (i) {
            $(this).height($(this).prev().height());
        });
    }
    else if ($(this).width() < 992) {
        $(".program-cont .program-sect .image").height(350);

        $(".news-cont .new-sect .image").height(350);
    }
});
