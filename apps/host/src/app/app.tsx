import React, { Suspense } from 'react';
import { CartProvider, useCart } from './context/cartContext';

// @ts-ignore
const RemoteHeader = React.lazy(() => import('header/Module'));
// @ts-ignore
const RemoteCards = React.lazy(() => import('cards/Module'));
// @ts-ignore
const RemoteFooter = React.lazy(() => import('footer/Module'));

function LayoutHost() {
  const { carrinho, adicionarAoCarrinho } = useCart();

  return (
    <div>
      <Suspense fallback={<div>Carregando Header...</div>}>
        <RemoteHeader carrinho={carrinho} />
      </Suspense>

      <Suspense fallback={<div>Carregando Produtos...</div>}>
        <RemoteCards adicionarAoCarrinho={adicionarAoCarrinho} />
      </Suspense>

      <Suspense fallback={<div>Carregando Footer...</div>}>
        <RemoteFooter />
      </Suspense>
    </div>
  );
}

export function App() {
  return (
  <CartProvider>
      <LayoutHost />
    </CartProvider>
  );
}

export default App;