$(document).ready(function () {
    $("#mouse-show")
        .mousemove(function (e) {
        let s = `X: ${e.clientX} Y: ${e.clientY}`;
        $(this).text(s);
    })
        .mouseout(function () {
        $(this).text("MOUSE OUT OF THE DIV");
    });
});