// Library array
const myLibrary = [];

// Books container DOM
const booksContainer = document.getElementById('books-container');

// Book class
class Book {
  constructor(title, author, pagesNumber, read) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.read = read;
  }

  //Using getter
  get info() {
    return `${this.title} by ${this.author}, ${this.pagesNumber} pages, ${this.read} HOLAAAAAA`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  booksContainer.innerHTML = '';

  myLibrary.forEach(function (book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleHeading = document.createElement('p');
    titleHeading.classList.add('book-title');
    titleHeading.textContent = book.title;

    const authorHeading = document.createElement('p');
    authorHeading.classList.add('book-author');
    authorHeading.textContent = `Author: ${book.author}`;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.classList.add('book-pages-number');
    pagesParagraph.textContent = `Pages number: ${book.pagesNumber}`;

    const readDiv = document.createElement('div');
    readDiv.classList.add('read-check');
    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = book.read;

    const readLabel = document.createElement('label');
    readLabel.textContent = 'Read';

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    bookDiv.appendChild(titleHeading);
    bookDiv.appendChild(authorHeading);
    bookDiv.appendChild(pagesParagraph);

    readDiv.appendChild(readCheckbox);
    readDiv.appendChild(readLabel);

    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(removeBtn);

    booksContainer.appendChild(bookDiv);

    //Read checkbox functionality
    readCheckbox.addEventListener('change', function () {
      book.read = readCheckbox.checked;
    });

    //Adding 'remove' button functionality
    removeBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayLibrary();
    });
  });
}

// Book examples
const book1 = new Book('The Analyst: A Novel', 'John Katzenbach', 512, true);
const book2 = new Book('Holding Up the Universe', 'Jennifer Niven', 400, false);
addBookToLibrary(book1);
addBookToLibrary(book2);

//Adding 'new book' button functionality
const showButton = document.getElementById('new-book');
const showDialog = document.getElementById('new-book-dialog');

const bookForm = document.getElementById('book-form');
const bookNameInput = document.getElementById('book-name');
const authorNameInput = document.getElementById('author-name');
const pagesNumberInput = document.getElementById('pages-number');
const readCheckbox = document.querySelector('input[type="checkbox"]');

showButton.addEventListener('click', () => {
  showDialog.showModal();
});

bookForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = bookNameInput.value;
  const author = authorNameInput.value;
  const pagesNumber = parseInt(pagesNumberInput.value);
  const read = readCheckbox.checked;

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
cancelBtn.addEventListener('click', function (event) {
  event.preventDefault();
  showDialog.close();

  // Reset the form
  bookForm.reset();
});

displayLibrary();
