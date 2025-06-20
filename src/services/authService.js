import api from "./api";

export async function fazerLogin(email, senha) {
  const response = await api.post("/login", { email, senha });
  localStorage.setItem("token", response.data.token);
  return response.data.usuario;
}
