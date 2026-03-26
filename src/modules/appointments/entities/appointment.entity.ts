/**
 * Data: 2026-03-26
 * Hora: 15:56
 * Autor: Savio de Brito Oliveira Filho
 * Descricao: Implementacao da entidade Consulta com atributos definidos para o projeto.
 * Finalidade: Representar o atendimento entre paciente e profissional de saude.
 */
export type ConsultaStatus = "agendada" | "concluida" | "cancelada";

export interface Consulta {
  id_consulta: number;
  id_paciente: number;
  id_usuario: number;
  data_hora: Date;
  status: ConsultaStatus;
  obs: string | null;
  criado_em: Date;
  atualizado_em: Date;
}
