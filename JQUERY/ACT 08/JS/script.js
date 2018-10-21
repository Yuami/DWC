$(document).ready(function () {
    let thead = $("thead");
    let tbody = $("tbody");
    $("#linkTH").click(function () {
        thead.addClass("thead");
    });
    $("#linkTB").click(function () {
        tbody.addClass("tbody");
    });
    $("#unlinkTH").click(function () {
        thead.removeClass("thead");
    });
    $("#unlinkTB").click(function () {
        tbody.removeClass("tbody");
    });
});