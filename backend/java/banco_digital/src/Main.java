public class Main {
    public static void main(String[] args) {
        Banco banco = new Banco("JavaBank");
        Cliente everton = new Cliente();
        everton.setNome("Everton");
        IConta cc1 = new ContaCorrente(everton, banco);
        IConta cp1 = new ContaPoupanca(everton, banco);

        cc1.depositar(100);
        cc1.transferir(50, cp1);
        cc1.sacar(60);
        cc1.imprimirExtrato();
        cp1.imprimirExtrato();

        Cliente t1 = new Cliente();
        t1.setNome("teste1");
        IConta cc2 = new ContaCorrente(t1, banco);
        IConta cp2 = new ContaPoupanca(t1, banco);

        cc2.depositar(1000);
        cc2.transferir(400, cp2);

        cc2.imprimirExtrato();
        cp2.imprimirExtrato();

        cc1.transferir(10, cc2);


        cc1.imprimirExtrato();
        cp1.imprimirExtrato();
        cc2.imprimirExtrato();
        cp2.imprimirExtrato();

        System.out.println("=== Clientes cadastrados ===");
        banco.imprimirClientes();

    }
}
