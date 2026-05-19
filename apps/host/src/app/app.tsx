import React, { Suspense } from 'react';

// @ts-ignore
const RemoteHeader = React.lazy(() => import('header/Module'));
// @ts-ignore
const RemoteCards = React.lazy(() => import('cards/Module'));
// @ts-ignore
const RemoteFooter = React.lazy(() => import('footer/Module'));

export function App() {
  return (
    <div >
      
      <Suspense fallback={<div>Carregando Header...</div>}>
        <RemoteHeader />
      </Suspense>

        <Suspense fallback={<div>Carregando Produtos...</div>}>
          <RemoteCards />
        </Suspense>
  

      <Suspense fallback={<div>Carregando Footer...</div>}>
        <RemoteFooter />
      </Suspense>

    </div>
  );
}

export default App;