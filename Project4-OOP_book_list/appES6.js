class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addbooktolist(book) {
    const list = document.getElementById("book-list");

    // create tr element
    const row = document.createElement("tr");

    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
  }

  showAlert(msg, className) {
    // Create div
    const div = document.createElement("div");

    // Add classname
    div.className = `alert ${className} `;

    // Add text
    div.appendChild(document.createTextNode(msg));

    // Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    //Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local Storage Class
class store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBook() {
    const books = store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();

      // Add book to ui
      ui.addbooktolist(book);
    });
  }

  static addBook(book) {
    const books = store.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM load event
document.addEventListener("DOMContentLoaded", store.displayBook());

// event listeners for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values

  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error
    ui.showAlert("Please fill in all fields!!", "error");
  } else {
    // add book to list
    ui.addbooktolist(book);

    // Add to local storage
    store.addBook(book);

    // Show success
    ui.showAlert("Book Added succesfully!!", "success");

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();
  if (confirm("Are you sure!!")) {
    // Delete book
    ui.deleteBook(e.target);

    // Remove from sotrage
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert
    ui.showAlert("Book removed succesfully!!", "success");
  }
  e.preventDefault();
});
