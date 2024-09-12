export class PT_BR_FORM {
  constructor () {

  }

  Button(
    editing: boolean,
    isCreating: boolean,
    isUpdating: boolean,
    isDelete?: boolean,
    isDeleting?: boolean
  ): string {
    if (isDelete) {
      return isDeleting ? "Apagando" : "Apagar"
    }
    else if (editing) {
      return isUpdating ? "Atualizando" : "Atualizar";
    } else {
      return isCreating ? "Salvando" : "Salvar";
    }
  }
}

export default PT_BR_FORM;