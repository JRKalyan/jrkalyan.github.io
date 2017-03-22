var articleIndex = 0;
var articles = undefined;

$("document").ready(function() {

    // PREPPING STYLE (setting if js enabled) -----------------------

    $("#container").css("overflow", "hidden");

    $(".block").css({
        "position": "absolute",
        "top": "150%",
        "left": "0px",
        "margin-left": "20%",
    });

    $("#pickSection").css("visibility", "visible");

    // --------------------------------------------------------------

    articles = document.getElementsByClassName("block");

    $(".navButtons").click(function(){
        $(".about").animate({
            top: '0%',

    });
        console.log("hello");
    })





});