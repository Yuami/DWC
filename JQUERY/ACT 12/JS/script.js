$(document).ready(function () {
    $("td").hover(hoverIn, hoverOut);
});

function hoverIn() {
    $(this).css("background-color", "#898c82");
}

function hoverOut() {
    $(this).css("background-color", "#ffffff");
}