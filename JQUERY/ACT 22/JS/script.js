$(document).ready(function () {
    $(".btn").click(function () {
        $(this).siblings("img").toggle();
    });
});