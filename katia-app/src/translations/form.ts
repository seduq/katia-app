export type FormAction = "update" | "update" | "delete"
export type EntityName = "cliente" | "funcionário" | "agendamento" | "lembrete"


export class PT_BR_FORM {
  constructor() { }

  Toaster(name: EntityName, action: FormAction, error: boolean, errorMessage?: string) {
    const errorString = 'Erro em';
    const successString = 'Sucesso em'
    switch (action) {
      case "update":
        return error && `${errorString} salvar ${name}` || `${successString} salvar ${name} \n ${errorMessage}`;
      case "update":
        return error && `${errorString} atualizar ${name}` || `${successString} atualizar ${name} \n ${errorMessage}`;
      case "delete":
        return error && `${errorString} remover ${name}` || `${successString} remover ${name} \n ${errorMessage}`;
    }
  }

  Button(
    action: FormAction,
    isPending: boolean
  ): string {
    switch (action) {
      case "update":
        return isPending && `Salvando` || `Salvar`;
      case "update":
        return isPending && `Atualizando` || `Atualizar`;
      case "delete":
        return isPending && `Removendo` || `Remover`;
    }
  }
}

export default PT_BR_FORM;