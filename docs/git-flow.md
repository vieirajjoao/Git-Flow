# Git Flow do Projeto

## Conceitos

- `main`: versao pronta e aprovada
- `develop`: branch de integracao do time
- `feature/*`: branch individual por tarefa
- `pull request`: etapa de revisao antes do merge
- `hotfix/*`: correcao urgente saindo da `main`

## Fluxo Obrigatorio

1. Atualizar `develop`
2. Criar branch `feature/*`
3. Implementar a tarefa isoladamente
4. Enviar commit e push
5. Abrir Pull Request para `develop`
6. Passar por revisao
7. Integrar em `develop`

## Regras Criticas

- Nunca trabalhar direto na `main`
- Nunca fazer push direto na `main`
- Evitar misturar tarefas de integrantes diferentes na mesma branch
- Antes de abrir PR, revisar diff e sincronizar com `develop`

## Exemplo de Rotina

```bash
git checkout develop
git pull origin develop
git checkout -b feature/minha-tarefa
git add .
git commit -m "feat: implementa minha tarefa"
git push origin feature/minha-tarefa
```
