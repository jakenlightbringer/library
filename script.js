
const myLibrary = [
    {
    title: "A Game of Thrones",
    author: "George R. R. martin",
    pages: 694,
    read: false
    }
];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
    
}

const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let read = $readInput.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const addButton = document.getElementById("addBookButton");
const formContainer = document.getElementById('form-container');
const bookContainer = document.getElementById('book-container');

myLibrary.forEach(book =>{
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
    if (book.read) {
        bookDiv.textContent += " (Read)";
    } else {
        bookDiv.textContent += " (Not Read)";
    }
    libraryContainer.appendChild(bookDiv);

    
});



