// No arquivo funcoes:
//        Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade de ${nome} é ${idade};
//        Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
//        Exporte estas funções.

function mostraIdade(nome, idade){
    return `A idade de ${nome} é ${idade};`
}

function mostraCidade(nome, cidade){
    return `A cidade de ${nome} é ${cidade};`
}


function mostraHobby(nome, hobby){
    return `A cidade de ${nome} é ${hobby};`
}

export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}