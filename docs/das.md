# DAS - Documento de Arquitetura de Software

## 1. Visao Geral e Objetivos

O sistema deve resolver o problema de gestao clinica por meio de uma arquitetura robusta, com foco na traducao fiel dos requisitos para o codigo.

## 2. Pilha Tecnologica

- Linguagem: TypeScript
- Ambiente: Node.js
- Framework Web: Express.js
- Banco de Dados: MySQL
- ORM: Drizzle

## 3. Padrao Arquitetural

Adotaremos um monolito modular com divisao em camadas.

```text
projeto-aula-2/
├── drizzle/
├── src/
│   ├── config/
│   │   └── swagger.ts
│   ├── db/
│   │   ├── index.ts
│   │   └── schema/
│   │       ├── usuarios.ts
│   │       ├── pacientes.ts
│   │       ├── consultas.ts
│   │       └── prontuarios.ts
│   ├── core/
│   │   ├── errors/
│   │   └── middlewares/
│   ├── modules/
│   │   ├── usuarios/
│   │   │   ├── usuarios.routes.ts
│   │   │   ├── usuarios.controller.ts
│   │   │   ├── usuarios.service.ts
│   │   │   └── usuarios.repository.ts
│   │   ├── pacientes/
│   │   ├── consultas/
│   │   └── prontuarios/
│   └── server.ts
├── .env
├── .gitignore
├── drizzle.config.ts
├── package.json
└── tsconfig.json
```

## 4. Padroes de Desenvolvimento e Qualidade

- Nomenclatura: variaveis e funcoes em ingles com camelCase
- Commits: uso de Conventional Commits
- Revisao: todo codigo deve passar por Pull Request
- Documentacao: Swagger obrigatorio para rotas novas

## 5. Estrategia de Banco de Dados

- O Drizzle Kit deve versionar as alteracoes de banco.
- Relatorios devem respeitar o limite de desempenho definido nos RNFs.
- Os schemas devem ficar centralizados em `src/db/schema/`.
