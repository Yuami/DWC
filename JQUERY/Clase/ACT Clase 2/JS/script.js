$(document).ready(function () {
    $("#btn1").click(function () {
        $("*").css("background-color", "#fff");
        let el = $("#sel1").val();
        let selection = $("#sel2").val();

        let elID = $("#"+el);
        let elements;

        switch (selection) {
            case "parent":
                elements = $(elID).parent();
                break;
            case "parents":
                elements = $(elID).parents();
                break;
            case  "siblings":
                elements = $(elID).siblings();
                break;
            case "find":
                elements = $(elID).find("*");
                break;
            case "children":
                elements = $(elID).children();
                break;
            default:
                alert("Not an option");
        }
        elements.css("background-color","#ff514d");

    })
});
