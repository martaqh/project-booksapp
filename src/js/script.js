{
  'use strict';

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML),
  };
  class BooksList {
    constructor() {
      const thisBooksList = this;

      thisBooksList.initData();
      thisBooksList.getElements();
      thisBooksList.render();
      thisBooksList.initActions();
    }

    initData(){
      this.data = dataSource.books;
    }

    render(){
      const thisBooksList = this;

      for (let book of thisBooksList.data) {

        console.log(book);
        console.log(thisBooksList.data);
      
        book.ratingBgc = thisBooksList.determineRatingBgc(book.rating);
        console.log(book.ratingBgc);
        book.ratingWidth = book.rating*10;
    
        const generatedHTML = templates.bookTemplate(book);
        console.log(generatedHTML);
      
        thisBooksList.domElement = utils.createDOMFromHTML(generatedHTML);
        thisBooksList.listWrapper.appendChild(thisBooksList.domElement);
      }
    }

    getElements(){
      const thisBooksList = this;

      thisBooksList.listWrapper = document.querySelector('.books-list');
      thisBooksList.filtersForm = document.querySelector('.filters');

    }

    initActions(){
      const thisBooksList = this;
    
      let favoriteBooks = [];

      thisBooksList.listWrapper.addEventListener('dblclick', function(event) {

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

      thisBooksList.filters = [];

      thisBooksList.filtersForm.addEventListener('click', function(event) {

        if (event.target.tagName == 'INPUT' && event.target.type == 'checkbox' && event.target.name == 'filter') {
          
          if (event.target.checked == true) {
            thisBooksList.filters.push(event.target.value);
          } else {

            for(let i = 0; i < thisBooksList.filters.length; i++) {                        
              if (thisBooksList.filters[i] == event.target.value) { 
                thisBooksList.filters.splice(i, 1);      
              }
            }
          }
        }

        console.log(thisBooksList.filters);
        thisBooksList.showFilteredBooks();
      });

    }


    showFilteredBooks(){
      const thisBooksList = this;

      for (let book of thisBooksList.data) {
        let shouldBeHidden = false;
        for (let filter of thisBooksList.filters) {
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

    determineRatingBgc(rating){
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
  }
  
  const app = new BooksList(); // eslint-disable-line no-unused-vars

}