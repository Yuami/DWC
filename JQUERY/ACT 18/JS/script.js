$(document).ready(function () {
    let list = $("#list-fields");
    let add = $("#addItem");

    add.click(function () {
        let elem = $('<li class="row">');
        elem.append($('<input type="text">'));
        elem.append($('<button class="btn-rmv">REMOVE</button>').click(remove));
        $("#list-fields").append(elem);
    });
});

function remove() {
    $(this).parent().remove();
}