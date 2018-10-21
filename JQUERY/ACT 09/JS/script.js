$(document).ready(function () {
    $("#btn-head").click(() => {
        let head = $("head").html();
        alert(head);
    });

    $("#btn-body").click(() => {
        let body = $("body").html();
        alert(body);
    });
});