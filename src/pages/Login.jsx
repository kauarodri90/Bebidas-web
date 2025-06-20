import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", {
        email: email.trim(),
        senha: senha.trim(),
      });

      localStorage.setItem("token", response.data.token);
      navigate("/inicio");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-700">
          Bem-vindo!
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="text-blue-700 underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
