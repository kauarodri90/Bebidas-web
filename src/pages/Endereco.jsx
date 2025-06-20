import { useState } from "react";
import MenuInferior from "../components/MenuInferior";

export default function Enderecos() {
  const [enderecos, setEnderecos] = useState([
    { id: 1, apelido: "Casa", rua: "Rua das Flores, 123" },
    { id: 2, apelido: "Trabalho", rua: "Av. Brasil, 456" },
  ]);
  const [editandoId, setEditandoId] = useState(null);
  const [novoApelido, setNovoApelido] = useState("");
  const [novaRua, setNovaRua] = useState("");

  const iniciarEdicao = (endereco) => {
    setEditandoId(endereco.id);
    setNovoApelido(endereco.apelido);
    setNovaRua(endereco.rua);
  };

  const salvarEdicao = (id) => {
    if (!novoApelido || !novaRua) return;
    setEnderecos(enderecos.map((e) => (e.id === id ? { ...e, apelido: novoApelido, rua: novaRua } : e)));
    setEditandoId(null);
  };

  const excluirEndereco = (id) => {
    setEnderecos(enderecos.filter((e) => e.id !== id));
  };

  const adicionarEndereco = () => {
    const novoId = Math.max(...enderecos.map(e => e.id), 0) + 1;
    setEnderecos([...enderecos, { id: novoId, apelido: "", rua: "" }]);
    setEditandoId(novoId);
    setNovoApelido("");
    setNovaRua("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-red-700">Meus Endereços</h1>
      <div className="grid gap-4">
        {enderecos.map((e) => (
          <div key={e.id} className="bg-white p-4 rounded shadow">
            {editandoId === e.id ? (
              <div className="grid gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Apelido (ex: Casa, Trabalho)</label>
                  <input
                    value={novoApelido}
                    onChange={(ev) => setNovoApelido(ev.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Digite o apelido do endereço"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rua, número e complemento</label>
                  <input
                    value={novaRua}
                    onChange={(ev) => setNovaRua(ev.target.value)}
                    className="border p-2 w-full rounded"
                    placeholder="Digite o endereço completo"
                  />
                </div>
                <div className="mt-2">
                  <button onClick={() => salvarEdicao(e.id)} className="bg-green-600 text-white px-4 py-2 rounded mr-2">Salvar</button>
                  <button onClick={() => setEditandoId(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-red-700">{e.apelido}</h3>
                <p>{e.rua}</p>
                <div className="mt-2">
                  <button onClick={() => iniciarEdicao(e)} className="text-blue-600 mr-4">Editar</button>
                  <button onClick={() => excluirEndereco(e.id)} className="text-red-600">Excluir</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={adicionarEndereco} className="mt-6 bg-red-600 text-white px-4 py-2 rounded shadow">
        + Novo Endereço
      </button>
      <MenuInferior/>
    </div>
  );
}