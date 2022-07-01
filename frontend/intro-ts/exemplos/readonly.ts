// Criando variáveis com propriedade readonly e private

interface Cachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string
}

//const meuCachorro: Cachorro = {
//    nome: 'Sid',
//    idade: 4
//}

class MeuCachorro implements Cachorro {
    readonly nome;
    readonly idade;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade
    }
}

const cao = new MeuCachorro('Sid', 4);

// cao.idade = 10

console.log(cao)


