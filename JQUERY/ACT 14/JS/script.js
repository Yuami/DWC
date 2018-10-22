$(document).ready(function () {
    $("#btn-bgcolor")
        .mousedown(function () {
        paint($("body"), "#2affe2");
    })
        .mouseup(function () {
            paint($("body"), "#ffffff")
        })
});

function paint(e, color) {
    e.css("background-color", color);
}