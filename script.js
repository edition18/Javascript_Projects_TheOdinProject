document.getElementById("addBookBtn").addEventListener("click", formSubmit);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.saytitle = function () {
  console.log(this.title);
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("test", "x", 12, false);
addBookToLibrary("test2", "y", 1231, false);
addBookToLibrary("test3", "z", 2313, false);

function displayBooks() {
  let target = document.getElementById("displayArea");
  target.innerHTML = ""; // clear on reclick
  myLibrary.forEach((item) => {
    let subPara = document.createElement("div");
    subPara.setAttribute("id", "testid");
    let title = `<h2>Title: ${item.title}</h1>`;
    let author = `<h3>Author: ${item.author}</h2>`;
    let pages = `<h5>Pages: ${item.pages}</h4>`;
    let read = `<h5>read: ${item.read}</h>`;
    // use indexOf to access index
    let bookId = `<h5>index: ${myLibrary.indexOf(item)}`;

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete Book";

    removeBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(item), 1);
      displayBooks();
    });

    let markReadBtn = document.createElement("button");
    markReadBtn.innerHTML = "Mark Read";

    markReadBtn.addEventListener("click", () => {
      item.toggleRead();
      displayBooks();
    });

    // get value of the element triggering the button
    subPara.innerHTML = `${title}${author}${pages}${read}${bookId}`;
    target.append(subPara);
    target.append(markReadBtn);
    target.append(removeBtn);
  });
}

function deleteBook(element) {
  console.log(element.value);
}

function displayForm() {
  var node = document.getElementById("bookForm");
  var visibility = node.style.visibility;
  node.style.visibility = visibility == "visible" ? "hidden" : "visible";
}

function formSubmit() {
  // this will be able to reference the formID
  title = bookForm.title.value;
  author = bookForm.author.value;
  pages = bookForm.pages.value;
  read = bookForm.read.checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
}

console.log(myLibrary);

Book.prototype.toggleRead = function () {
  this.read == true ? (this.read = false) : (this.read = true);
};

Book.prototype.toggleRead = function () {
  this.read == true ? (this.read = false) : (this.read = true);
};
