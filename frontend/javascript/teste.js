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