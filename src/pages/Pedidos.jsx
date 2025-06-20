import { useEffect, useState } from "react";
import { listarPedidos } from "../services/pedidoService";
import MenuInferior from "../components/MenuInferior";
import { useLocation } from "react-router-dom";// Hook para acessar o estado da navegação

export default function Pedidos() {
  // Estado para armazenar os pedidos
  const [pedidos, setPedidos] = useState([]);
  const location = useLocation();
  const sucesso = location.state?.sucesso || false;

  // useEffect executa ao carregar a página - busca os pedidos da API
  useEffect(() => {
    listarPedidos().then(setPedidos).catch(console.error);// Atualiza o estado com os dados recebidos
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-700 mb-4">Meus Pedidos</h1>

      {sucesso && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Pedido realizado com sucesso!
        </div>
      )}

      {pedidos.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="mb-4 p-4 bg-white rounded shadow">
            <p className="font-semibold">Pedido #{pedido.id}</p>
            <p>Status: {pedido.status?.descricao}</p>
            <p>Data: {new Date(pedido.data).toLocaleDateString()}</p>
            <p>Pagamento: {pedido.pagamento?.nome}</p>
            <p>
              Endereço: {pedido.endereco?.rua}, {pedido.endereco?.numero}
            </p>
            <p className="mt-2 font-semibold">Itens:</p>
            <ul className="list-disc list-inside">
              {pedido.itens.map((item, index) => (
                <li key={index}>
                  Produto ID: {item.id_produto} | Quantidade: {item.quantidade} | Preço: R$ {item.preco_unitario}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      <MenuInferior />
    </div>
  );
}
