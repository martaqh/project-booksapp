
const bookTemplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);

const booksList = document.querySelector('.books-list');
const filtersForm = document.querySelector('.filters');
let filters = [];

function render(){
  for (let book of dataSource.books) {
    
    const ratingBgc = determineRatingBgc(book.rating);
    const ratingWidth = book.rating*10;

    book.ratingBgc = ratingBgc;
    book.ratingWidth = ratingWidth;

    console.log(book);

    const generatedHTML = bookTemplate(book);

    console.log(generatedHTML);
   
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

    function showFilteredBooks() {
      for (let book of dataSource.books) {
        let shouldBeHidden = false;
        for (let filter of filters) {
          console.log(book.details[filter]);
          if (filter && book.details[filter] == false) {
            shouldBeHidden = true;
            break;
          }
        }
        if (shouldBeHidden == true) {
          document.querySelector('.book__image[data-id="' + book.id + '"]').classList.add('hidden');
        } else {
          document.querySelector('.book__image[data-id="' + book.id + '"]').classList.remove('hidden');
        }
      } 
    }
    showFilteredBooks();
  });

  


}

initActions();

function determineRatingBgc(rating) {
  if (rating < 6) {
    return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%);';
  } else if (rating > 6 && rating <= 8) {
    return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%);';
  } else if (rating > 8 && rating <= 9) {
    return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%);';
  } else if (rating > 9) {
    return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%);';
  }

}
