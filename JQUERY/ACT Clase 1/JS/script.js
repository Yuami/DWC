$(document).ready(function () {
    $("#hideAll").click(function (e) {
        $("p").hide();
    });
    $("#hideP1").click(function (e) { 
        $("#p1").hide();        
    });
    $("#hideP2").click(function (e) { 
        $("#p2").hide();
        
    });
    $("#showAll").click(function (e) { 
        $("p").show();
    });
});
