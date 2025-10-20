export type VendaType = {
  id: number;
  clienteId: string;
  carroId: number;
  // inline oculos shape so components don't need to import OculosType
  oculos?: {
    id?: number;
    nome?: string;
    tipo?: string;
    preco?: number | string;
    foto?: string;
    [key: string]: any;
  } | null;
  descricao: string;
  resposta: string | null;
  createdAt: string;
  updatedAt: string | null;
};