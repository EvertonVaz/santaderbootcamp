//Atividade: Conta Bancária
//Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

//    Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
//    Dentro de ContaBancaria, construa o getter e o setter de saldo;
    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }

//    Dentro de ContaBancaria, crie os métodos sacar e depositar;
    sacar(valor){
        if(valor > this._saldo) return console.log('Saldo indisponível')

        this._saldo -= valor
        
        return this._saldo
    }

    depositar(valor){
        this._saldo += valor
        return this._saldo
    }
}

//    Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
//    Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito;
    }
//    Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

//    Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

//    Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
//    Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500 || valor > this._saldo) return console.log('Operação negada')

        this._saldo -= valor        
        return this._saldo
    }
}



const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);

contaUni.sacar(1)
minhaConta.depositar(10)
minhaConta.sacar(5)
minhaConta.sacar(10)
contaUni.depositar(600)
contaUni.sacar(32)
contaUni.sacar(510)
console.log('\n\n')

console.log(minhaConta)
console.log(contaUni)

