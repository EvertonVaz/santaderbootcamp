//Atividades
//Map
//    Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

array = [1, 2, 3, 4, 5]
obj = {value: 2}

function mapSemThis(arr){
    return arr.map((n) => n*2)
} 

function mapComThis(arr, thisArg){
    return arr.map(function(n){
        return n * this.value}, thisArg)
}

console.log('Map sem this', mapSemThis(array))
console.log('Map com this', mapComThis(array, obj))
console.log(array)

//Filter
//    Filtre e retorne todos os números pares de um array.

array = [1,2,3,4,5,6,7,8,9,10]

let filtro = array.filter((n) => n % 2 === 0)

console.log('Filter', filtro)
console.log(array)


//Reduce
//    Some todos os números de um array
//    Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

soma = array.reduce((prev, current) => prev+current)
console.log('Reduce')
console.log('Soma do array', soma)

const lista = [
    {
        nome: 'agua',
        valor: 2
    },
    {
        nome: 'salgado',
        valor: 6
    },
    {
        nome: 'cafe',
        valor: 4
    }
];

const saldoDisponivel = 20

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(
        function(prev, current, index){
            console.log(`index: ${index}, anterior: ${prev}, atual: ${current.valor}`)
            return prev - current.valor
        }, saldoDisponivel
    )
}

console.log(calculaSaldo(saldoDisponivel, lista))