$(document).ready(function () {
    $("input:text")
        .focus(function () {
        $(this).css("color", "red");
    })
        .focusout(function () {
        $(this).css("color", "blue");
    })
});