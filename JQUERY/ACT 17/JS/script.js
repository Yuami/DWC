$(document).ready(function () {
    $("input:text").blur(function () {
        let s = $(this).val();
        if (s === ""){
            alert("It can't be empty");
        }
    })
});