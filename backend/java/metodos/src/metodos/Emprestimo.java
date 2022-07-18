package metodos;

public class Emprestimo {
    public static void calcular(double valor, double taxa, int parcelas){
        double valorFinal = valor * Math.pow((1+taxa), parcelas);
        System.out.println("O valor final do emprestimo para "+parcelas+" parcelas vai ser de R$" + valorFinal);
    }
}
