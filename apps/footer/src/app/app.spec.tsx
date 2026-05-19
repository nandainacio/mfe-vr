import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

afterEach(() => cleanup());

import { App } from './app';

describe('Footer Component (App)', () => {
  it('renders logo and text', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 VR Benefícios/i)).toBeTruthy();
    const img = screen.getByAltText(/vr logo/i);
    expect(img).toBeTruthy();
  });
  
  it('contains an hr separator', () => {
    render(<App />);
    const separador = screen.getByRole('separator');
    expect(separador).toBeTruthy();
  });
});

