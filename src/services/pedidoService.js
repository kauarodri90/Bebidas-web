import api from './api';

export async function criarPedido(pedido) {
  return await api.post('/pedidos', pedido);
}

export async function listarPedidos() {
  const resposta = await api.get('/pedidos');
  return resposta.data;
}
