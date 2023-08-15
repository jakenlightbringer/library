
const myLibrary = ['Enders Game'];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.sayBook = function() {
        console.log(author, title, pages, read)
      }


}
const addButton = document.getElementById("addBookButton");
const formContainer = document.getElementById('form-container');

addButton.addEventListener('click', (e)=>{
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



    const submitButton = document.createElement('button')
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Book';

    form.appendChild(titleLabel);
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
