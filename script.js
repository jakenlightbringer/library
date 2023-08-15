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
addButton.addEventListener('click', e =>{
    addBook()
});

function addBook(){
    const form = document.createElement('form');
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


    const container = document.getElementById('form-container');
    container.appendChild(form);
}
