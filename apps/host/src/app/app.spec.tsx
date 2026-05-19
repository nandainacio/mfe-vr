import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


vi.mock('header/Module', () => ({
  default: ({ carrinho }: { carrinho: unknown[] }) => (
    <div data-testid="remote-header">carrinho: {carrinho.length}</div>
  ),
}));

vi.mock('cards/Module', () => ({
  default: ({ adicionarAoCarrinho }: { adicionarAoCarrinho: (item: unknown) => void }) => (
    <button onClick={() => adicionarAoCarrinho({ id: 1 })}>Adicionar produto</button>
  ),
}));

vi.mock('footer/Module', () => ({
  default: () => <div data-testid="remote-footer">Footer</div>,
}));


const mockAdicionar = vi.fn();
vi.mock('./context/cartContext', () => ({
  CartProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useCart: () => ({ carrinho: [], adicionarAoCarrinho: mockAdicionar }),
}));


vi.mock('react', async () => {
  const actual = await vi.importActual<typeof React>('react');
  return {
    ...actual,
    lazy: (fn: () => Promise<{ default: React.ComponentType<any> }>) => {
      let Component: React.ComponentType<any> | null = null;
      fn().then((mod) => { Component = mod.default; });
      return (props: any) => Component ? <Component {...props} /> : null;
    },
  };
});

import { App } from './App';

describe('App', () => {
  it('renderiza sem erros', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('exibe o header com o carrinho', () => {
    render(<App />);
    expect(screen.getByTestId('remote-header')).toHaveTextContent('carrinho: 0');
  });

  it('exibe o footer', () => {
    render(<App />);
    expect(screen.getByTestId('remote-footer')).toBeInTheDocument();
  });

  it('chama adicionarAoCarrinho ao clicar no botão', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: /adicionar produto/i }));
    expect(mockAdicionar).toHaveBeenCalledWith({ id: 1 });
  });
});
