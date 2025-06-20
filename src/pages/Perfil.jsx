import { useState } from "react";
import { Link } from "react-router-dom";
import MenuInferior from "../components/MenuInferior";

export default function Perfil() {
  const [nome, setNome] = useState("Usuário Teste");
  const [email, setEmail] = useState("teste@email.com");

  const editarPerfil = () => {
    const novoNome = prompt("Novo nome:", nome);
    const novoEmail = prompt("Novo email:", email);
    if (novoNome && novoEmail) {
      setNome(novoNome);
      setEmail(novoEmail);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-red-800 text-white text-center py-6">
        <h1 className="text-xl font-bold">Meu Perfil</h1>
      </div>

      <div className="flex flex-col items-center p-6">
        <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3">
          {nome[0]}
        </div>
        <h2 className="font-bold text-lg">{nome}</h2>
        <p>{email}</p>
        <button onClick={editarPerfil} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Editar Perfil</button>
      </div>

      <div className="px-6">
        <Link to="/enderecos" className="block bg-white p-4 rounded shadow mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-red-600">📍</span>
            <span className="text-lg">Meus Endereços</span>
          </div>
          <span className="text-gray-500">➔</span>
        </Link>

        <Link to="/pagamentos" className="block bg-white p-4 rounded shadow mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-blue-600">💳</span>
            <span className="text-lg">Formas de Pagamento</span>
          </div>
          <span className="text-gray-500">➔</span>
        </Link>

        <Link to="/" className="block bg-red-600 text-white text-center py-3 rounded shadow mt-6">Sair</Link>
      </div>

      <MenuInferior />
    </div>
  );
}