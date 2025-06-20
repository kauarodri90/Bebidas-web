import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import bcrypt from "bcryptjs"; // Biblioteca para criptografar senhas no frontend
import api from "../services/api"; // Instância do Axios para requisições

export default function PaginaCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      // Criptografa a senha antes de enviar ao backend
      const senhaCriptografada = await bcrypt.hash(senha, 10);

      await api.post("/usuarios", {
        nome,
        email,
        senha: senhaCriptografada, // Senha já vem criptografada
        id_permissao: 2,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-700">Criar Conta</h1>
        <p className="text-sm text-center text-gray-500 mb-4">
          Crie sua conta para pedir sua bebida!
        </p>
        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition"
          >
            Cadastrar
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
