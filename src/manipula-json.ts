import { existsSync, mkdirSync, writeFileSync, readFileSync, write} from 'fs';

// models:
type Livro = {
    titulo: string;
    autor: string;
    genero?: string;
    ano: number;
    lido: boolean;
};

type Hobby = string;

type FamosoFavorito = {
    nome: string;
    profissao: string;
    hobbies: Hobby[];
};

type Amigo = {
    nome: string;
    conheci: number;
    hobbies: Hobby[];
    famosoFavorito: FamosoFavorito;
};

// manipulação de arquivos JSON

// 1.função para adicionar um livro a um arquivo JSON
const livros: Livro[] = [];
livros.push ({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",                            
    genero: "Fantasia",
    ano: 1954,
    lido: true
});

livros.push ({
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção Científica",
    ano: 1948,
    lido: false
});

livros.push ({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    lido: true
});

// 2. percorrer o array de livros e imprimir os títulos
livros.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Ano: ${livro.ano}, Autor : ${livro.autor}, Lido: ${livro.lido ? "Sim" : "Não"}`);
});

// 3. filtrar apenas os livros que já foram lidos
const livrosLidos = livros.filter(livro => livro.lido === true);

// 4. encontrar um livro específico pelo título
const livroEncontrado = livros.find(livro => livro.titulo === "1984");

// 5. salvar no disco (em um arquivo JSON) 
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}

writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8');

// 6. ler no disco um arquivo JSON 
const livrosLidosDoArquivo: 
    Livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);