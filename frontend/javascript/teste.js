

let line = ['6','6','6','6']// lines.shift().split(' ');
let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(i=0;i<  line.length   ;i++){
  let transfor = parseInt(line[ i  ])
  soma = soma + transfor
}
console.log(soma-3)