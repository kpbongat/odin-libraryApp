const library = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(isRead) ? 'already read' : 'not read yet'}`;
    }
}
