const BASE_URL = 'https://books-backend.p.goit.global/';
fetch(`${BASE_URL}books/top-books`)
  .then(res => res.json())
  .then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');
console.log(data)
    data.forEach(category => {
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');
      booksList.className = 'bs-book-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.className = 'bs-book-item';

        const bookInfo = {
          title: book.title,
          author: book.author,
          image: book.book_image,
          description: book.description,
          // Add other data you need
        };

        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" />
          <p class="title-book">${book.title}</p>
          <p class="author-book">${book.author}</p>
        `;

        booksList.appendChild(bookItem);

        bookItem.addEventListener('click', () => {
          openModal(bookInfo);
        });
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

function openModal(bookInfo) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalDes = document.getElementById('modalDescription')

  modal.style.display = 'block';
  modalImage.src = bookInfo.image;
  modalTitle.textContent = `Title: ${bookInfo.title}`;
  modalAuthor.textContent = `Author: ${bookInfo.author}`;
  modalDes.textContent = `${bookInfo.description}`;

  const closeBtn = document.getElementsByClassName('close')[0];

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
