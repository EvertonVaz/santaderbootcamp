//Atividade 1: Alunos Aprovados
//
//    Crie uma função que recebe o array alunos e um número que irá representar a média final;
//    Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
//    Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function verificaMedia(alunos, mediaFinal = 6){
    aprovados = []
    var nome = ({nome}) => nome
    var nota = ({nota}) => nota
	
    for(i in alunos){
        if(nota(alunos[i]) >= mediaFinal){
            aprovados.push(nome(alunos[i]))
        }
    }
    return aprovados
}

console.log(verificaMedia(alunos))


//Atividade 2: This
//
//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

pessoa1 = {nome: 'Everton', idade: 33}
pessoa2 = {nome: 'Angela', idade: 52}
pessoa3 = {nome: 'Isabela', idade: 3}

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2, [24]));