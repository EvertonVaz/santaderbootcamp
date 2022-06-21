console.log('\n')
console.log('Atividade 2'+'\n')

function trocarElementosPares(listaNumeros){    
    if (typeof listaNumeros == 'undefined'){
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

console.log(trocarElementosPares())