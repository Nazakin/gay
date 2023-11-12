
// fetch(`https://books-backend.p.goit.global/books/top-books`)
//   .then(res => res.json())
//   .then(data => {
//     const categoryListContainer = document.querySelector('.book-category-list');

//     data.forEach(category => {
  
//       const categoryTitle = document.createElement('h3');
//       categoryTitle.textContent = `Category - ${category.list_name}`.toUpperCase();

//       const booksList = document.createElement('ul');

//       category.books.forEach(book => {
//         const bookItem = document.createElement('li');
//         //Якщо треба додати клас на лі, використовуй наступне
//         //bookItem.classList.add('your-class-name');  Замість 'your-class-name' 
//         //Якщо треба картку запхати в список - просто як звичайно огорни в список і буде норм
//         //Я чекнув, воно все працює, як треба
//         //Класи в шаблон картки додавай в розмітку знизу, воно теж працює
//         //Якщо якась шляпа з mobile first - я прогнав код через GPT, вже є інфа, як то зробити
//         // Напишеш в телеграмі і я скину скрін
  
//         bookItem.innerHTML = `
//           <img src="${book.book_image}" alt="${book.title} width="180px" height="256px"" />
//           <p>${book.title}</p>
//           <p>${book.author}</p>
//         `;
        
        
//         booksList.appendChild(bookItem);
//       });

//       categoryListContainer.appendChild(categoryTitle);
//       categoryListContainer.appendChild(booksList);

//       const seeMoreButton = document.createElement('button');
//       seeMoreButton.type = 'button';
//       seeMoreButton.textContent = 'See More';
//       categoryListContainer.appendChild(seeMoreButton);
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));



  я працював с твоїм старим кодом fetch(https://books-backend.p.goit.global/books/top-books)
  .then(res => res.json())
  .then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {

      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = Category - ${category.list_name}.toUpperCase();

      const booksList = document.createElement('ul');
// добавить строку с классом
        booksList.className = 'bs-book-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
          
// добавить строку с классом
        bookItem.className = 'bs-book-item';

        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" />
          <p class="title-book">${book.title}</p>
          <p class="author-book">${book.author}</p>
        `;

        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);

      const seeMoreButton = document.createElement('button');
      seeMoreButton.type = 'button';
// добавить строку с классом
      seeMoreButton.classList.add('bs-buttom'); 
    
// заменить строку строчками для присвоения класса надписи кнопки
        //   seeMoreButton.textContent = 'See More';
        const seeMoreText = document.createElement('span');
        seeMoreButton.appendChild(seeMoreText);
        seeMoreText.textContent = 'See More';
        seeMoreText.classList.add('bs-buttom-name');
        

      categoryListContainer.appendChild(seeMoreButton);
    });
  })
    .catch(error => console.error('Error fetching data:', error));
  console.log(fetch) // для вывода на экран