
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

    const bookId = bookDOM.getAttribute('data-id');

    bookDOM.addEventListener('dblclick', function() {

      if (!bookDOM.classList.contains('favorite')) {
        bookDOM.classList.add('favorite');
        favoriteBooks.push(bookId);
      } else {
        bookDOM.classList.remove('favorite');

        for(let i = 0; i < favoriteBooks.length; i++) {                        
          if (favoriteBooks[i] == bookId) { 
            favoriteBooks.splice(i, 1);      
          }
        }
      }
    });

  }
}

initActions();

