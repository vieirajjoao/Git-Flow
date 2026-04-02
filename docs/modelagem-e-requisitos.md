# Modelagem e Levantamento de Requisitos

## 1. Objetivo e Visao Geral

O sistema visa automatizar a gestao de uma clinica medica, focando no controle de usuarios, agendamentos e prontuarios eletronicos. Toda conversa tecnica e toda decisao relevante devem ser registradas para manter o projeto rastreavel.

## 2. Requisitos Funcionais

| ID | Titulo | Descricao |
| --- | --- | --- |
| RF001 | Gestao de Usuarios | O sistema deve permitir a criacao, leitura, atualizacao e exclusao de usuarios com perfis Admin, Medico e Atendente. |
| RF002 | Cadastro de Pacientes | O sistema deve permitir o registro completo de pacientes, incluindo dados demograficos e historico basico. |
| RF003 | Agenda do Medico | O sistema deve permitir que medicos visualizem sua lista de atendimentos do dia. |
| RF004 | Agendamento | O sistema deve registrar marcacoes de consultas vinculando um paciente a um medico e horario. |
| RF005 | Prontuario Eletronico | O medico deve conseguir registrar anamnese e prescricoes durante o atendimento. |
| RF006 | Relatorio de Gestao | O sistema deve gerar relatorios com a media de atendimentos por periodo. |

## 3. Requisitos Nao Funcionais

- RNF001: A emissao de relatorios de media de atendimentos deve ocorrer em no maximo 5 segundos.
- RNF002: O sistema deve ser desenvolvido obrigatoriamente para Node.js com Express.
- RNF003: Apenas usuarios com privilegios especificos podem visualizar historicos medicos.
- RNF004: O ambiente de desenvolvimento e producao deve suportar execucao em maquinas com pelo menos 1 GB de RAM.
- RNF005: A documentacao Swagger da API deve ser clara e orientar o uso correto dos endpoints.

## 4. Regras de Negocio

- RNE01: Um medico pode atender em uma clinica e ser paciente em outra dentro do mesmo sistema.
- RNE02: Nao e permitido o agendamento de dois pacientes para o mesmo medico no mesmo horario.
- RNE03: Prontuarios medicos so podem ser editados pelo medico responsavel pelo atendimento original.

## 5. Casos de Uso

### UC001: Agendar Consulta

- Ator principal: Atendente ou Recepcionista
- Precondicao: Paciente e Medico devem estar previamente cadastrados
- Fluxo principal:
  1. O atendente solicita a criacao de um agendamento.
  2. O sistema solicita ID do paciente, ID do medico e data/hora.
  3. O atendente informa os dados.
  4. O sistema valida se o horario esta disponivel.
  5. O sistema confirma o agendamento e salva no banco.
- Fluxo de excecao:
  - Se o medico ja tiver consulta no horario informado, o sistema deve retornar erro e solicitar outro horario.

### UC002: Registrar Atendimento

- Ator principal: Medico
- Precondicao: Deve existir uma consulta agendada para o horario atual
- Fluxo principal:
  1. O medico seleciona o paciente na lista de agendados do dia.
  2. O sistema abre o formulario de prontuario.
  3. O medico insere observacoes clinicas e prescricao.
  4. O medico finaliza o atendimento.
  5. O sistema altera o status da consulta para concluida.
