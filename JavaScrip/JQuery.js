$(document).ready(function() {
    console.log("listo para utilizar");
    });
    
    $('li').mouseout(function() {
        $(this).css("background", "aqua").css("color", "white")
    });

    $('li').mouseover(function() {
        $(this).css("background", "white").css("color", "black")
    });