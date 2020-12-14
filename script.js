document.getElementById("addBookBtn").addEventListener("click", formSubmit); 


let myLibrary = [];

function Book(title, author, pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


Book.prototype.saytitle = function() {
  console.log(this.title)
}

function addBookToLibrary(title, author, pages,read) {
  myLibrary.push(new Book(title, author, pages,read))
}

addBookToLibrary("test","x",12,false)
addBookToLibrary("test2","y",1231,false)
addBookToLibrary("test3","z",2313,false)

function displayBooks() {
  let target = document.getElementById("displayArea");
  target.innerHTML = "" // clear on reclick
  myLibrary.forEach((item) => {
    let subPara = document.createElement("div");
    subPara.setAttribute("id", "testid")
    let title = `<h2>Title: ${item.title}</h1>`
    let author = `<h3>Author: ${item.author}</h2>`
    let pages = `<h5>Pages: ${item.pages}</h4>`
    let read = `<h5>read: ${item.read}</h>`
    // use indexOf to access index
    let bookId = `<h5>index: ${myLibrary.indexOf(item)}</h5><button onclick="deleteBook(this)"></button>`
    // get value of the element triggering the button
    subPara.innerHTML = `${title}${author}${pages}${read}${bookId}`;
    target.append(subPara)
  })
  
}


function deleteBook(element) {
  console.log(element)
}

function displayForm() {
  var node = document.getElementById('bookForm');
  var visibility = node.style.visibility;
  node.style.visibility = visibility == "visible" ? 'hidden' : "visible"
}

function formSubmit() {
  // this will be able to reference the formID 
  title = bookForm.title.value; 
  author = bookForm.author.value; 
  pages = bookForm.pages.value; 
  read = bookForm.read.checked; 

  addBookToLibrary(title, author, pages,read)
  displayBooks()
}


console.log(myLibrary)