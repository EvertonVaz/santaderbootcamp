import java.util.ArrayList;
import java.util.HashSet;

public class Banco {
    private String nome;
    private ArrayList<Conta> contas;

    public Banco(String nome){
        this.nome = nome;
        this.contas = new ArrayList<Conta>();

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public ArrayList<Conta> getContas() {
        return contas;
    }

    public void setContas(ArrayList<Conta> contas) {
        this.contas = contas;
    }

    public void addConta(Conta c){
        this.contas.add(c);
    }

    public void imprimirClientes(){
        HashSet<String> set = new HashSet<>();
        for (Conta conta: contas){
            set.add(conta.getCliente().nome);
        }
        set.forEach(System.out::println);
    }
}
