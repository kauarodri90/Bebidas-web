import { useState } from "react";
import MenuInferior from "../components/MenuInferior";
import { useNavigate } from "react-router-dom";
import { criarPedido } from "../services/pedidoService";

export default function Carrinho() {
  const [itens, setItens] = useState([
    { id_produto: 1, nome: "Heineken Long Neck", quantidade: 2, preco: 18.98 },
    { id_produto: 2, nome: "Brahma", quantidade: 1, preco: 7.99},
  ]);

  // Estados para controle de edição de quantidade
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [novaQuantidade, setNovaQuantidade] = useState(1);
  const navigate = useNavigate();

  // Função para remover item do carrinho
  const removerItem = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };

  // Ativa o modo de edição de quantidade
  const editarItem = (index) => {
    setEditandoIndex(index);
    setNovaQuantidade(itens[index].quantidade);
  };

  // Salva a nova quantidade editada
  const salvarEdicao = (index) => {
    const novosItens = [...itens];
    novosItens[index].quantidade = novaQuantidade;
    setItens(novosItens);
    setEditandoIndex(null);
  };

  const cancelarEdicao = () => {
    setEditandoIndex(null);
  };

  // Função para enviar o pedido para o backend
  const finalizarPedido = async () => {
    try {
      const pedido = {
        id_usuario: 1,
        id_pagamento: 1,
        id_status: 1,
        id_endereco: 1,
        data: new Date().toISOString(),
        itens: itens.map((item) => ({
          id_produto: item.id_produto,
          quantidade: item.quantidade,
          preco_unitario: item.preco,
        })),
      };

      const novoPedido = await criarPedido(pedido);
      console.log("Pedido criado com sucesso:", novoPedido);
      navigate("/pedidos", { state: { sucesso: true } });// Redireciona para tela de pedidos
    } catch (erro) {
      console.error("Erro ao criar pedido:", erro);
      alert("Erro ao finalizar pedido. Verifique os dados.");
    }
  };

  // Cálculo do total do pedido
  const total = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-red-700">Meu Carrinho</h1>
      <div className="grid gap-4">
        {itens.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <h2 className="text-lg font-bold text-red-700">{item.nome}</h2>
              {editandoIndex === index ? (
                <>
                  <input
                    type="number"
                    value={novaQuantidade}
                    min={1}
                    className="border p-1 w-20 mb-2"
                    onChange={(e) =>
                      setNovaQuantidade(Number(e.target.value))
                    }
                  />
                  <div className="space-x-2">
                    <button
                      className="bg-green-600 text-white px-2 py-1 rounded"
                      onClick={() => salvarEdicao(index)}
                    >
                      Salvar
                    </button>
                    <button
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                      onClick={cancelarEdicao}
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>Quantidade: {item.quantidade}</p>
                  <p className="text-green-600 font-semibold">
                    R$ {item.preco * item.quantidade}
                  </p>
                </>
              )}
            </div>
            {editandoIndex !== index && (
              <div className="text-right space-y-2">
                <button
                  className="text-blue-600 font-medium"
                  onClick={() => editarItem(index)}
                >
                  Editar
                </button>
                <br />
                <button
                  className="text-red-600 font-semibold"
                  onClick={() => removerItem(index)}
                >
                  Remover
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <p className="text-lg font-bold text-green-600">Total: R$ {total}</p>
        <button
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          onClick={finalizarPedido}
        >
          Finalizar Pedido
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}
