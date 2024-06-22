document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('book-form');
  const bookName = document.getElementById('book-name');
  const authorName = document.getElementById('author-name');
  const pagesNumber = document.getElementById('pages-number');

  const nameError = document.querySelector('.name.error');
  const authorError = document.querySelector('.author.error');
  const numberError = document.querySelector('.number.error');
  const totalError = document.querySelector('.total.error');

  form.addEventListener('submit', (event) => {
    let valid = true;

    // Validar el nombre del libro
    if (!bookName.checkValidity()) {
      nameError.textContent = bookName.validationMessage;
      valid = false;
      bookName.classList.add('invalid');
    } else {
      nameError.textContent = '';
      bookName.classList.remove('invalid');
    }

    // Validar el nombre del autor
    if (!authorName.checkValidity()) {
      authorError.textContent = authorName.validationMessage;
      valid = false;
      authorName.classList.add('invalid');
    } else {
      authorError.textContent = '';
      authorName.classList.remove('invalid');
    }

    // Validar el número de páginas
    if (!pagesNumber.checkValidity()) {
      numberError.textContent = pagesNumber.validationMessage;
      pagesNumber.classList.add('invalid');
      valid = false;
    } else {
      numberError.textContent = '';
      pagesNumber.classList.remove('invalid');
    }

    if (!valid) {
      totalError.textContent = 'Please correct the errors in the form.';
      event.preventDefault();
    } else {
      totalError.textContent = '';
    }
  });

  // Añadir listeners para actualizar los mensajes de error en tiempo real
  bookName.addEventListener('input', () => {
    if (bookName.checkValidity()) {
      nameError.textContent = '';
      bookName.classList.remove('invalid');
    } else {
      nameError.textContent = bookName.validationMessage;
      bookName.classList.add('invalid');
    }
  });

  authorName.addEventListener('input', () => {
    if (authorName.checkValidity()) {
      authorError.textContent = '';
      authorName.classList.remove('invalid');
    } else {
      authorError.textContent = authorName.validationMessage;
      authorName.classList.add('invalid');
    }
  });

  pagesNumber.addEventListener('input', () => {
    if (pagesNumber.checkValidity()) {
      numberError.textContent = '';
      numberError.classList.remove('invalid');
    } else {
      numberError.textContent = pagesNumber.validationMessage;
      numberError.classList.add('invalid');
    }
  });
});
