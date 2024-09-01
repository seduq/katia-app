export function translateFormButton(
  editing: boolean,
  isCreating: boolean,
  isUpdating: boolean,
  isDelete?: boolean,
  isDeleting?: boolean
): string {
  if(isDelete) {
    return isDeleting ? "Apagando" : "Apagar"
  }
  else if (editing) {
    return isUpdating ? "Atualizando" : "Atualizar";
  } else {
    return isCreating ? "Salvando" : "Salvar";
  }
}
