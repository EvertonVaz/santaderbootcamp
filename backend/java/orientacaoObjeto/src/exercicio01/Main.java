package exercicio01;

public class Main {
    public static void main(String[] args) {
        Carro carro1 = new Carro("azul", "fusca", 30);
        carro1.setCor("vermelho");
        carro1.setCapacidadeTanque(30);
        carro1.setModelo("uno");

        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println(carro1.encherTanque(5));

        Carro carro2 = new Carro("preto", "gol", 40);

        System.out.println(carro2.getModelo());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println(carro2.encherTanque(6.7));

    }
}
