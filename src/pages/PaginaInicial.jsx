import { Link } from "react-router-dom";
import MenuInferior from "../components/MenuInferior";

export default function PaginaInicial() {
  const maisVendidas = [
    {
      nome: "Heineken Long Neck",
      preco: 15,
      imagem: "https://via.placeholder.com/60?text=Heineken",
    },
    {
      nome: "Red Bull",
      preco: 12,
      imagem: "https://via.placeholder.com/60?text=Red+Bull",
    },
    {
      nome: "Vodka Absolut",
      preco: 70,
      imagem: "https://via.placeholder.com/60?text=Absolut",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-red-800 text-white px-6 py-4 text-center">
        <h1 className="text-2xl font-bold">TomaAe</h1>
      </div>

      <div className="px-4 mt-4">
        <input
          type="text"
          placeholder="Busque por uma bebida..."
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="my-6 px-4">
        <img
          src="https://via.placeholder.com/900x200?text=Promocao+do+Dia"
          alt="banner"
          className="rounded-lg shadow"
        />
      </div>

      <div className="px-4">
        <h2 className="text-lg font-bold text-red-700 mb-3">Mais Vendidas</h2>
        <div className="grid gap-3">
          {maisVendidas.map((bebida, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg p-3 shadow"
            >
              <img
                src={bebida.imagem}
                alt={bebida.nome}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-red-800 font-semibold">{bebida.nome}</h3>
                <p className="text-green-600 font-medium">A partir de R$ {bebida.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MenuInferior />
    </div>
  );
}