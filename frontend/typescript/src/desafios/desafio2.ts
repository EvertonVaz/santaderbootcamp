// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    atriz,
    pedreiro,
    padeiro
}

interface Pessoa {
    nome: string,
    idade: number
    profissao?: Profissao
}

let pessoa1: Pessoa = {
    nome: 'maria', 
    idade: 29,
    profissao: Profissao.atriz
}

let pessoa2: Pessoa = {nome: '', idade: 0, profissao: Profissao.pedreiro}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.padeiro

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 31,
    profissao: Profissao.atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.pedreiro
}