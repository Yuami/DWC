$(document).ready(function () {
    let list = $("#list-fields");
    let add = $("#addItem");

    add.click(function () {
        list.append(
            "<li>" +
            "<input type='text'>" +
            "<button>REMOVE</button>" +
            "</li>"
        );
    });

    $("li").on("click", ".btn-rmv",remove);
});

function remove() {
    $(this).parent().remove();
}