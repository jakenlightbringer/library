
const myLibrary = [
    {
    title: "A Game of Thrones",
    author: "George R. R. martin",
    pages: 694,
    read: "Yes"
    }
];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    
}
const titleInput = document.getElementById("title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.getElementsByName('read');

const addBookToLibrary = () => {
    let title = titleInput.value;
    console.log(title);
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = document.querySelector('input[name="read"]:checked').value;
    console.log(read)
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    if (title === "" || author === "" || pages === "" || read === null) {
        alert('Must Fill out All Fields');
        return false;
    }


    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput[0].checked = true;
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.textContent = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages`;

    if (newBook.read === "Yes") {
        bookDiv.textContent += " (Read)";
    } else {
        bookDiv.textContent += " (Not Read)";
    }
    
    bookContainer.appendChild(bookDiv);
    console.log(myLibrary);
}
//may need to add on submit in HTML
function validateForm() {
    const check = document.forms["bookForm"]["title"].value;
    
}


const addButton = document.getElementById("addBookButton");
const formContainer = document.getElementById('form-container');
const bookContainer = document.getElementById('book-container');
const submitButton = document.getElementById("submit");

addButton.addEventListener('click', (e) =>{
    formContainer.style.display = "flex";
    
});
submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    
});

myLibrary.forEach(book =>{
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
    if (book.read) {
        bookDiv.textContent += " (Read)";
    } else {
        bookDiv.textContent += " (Not Read)";
    }
    bookContainer.appendChild(bookDiv);

    
});



