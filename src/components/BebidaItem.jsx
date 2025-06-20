export default function BebidaItem({ nome, descricao, preco, imagem }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      {imagem && (
        <img
          src={imagem}
          alt={nome}
          className="w-20 h-20 object-cover rounded"
        />
      )}
      <div className="flex-1">
        <h3 className="font-bold text-lg text-blue-800">{nome}</h3>
        <p className="text-sm text-gray-600">{descricao}</p>
        <p className="mt-2 text-green-600 font-semibold">A partir de R$ {preco}</p>
      </div>
    </div>
  );
}
