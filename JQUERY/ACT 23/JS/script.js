$(document).ready(function () {
    $(".link").each(bold);
});

function bold() {
    let s = $(this).attr("href");
    if (s.indexOf(".es") !== -1){
        $(this).css("font-weight", "bold");
    }
}