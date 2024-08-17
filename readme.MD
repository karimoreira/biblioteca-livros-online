# Biblioteca de Programação Online

Este projeto é uma plataforma para acessar e explorar uma coleção de livros de programação. O site foi criado por mim para fornecer de forma forma acessível o aprendizado.

## Visão Geral

O projeto consiste em um site que permite aos usuários buscar e navegar por uma lista de livros de programação. Os livros são exibidos em uma lista paginada e a busca é suportada para facilitar a localização de títulos específicos conforme o nome deles na biblioteca.

## Estrutura do Projeto

O projeto contém os seguintes arquivos e diretórios:

- `index.html`: O arquivo HTML principal que define a estrutura da página.
- `style.css`: O arquivo de estilo CSS que adiciona o design e a formatação ao site.
- `scripts.js`: O arquivo JavaScript que gerencia a lógica de paginação, busca e carregamento dos livros.
- `livros.json`: O arquivo JSON que contém os dados dos livros disponíveis.
- `livros/`: Diretório contendo os arquivos PDF dos livros.
- `generate_books_list.py`: script python utilizado para gerar e atualizar os livros. Ele lê os arquivos PDF no diretório livros/, extrai informações relevantes e salva essas informações em livros.json usando o comando: `python3 generate_books_list.py`

## Funcionalidades

1. **Exibição de Livros**
   - Os livros são carregados a partir do arquivo `livros.json`.
   - Os livros são listados em uma lista com links para download.

2. **Busca de Livros**
   - Um campo de busca permite filtrar livros por título.
   - A busca é dinâmica e atualiza a lista de livros em tempo real.

3. **Paginação**
   - Livros são exibidos em páginas com 60 livros por página.
   - A navegação entre páginas é possível usando os botões "Anterior" e "Próximo".

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.


