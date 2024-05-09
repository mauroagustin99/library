const myLibrary = [];

function Book(title, author, pagesNumber, read) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.read = read;
  this.info = function () {
    return (
      this.title + ' by ' + this.author + ', ' + pagesNumber + ', ' + this.read
    );
  };
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  booksContainer.innerHTML = '';

  myLibrary.forEach(function (book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleHeading = document.createElement('h1');
    titleHeading.textContent = book.title;

    const authorHeading = document.createElement('h2');
    authorHeading.textContent = `Autor: ${book.author}`;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.textContent = `Número de páginas: ${book.pagesNumber}`;

    const readParagraph = document.createElement('p');
    readParagraph.textContent = `¿Ya leído? ${book.read ? 'Sí' : 'No'}`;

    bookDiv.appendChild(titleHeading);
    bookDiv.appendChild(authorHeading);
    bookDiv.appendChild(pagesParagraph);
    bookDiv.appendChild(readParagraph);

    booksContainer.appendChild(bookDiv);
  });
}

const booksContainer = document.getElementById('books-container');

const book1 = new Book('el senior de los anillos', 'carlos', 123, true);
const book2 = new Book('el seniors', 'roberto', 215, true);
const book3 = new Book('el seniors', 'roberto', 215, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayLibrary();

console.log(myLibrary);
