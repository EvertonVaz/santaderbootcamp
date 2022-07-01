const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {    
    Atriz,
    Desenvolvedora,
    Professora,
    Jogadora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa{
    materias: string[]
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 30,
    profissao: Profissao.Atriz,
    materias: ['Portugues', 'Ingles']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 30,
    materias: ['Portugues', 'Ingles']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(monica.materias)