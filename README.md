# 🛒 Micro-Frontends E-Commerce — Desafio VR

Este projeto consiste em um ecossistema de e-commerce construído sob a arquitetura de **Micro-Frontends (MFE)**. 
Ele utiliza uma abordagem descentralizada onde diferentes partes da interface são construídas, testadas e disponibilizadas de forma isolada,
sendo integradas dinamicamente em uma aplicação principal (Host).

O monorepo, a orquestração e o fluxo de tarefas são totalmente gerenciados de forma otimizada pelo **Nx Workspace**.

---

## 🖼️ Demonstração do Projeto

Confira abaixo o resultado visual da aplicação desenvolvida com base nos protótipos fornecidos:

### Visão Geral da Loja (Cards App)
![Visão Geral da Loja](/apps/docs/tela_1.PNG)

### Carrinho Lateral (Header App / Modal)
![Carrinho de Compras Lateral](/apps/docs/tela_2.PNG)


---

## 🛠️ Tecnologias Utilizadas

A arquitetura do projeto foi desenhada para garantir máxima performance, isolamento de escopo, tipagem estrita e reatividade:

* **Core:** React & TypeScript
* **Orquestração de Monorepo:** Nx Workspace
* **Compilação & Bundling:** Vite & SWC
* **Arquitetura Micro-Frontend:** Module Federation via `@originjs/vite-plugin-federation`
* **Estilização:** CSS Modules (Garantindo escopo isolado de classes e evitando conflitos entre MFEs)
* **Gerenciamento de Estado:** React Context API (`CartProvider` compartilhado pelo Host) e Zustand (para estados internos)
* **Consumo de API:** Axios
* **Suíte de Testes:** Vitest & React Testing Library (RTL)
* **Ambiente de DOM para Testes:** JSDOM

---

## 🏗️ Arquitetura dos Micro-Apps

A divisão das portas e responsabilidades de cada aplicação está estruturada da seguinte forma:

* **`host`** (`localhost:4200`): O orquestrador central que envelopa a aplicação, gerencia o estado global do carrinho (`CartProvider`) e injeta os dados de forma reativa para os remotos via *Props*.
* **`header`** (`localhost:4201`): App remoto responsável pela barra de navegação, exibição da logo institucional da VR, contador de itens em tempo real e o modal lateral estilo e-commerce para visualização detalhada da sacola.
* **`cards`** (`localhost:4202`): App remoto encarregado de consumir a listagem de produtos, renderizar o grid responsivo e disparar a ação de compra alimentando o contexto do Host.
* **`footer`** (`localhost:4203`): App remoto responsável pelo rodapé institucional.

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar o ecossistema completo em sua máquina:

### 1. Clonar o repositório e instalar as dependências
```bash
# Clone o repositório
git clone


# Instale todas as dependências do monorepo
npm install

# Executar as aplicações

Build das aplicações Header, Cards e Footer:
npm run build:remotes 

Executar as aplicações Header, Cards e Footer:
npm run preview:remotes

Executar o Host:
npm run start:host


# Executar os testes:
npm test

# Executar os testes com relatório de cobertura:
npm run test:coverage


