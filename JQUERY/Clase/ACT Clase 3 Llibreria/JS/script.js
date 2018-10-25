$(document).ready(function () {
    Book.total = 0;
    let title = $("#title");
    let pages = $("#pages");
    let category = $("#cats");
    let col = $("#col");
    let row = $("#row");
    let printer = $("#printer");

    let addBtn = $("#add");
    let removeBtn = $("#remove");
    let printAllBtn = $("#printAll");
    let printLibraryBtn = $("#printLibrary");
    let totalBtn = $("#totalNum");
    let shelve = new Shelve();

    addBtn.click(function () {
        let b = new Book(title.val(), pages.val(), category.val());
        shelve.add(row.val(), col.val(), b);
        print(printer, shelve, 'last');
    });

    removeBtn.click(function () {
        shelve.remove(row.val(), col.val());
        print(printer, shelve, 'last');
    });

    printLibraryBtn.click(function () {
        print(printer, shelve);
    });

    printAllBtn.click(function () {
        print(printer, shelve, 'list');
    });

    totalBtn.click(function () {
        printer.html(`<h2>${Book.total}</h2>`)
    });
});

var last = 'table';
function print(printer, shelve, type) {
    if (type == 'list') {
        printer.html(getList(shelve));
        last = 'list';
    } else if (type == 'last'){
        print(printer, shelve, last);
    } else {
        printer.html(getTable(shelve));
        last = 'table'
    }
}

function getTable(shelve) {
    let table = $("<table id='show'>");

    for (let row of shelve.rows) {
        let tr = $("<tr>");
        for (let book of row) {
            let td;
            if (book != undefined || book != null)
                td = $('<td>'+book.display()+'</td>');
            else
                td = $(`<td>NO BOOK YET</td>`);
            tr.append(td);
        }
        table.append(tr);
    }
    return table;
}

function getList(shelve) {
    let ul = $("<ul>")
    for (let row of shelve.rows) {
        for (let book of row) {
            let li;
            if (book != undefined || book != null) {
                li = $('<li>' + book.display() + '</li>');
                ul.append(li);
            }
        }
    }
    return ul;
}
