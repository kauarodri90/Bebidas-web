import { useState } from "react";
import MenuInferior from "../components/MenuInferior";

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar uma bebida ao carrinho
  const adicionarAoCarrinho = (bebida) => {
    const existente = carrinho.find((item) => item.nome === bebida.nome);// Verifica se a bebida já está no carrinho
    if (existente) {
      existente.quantidade++;// Se já existe, incrementa a quantidade
      setCarrinho([...carrinho]);
    } else {
      setCarrinho([...carrinho, { ...bebida, quantidade: 1 }]);// Caso contrário, adiciona com quantidade 1
    }
  };

  // Lista de bebidas disponíveis no cardápio
  const bebidas = [
    { nome: "Heineken Long Neck", descricao: "Cerveja puro malte 330ml.", preco: 9.99, imagem: "https://via.placeholder.com/60?text=Heineken" },
    { nome: "Red Bull", descricao: "Energético original 250ml.", preco: 12, imagem: "https://via.placeholder.com/60?text=Red+Bull" },
    { nome: "Whisky Red Label", descricao: "Whisky Red Label, ideal para drinks.", preco: 99, imagem: "https://via.placeholder.com/60?text=Whisky" },
    { nome: "Brahma", descricao: "Cerveja Brahma lata.", preco: 7.99, imagem: "https://via.placeholder.com/60?text=Brahma" },
    { nome: "Coca-Cola", descricao: "Refrigerante Coca-Cola lata 350ml.", preco: 6, imagem: "https://via.placeholder.com/60?text=Coca-Cola" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20 p-4">
      <h1 className="text-2xl font-bold mb-6 text-red-700">Cardápio de Bebidas</h1>
      <div className="grid gap-4">
        {bebidas.map((bebida, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 flex gap-4 items-center">
            <img src={bebida.imagem} alt={bebida.nome} className="w-16 h-16 rounded" />
            <div className="flex-1">
              <h3 className="font-bold text-red-800">{bebida.nome}</h3>
              <p className="text-sm text-gray-600">{bebida.descricao}</p>
              <p className="text-green-600 font-semibold">A partir de R$ {bebida.preco}</p>
            </div>
            <button onClick={() => adicionarAoCarrinho(bebida)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">+</button>
          </div>
        ))}
      </div>
      <MenuInferior />
    </div>
  );
}