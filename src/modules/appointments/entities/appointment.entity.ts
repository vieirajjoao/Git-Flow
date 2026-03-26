/**
 * Data: 2026-03-26
 * Hora: 16:04
 * Autor: Savio de Brito Oliveira Filho
 * Descricao: Implementacao completa da entidade Consulta com status, relacionamentos e metadados.
 * Finalidade: Representar o atendimento entre paciente e profissional de saude.
 */
export const CONSULTA_STATUS = {
  AGENDADA: "agendada",
  CONCLUIDA: "concluida",
  CANCELADA: "cancelada",
} as const;

export type ConsultaStatus = (typeof CONSULTA_STATUS)[keyof typeof CONSULTA_STATUS];

export const CONSULTA_FINALIDADE =
  "Representar o atendimento entre paciente e profissional de saude.";

export interface ConsultaRelacionamentos {
  id_paciente: number;
  id_usuario: number;
}

export interface ConsultaMetadados {
  criado_em: Date;
  atualizado_em: Date;
}

export interface Consulta extends ConsultaRelacionamentos, ConsultaMetadados {
  id_consulta: number;
  data_hora: Date;
  status: ConsultaStatus;
  obs: string | null;
}
