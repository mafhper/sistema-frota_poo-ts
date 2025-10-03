// Carro.ts
// Autor: Matheus Pereira
// Definição da classe Carro, uma especialização da classe Veiculo (Herança).

import Veiculo from "./Veiculo";

class Carro extends Veiculo {
    // Atributo específico da classe Carro.
    private numeroPortas: number;

    // Construtor da classe Carro.
    constructor(modelo: string, ano: number, numeroPortas: number) {
        // Chama o construtor da classe pai (Veiculo)
        super(modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    // Implementação do método abstrato obterDescricao.
    // Retorna uma descrição específica para Carro (Polimorfismo).
    obterDescricao(): string {
        return `Carro: ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroPortas}`;
    }
}

export default Carro;
