class Shelve {
    constructor() {
        this.rows = new Array(4);
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i] = new Array(4);
        }
    }

    get(row, col) {
        return this.rows[row][col];
    }

    add(row, col, book) {
        if (this.rows[row][col] === null || this.rows[row][col] === undefined) {
            this.rows[row][col] = book;
        }
    }

    remove(row, col) {
        Book.total--;
        this.rows[row][col] = null;
    }
}