
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
    this.read = read;
    
}

const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    //let read = need get checked box value
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const addButton = document.getElementById("addBookButton");
const formContainer = document.getElementById('form-container');

addButton.addEventListener('click', e=>{
    openForm();
});
formContainer.addEventListener('click', e => {
    if (e.target === formContainer) {
        closeForm();
    }
});

function openForm(){

    const form = document.createElement('form');
    form.classList.add('form-popup');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Book Title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleLabel.appendChild(titleInput);
    const authorLabel = document.createElement('label');
    authorLabel.textContent = "Author:";
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'title';
    authorLabel.appendChild(authorInput);
    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Pages';
    const pagesInput = document.createElement('input');
    pagesInput.type = 'text';
    pagesInput.name = 'pages';
    pagesLabel.appendChild(pagesInput);
    



    const submitButton = document.createElement('button')
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Book';

    form.appendChild(titleLabel);
    form.appendChild(authorLabel);
    form.appendChild(pagesLabel);
    form.append(document.createElement('br'));
    form.appendChild(submitButton);


    formContainer.appendChild(form);
    formContainer.style.display = "flex"
}

function closeForm(){
    //add close button inside of formContainer, display set to none, add to flex on click for openForm --> this needs to be within Clsoe form function
    formContainer.innerHTML = "";
    formContainer.style.display = "none";
}
