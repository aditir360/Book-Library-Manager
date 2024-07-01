const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const bookList = document.getElementById('bookList');


bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    bookForm.reset();
});


function addBookToLibrary(title, author, pages) {
    const book = { title, author, pages };
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td><button onclick="deleteBook(this)">Delete</button></td>
    `;
    bookList.appendChild(row);
}

function deleteBook(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
