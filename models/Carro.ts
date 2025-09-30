/**
 * @file Carro.ts
 * @author Matheus Pereira
 *
 * @brief Definição da classe Carro, uma especialização da classe Veiculo (Herança).
 */

import Veiculo from "./Veiculo";

class Carro extends Veiculo {
    /**
     * @brief Atributo específico da classe Carro.
     */
    private numeroPortas: number;

    /**
     * @brief Construtor da classe Carro.
     * @param modelo O modelo do carro.
     * @param ano O ano de fabricação do carro.
     * @param numeroPortas O número de portas do carro.
     */
    constructor(modelo: string, ano: number, numeroPortas: number) {
        // Chama o construtor da classe pai (Veiculo)
        super(modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    /**
     * @brief Implementação do método abstrato obterDescricao.
     * Retorna uma descrição específica para Carro (Polimorfismo).
     * @returns Uma string formatada com os detalhes do carro.
     */
    obterDescricao(): string {
        return `Carro: ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroPortas}`;
    }
}

export default Carro;