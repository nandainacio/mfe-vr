import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { App } from './app';
import { getProdutos } from './service/cardService';

afterEach(() => cleanup());

vi.mock('./service/cardService', () => ({
  getProdutos: vi.fn(),
}));

const mockGetProdutos = getProdutos as unknown as any;

const mockProdutosFicticios = [
  {
    id: 1,
    title: 'Produto Teste 1',
    description: 'Descrição longa do produto 1 para teste de layout.',
    price: 100,
    images: ['https://via.placeholder.com/150'],
  },
  {
    id: 2,
    title: 'Produto Teste 2',
    description: 'Descrição longa do produto 2 para teste de layout.',
    price: 250.5,
    images: ['https://via.placeholder.com/150'],
  }
];

describe('Cards Component (App)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading then products and allows adding to cart', async () => {
    mockGetProdutos.mockResolvedValue(mockProdutosFicticios);
    const mockAdicionar = vi.fn();

    render(<App adicionarAoCarrinho={mockAdicionar} />);


    expect(screen.getByText(/carregando produtos.../i)).toBeTruthy();

    await waitFor(() => {
      expect(screen.queryByText(/carregando produtos.../i)).toBeNull();
    });


    expect(screen.getByText('Produto Teste 1')).toBeTruthy();
    expect(screen.getByText('Descrição longa do produto 1 para teste de layout.')).toBeTruthy();

    const botoes = screen.getAllByRole('button', { name: /compras/i });
    expect(botoes.length).toBe(2);

    fireEvent.click(botoes[0]);
    expect(mockAdicionar).toHaveBeenCalledTimes(1);
  });

  it('shows error when service fails', async () => {
    mockGetProdutos.mockRejectedValue(new Error('API error'));

    render(<App adicionarAoCarrinho={vi.fn()} />);

    await waitFor(() => {
      expect(screen.getByText(/não foi possível carregar os produtos/i)).toBeTruthy();
    });
  });
});
