let container = document.querySelector(".container");
let btn = document.querySelector("#submit-btn");
// let deleteBtn = document.querySelector(".delete");

let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputPages = document.querySelector("#pages");
let inputIsRead = document.querySelector("#is_read");


const myLibrary = [
    new Book("Things Fall Apart", "Chinua Achebe", 209, true),
    new Book("Americanah", "Chimamanda Ngozi Adichie", 477, false),
    new Book("The River Between", "Ngũgĩ wa Thiong'o", 152, true)
];

let buttonArray = []

function Book(title, author, pages, isread){
    this.id=crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    //  this.info = function info(){
    //     return (`${title} by ${author}, ${pages} pages, ${isread}`)
    // };
}

Book.prototype.info = function(){
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isread}`)
    };

function addBookToLibrary(title, author, pages, isread) {
    let book = new Book(title, author, pages, isread);
    myLibrary.push(book);
    console.log("function called")
    return book;
  // take params, create a book then store it in the array
}



btn.addEventListener("click", function(e){
    e.preventDefault();

    let details = getBookFromUser();

    let title = details[0];
    let author = details[1];
    let pages = details[2];
    let isread = details[3];
    
    let buttonBook = addBookToLibrary(title, author, pages, isread);
    createCard(buttonBook);
    reset();
})

function createCard(newBook){
    let deleteBtn = document.createElement("button")
    let newContainer = document.createElement("div");

    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "X"
    

    newContainer.dataset.id = newBook.id;
    newContainer.classList.add('card');

    newContainer.textContent=(newBook.info());
    newContainer.append(deleteBtn);

    container.append(newContainer);


    

    deleteBtn.addEventListener("click", function(e){
       newContainer.remove();

       // Find the book's position in the array
        let bookIndex = myLibrary.findIndex(function (book) {
            return book.id === newContainer.dataset.id;
        });

        // Remove the book from the array
        if (bookIndex !== -1) {
            myLibrary.splice(bookIndex, 1);
        }

    //    alert(this.dataset.id)
    //    alert('hello')
    })

    
}


for (let book of myLibrary){
    createCard(book)
}

function getBookFromUser(){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let isRead = inputIsRead.checked;

    return([title, author, pages, isRead])
}

function reset(){
    inputTitle.value ="";
    inputAuthor.value="";
    inputPages.value="";
    inputIsRead.checked= false;
};





