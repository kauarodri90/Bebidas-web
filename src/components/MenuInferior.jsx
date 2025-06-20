import { NavLink } from "react-router-dom";
import { FaHome, FaGlassCheers, FaShoppingCart, FaClipboardList, FaUser } from "react-icons/fa";

export default function MenuInferior() {
  const base = "flex flex-col items-center justify-center text-xs";
  const ativo = "text-blue-700";
  const inativo = "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-2 border-t">
      <NavLink to="/inicio" className={({ isActive }) => `${base} ${isActive ? ativo : inativo}`}>
        <FaHome size={20} />
        Início
      </NavLink>
      <NavLink to="/cardapio" className={({ isActive }) => `${base} ${isActive ? ativo : inativo}`}>
        <FaGlassCheers size={20} />
        Cardápio
      </NavLink>
      <NavLink to="/carrinho" className={({ isActive }) => `${base} ${isActive ? ativo : inativo}`}>
        <FaShoppingCart size={20} />
        Carrinho
      </NavLink>
      <NavLink to="/pedidos" className={({ isActive }) => `${base} ${isActive ? ativo : inativo}`}>
        <FaClipboardList size={20} />
        Pedidos
      </NavLink>
      <NavLink to="/perfil" className={({ isActive }) => `${base} ${isActive ? ativo : inativo}`}>
        <FaUser size={20} />
        Perfil
      </NavLink>
    </nav>
  );
}
