import { useState } from "react";
import MenuInferior from "../components/MenuInferior";

export default function Pagamentos() {
  const [pagamentos, setPagamentos] = useState([
    { id: 1, tipo: "Cartão de Crédito", detalhes: "Final 1234" },
    { id: 2, tipo: "Pix", detalhes: "chave@email.com" },
  ]);
  const [editandoId, setEditandoId] = useState(null);
  const [novoTipo, setNovoTipo] = useState("");
  const [novosDetalhes, setNovosDetalhes] = useState("");

  const iniciarEdicao = (pagamento) => {
    setEditandoId(pagamento.id);
    setNovoTipo(pagamento.tipo);
    setNovosDetalhes(pagamento.detalhes);
  };

  const salvarEdicao = (id) => {
    if (!novoTipo || !novosDetalhes) return;
    setPagamentos(
      pagamentos.map((p) => (p.id === id ? { ...p, tipo: novoTipo, detalhes: novosDetalhes } : p))
    );
    setEditandoId(null);
  };

  const excluirPagamento = (id) => {
    setPagamentos(pagamentos.filter((p) => p.id !== id));
  };

  const adicionarPagamento = () => {
    const novoId = Math.max(...pagamentos.map(p => p.id), 0) + 1;
    setPagamentos([...pagamentos, { id: novoId, tipo: "", detalhes: "" }]);
    setEditandoId(novoId);
    setNovoTipo("");
    setNovosDetalhes("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-red-700">Formas de Pagamento</h1>
      <div className="grid gap-4">
        {pagamentos.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            {editandoId === p.id ? (
              <div className="grid gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tipo de Pagamento</label>
                  <input
                    value={novoTipo}
                    onChange={(ev) => setNovoTipo(ev.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Ex: Cartão de Crédito ou Debito , Pix "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Detalhes</label>
                  <input
                    value={novosDetalhes}
                    onChange={(ev) => setNovosDetalhes(ev.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Ex: Número do cartão"
                  />
                </div>
                <div className="mt-2">
                  <button onClick={() => salvarEdicao(p.id)} className="bg-green-600 text-white px-4 py-2 rounded mr-2">Salvar</button>
                  <button onClick={() => setEditandoId(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-red-700">{p.tipo}</h3>
                <p>{p.detalhes}</p>
                <div className="mt-2">
                  <button onClick={() => iniciarEdicao(p)} className="text-blue-600 mr-4">Editar</button>
                  <button onClick={() => excluirPagamento(p.id)} className="text-red-600">Excluir</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={adicionarPagamento} className="mt-6 bg-red-600 text-white px-4 py-2 rounded shadow">
        + Nova Forma de Pagamento
      </button>
      <MenuInferior/>
    </div>
  );
}