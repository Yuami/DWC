$(document).ready(function () {
    $("td")
        .mouseover(function () {
        $(this).css("background-color", "#898c82")
    })
        .mouseout(function () {
        $(this).css("background-color", "#ffffff")
    });
});