var currentArt = 0;

function changeArt(index) {
  if ((index != currentArt)) {
    $(".block:eq(" + index + ")").css({
      "height": "auto",
    });

    var indexHeight = $(".block:eq(" + index + ")").height();

    $("#spacer").css({
      "height": indexHeight + 50,
    });

    $(".block:eq(" + index + ")").animate(
      {
        height: indexHeight,
        left: '15%',
      },
      500);

    $(".block:eq(" + currentArt + ")").animate({ left: '100%' }, 200, function () {
      $(this).css({
        "left": "-100%",
        "height": "0px",
      })
    });
    currentArt = index;
  }
}

$("document").ready(function () {

  // PREPPING STYLE (setting if js enabled) -----------------------

  $("#container").css("overflow", "hidden");
  var headerHeight = $("#name").height() + $("#pickSection").height() + 50;

  $(".block").css({
    "position": "absolute",
    "top": headerHeight,
    "left": "-100%",
    "height": '0px'
  });

  $(".about").css({
    "height": 'auto',
    "left": "15%"
  })

  $("#pickSection").css("visibility", "visible");

  // --------------------------------------------------------------

  document.getElementById("about").onclick = function () { changeArt(0); };
  document.getElementById("skills").onclick = function () { changeArt(1); };
  document.getElementById("projects").onclick = function () { changeArt(2); };
  document.getElementById("contact").onclick = function () { changeArt(3); };


});