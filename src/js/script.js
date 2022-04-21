
const bookTemaplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const booksList = document.querySelector('.books-list');
const filtersForm = document.querySelector('.filters');
let filters = [];

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

  const booksListDOM = document.querySelector('.books-list');

  booksListDOM.addEventListener('dblclick', function(event) {

    if (event.target.offsetParent.classList.contains('book__image')) {
        
      const bookId = event.target.offsetParent.getAttribute('data-id');
      console.log(bookId);

      if (!event.target.offsetParent.classList.contains('favorite')) {
        event.target.offsetParent.classList.add('favorite');
        favoriteBooks.push(bookId);
      } else {
        event.target.offsetParent.classList.remove('favorite');

        for(let i = 0; i < favoriteBooks.length; i++) {                        
          if (favoriteBooks[i] == bookId) { 
            favoriteBooks.splice(i, 1);      
          }
        }
      }
    }
  });

  filtersForm.addEventListener('click', function(event) {

    if (event.target.tagName == 'INPUT' && event.target.type == 'checkbox' && event.target.name == 'filter') {
      console.log(event.target.value);
      if (event.target.checked == true) {
        filters.push(event.target.value);
      } else {

        for(let i = 0; i < filters.length; i++) {                        
          if (filters[i] == event.target.value) { 
            filters.splice(i, 1);      
          }
        }
      }
    }

    console.log(filters);
  });
}

initActions();

