import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

afterEach(() => cleanup());

import { App } from './app';

describe('Header Component (App)', () => {
  it('renders and toggles modal', () => {
    render(<App carrinho={[]} />);

    const botoes = screen.getAllByRole('button');
    const botao = botoes[0];
    expect(botao).toBeTruthy();


    fireEvent.click(botao);
    expect(screen.getByText(/seu carrinho está vazio/i)).toBeTruthy();


    const fechar = screen.getByText('✕');
    fireEvent.click(fechar);

    expect(screen.queryByText(/seu carrinho está vazio/i)).toBeNull();
  });

  it('shows items and total when carrinho has items', () => {
    const items = [{ title: 'P1', images: ['x'], price: 10 }];
    render(<App carrinho={items as any} />);

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    expect(screen.getByText(/compras \(1\)/i)).toBeTruthy();
    expect(screen.getByText('P1')).toBeTruthy();
    expect(screen.getByText(/total:/i)).toBeTruthy();
  });

  it('cancels and closes modal when clicking Cancel', () => {
    const items = [{ title: 'P1', images: ['x'], price: 10 }];
    render(<App carrinho={items as any} />);

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    const cancelar = screen.getByText(/cancelar/i);
    fireEvent.click(cancelar);

    expect(screen.queryByText(/compras \(1\)/i)).toBeNull();
  });
});

