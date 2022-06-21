function comparaNumeros(num1, num2){
    let simNao = num1 === num2 ? 'são iguais': 'não são iguais';
    const soma = num1 + num2;
    let comparaDez = soma > 10 ? 'maior': 'menor';
    let comparaVinte = soma > 20 ? 'maior': 'menor';

    return `Os numeros ${num1} e ${num2} ${simNao}. Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`
}

console.log(comparaNumeros(10, 11))