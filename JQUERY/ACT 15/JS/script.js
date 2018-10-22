$(document).ready(function () {
    $("#div").dblclick(function () {
        let c = this.className;
        if (c === "rect"){
            this.className = "sqr";
        } else {
            this.className = "rect";
        }
    })
});