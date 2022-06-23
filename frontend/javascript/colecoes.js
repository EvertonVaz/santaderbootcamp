//Atividade 1: Maps
//Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
//    Crie uma função getAdmins que recebe um Map;
//    Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//    Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são administradores.

function getAdmins(map) {
    let admins = []

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key)
        }
    }
    return admins
}

const users = new Map()

users.set('Everton', 'ADMIN')
users.set('Juliana', 'USER')
users.set('Angela', 'USER')
users.set('Gabriel', 'USER')
users.set('Giovanna', 'USER')
users.set('Vitor', 'ADMIN')

console.log(getAdmins(users))


//Atividade 2: Sets
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

let array = [30, 30, 40, 5, 223, 2049, 3034, 5]

let set = new Set(array)

console.log(set)
