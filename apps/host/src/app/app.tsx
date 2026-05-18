import React, { Suspense } from 'react';

// @ts-ignore
const RemoteHeader = React.lazy(() => import('header/Module'));
// @ts-ignore
const RemoteCards = React.lazy(() => import('cards/Module'));
// @ts-ignore
const RemoteFooter = React.lazy(() => import('footer/Module'));

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#F3F4F6', fontFamily: 'sans-serif' }}>
      
      <Suspense fallback={<div style={{ padding: '1rem', background: '#1F2937', color: '#fff' }}>Carregando Header...</div>}>
        <RemoteHeader />
      </Suspense>

      <main style={{ flex: '1', padding: '2rem' }}>
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <h2 style={{ color: '#111827' }}>Vitrine de Produtos VR</h2>
        </div>
        
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Carregando Produtos...</div>}>
          <RemoteCards />
        </Suspense>
      </main>

      <Suspense fallback={<div style={{ padding: '1rem', textAlign: 'center' }}>Carregando Footer...</div>}>
        <RemoteFooter />
      </Suspense>

    </div>
  );
}

export default App;