// GerenciadorFrota.ts
// Autor: Matheus Pereira
// Definição da classe GerenciadorFrota, que orquestra a lógica
// de negócio do sistema.

import Veiculo from "../models/Veiculo";
import Motorista from "../models/Motorista";

class GerenciadorFrota {
    // Lista privada para armazenar os veículos da frota.
    private veiculos: Veiculo[] = [];

    // Lista privada para armazenar os motoristas cadastrados.
    private motoristas: Motorista[] = [];

    // Adiciona um novo veículo à lista da frota.
    adicionarVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`Veículo ${veiculo.obterDescricao()} adicionado à frota.`);
    }

    // Adiciona um novo motorista à lista de motoristas.
    adicionarMotorista(motorista: Motorista): void {
        this.motoristas.push(motorista);
        console.log(`Motorista ${motorista.nome} adicionado ao sistema.`);
    }

    // Exibe no console a descrição de todos os veículos da frota.
    // Este método demonstra o Polimorfismo, pois chama o `obterDescricao()`
    // específico de cada tipo de veículo.
    listarVeiculos(): void {
        if (this.veiculos.length === 0) {
            console.log("Nenhum veículo na frota.");
            return;
        }
        this.veiculos.forEach(veiculo => {
            console.log(veiculo.obterDescricao());
        });
    }

    // Associa um motorista a um veículo específico.
    atribuirMotorista(veiculo: Veiculo, motorista: Motorista): void {
        // Lógica simples de atribuição para demonstração
        console.log(`Atribuindo motorista ${motorista.nome} ao veículo ${veiculo.obterDescricao()}`);
    }
}

export default GerenciadorFrota;
