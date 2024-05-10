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

function addBook() {
    
}

function displayBooks() {
    const libraryContainer = document.querySelector('.library');
    for (const book of library) {
        const bookCard = document.createElement('tr');
        const title = document.createElement('td');
        title.classList.toggle('title');
        title.textContent = book.title;
        bookCard.appendChild(title);
        const author = document.createElement('td');
        author.classList.toggle('author');
        author.textContent = book.author;
        bookCard.appendChild(author);
        const pages = document.createElement('td');
        pages.classList.toggle('pages');
        pages.textContent = book.pages;
        bookCard.appendChild(pages);
        const read = document.createElement('td');
        read.classList.toggle('read');
        read.textContent = (book.isRead) ? 'already read' : 'not read yet';
        bookCard.appendChild(read);
        libraryContainer.appendChild(bookCard);
    }
}

const newBookButton = document.querySelector('.new-book');

newBookButton.addEventListener('click', () => {
    const sidebarRef = document.querySelector('.sidebar');
    sidebarRef.classList.toggle('hide');
})