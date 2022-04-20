
const bookTemaplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const booksList = document.querySelector('.books-list');

function render(){
  for (let book of dataSource.books) {
    console.log(book);
    const generatedHTML = bookTemaplate(book);
   
    const domElement = utils.createDOMFromHTML(generatedHTML);
    booksList.appendChild(domElement);
  }
      
}
render();

function initActions() {
  let favoriteBooks = [];

  const booksDOM = document.querySelectorAll('a.book__image');
  
  for (let bookDOM of booksDOM) {
    bookDOM.addEventListener('dblclick', function() {
      bookDOM.classList.add('favorite');
      const bookId = bookDOM.getAttribute('data-id');
      console.log(bookId);
      favoriteBooks.push(bookId);
      console.log(favoriteBooks);
    });

  }
}

initActions();

