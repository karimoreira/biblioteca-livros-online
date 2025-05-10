# Biblioteca de Programação Online

Este projeto é uma aplicação web que permite acessar, pesquisar e navegar por uma coleção de livros de programação. A ideia é democratizar o acesso ao conhecimento técnico, disponibilizando materiais em PDF de forma simples e organizada.

# Visão Geral

A aplicação carrega automaticamente os livros disponíveis no diretório `livros/`, gera um arquivo `livros.json` com os metadados e exibe os livros em uma interface web paginada com busca em tempo real.

# Tecnologias Utilizadas

- **HTML5** – estrutura semântica da interface.
- **CSS3** – estilização visual.
- **JavaScript** – manipulação de DOM, paginação e busca dinâmica.
- **Python 3** – script para geração automática do arquivo `livros.json`.
- **JSON** – formato leve para armazenar os dados dos livros.

# Como funciona a geração?

Executando o script para gerar o `livros.json` com base nos PDFs presentes em `livros/`:
```bash
python3 scripts/generate_books_list.py
```

Esse script percorre todos os arquivos `.pdf` no diretório `livros/` e gera um JSON contendo o nome e o caminho de cada arquivo.

## Interface Web
- A página `index.html` exibe os livros em uma lista paginada.
- A busca filtra dinamicamente os títulos.
- Cada item da lista é um link direto para o PDF correspondente.

# Funcionalidades

- **Busca em tempo real** por título
- **Paginação automática** (60 livros por página)
- **Links diretos** para os arquivos em PDF
- **Organização modular** do código e dados

# Imagens

<p align="center">
  <img src="/assets/images/bibliotecadelivros.png" alt="Tela da biblioteca" width="500"/>
</p>

<p align="center">
  <img src="/assets/images/bibliotecadelivros2.png" alt="Tela da biblioteca" width="500"/>
</p>

<p align="center">
  <img src="/assets/images/bibliotecadelivrosmobile.png" alt="Tela da biblioteca" width="500"/>
</p>

<p align="center">
  <img src="/assets/images/bibliotecadelivrosmobile1.png" alt="Tela da biblioteca" width="500"/>
</p>


# Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE.md](LICENSE.md) para mais informações.


