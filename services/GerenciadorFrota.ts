/**
 * @file GerenciadorFrota.ts
 * @author Matheus Pereira
 *
 * @brief Definição da classe GerenciadorFrota, que orquestra a lógica
 * de negócio do sistema.
 */

import Veiculo from "../models/Veiculo";
import Motorista from "../models/Motorista";

class GerenciadorFrota {
    /**
     * @brief Lista privada para armazenar os veículos da frota.
     */
    private veiculos: Veiculo[] = [];

    /**
     * @brief Lista privada para armazenar os motoristas cadastrados.
     */
    private motoristas: Motorista[] = [];

    /**
     * @brief Adiciona um novo veículo à lista da frota.
     * @param veiculo O objeto de veículo a ser adicionado.
     */
    adicionarVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`Veículo ${veiculo.obterDescricao()} adicionado à frota.`);
    }

    /**
     * @brief Adiciona um novo motorista à lista de motoristas.
     * @param motorista O objeto de motorista a ser adicionado.
     */
    adicionarMotorista(motorista: Motorista): void {
        this.motoristas.push(motorista);
        console.log(`Motorista ${motorista.nome} adicionado ao sistema.`);
    }

    /**
     * @brief Exibe no console a descrição de todos os veículos da frota.
     * Este método demonstra o Polimorfismo, pois chama o `obterDescricao()`
     * específico de cada tipo de veículo.
     */
    listarVeiculos(): void {
        if (this.veiculos.length === 0) {
            console.log("Nenhum veículo na frota.");
            return;
        }
        this.veiculos.forEach(veiculo => {
            console.log(veiculo.obterDescricao());
        });
    }

    /**
     * @brief Associa um motorista a um veículo específico.
     * @param veiculo O veículo ao qual o motorista será atribuído.
     * @param motorista O motorista a ser atribuído.
     */
    atribuirMotorista(veiculo: Veiculo, motorista: Motorista): void {
        // Lógica simples de atribuição para demonstração
        console.log(`Atribuindo motorista ${motorista.nome} ao veículo ${veiculo.obterDescricao()}`);
    }
}

export default GerenciadorFrota;