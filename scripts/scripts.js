document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 12; 
  let currentPage = 1;
  let livros = [];


  function fetchLivros() {
      fetch('/data/livros.json')
          .then(response => response.json())
          .then(data => {
              livros = data;
              updateList();
          })
          .catch(error => console.error('Erro ao carregar livros:', error));
  }


  function updateList() {
      const listaLivros = document.getElementById('lista-livros');
      const search = document.getElementById('search').value.toLowerCase();
      const filteredLivros = livros.filter(livro =>
          livro.nome.toLowerCase().includes(search)
      );

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedLivros = filteredLivros.slice(start, end);

      listaLivros.innerHTML = '';

      paginatedLivros.forEach(livro => {
          const card = document.createElement('div');
          card.className = 'book-card';

          const cardContent = document.createElement('div');
          cardContent.className = 'card-content';

          const iconDiv = document.createElement('div');
          iconDiv.className = 'card-icon';
          iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
          
          const title = document.createElement('h3');
          title.textContent = livro.nome;
          title.className = 'book-title';

          cardContent.appendChild(iconDiv);
          cardContent.appendChild(title);

          const cardActions = document.createElement('div');
          cardActions.className = 'card-actions';

          const link = document.createElement('a');
          link.href = livro.arquivo;
          link.textContent = 'Ler Livro';
          link.className = 'btn-read';
          link.target = '_blank';

          cardActions.appendChild(link);

          card.appendChild(cardContent);
          card.appendChild(cardActions);
          
          listaLivros.appendChild(card);
      });

      updatePagination(filteredLivros.length);
  }


  function updatePagination(totalItems) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      document.getElementById('prev').disabled = currentPage === 1;
      document.getElementById('next').disabled = currentPage === totalPages;
      document.getElementById('page-info').textContent = `Pág. ${currentPage} de ${totalPages}`;
  }


  document.getElementById('search').addEventListener('input', () => {
    currentPage = 1;
    updateList();
  });


  document.getElementById('prev').addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          updateList();
      }
  });


  document.getElementById('next').addEventListener('click', () => {
      const totalPages = Math.ceil(livros.length / itemsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          updateList();
      }
  });

  fetchLivros();
});
