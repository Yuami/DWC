$(document).ready(function () {
    $("#opa")
        .dblclick(function () {
        $(this).fadeTo("slow", 1);
    })
        .click(function () {
            $(this).fadeTo("slow", 0.2);
        });
});