$(document).ready(function(t){var i=t(window).width();t(window).resize(function(){t(this).width()!=i&&t(this).width()>991?(i=t(this).width(),t(".color-band").css("width",function(){return t(".container").width()-578})):t(".color-band").css("width","100%")}),i>991?t(".color-band").css("width",function(){return t(".container").width()-579}):t(".color-band").css("width","100%"),t(".program .image-cont").css("height",function(){return t(this).parent().height()})});