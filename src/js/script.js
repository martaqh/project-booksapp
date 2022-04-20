
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
