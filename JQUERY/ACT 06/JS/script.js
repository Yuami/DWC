$(document).ready(function () {
    $("#input").click(()=>{
        let childs = $("table:first td");
        childs.each(function (i,e) {
            e.innerText = "ON";
        })
    })
});