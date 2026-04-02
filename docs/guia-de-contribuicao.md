# Guia de Contribuicao

## 1. Fluxo de Trabalho

- `main`: contem apenas codigo estavel e revisado
- `develop`: branch de integracao do time
- `feature/*`: branch individual para cada tarefa
- Commits semanticos:
  - `feat:` para novas funcionalidades
  - `fix:` para correcoes
  - `docs:` para documentacao

## 2. Padroes de Codigo

- Nao usar `any`
- Toda entrada via `req.body` deve ser validada com Zod
- Usar nomes descritivos
- Manter tipagem explicita em Typescript

## 3. Arquitetura em Camadas

1. Routes: definem caminhos e chamam controllers
2. Controllers: recebem `req` e `res`
3. Services: concentram regras de negocio
4. Repositories: unico ponto de acesso ao banco via Drizzle

## 4. Processo de Code Review

- Todo trabalho deve ser enviado por Pull Request
- O codigo deve ser revisado por pelo menos um colega
- A aprovacao final deve validar aderencia aos requisitos funcionais

## 5. Registro de Decisoes

- Toda conversa tecnica relevante deve ser registrada
- Duvidas sobre requisitos devem aparecer no PR ou em issue
- Novas rotas devem atualizar a documentacao Swagger

## 6. Comandos Basicos

```bash
git checkout develop
git pull origin develop
git checkout -b feature/minha-tarefa
git add .
git commit -m "feat: minha alteracao"
git push origin feature/minha-tarefa
```
