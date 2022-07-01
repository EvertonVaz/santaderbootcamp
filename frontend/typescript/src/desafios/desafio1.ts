// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// resposta1
let funcionario1 = {
    code: 10,
    nome: "John"
};

// resposta2
let funcionario2: {code: number, nome: string} = {
    code: 10, 
    nome: 'string'
};

// resposta3
interface Funcionario {
    code: number,
    nome: string
}

let funcionario3: Funcionario = {
    code: 10,
    nome: 'teste'
}

let funcionario4: Funcionario = {
    code: 10,
    nome: 'teste'
}

