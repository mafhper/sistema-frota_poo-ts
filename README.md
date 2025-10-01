# Sistema de Gerenciamento de Frota em TypeScript

**Autor:** Matheus Pereira

---

## 1\. Visão Geral do Projeto

Este projeto é uma aplicação de console desenvolvida em TypeScript que simula um sistema básico de gerenciamento de frota. O objetivo principal é aplicar e demonstrar os quatro pilares da Programação Orientada a Objetos (POO): **Encapsulamento**, **Herança**, **Polimorfismo** e **Abstração**.

### Características Principais:

- **Cadastro de Veículos:** Permite a criação de diferentes tipos de veículos (Carro, Caminhão).
- **Cadastro de Motoristas:** Permite o registro de motoristas com dados básicos.
- **Gerenciamento Centralizado:** Uma classe `GerenciadorFrota` orquestra todas as operações, como adicionar veículos, adicionar motoristas e atribuir um motorista a um veículo.
- **Código Limpo e Tipado:** O uso de TypeScript garante um código mais seguro, legível e de fácil manutenção.

---

## 2\. Explicação do Código e Conceitos de POO

- **Abstração (`Veiculo.ts`):** A classe `Veiculo` é `abstract`, definindo um modelo comum para todos os veículos, com atributos (modelo, ano) e métodos (`ligar`, `desligar`) que toda especialização deve ter. O método `obterDescricao()` é abstrato, forçando as classes filhas a implementá-lo.

- **Herança (`Carro.ts`, `Caminhao.ts`):** As classes `Carro` e `Caminhao` herdam de `Veiculo`, reutilizando seus atributos e métodos. Elas também adicionam características próprias (`numeroPortas` para Carro, `capacidadeCarga` para Caminhão).

- **Encapsulamento (`Motorista.ts`, `Veiculo.ts`):** Os atributos das classes são definidos como `private` ou `protected`. O acesso a eles é controlado por meio de métodos `getters` e `setters`. Por exemplo, em `Motorista`, o `cpf` e a `cnh` são `readonly` e só podem ser lidos, garantindo que não sejam alterados após a criação.

- **Polimorfismo (`GerenciadorFrota.ts`):** O método `listarVeiculos()` percorre uma lista de `Veiculo`. Para cada item, ele chama `veiculo.obterDescricao()`. O sistema executa a versão correta desse método (a da classe `Carro` ou a da classe `Caminhao`) em tempo de execução, demonstrando o polimorfismo.
---

## 3\. O que pode ser aprendido?

Este projeto é um excelente ponto de partida para entender na prática:

- Como estruturar um projeto em TypeScript.
- A implementação dos pilares da POO em um cenário real.
- O uso de classes, herança, métodos abstratos e controle de acesso.
- A configuração básica de um ambiente de desenvolvimento com `npm` e `tsconfig.json`.

---

## 4\. Estrutura do Projeto

O código-fonte é organizado de forma modular para separar as responsabilidades:

*   `app.ts`: Ponto de entrada da aplicação para testes.
*   `.gitignore`: Arquivo para ignorar arquivos e pastas (ex: `node_modules`).
*   `package.json`: Definições do projeto e dependências.
*   `tsconfig.json`: Configurações do compilador TypeScript.
*   `docs/`: Contém a documentação do projeto gerada com o TypeDoc.
*   `src/`
    *   `models/`
        *   `Veiculo.ts`: Classe base abstrata para todos os veículos.
        *   `Carro.ts`: Classe que representa um Carro.
        *   `Caminhao.ts`: Classe que representa um Caminhão.
        *   `Motorista.ts`: Classe que representa um Motorista.
    *   `services/`
        *   `GerenciadorFrota.ts`: Classe que centraliza a lógica do sistema.

---
## 5\. Como Instalar e Executar

Para configurar e executar este projeto, siga os passos abaixo:

### Pré-requisitos:

Certifique-se de ter os seguintes pré-requisitos instalados em seu sistema:

*   **Bun (versão 1.0 ou superior):** Um runtime JavaScript e TypeScript rápido. Você pode instalá-lo da seguinte forma:

    *   **No Windows (PowerShell):**

        ```powershell
        powershell -c "irm bun.sh/install.ps1 | iex"
        ```

    *   **No Linux/macOS (Terminal):**

        ```bash
        curl -fsSL https://bun.sh/install | bash
        ```

    Após a instalação, verifique se o Bun está funcionando corretamente:

    ```bash
    bun --version
    ```

*   **TypeScript:** Embora o Bun execute TypeScript diretamente, ter o TypeScript instalado globalmente pode ser útil para ferramentas de desenvolvimento e verificação de tipo.

    ```bash
    bun add -g typescript # ou npm install -g typescript
    ```

### Passos de Instalação e Execução:

1.  **Clone o repositório:**

    Abra seu terminal (PowerShell no Windows, Bash/Zsh no Linux/macOS) e clone o repositório:

    ```bash
    git clone https://github.com/mafhper/sistema-frota_poo-ts
    cd sistema-frota
    ```

2.  **Instale as dependências:**

    Navegue até o diretório raiz do projeto (`sistema-frota`) e instale as dependências usando o Bun:

    ```bash
    bun install
    ```

3.  **Execute a aplicação:** O arquivo `app.ts` contém a lógica para testar o sistema.

    *   **Modo de Desenvolvimento (com `watch`):**

        ```bash
        bun run dev
        ```

        Este comando iniciará o aplicativo e o reiniciará automaticamente a cada alteração nos arquivos.

    *   **Modo de Produção:**

        ```bash
        bun run start
        ```

        Este comando iniciará o aplicativo uma vez.
---

## 6\. Documentação

A documentação completa do código-fonte foi gerada automaticamente a partir dos comentários JSDoc usando a ferramenta **TypeDoc**.

### Acessando a Documentação

Para visualizar a documentação, abra o seguinte arquivo em seu navegador:

- **[Clique aqui para ver a documentação](./docs/index.html)**

### Gerando a Documentação Manualmente

Caso queira gerar a documentação novamente, execute o seguinte comando na raiz do projeto:

```bash
bun run docs
```
---
