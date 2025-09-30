/**
 * @file app.ts
 * @author Matheus pereira
 *
 * @brief Ponto de entrada da aplicação. Este arquivo é responsável por
 * instanciar as classes, criar objetos e simular o funcionamento do
 * sistema de gerenciamento de frota.
 */

import Carro from "./src/models/Carro";
import Caminhao from "./src/models/Caminhao";
import Motorista from "./src/models/Motorista";
import GerenciadorFrota from "./src/services/GerenciadorFrota";

// 1. Instanciando o gerenciador da frota
console.log("--- Iniciando Sistema de Frota ---");
const gerenciador = new GerenciadorFrota();
console.log("\n");

// 2. Criando instâncias de veículos
console.log("--- Cadastrando Veículos e Motoristas ---");
const carro1 = new Carro("Volkswagen Gol", 2018, 4);
const carro2 = new Carro("Chevrolet Onix", 2020, 4);
const caminhao1 = new Caminhao("Volvo FH", 2022, 12000);
const caminhao2 = new Caminhao("Mercedes-Benz Actros", 2021, 15000);

// 3. Criando instâncias de motoristas
const motorista1 = new Motorista("Carlos Silva", "111.222.333-44", "123456789");
const motorista2 = new Motorista("Mariana Costa", "555.666.777-88", "987654321");
const motorista3 = new Motorista("Pedro Almeida", "999.888.777-66", "555555555");
console.log("\n");

// 4. Adicionando veículos e motoristas ao gerenciador
console.log("--- Adicionando Itens à Frota ---");
gerenciador.adicionarVeiculo(carro1);
gerenciador.adicionarVeiculo(carro2);
gerenciador.adicionarVeiculo(caminhao1);
gerenciador.adicionarVeiculo(caminhao2);
console.log("\n");
gerenciador.adicionarMotorista(motorista1);
gerenciador.adicionarMotorista(motorista2);
gerenciador.adicionarMotorista(motorista3);
console.log("\n");

// 5. Listando todos os veículos da frota
console.log("--- Listando Todos os Veículos da Frota ---");
gerenciador.listarVeiculos();
console.log("\n");

// 6. Atribuindo motoristas aos veículos e testando os métodos
console.log("--- Atribuindo Motoristas e Testando Operações ---");
gerenciador.atribuirMotorista(carro1, motorista1);
motorista1.dirigir();
carro1.ligar();
carro1.acelerar();

console.log("\n");

gerenciador.atribuirMotorista(caminhao2, motorista2);
motorista2.dirigir();
caminhao2.ligar();
caminhao2.desligar();

console.log("\n");

// Tentativa de atribuir um motorista a um veículo (apenas para demonstração)
gerenciador.atribuirMotorista(carro2, motorista3);
motorista3.dirigir();
carro2.ligar();
console.log("\n");

console.log("--- Sistema Finalizado ---");