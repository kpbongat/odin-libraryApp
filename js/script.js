class LibraryController {
  #library;
  constructor() {
    this.#library = [];
  }

  addBook(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    this.#library.push(newBook);
    const bookIndex = this.#library.findIndex((i) => i === newBook);
    this.#library[bookIndex]["data-id"] = bookIndex;
  }

  get library() {
    return this.#library;
  }
}

const mainLibrary = new LibraryController();

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.display = false;
  }
}

class ScreenController {
  constructor() {
    const newBookButton = document.querySelector(".new-book");
    newBookButton.addEventListener("click", () => {
      const sidebarRef = document.querySelector(".sidebar");
      sidebarRef.classList.toggle("hide");
    });

    const form = document.querySelector(".sidebar form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = document.querySelector(".sidebar form");
      const title = document.querySelector("#title").value;
      const author = document.querySelector("#author").value;
      const pages = document.querySelector("#pages").value;
      const isRead =
        document.querySelector("fieldset :checked").value === "true";
      mainLibrary.addBook(title, author, pages, isRead);
      this.displayBooks();
      form.reset();
    });
  }

  displayBooks() {
    const libraryContainer = document.querySelector(".library");
    for (const book of mainLibrary.library) {
      if (book.display) {
        continue;
      }
      const bookCard = document.createElement("tr");
      bookCard.setAttribute("data-id", book["data-id"]);
      const title = document.createElement("td");
      title.classList.toggle("title");
      title.textContent = book.title;
      const removeButton = document.createElement("input");
      removeButton.setAttribute("type", "image");
      removeButton.setAttribute("src", "./images/close-thick.svg");
      removeButton.classList.toggle("remove");
      removeButton.addEventListener("click", () => {
        mainLibrary.library.forEach((i, idx) => {
          if (i["data-id"] === book["data-id"]) {
            mainLibrary.library.splice(idx, 1);
          }
        });
        libraryContainer.removeChild(bookCard);
      });

      bookCard.appendChild(title);
      title.appendChild(removeButton);
      const author = document.createElement("td");
      author.classList.toggle("author");
      author.textContent = book.author;
      bookCard.appendChild(author);
      const pages = document.createElement("td");
      pages.classList.toggle("pages");
      pages.textContent = book.pages;
      bookCard.appendChild(pages);
      const read = document.createElement("td");
      read.classList.toggle("read");
      bookCard.appendChild(read);
      const readCheckBox = document.createElement("input");
      readCheckBox.setAttribute("type", "checkbox");
      if (book.isRead) {
        readCheckBox.setAttribute("checked", true);
      }
      readCheckBox.addEventListener("change", () => {
        mainLibrary.library.forEach((i, idx) => {
          if (i["data-id"] === book["data-id"]) {
            i.isRead = !i.isRead;
          }
        });
      });
      read.appendChild(readCheckBox);
      libraryContainer.appendChild(bookCard);
      book.display = true;
    }
  }
}

const screen = new ScreenController();
