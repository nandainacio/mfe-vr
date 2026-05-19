export default function FakeHeader({ carrinho }: { carrinho: unknown[] }) {
  return <div data-testid="remote-header">Header | carrinho: {carrinho.length}</div>;
}
