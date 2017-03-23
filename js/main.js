var currentArt = 0;

function changeArt(index) {
    if (index != currentArt) {
        $(".block:eq(" + index + ")").animate({top: '10%'}, 500);
        $(".block:eq(" + currentArt + ")").animate({left: '100%'}, 400, function() {
            $(this).css({
                "top": "100%",
                "left": "0%"
            })
        });
        currentArt = index;
    }
}

$("document").ready(function() {

    // PREPPING STYLE (setting if js enabled) -----------------------

    $("#container").css("overflow", "hidden");

    $(".block").css({
        "position": "absolute",
        "top": "100%",
        "left": "0px",
        "margin-left": "15%",
    });

    $(".about").css({
        "top": "10%"
    })

    $("#pickSection").css("visibility", "visible");

    // --------------------------------------------------------------

    document.getElementById("about").onclick = function() {changeArt(0);};
    document.getElementById("projects").onclick = function() {changeArt(2);};
    document.getElementById("skills").onclick = function() {changeArt(1);};
    document.getElementById("contact").onclick = function() {changeArt(3);};


});