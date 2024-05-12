// Library array
const myLibrary = [];

// Books container DOM
const booksContainer = document.getElementById('books-container');

// Book constructor
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

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    bookDiv.appendChild(titleHeading);
    bookDiv.appendChild(authorHeading);
    bookDiv.appendChild(pagesParagraph);
    bookDiv.appendChild(readParagraph);
    bookDiv.appendChild(removeBtn);

    booksContainer.appendChild(bookDiv);

    //Adding 'remove' button functionality

    removeBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayLibrary();
    });
  });
}

// Book examples
const book1 = new Book('el senior de los anillos', 'carlos', 123, true);
const book2 = new Book('el seniors', 'roberto', 215, true);
addBookToLibrary(book1);
addBookToLibrary(book2);

//Adding 'new book' button functionality
const showButton = document.getElementById('new-book');
const showDialog = document.getElementById('new-book-dialog');

const bookForm = document.getElementById('book-form');
const bookNameInput = document.getElementById('book-name');
const authorNameInput = document.getElementById('author-name');
const pagesNumberInput = document.getElementById('pages-number');
const readYesInput = document.getElementById('read-yes');

showButton.addEventListener('click', () => {
  showDialog.showModal();
});

bookForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = bookNameInput.value;
  const author = authorNameInput.value;
  const pagesNumber = parseInt(pagesNumberInput.value);
  const read = readYesInput.checked;

  // Create a new book instance
  const newBook = new Book(title, author, pagesNumber, read);

  // Add book to the library
  addBookToLibrary(newBook);

  // Show the library updated
  displayLibrary();

  // Reset the form
  bookForm.reset();

  // Close the dialog
  showDialog.close();
});

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function () {
  showDialog.close();

  // Reset the form
  bookForm.reset();
});

displayLibrary();
