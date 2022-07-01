// tratando a tag input

const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
    //console.log('digitei');
})

// Generic types

    // exemplo 1

function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor)
}

adicionaApendiceALista([1, 2, 3], 1)

    // exemplo 2

interface IUsuario {
    id: string,
    email: string
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}


function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }

    // redirecionar para área de usuário
}





