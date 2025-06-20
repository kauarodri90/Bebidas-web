import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/PaginaCadastro";
import Inicio from "./pages/PaginaInicial";
import Cardapio from "./pages/Cardapio";
import Perfil from "./pages/Perfil";
import Pedidos from "./pages/Pedidos";
import Carrinho from "./pages/Carrinho";
import Pagamentos from "./pages/Pagamentos";
import Enderecos from "./pages/Endereco";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/pagamentos" element={<Pagamentos />} />
      <Route path="/enderecos" element={<Enderecos />} />
    </Routes>
  );
}

export default App;
