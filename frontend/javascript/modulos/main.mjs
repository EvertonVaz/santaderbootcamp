//Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.
//
//    Instale a extensão "Live Server" no seu VSCode;
//    Crie um arquivo com uma estrutura HTML padrão;
//    Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
//    
//    No arquivo main:
//        Importe as funções do arquivo funcoes;
//        Faça a chamada de todas elas;
//    Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.

import {mostraIdade, mostraCidade, mostraHobby} from './funcoes.mjs'

console.log(mostraCidade('Everton', 'Votorantim'))
console.log(mostraIdade('Everton', 33))
console.log(mostraHobby('Everton', 'Tocar violão'))