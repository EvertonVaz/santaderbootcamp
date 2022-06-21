function comparaNumeros(num1, num2){
    let simNao = num1 === num2 ? 'são iguais': 'não são iguais';
    const SOMA = num1 + num2;
    let comparaDez = SOMA > 10 ? 'maior': 'menor';
    let comparaVinte = SOMA > 20 ? 'maior': 'menor';

    return `Os numeros ${num1} e ${num2} ${simNao}. Sua SOMA é ${SOMA}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`
}

console.log(comparaNumeros(10, 11))