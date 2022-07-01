function somarValoresNumericos(n1: number, n2: number): number{
    return n1 + n2;
}

console.log(somarValoresNumericos(1, 2))

function printaValoresNumericos(n1: number, n2: number): void{
    return console.log(n1 + n2)
}

console.log(printaValoresNumericos(1, 2))

function somarValoresETratar(n1: number, n2: number, callback: (n: number) => number): number{
    let resultado = n1 + n2;
    return callback(resultado)
}

function aoQuadrado(n: number): number{
    return n * n
}

function dividePorEleMesmo(n: number): number{
    return n / n
}

console.log(somarValoresETratar(1, 3, aoQuadrado))
console.log(somarValoresETratar(1, 3, dividePorEleMesmo))