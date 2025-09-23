# Sistema de Gerenciamento de Frota

**Autor:** Matheus Pereira Lima

---

## 📄 Sobre o Projeto

Este projeto é um sistema simples de gerenciamento de frota, desenvolvido em TypeScript, com o objetivo de aplicar e demonstrar os principais conceitos da Programação Orientada a Objetos (POO). Ele foi estruturado para exemplificar o uso de:

* [cite_start]**Encapsulamento**: Proteção de dados, como informações de veículos e motoristas[cite: 2].
* [cite_start]**Herança**: Modelagem de diferentes tipos de veículos a partir de uma classe base (Carro e Caminhão)[cite: 3].
* [cite_start]**Polimorfismo**: Comportamento diferenciado de métodos em cada tipo de veículo[cite: 4].
* [cite_start]**Abstração**: Criação de uma classe base (`Veiculo`) para representar o que é comum a todos os veículos[cite: 5].

---

## 🛠️ Tecnologias Utilizadas

* **TypeScript**
* **Node.js**
* **npm** (Gerenciador de Pacotes)
* **Git** e **GitHub** (Controle de Versão)

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação:

1.  **Clone o Repositório**:
    ```bash
    git clone [https://github.com/MatheusPereiraLima/sistema-frota.git](https://github.com/MatheusPereiraLima/sistema-frota.git)
    cd sistema-frota
    ```

2.  **Instale as Dependências**:
    ```bash
    npm install
    ```

3.  **Compile o Código TypeScript**:
    ```bash
    tsc
    ```

4.  **Execute a Aplicação**:
    ```bash
    node app.js
    ```

---

## 📦 Estrutura do Projeto

O projeto é organizado da seguinte forma:

* `src/`: Contém os arquivos-fonte em TypeScript.
    * `Motorista.ts`: Classe para gerenciar motoristas.
    * `Veiculo.ts`: Classe base abstrata para veículos.
    * `Carro.ts`: Classe que herda de `Veiculo`.
    * `Caminhao.ts`: Classe que herda de `Veiculo`.
    * `GerenciadorFrota.ts`: Classe que gerencia a frota de veículos e motoristas.
    * `app.ts`: Arquivo principal que integra todas as classes.

* `package.json`: Arquivo de configuração do projeto Node.js.
* `tsconfig.json`: Arquivo de configuração do TypeScript.
* `README.md`: Este arquivo.

---

## 📝 Próximos Passos (Sugestões de Melhorias)

* Adicionar validações mais robustas nos `setters` das classes.
* Implementar persistência de dados (salvar e carregar informações de um arquivo JSON, por exemplo).
* Expandir as funcionalidades do `GerenciadorFrota` (ex: remover veículos, buscar por modelo, etc.).
* Desenvolver uma interface de linha de comando (CLI) para interagir com o sistema.

---
