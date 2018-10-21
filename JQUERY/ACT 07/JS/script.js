$(document).ready(function () {
    $("input:button").click(function() {
        let selected = $(this).val();
        let link;
        switch (selected) {
            case "Youtube":
                link = "https://www.youtube.com/channel/UCdsMTUc04AWCqAxptI4ay7A?sub_confirmation=1";
                break;
            case "Google":
                link = "https://www.google.com";
                break;
            case "WEB":
                link = "https://jfornes.com"
                break;
            default:
                link = "#";
        }
        let e = $("#link");
        e.attr("href", link);
        e.text(selected);
    })
});