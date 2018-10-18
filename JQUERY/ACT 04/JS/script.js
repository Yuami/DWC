$(document).ready(function () {
    $("#table1 tr").click(function () {
        $(this).css('background-color', 'blue');
    });

    $("#table2 tr").click(function () {
        $(this).css('font-size', '+=5px');
    });
});