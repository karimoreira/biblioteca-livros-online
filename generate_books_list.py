import os
import json

livros_dir = 'livros'
output_file = 'livros.json'

livros = []
for filename in os.listdir(livros_dir):
    if filename.endswith('.pdf'): 
        livro_nome = os.path.splitext(filename)[0]
        livro_caminho = os.path.join(livros_dir, filename)
        livros.append({
            'nome': livro_nome,
            'arquivo': livro_caminho
        })

with open(output_file, 'w') as f:
    json.dump(livros, f, indent=2)

print('Arquivo JSON gerado com sucesso.')
