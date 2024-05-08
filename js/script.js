const library = [{
    title:'The Bible',
    author:'God',
    pages:1000,
    isRead:true
}];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(isRead) ? 'already read' : 'not read yet'}`;
    }
}

function addBook() {
    
}

function displayBooks() {
    const libraryContainer = document.querySelector('.library');
    for (const book of library) {
        const bookCard = document.createElement('div');
        const title = document.createElement('div');
        title.classList.toggle('title');
        title.textContent = book.title;
        bookCard.appendChild(title);
        const author = document.createElement('div');
        author.classList.toggle('author');
        author.textContent = book.author;
        bookCard.appendChild(author);
        const pages = document.createElement('div');
        pages.classList.toggle('pages');
        pages.textContent = book.pages;
        bookCard.appendChild(pages);
        const read = document.createElement('div');
        read.classList.toggle('read');
        read.textContent = (book.isRead) ? 'already read' : 'not read yet';
        bookCard.appendChild(read);
        libraryContainer.appendChild(bookCard);
    }
}