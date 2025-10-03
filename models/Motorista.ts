// Motorista.ts
// Autor: Matheus Pereira
// Definição da classe Motorista, responsável por representar
// a entidade de um motorista no sistema.

class Motorista {
    // O nome do motorista.
    private _nome: string;

    // O CPF do motorista. Definido como readonly para garantir
    // que não seja alterado após a instanciação (Encapsulamento).
    private readonly _cpf: string;

    // A CNH do motorista. Definido como readonly (Encapsulamento).
    private readonly _cnh: string;

    // Construtor da classe Motorista.
    constructor(nome: string, cpf: string, cnh: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._cnh = cnh;
    }

    // Getter para o nome do motorista.
    get nome(): string {
        return this._nome;
    }

    // Setter para o nome do motorista.
    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    // Getter para o CPF do motorista.
    get cpf(): string {
        return this._cpf;
    }

    // Getter para a CNH do motorista.
    get cnh(): string {
        return this._cnh;
    }

    // Simula a ação de dirigir, exibindo uma mensagem no console.
    dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }
}

export default Motorista;
