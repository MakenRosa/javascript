# Projetos de Estudo — HTML/CSS/JS e React

> Repositório com **três diretórios** de projetos feitos para **estudo e prática**.
> **Status**: conteúdo **legado** (últimos commits há **+2 anos**). Mantido aqui como **documentação/arquivo**.

---

## Sumário

* [Visão Geral](#visão-geral)
* [Estrutura do Repositório](#estrutura-do-repositório)
* [Como Navegar](#como-navegar)
* [Diretórios](#diretórios)

  * [1) Curso em vídeo](#1-curso-em-vídeo)
  * [2) Cursos React](#2-cursos-react)
  * [3) Kanban-react](#3-kanban-react)
* [Requisitos & Execução](#requisitos--execução)
* [Avisos de Legado](#avisos-de-legado)
* [Créditos](#créditos)
* [Licença](#licença)

---

## Visão Geral

Este repositório consolida materiais de estudo focados em **fundamentos de HTML/CSS/JS** e em **React** (com Create React App e Vite).
O objetivo é **preservar o histórico de aprendizado** e facilitar consultas futuras — sem a pretensão de estar atualizado com versões recentes das bibliotecas.

---

## Estrutura do Repositório

```
/
├─ Curso-em-video/        # Exercícios e aulas de HTML, CSS e JavaScript (Curso em Vídeo – JS)
├─ Cursos-React/          # Três projetos React independentes (CRA e Vite)
│  ├─ costs/
│  ├─ meu-projeto/
│  └─ my-floating-ui-project/
└─ Kanban-react/          # Quadro Kanban simples em React (CRA)
```

---

## Como Navegar

* Cada pasta é **independente**, com seu próprio `package.json` (quando aplicável).
* Para **exercícios HTML/JS**, basta abrir os `.html` no navegador.
* Para **apps React**, instale dependências na pasta do projeto e rode o script adequado (ver [Requisitos & Execução](#requisitos--execução)).

---

## Diretórios

### 1) Curso em vídeo

Conjunto de arquivos de estudo (HTML, CSS e JavaScript), muito provavelmente baseados no **Curso em Vídeo – JavaScript (Gustavo Guanabara)**.
Organizado em **aulas** (aula04…aula08) e **exercícios**.

**O que cobre:**

* **JavaScript básico e DOM**: variáveis, `prompt`, soma, `querySelector`, `getElementById`, `addEventListener`.
* **Eventos**: clique, mouseenter/mouseout, teclado.
* **Lógica**: condicionais `if/else if/else`, conversões (`Number()`), strings (`length`, `toUpperCase`).
* **Integração com HTML/CSS**: estrutura de página, estilos internos/externos e mudança de estilo via JS.

**Exemplos notáveis:**

* **Aulas**

  * `aula04`: interação simples via botão e `onclick` (“Olá, mundo!”).
  * `aula05`: `prompt`, soma e exibição; eventos com `addEventListener`; string utils; `style.css`.
  * `aula06`: `querySelectorAll`, eventos de mouse, inputs numéricos e soma.
  * `aula07`: verificação de velocidade/multa e nacionalidade (scripts JS + páginas de apoio).
  * `aula08`: obrigatoriedade do voto por idade; cumprimento por horário (manhã/tarde/noite).
* **Exercícios (exercicios/)**

  * **ex001 – Hora do Dia**: muda fundo/mensagem/imagem conforme horário.
  * **ex002 – Verificador de Idade**: calcula idade e exibe imagem por faixa etária/gênero.

---

### 2) Cursos React

Diretório com **três projetos React** distintos para treinar roteamento, componentização, estado e UI.

#### `costs/`

* **Objetivo**: site fictício “Costs” com **React Router** (Home, About, Contact, New Project).
* **Stack**: React 18, Create React App (CRA), CSS Modules, React Router v6, UUID, (provável) `json-server` para API fake.
* **Destaques**:

  * Layout com componente **Container** e CSS modularizado.
  * Ícones (React Icons) e SVGs (`loading.svg`, `savings.svg`).
  * Simulação de backend com **JSON Server** (quando presente).

#### `meu-projeto/`

* **Objetivo**: projeto mais completo para prática de **componentização** e **conceitos base** do React.
* **Stack**: React 18, CRA, React Router v6, CSS Modules, React Icons.
* **Destaques**:

  * Navbar/Footer estilizados; ícones de redes sociais.
  * Componentes de estudo: `Button`, `Evento`, `Form`, `Condicional`, `Frase`,
    `Item/List/OutraLista`, `Pessoa`, `Saudacao`, `SeuNome`, etc.
  * Exemplos de **props**, **prop-types**, **default props**, **state**, **event handling**, **listas** e **renderização condicional**.

#### `my-floating-ui-project/`

* **Objetivo**: estudo de **@floating-ui/react** (tooltips/popovers) com Vite.
* **Stack**: React 18, **Vite**, `@floating-ui/react`, ESLint.
* **Destaques**:

  * Elemento de referência que exibe/oculta **Floating element** (clique/hover).
  * **Middlewares**: `arrow` (seta) e `offset` (distância).
  * Transições/posicionamento via `App.css`.

**Visão geral do diretório:**

* Natureza: **aprendizado prático** de front-end moderno (rotas, estado, CSS Modules, posicionamento dinâmico).
* Organização: cada subpasta é um **projeto isolado** com seus próprios scripts.

---

### 3) Kanban-react

Quadro **Kanban** simples feito com **Create React App**, com três colunas: **Pendente**, **Em andamento** e **Completa**.

**Estrutura típica (CRA):**

```
react-project/
├─ .gitignore
├─ package.json
├─ public/
│  ├─ index.html        # <div id="root"></div>
│  └─ manifest.json     # Metadados PWA
└─ src/
   ├─ index.js          # Renderiza <App />
   ├─ App.js            # Estado global de tasks; add/update/remove
   ├─ App.css
   └─ components/
      ├─ Navbar/        # Título "React Kanban"
      ├─ TaskList/      # Coluna por status + botão "nova tarefa"
      └─ TaskItem/      # Card com edição inline e select de status
```

**Funcionalidades:**

* **Adicionar tarefa** por coluna (título padrão).
* **Editar inline** (Enter/Esc); apagar título remove a tarefa.
* **Mover** entre colunas via `<select>`.
* **Sem backend**: dados apenas no **estado do React**.

---

## Requisitos & Execução

> **Atenção (legado):** versões antigas de CRA/React podem exigir Node mais antigo e podem acusar vulnerabilidades de dependências. Veja a seção [Avisos de Legado](#avisos-de-legado).

### Ambiente recomendado

* **Node.js**: use **Node 16 LTS** (ou próximo da época do desenvolvimento).
  Dica: use **nvm** para alternar versões.
* **npm** (ou **yarn**).

### Executar projetos

* **HTML/JS (Curso-em-video)**
  Abra os arquivos `.html` diretamente no navegador
  *ou* use uma extensão tipo **Live Server** no VS Code.

* **React (CRA) — `costs/`, `meu-projeto/`, `Kanban-react/`**

  ```bash
  cd <pasta-do-projeto>
  npm install
  npm start
  ```

  Abre em `http://localhost:3000`.

* **React (Vite) — `my-floating-ui-project/`**

  ```bash
  cd my-floating-ui-project
  npm install
  npm run dev
  ```

  O terminal exibirá a URL local (geralmente `http://localhost:5173`).

* **JSON Server (se aplicável em `costs/`)**
  Caso exista um `db.json` no projeto:

  ```bash
  npx json-server --watch db.json --port 5000
  ```

  Atualize a URL do fetch no app, se necessário.

---

## Avisos de Legado

* **Últimos commits há +2 anos**: o código reflete práticas e dependências da época.
* **Compatibilidade**: versões atuais do Node/React/Router podem quebrar projetos antigos.
* **Segurança**: rodar `npm install` pode acusar **vulnerabilidades**. Não use estes projetos em produção.
* **Atualizações**: não há manutenção ativa; repositório serve para **consulta histórica**.

---

## Créditos

* **Curso em Vídeo – JavaScript** (Prof. **Gustavo Guanabara**) inspirou parte dos exercícios de **Curso-em-video**.

---

## Licença

Sem licença específica definida. Conteúdo destinado a **uso educacional** e **consulta**.
Se reutilizar trechos, mantenha os devidos **créditos** e verifique dependências/licenças de terceiros (React, Vite, @floating-ui, etc.).

---

> *“Este repositório é um snapshot do processo de aprendizagem da época. Se você está retomando estes estudos hoje, considere atualizar dependências e anotações conforme as versões atuais do ecossistema.”*
