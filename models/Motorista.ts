/**
 * @file Motorista.ts
 * @author Matheus Pereira
 *
 * @brief Definição da classe Motorista, responsável por representar
 * a entidade de um motorista no sistema.
 */

class Motorista {
    /**
     * @brief O nome do motorista.
     */
    private _nome: string;

    /**
     * @brief O CPF do motorista. Definido como readonly para garantir
     * que não seja alterado após a instanciação (Encapsulamento).
     */
    private readonly _cpf: string;

    /**
     * @brief A CNH do motorista. Definido como readonly (Encapsulamento).
     */
    private readonly _cnh: string;

    /**
     * @brief Construtor da classe Motorista.
     * @param nome O nome do motorista.
     * @param cpf O CPF do motorista.
     * @param cnh A CNH do motorista.
     */
    constructor(nome: string, cpf: string, cnh: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._cnh = cnh;
    }

    /**
     * @brief Getter para o nome do motorista.
     * @returns O nome do motorista.
     */
    get nome(): string {
        return this._nome;
    }

    /**
     * @brief Setter para o nome do motorista.
     * @param novoNome O novo nome a ser atribuído.
     */
    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    /**
     * @brief Getter para o CPF do motorista.
     * @returns O CPF do motorista.
     */
    get cpf(): string {
        return this._cpf;
    }

    /**
     * @brief Getter para a CNH do motorista.
     * @returns A CNH do motorista.
     */
    get cnh(): string {
        return this._cnh;
    }

    /**
     * @brief Simula a ação de dirigir, exibindo uma mensagem no console.
     */
    dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }
}

export default Motorista;