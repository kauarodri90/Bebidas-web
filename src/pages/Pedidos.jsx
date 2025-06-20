import { useEffect, useState } from "react";
import { listarPedidos } from "../services/pedidoService";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    listarPedidos().then(setPedidos).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-4">Meus Pedidos</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="mb-4 p-4 bg-white rounded shadow">
            <p className="font-semibold">Pedido #{pedido.id}</p>
            <p>Status: {pedido.status?.descricao}</p>
            <p>Data: {new Date(pedido.data).toLocaleDateString()}</p>
            <p>Pagamento: {pedido.pagamento?.nome}</p>
            <p>Endereço: {pedido.endereco?.rua}, {pedido.endereco?.numero}</p>
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
    </div>
  );
}