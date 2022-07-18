package excecoes;

import javax.swing.*;

public class UncheckedException {
    public static void main(String[] args) {
        boolean continueLooping = true;

        do{
            String a = JOptionPane.showInputDialog("Numerador: ");
            String b = JOptionPane.showInputDialog("Denominador: ");
            try{
                float resultado = Float.parseFloat(a) / Float.parseFloat(b);
                System.out.println("Resultado: " + resultado);
                continueLooping = false;
            }catch (NumberFormatException e){
                JOptionPane.showMessageDialog(null, "Formato errado, insira um numero");
                e.printStackTrace();
            }catch (ArithmeticException e){
                JOptionPane.showMessageDialog(null, "Impossivel dividir por zero");
                e.printStackTrace();
            } finally {
                System.out.println("Chegou no finally");
            }
        }while (continueLooping);

        System.out.println("O condigo continua...");

    }
}
