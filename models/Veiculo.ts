/**
 * @file Veiculo.ts
 * @author Matheus Pereira
 *
 * @brief Definição da classe abstrata Veiculo, que serve como modelo
 * base para todos os tipos de veículos no sistema (Abstração).
 */

abstract class Veiculo {
    /**
     * @brief O modelo do veículo. Acessível pelas classes filhas.
     */
    protected modelo: string;

    /**
     * @brief O ano de fabricação do veículo. Acessível pelas classes filhas.
     */
    protected ano: number;

    /**
     * @brief Status que indica se o veículo está ligado ou desligado.
     * É privado para garantir o Encapsulamento.
     */
    private ligado: boolean;

    /**
     * @brief Construtor da classe Veiculo.
     * @param modelo O modelo do veículo.
     * @param ano O ano de fabricação.
     */
    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; // Todo veículo começa desligado
    }

    /**
     * @brief Liga o veículo, alterando seu estado.
     */
    ligar(): void {
        this.ligado = true;
        console.log("Veículo ligado.");
    }

    /**
     * @brief Desliga o veículo, alterando seu estado.
     */
    desligar(): void {
        this.ligado = false;
        console.log("Veículo desligado.");
    }

    /**
     * @brief Exibe uma mensagem genérica de aceleração.
     */
    acelerar(): void {
        if (this.ligado) {
            console.log("Veículo acelerando...");
        } else {
            console.log("Não é possível acelerar. O veículo está desligado.");
        }
    }

    /**
     * @brief Método abstrato que deve ser implementado pelas classes filhas.
     * Retorna uma descrição completa e específica do veículo (Polimorfismo).
     * @returns Uma string com a descrição do veículo.
     */
    abstract obterDescricao(): string;
}

export default Veiculo;