# Sistema de Gerenciamento de Frota

**Autor:** Matheus Pereira Lima

---

## Sobre o Projeto

Este projeto é um sistema simples de gerenciamento de frota, desenvolvido em **TypeScript** com o objetivo de aplicar e consolidar os principais conceitos da Programação Orientada a Objetos (POO). Ele foi estruturado para demonstrar o uso prático de quatro pilares essenciais da POO:

* **Encapsulamento**: Você aprenderá a proteger os dados de veículos e motoristas, garantindo que informações sensíveis, como CPF e CNH, não possam ser alteradas diretamente após a criação do objeto. Isso é feito ao tornar atributos como `cpf` e `cnh` privados e acessá-los apenas por meio de *getters* e *setters*.
* **Herança**: Você irá modelar diferentes tipos de veículos (**Carro** e **Caminhão**) a partir de uma classe base (**Veiculo**). Isso permitirá que as classes filhas herdem atributos e métodos comuns, evitando a duplicação de código e criando uma hierarquia lógica e organizada.
* **Polimorfismo**: O projeto demonstra como um método pode se comportar de forma diferente em cada tipo de veículo. Ao sobrescrever o método `obterDescricao()`, por exemplo, cada classe filha (**Carro** e **Caminhão**) fornecerá uma descrição completa e específica do veículo, mesmo que a chamada inicial seja a mesma.
* **Abstração**: Você irá criar uma classe base abstrata (**Veiculo**) para representar o que é comum a todos os veículos. Essa classe definirá um contrato que obriga as classes filhas a implementarem métodos essenciais, como `obterDescricao()`, escondendo os detalhes complexos de implementação de cada tipo de veículo.

---

## Roteiro de Implementação

O desenvolvimento do projeto é dividido em etapas lógicas para facilitar o aprendizado e a organização.

### Passo 1: Configuração do Projeto e Repositório Git

1.  Crie um novo repositório no GitHub.
2.  Clone o repositório para sua máquina local.
3.  Configure o ambiente de desenvolvimento com TypeScript usando os comandos: `npm init -y`, `npm install -g typescript` e `tsc --init`.

### Passo 2: Módulo de Veículos

* **Classe Abstrata `Veiculo`**: Crie uma classe abstrata `Veiculo` com atributos como `modelo` e `ano` e um status de ligado privado. Implemente os métodos `ligar()` e `desligar()` para controlar o status e defina um método abstrato `obterDescricao()`. Adicione um método `acelerar()` genérico.
* **Classes Filhas**: Crie a classe `Carro` que herda de `Veiculo` e tem o atributo `numeroPortas`. Crie a classe `Caminhao` que também herda de `Veiculo` e tem o atributo `capacidadeCarga`. Em ambas, sobrescreva o método `obterDescricao()` para fornecer uma descrição específica.

### Passo 3: Módulo de Motoristas e Gerenciamento

* **Classe `Motorista`**: Crie a classe `Motorista` com atributos privados para `nome`, `cpf` e `cnh`. Use *getters* e *setters* para proteger o `cpf` e a `cnh`, e crie um método `dirigir()`.
* **Classe `GerenciadorFrota`**: Crie a classe `GerenciadorFrota` para a lógica do sistema. Ela terá listas para veículos e motoristas e métodos para `adicionarVeiculo()`, `adicionarMotorista()`, `listarVeiculos()` e `atribuirMotorista()`.

### Passo 4: Integração e Testes

* **Arquivo `app.ts`**: Crie o arquivo principal `app.ts` e importe todas as classes criadas.
* **Teste de Funcionalidade**: Instancie o `GerenciadorFrota`, crie objetos de `Carro`, `Caminhao` e `Motorista` e adicione-os ao gerenciador. Chame os métodos `listarVeiculos()` e `atribuirMotorista()` para testar a aplicação e verificar se os conceitos de **Encapsulamento** e **Polimorfismo** estão funcionando corretamente.

---

## Como Compilar e Executar

1.  No terminal, navegue até a pasta do projeto.
2.  Para compilar o código TypeScript para JavaScript, execute:
    ```bash
    tsc
    ```
3.  Para rodar a aplicação, execute o arquivo de saída `app.js`:
    ```bash
    node app.js
    ```
