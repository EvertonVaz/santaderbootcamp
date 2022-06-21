// Atividade 1
//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
console.log('\n')
console.log('Atividade 1'+'\n')

function verificaPalindromo(frase){
    if(!frase) return 'texto inexistente'
    frase = frase.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, '');    
    let fraseParavra = frase.indexOf(' ') >= 1 ? 'frase': 'palavra'
    let fraseInvertida = frase.split('').reverse().join('')
    let palindromo = frase.replace(/\s/g, '') === fraseInvertida.replace(/\s/g, '') ? 'É UM PALÍNDROMO' : 'NÃO É UM PALÍNDROMO'

    return `A ${fraseParavra} '${frase}' ${palindromo}`
}

console.log(verificaPalindromo('subi no onibus'))
console.log(verificaPalindromo('raiar'))
console.log(verificaPalindromo('A frase teste'))
console.log(verificaPalindromo('Luza Rocelina, a namorada do Manuel, leu na moda da romana: anil é cor azul'))


//Atividade 2
//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
//Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
//Output -> [1, 3, 0, 0, 0, 33, 23, 0]
//Input -> []
//Output -> -1
console.log('\n')
console.log('Atividade 2'+'\n')

function trocarElementosPares(listaNumeros){
    if (!listaNumeros){
        return 'Insira uma lista de numeros'
    } else if(listaNumeros.length === 0){    
        return -1
    } else {
        for(let i=0; i < listaNumeros.length; i++){
            pares = listaNumeros[i] % 2 == 0 ? listaNumeros[i] = 0: false
        }
        return listaNumeros
    }    
}

console.log(trocarElementosPares([1, 3, 4, 6, 80, 33, 23, 90]))
console.log(trocarElementosPares([]))
console.log(trocarElementosPares())