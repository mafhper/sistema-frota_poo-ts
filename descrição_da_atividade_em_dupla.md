# Atividade em Dupla

## Conceitos de POO a serem aplicados

- **Encapsulamento**: Proteger os dados de veículos e motoristas.  
- **Herança**: Modelar diferentes tipos de veículos (Carro, Caminhão).  
- **Polimorfismo**: Usar métodos que se comportam de forma diferente em cada tipo de veículo.  
- **Abstração**: Criar uma classe base para representar o que é comum a todos os veículos.  

---

## Roteiro da Atividade (Duplas)

### Passo 1: Configuração do Projeto e Repositório Git

1. Um aluno da dupla cria um novo repositório no GitHub (exemplo: `sistema-frota`).  
2. Adiciona o outro aluno como colaborador do repositório.  
3. Clonar o repositório para suas máquinas locais.  
4. Configurar ambiente de desenvolvimento com TypeScript:  

   ```bash
   sudo npm install -g typescript
   npm i
   npm init -y
   tsc --init
   ```

---

### Passo 2: O Aluno A (Motoristas e Gerenciamento)

#### Classe Motorista

1. Criar classe `Motorista` com atributos privados: `nome`, `cpf`, `cnh`.  
2. `cpf` e `cnh` devem ser protegidos com getters e setters (não alteráveis após criação).  
3. Criar método `dirigir()` → `"Motorista [nome] está dirigindo"`.  

#### Classe GerenciadorFrota

1. Criar classe `GerenciadorFrota` (representa a lógica do sistema).  
2. Atributos: listas de `veiculos` e `motoristas`.  
3. Métodos públicos:  

   - `adicionarVeiculo(veiculo)` → adiciona veículo à lista.  
   - `adicionarMotorista(motorista)` → adiciona motorista à lista.  
   - `listarVeiculos()` → exibe informações de todos os veículos (usa polimorfismo).  
   - `atribuirMotorista(veiculo, motorista)` → associa motorista a veículo.  

#### Git

- Criar branch `motorista-gerenciador`.  
- Implementar classes `Motorista` e `GerenciadorFrota`.  
- Commits regulares com mensagens claras (ex: *"Adiciona classe Motorista"*, *"Implementa método de adicionar veículo"*).  
- Pull request para `main`.  

---

### Passo 3: O Aluno B (Veículos)

#### Classe Veiculo (Abstração)

1. Criar classe abstrata/base `Veiculo`.  
   - Atributos: `modelo`, `ano`, `statusLigado` (privado).  
2. Métodos:  
   - `ligar()` e `desligar()` → controlar status (encapsulamento).  
   - `obterDescricao()` (abstrato, obrigatório nas classes filhas).  
   - `acelerar()` → mensagem genérica de aceleração.  

#### Classes Filhas (Herança e Polimorfismo)

- **Carro**: herda de `Veiculo`, atributo `numeroPortas`.  
- **Caminhao**: herda de `Veiculo`, atributo `capacidadeCarga`.  
- Ambas sobrescrevem `obterDescricao()` com informações completas → polimorfismo.  

#### Git

- Criar branch `classes-veiculos`.  
- Implementar `Veiculo`, `Carro` e `Caminhao`.  
- Commits regulares.  
- Pull request para `main`.  

---

### Passo 4: Integração (Dupla)

1. Fazer merge das branches na `main`.  
2. Criar `app.ts`.  
3. Importar todas as classes.  
4. Instanciar `GerenciadorFrota`.  
5. Criar objetos de `Carro`, `Caminhao` e `Motorista` e adicioná-los ao gerenciador.  
6. Executar `listarVeiculos()` e `atribuirMotorista()` para testar.  
7. Verificar encapsulamento e polimorfismo em funcionamento.  

---

## Resumo do Roteiro da Atividade

- **Passo 1**: Configuração do Projeto e Repositório Git  
- **Passo 2**: O Aluno A (Motoristas e Gerenciamento)  
- **Passo 3**: O Aluno B (Veículos)  
- **Passo 4**: Integração (Dupla)  
