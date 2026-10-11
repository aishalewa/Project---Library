let container = document.querySelector(".container");

const myLibrary = [];


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
    myLibrary.push(book.info());
  // take params, create a book then store it in the array
}


addBookToLibrary("The ", "Aisha Mustaa", 50, "read ");
addBookToLibrary(" village ", "Aisha Muha", 50, " read yet");
addBookToLibrary(" girl", "Aisha Mua", 50, "not read yet");
addBookToLibrary("The vill girl", "Aisha Mua", 50, "not read");
addBookToLibrary("The girl", "Aisha Must", 50, "not rea");



for (let book of myLibrary){
    console.log(book);
    createCard(book)
}
function createCard(newbook){
    let newContainer = document.createElement("div");
    newContainer.id = crypto.randomUUID();
    newContainer.classList.add('card');
    newContainer.textContent=(newbook);
    container.append(newContainer);
}


