package exercicio02;

public class Main {
    public static void main(String[] args) {
        Funcionario funcionario = new Funcionario();

        Funcionario gerente = new Gerente();
        Funcionario vendedor = new Vendedor();
        Funcionario faxineiro = new Faxineiro();

        Funcionario[] classes = new Funcionario[]{new Vendedor(), new Gerente(), new Faxineiro(), new Funcionario()};

        for (Funcionario classe: classes) {
            classe.metodo1();
        }

        System.out.println("");

        for (Funcionario classe: classes) {
            classe.metodo2();
        }

        System.out.println("");

        Gerente gerente1 = new Gerente();
        gerente1.metodo2();
    }
}
