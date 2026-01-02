const fs = require('fs')
const path = require('path')

const scriptDir = __dirname

const projectRoot = path.dirname(scriptDir)

const livrosDir = path.join(projectRoot, 'livros')
const outputFile = path.join(projectRoot, 'data', 'livros.json')

function formatBookName(filename) {
    let name = path.parse(filename).name
    
    name = name.replace(/_/g, ' ').replace(/-/g, ' ')
    
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2')
    
    name = name.replace(/\s+/g, ' ').trim()
    
    if (name && name.length > 0) {
        name = name.charAt(0).toUpperCase() + name.slice(1)
    }
        
    return name
}

const dataDir = path.join(projectRoot, 'data')
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
}

const livros = []

if (!fs.existsSync(livrosDir)) {
    console.log(`Directory '${livrosDir}' not found. Creating empty list.`)
} else {
    const files = fs.readdirSync(livrosDir)
    
    files.forEach(filename => {
        if (filename.toLowerCase().endsWith('.pdf')) {
            const livroNome = formatBookName(filename)

            const livroCaminho = `livros/${filename}`
            
            livros.push({
                'nome': livroNome,
                'arquivo': livroCaminho
            })
        }
    })
}

fs.writeFileSync(outputFile, JSON.stringify(livros, null, 2), 'utf-8')

console.log(`gerado com sucesso em ${outputFile}. total de livros: ${livros.length}`)
