document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 60; 
  let currentPage = 1;
  let livros = [];


  function fetchLivros() {
      fetch('livros.json')
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
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = livro.arquivo;
          a.textContent = livro.nome;
          a.target = '_blank';
          li.appendChild(a);
          listaLivros.appendChild(li);
      });

      updatePagination(filteredLivros.length);
  }


  function updatePagination(totalItems) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      document.getElementById('prev').disabled = currentPage === 1;
      document.getElementById('next').disabled = currentPage === totalPages;
      document.getElementById('page-info').textContent = `Página ${currentPage} de ${totalPages}`;
  }


  document.getElementById('search').addEventListener('input', updateList);


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
