import axios from "axios";

const API_URL = "http://localhost:3000";

export async function criarPedido(pedido) {
  const response = await axios.post(`${API_URL}/pedidos`, pedido);
  return response.data;
}

export async function listarPedidos() {
  const response = await axios.get(`${API_URL}/pedidos`);
  return response.data;
}