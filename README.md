# Locus Web

![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

> ⚠️ **Aviso:** Este projeto encontra-se em estágio de **desenvolvimento ativo**. Funcionalidades, rotas da API e interfaces podem sofrer alterações sem aviso prévio.

O **Locus Web** é a interface frontend da plataforma Locus, desenvolvida para simplificar e automatizar a análise de viabilidade urbanística. Esta aplicação permite que usuários simulem o aproveitamento de lotes urbanos, verificando parâmetros construtivos, zoneamento e tipos de uso permitidos em tempo real, integrando-se diretamente com a [Locus API](../locus-api).

---

## 📋 Funcionalidades

- **Simulação de Viabilidade:** Formulário interativo para inserção de dados do lote e seleção de parâmetros (Cidade, Zona, Tipo de Uso).
- **Análise Automática:** Processamento imediato das regras de ocupação do solo baseadas no plano diretor cadastrado na API.
- **Visualização de Resultados:** Dashboard claro (`/analyzes`) exibindo status de aprovação (Viável/Inviável), índices urbanísticos e dados de entrada.
- **Interface Responsiva:** Layout adaptável para uso em desktop e dispositivos móveis.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **[React](https://reactjs.org/):** Biblioteca principal para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/):** Superset JavaScript para tipagem estática e código mais seguro.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida e leve.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas e navegação.
- **CSS Modules:** Estilização modularizada e escopada por componente.

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- **Locus API:** É necessário que a API esteja rodando localmente ou acessível via rede para que o frontend funcione corretamente.

---

## 🔧 Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/erodrigovanini/locus-web.git](https://github.com/erodrigovanini/locus-web.git)
   cd locus-web
   ```
