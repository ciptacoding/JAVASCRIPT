const UNREAD_BOOK_LIST_ID = "unread";
const READ_BOOK_LIST_ID = "read";
const BOOK_ITEMID = "itemId";

function makeBook(title, author, year, isCompleted) {
  const textTitle = document.createElement("p");
  textTitle.classList.add("title");
  textTitle.innerText = title;

  const textAuthor = document.createElement("span");
  textAuthor.classList.add("author");
  textAuthor.innerText = author;

  const textYear = document.createElement("span");
  textYear.classList.add("year");
  textYear.innerText = year;

  const textContainer = document.createElement("div");
  textContainer.classList.add("book-details");
  textContainer.append(textTitle, textAuthor, textYear);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("book-actions");

  const listItem = document.createElement("li");
  listItem.classList.add("book-item");
  listItem.append(textContainer, buttonContainer);

  if (isCompleted) {
    buttonContainer.append(createRedoButton(), createTrashButton());
  } else {
    buttonContainer.append(createCheckButton(), createTrashButton());
  }

  return listItem;
}

function addBook() {
  const unReadBookList = document.getElementById(UNREAD_BOOK_LIST_ID);
  const readBookList = document.getElementById(READ_BOOK_LIST_ID);

  const textTitle = document.querySelector("#title").value;
  const textAuthor = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  const isCompleted = document.querySelector("#isCompleted").checked;

  const book = makeBook(textTitle, textAuthor, year, isCompleted);
  const bookObject = composeBookObject(textTitle, textAuthor, year, isCompleted);

  book[BOOK_ITEMID] = bookObject.id;
  books.push(bookObject);

  if (isCompleted) {
    readBookList.append(book);
  } else {
    unReadBookList.append(book);
  }

  updateDataToStorage();
}

function addBookToReadComplete(el) {
  const readBookList = document.getElementById(READ_BOOK_LIST_ID);

  const textTitle = el.querySelector(".book-details .title").innerText;
  const textAuthor = el.querySelector(".book-details .author").innerText;
  const year = el.querySelector(".book-details .year").innerText;

  const newBook = makeBook(textTitle, textAuthor, year, true);

  const book = findBook(el[BOOK_ITEMID]);
  book.isCompleted = true;
  newBook[BOOK_ITEMID] = book.id;

  readBookList.append(newBook);
  el.remove();

  updateDataToStorage();
}

function createButton(buttonType, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonType);
  button.innerHTML = '<i class="fas fa-' + buttonType + '"></i>';
  button.addEventListener("click", function (event) {
    eventListener(event);
    event.stopPropagation();
  });
  return button;
}

function createCheckButton() {
  return createButton("check-square", function (event) {
    addBookToReadComplete(event.target.parentElement.parentElement.parentElement);
  });
}

function removeBook(el) {
  if (confirm("Apakah anda yakin ingin menghapus buku?")) {
    const bookPos = findBookIndex(el[BOOK_ITEMID]);
    books.splice(bookPos, 1);

    el.remove();
    updateDataToStorage();
  }
}

function createTrashButton() {
  return createButton("trash", function (event) {
    removeBook(event.target.parentElement.parentElement.parentElement);
  });
}

function redoBookFromReadComplete(el) {
  const unReadBookList = document.getElementById(UNREAD_BOOK_LIST_ID);

  const textTitle = el.querySelector(".book-details .title").innerText;
  const textAuthor = el.querySelector(".book-details .author").innerText;
  const year = el.querySelector(".book-details .year").innerText;

  const newBook = makeBook(textTitle, textAuthor, year, false);

  const book = findBook(el[BOOK_ITEMID]);
  book.isCompleted = false;
  newBook[BOOK_ITEMID] = book.id;

  unReadBookList.append(newBook);
  el.remove();

  updateDataToStorage();
}

function createRedoButton() {
  return createButton("redo", function (event) {
    redoBookFromReadComplete(event.target.parentElement.parentElement.parentElement);
  });
}

function refreshDataFromBook() {
  const unReadBookList = document.getElementById(UNREAD_BOOK_LIST_ID);
  let readBookList = document.getElementById(READ_BOOK_LIST_ID);

  for (const book of books) {
    const newBook = makeBook(book.title, book.author, book.year, book.isCompleted);
    newBook[BOOK_ITEMID] = book.id;

    if (book.isCompleted) {
      readBookList.append(newBook);
    } else {
      unReadBookList.append(newBook);
    }
  }
}

function searchBook(input) {
  const unReadBookList = document.getElementById(UNREAD_BOOK_LIST_ID);
  let readBookList = document.getElementById(READ_BOOK_LIST_ID);

  unReadBookList.innerHTML = "";
  readBookList.innerHTML = "";

  let bookData = filterBook(input.trim());

  for (const book of bookData) {
    const newBook = makeBook(book.title, book.author, book.year, book.isCompleted);
    newBook[BOOK_ITEMID] = book.id;

    if (book.isCompleted) {
      readBookList.append(newBook);
    } else {
      unReadBookList.append(newBook);
    }
  }
}
