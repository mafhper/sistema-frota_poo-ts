// Veiculo.ts
// Autor: Matheus Pereira
// Definição da classe abstrata Veiculo, que serve como modelo
// base para todos os tipos de veículos no sistema (Abstração).

abstract class Veiculo {
    // O modelo do veículo. Acessível pelas classes filhas.
    protected modelo: string;

    // O ano de fabricação do veículo. Acessível pelas classes filhas.
    protected ano: number;

    // Status que indica se o veículo está ligado ou desligado.
    // É privado para garantir o Encapsulamento.
    private ligado: boolean;

    // Construtor da classe Veiculo.
    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; // Todo veículo começa desligado
    }

    // Liga o veículo, alterando seu estado.
    ligar(): void {
        this.ligado = true;
        console.log("Veículo ligado.");
    }

    // Desliga o veículo, alterando seu estado.
    desligar(): void {
        this.ligado = false;
        console.log("Veículo desligado.");
    }

    // Exibe uma mensagem genérica de aceleração.
    acelerar(): void {
        if (this.ligado) {
            console.log("Veículo acelerando...");
        } else {
            console.log("Não é possível acelerar. O veículo está desligado.");
        }
    }

    // Método abstrato que deve ser implementado pelas classes filhas.
    // Retorna uma descrição completa e específica do veículo (Polimorfismo).
    abstract obterDescricao(): string;
}

export default Veiculo;
