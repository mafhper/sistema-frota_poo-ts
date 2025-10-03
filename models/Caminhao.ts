// Caminhao.ts
// Autor: Matheus Pereira
// Definição da classe Caminhao, uma especialização da classe Veiculo (Herança).

import Veiculo from "./Veiculo";

class Caminhao extends Veiculo {
    // Atributo específico da classe Caminhao, medido em kg.
    private capacidadeCarga: number;

    // Construtor da classe Caminhao.
    constructor(modelo: string, ano: number, capacidadeCarga: number) {
        // Chama o construtor da classe pai (Veiculo)
        super(modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }

    // Implementação do método abstrato obterDescricao.
    // Retorna uma descrição específica para Caminhao (Polimorfismo).
    obterDescricao(): string {
        return `Caminhão: ${this.modelo}, Ano: ${this.ano}, Carga: ${this.capacidadeCarga}kg`;
    }
}

export default Caminhao;
