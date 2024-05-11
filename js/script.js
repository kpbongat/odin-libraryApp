const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.display = false;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(isRead) ? 'already read' : 'not read yet'}`;
    }
}

function addBook() {
    
}

function displayBooks() {
    const libraryContainer = document.querySelector('.library');
    for (const book of library) {
        if (book.display) {
            continue
        }
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
        read.textContent = (book.isRead === 'true') ? 'already read' : 'not read yet';
        bookCard.appendChild(read);
        libraryContainer.appendChild(bookCard);
        book.display = true;
    }
}

const newBookButton = document.querySelector('.new-book');

newBookButton.addEventListener('click', () => {
    const sidebarRef = document.querySelector('.sidebar');
    sidebarRef.classList.toggle('hide');
    
})

const submitBookButton = document.querySelector('.submit-book');
submitBookButton.addEventListener('click', e => {
        e.preventDefault();
        const form = document.querySelector('.sidebar form');
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const isRead = document.querySelector('fieldset :checked').value;
        const newBook = new Book(title, author, pages, isRead);
        library.push(newBook);
        displayBooks();
        form.reset();

})