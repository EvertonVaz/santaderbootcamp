package exercicios;

public class Main {

    public static void main(String[] args) {

        // Calculadora
        System.out.println("Exercício calculadora");
        Calculadora.soma(3, 6);
        Calculadora.subtracao(9, 1.8);
        Calculadora.multiplicacao(7, 8);
        Calculadora.divisao(5, 2.5);

        // Mensagem
        System.out.println("Exercício mensagem");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(14);
        Mensagem.obterMensagem(1);

        // Empréstimo
        System.out.println("Exercício empréstimo");
        Emprestimo.calcular(1000, 0.5, 5);
        Emprestimo.calcular(1000, 0.2, 2);
        Emprestimo.calcular(1000, 0.3, 3);

        // Quadrilatero
        System.out.println("Exercício quadrilátero - 1 e 2");
        System.out.println(Quadrilatero.area(3));
        System.out.println(Quadrilatero.area(5d,5d));
        System.out.println(Quadrilatero.area(7,8,9));
        System.out.println(Quadrilatero.area(5f,5f));
    }
}
