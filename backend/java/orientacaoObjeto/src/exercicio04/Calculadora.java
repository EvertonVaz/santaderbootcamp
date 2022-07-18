package exercicio04;

public class Calculadora implements Operacoes{
    @Override
    public void soma(double n1, double n2) {
        System.out.println("Soma total: " + (n1 + n2));
    }

    @Override
    public void subtracao(double n1, double n2) {
        System.out.println("Subtracao total: " + (n1 - n2));
    }

    @Override
    public void multiplicacao(double n1, double n2) {
        System.out.println("Multiplicacao total: " + (n1 * n2));
    }

    @Override
    public void divisao(double n1, double n2) {
        System.out.println("Divisao total: " + (n1 / n2));
    }

}
