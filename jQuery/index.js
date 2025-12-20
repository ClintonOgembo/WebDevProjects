$("h1").css("color", "green");
$(document).keydown(function (e) {
    $("h1").text(e.key);
})
