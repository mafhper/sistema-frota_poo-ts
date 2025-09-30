/**
 * @file Caminhao.ts
 * @author Matheus Pereira
 *
 * @brief Definição da classe Caminhao, uma especialização da classe Veiculo (Herança).
 */

import Veiculo from "./Veiculo";

class Caminhao extends Veiculo {
    /**
     * @brief Atributo específico da classe Caminhao, medido em kg.
     */
    private capacidadeCarga: number;

    /**
     * @brief Construtor da classe Caminhao.
     * @param modelo O modelo do caminhão.
     * @param ano O ano de fabricação do caminhão.
     * @param capacidadeCarga A capacidade de carga do caminhão em kg.
     */
    constructor(modelo: string, ano: number, capacidadeCarga: number) {
        // Chama o construtor da classe pai (Veiculo)
        super(modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }

    /**
     * @brief Implementação do método abstrato obterDescricao.
     * Retorna uma descrição específica para Caminhao (Polimorfismo).
     * @returns Uma string formatada com os detalhes do caminhão.
     */
    obterDescricao(): string {
        return `Caminhão: ${this.modelo}, Ano: ${this.ano}, Carga: ${this.capacidadeCarga}kg`;
    }
}

export default Caminhao;