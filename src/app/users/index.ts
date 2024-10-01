import UserService from "../../services/UserService";

export async function getAll() {
  // se llama a la capa de servicios
  const { data } = await UserService.getAll();

  // acá se aplicarían los adapters en caso de ser necesarios

  return data;
}
