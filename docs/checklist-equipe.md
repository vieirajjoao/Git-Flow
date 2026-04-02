# Checklist da Equipe

## Checklist Geral

- Ler os documentos em `docs/`
- Trabalhar a partir de `develop`
- Criar branch `feature/*` propria
- Implementar somente o proprio escopo
- Revisar diff antes de commit
- Fazer push para a branch correta
- Abrir Pull Request para `develop`

## Savio de Brito Oliveira Filho - Consulta

- Ler RF003, RF004, UC001, UC002 e RNE02
- Implementar a entidade ou schema `Consulta`
- Garantir os campos: `id_consulta`, `id_paciente`, `id_usuario`, `data_hora`, `status`, `obs`, `criado_em`, `atualizado_em`
- Relacionar `Consulta` com `Paciente` por `id_paciente`
- Relacionar `Consulta` com `Usuario` por `id_usuario`
- Considerar a restricao de nao permitir dois pacientes para o mesmo medico no mesmo horario
- Registrar alteracoes no PR e no log tecnico, se usado

## Thalles Resende Marques - Usuario

- Ler RF001 e RNF003
- Implementar a entidade ou schema `Usuario`
- Garantir os campos: `id_usuario` ou `CPF`, `perfil`, `senha_usuario`, `nome_usuario`, `email_usuario`, `CRM_usuario`
- Tratar `CRM_usuario` como obrigatorio apenas para perfil medico
- Definir claramente os perfis `admin`, `medico` e `atendente`
- Validar com o time a estrategia final entre `id_usuario` e `CPF` como identificador principal

## Lucas Moura Nunes de Oliveira - Paciente

- Ler RF002, UC001 e as regras de historico do paciente
- Implementar a entidade ou schema `Paciente`
- Garantir os campos: `nome_paciente`, `data_nascimento_paciente`, `id_paciente`, `endereco_paciente`, `telefone_paciente`, `convenio_medico_paciente`, `hf`, `hs`
- Avaliar com o time a melhor representacao de `consultas_paciente` e `prontuarios_existentes_paciente` no banco
- Manter o cadastro preparado para relacao com consultas e prontuarios

## Felipe Moreira Barcelos - Prontuario

- Ler RF005, UC002 e RNE03
- Implementar a entidade ou schema `Prontuario`
- Garantir os campos: `nome`, `medico`, `idade do paciente`, `anamnese`
- Validar com o time a inconsistencia do campo `id_produto`, porque o nome nao parece coerente com prontuario
- Relacionar o prontuario com a consulta ou com o atendimento conforme a modelagem final do time
- Garantir que o prontuario reflita o atendimento realizado pelo medico responsavel

## Murilo - Revisao Geral

- Conferir aderencia aos requisitos funcionais e nao funcionais
- Revisar nomenclatura, padrao de pastas e consistencia de tipagem
- Verificar se cada integrante alterou somente o proprio escopo
- Revisar se os Pull Requests estao apontando para `develop`
- Consolidar duvidas de modelagem antes do merge
