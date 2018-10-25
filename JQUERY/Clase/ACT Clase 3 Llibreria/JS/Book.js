class Book {
    constructor(title, pages, category) {
        this.title = title;
        this.pages = pages;
        this.category = category;
        Book.total++;
    }

    display() {
        return `Title:      ${this.title} <br>
                Pages:      ${this.pages} <br>
                Category:   ${this.category}`;
    }
}