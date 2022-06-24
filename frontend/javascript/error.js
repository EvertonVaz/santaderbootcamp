//Atividade: validação de erros por tipo
//
//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
//
//    Crie uma função que recebe um array e um número
//    Realize as seguintes validações
//        Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
//        Se o array não for do tipo 'object', lance um erro do tipo TypeError
//        Se o número não for do tipo 'number', lance um erro do tipo TypeError
//        Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
//    Utilize a declaração try...catch
//    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(arr, n){
    try{
        if (!arr && !n) {
            throw new ReferenceError("Argumentos invalidos, envie um array e um numero")
        } else if (typeof arr != 'object') {
         throw new TypeError('Array não é do tipo "object"');
        } else if (typeof n != 'number') {
         throw new TypeError('Numero não é do tipo "number"');
        } else if (arr.length != n) {
             throw new RangeError('Tamanho do array é diferente do numero');        
        } else {
            return arr
        }              
    }
    catch(e){
        switch(e.name){
            case 'ReferenceError':
                return `${e.name}: ${e.message}`;
            case 'TypeError':
                return `${e.name}: ${e.message}`;     
            case 'RangeError':
                return `${e.name}: ${e.message}`; 
        }        
    }
}

console.log(validaArray(), '\n')
console.log(validaArray(1, 1), '\n')
console.log(validaArray([], '1'), '\n')
console.log(validaArray([], 1), '\n')
console.log(validaArray([1,2,3], 3), '\n')