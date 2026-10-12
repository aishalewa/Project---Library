let container = document.querySelector(".container");
let btn = document.querySelector("#submit-btn");

let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputPages = document.querySelector("#pages");
let inputIsRead = document.querySelector("#is_read");


const myLibrary = [];

let buttonArray = [
    

]

function Book(title, author, pages, isread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
     this.info = function info(){
        return (`${title} by ${author}, ${pages} pages, ${isread}`)
    };
}


function addBookToLibrary(title, author, pages, isread) {
    let book = new Book(title, author, pages, isread);
    myLibrary.push(book);
    return book;
  // take params, create a book then store it in the array
}


addBookToLibrary("The ", "Aisha Mustaa", 50, "read ");
addBookToLibrary(" village ", "Aisha Muha", 50, " read yet");
addBookToLibrary(" girl", "Aisha Mua", 50, "not read yet");
addBookToLibrary("The vill girl", "Aisha Mua", 50, "not read");
addBookToLibrary("The girl", "Aisha Must", 50, "not rea");

btn.addEventListener("click", function(e){
    e.preventDefault();
    let details = getBookFromUser();

    let title = details[0];
    let author = details[1];
    let pages = details[2];
    let isread = details[3];
    // let buttonBook = addBookToLibrary("title", "author", 50, "isread");
    let buttonBook = addBookToLibrary(title, author, pages, isread);
    createCard(buttonBook.info());
    reset();
})

function createCard(newbook){
    let newContainer = document.createElement("div");
    newContainer.id = crypto.randomUUID();
    newContainer.classList.add('card');
    newContainer.textContent=(newbook);
    container.append(newContainer);
}

for (let book of myLibrary){
    createCard(book.info())
}

function getBookFromUser(){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let isRead = inputIsRead.value;

    return([title, author, pages, isRead])
}

function reset(){
    inputTitle.value ="";
    inputAuthor.value="";
    inputPages.value="";
    inputIsRead.value="";
};



