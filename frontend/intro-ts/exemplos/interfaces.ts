interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquatico',
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre",
    executarRugido(alturaEmDecibeis) {
        (`${alturaEmDecibeis}dB`)
    },
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

// animal.executarRugido('s')
felino.executarRugido(10)

