export default function FakeCards({
  adicionarAoCarrinho,
}: {
  adicionarAoCarrinho: (item: unknown) => void;
}) {
  return (
    <div data-testid="remote-cards">
      <button onClick={() => adicionarAoCarrinho({ id: 1, nome: 'Produto A' })}>
        Adicionar produto
      </button>
    </div>
  );
}
