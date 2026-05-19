import vrLogo from '../assets/logo_vr_branco.png';
import imgCompras from '../assets/btn_compras.png';
import styles from './app.module.css';
import { useState } from 'react';

interface HeaderProps {
  carrinho?: any[];
}

export function App({ carrinho = [] }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quantidadeItens = carrinho.length;
  
  return (
    <div className={styles.container}>
      <img className={styles.logoBranco} src={vrLogo} alt="VR Logo" />
      <button className={styles.botaoCarrinho} onClick={() => setIsModalOpen(!isModalOpen)}>
        <img
          src={imgCompras}
          className={styles.imgCompras}
          alt="Ícone do Carrinho"
        />
        <span className={styles.contador}>{quantidadeItens}</span>
      </button>

      {isModalOpen && (
        <div className={styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Compras ({quantidadeItens})</h2>
              <button className={styles.botaoFechar} onClick={() => setIsModalOpen(false)}>✕</button>
            </div>

            <div className={styles.modalCorpo}>
              {carrinho.length === 0 ? (
                <p className={styles.carrinhoVazio}>Seu carrinho está vazio.</p>
              ) : (
                <div className={styles.listaProdutos}>
                  {carrinho.map((produto, index) => (
                    <div key={index} className={styles.itemCarrinho}>
                      <img 
                        src={produto.images[0]} 
                        alt={produto.title} 
                        className={styles.fotoMiniatura} 
                      />
                      <div className={styles.infoItem}>
                        <p className={styles.nomeItem}>{produto.title}</p>
                        <p className={styles.precoItem}>R$ {produto.price?.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {carrinho.length > 0 && (
              <div className={styles.modalFooter}>
                <div className={styles.totalContainer}>
                  <span>Total:</span>
                  <strong>
                    R$ {carrinho.reduce((acc, prod) => acc + (prod.price || 0), 0).toFixed(2)}
                  </strong>
                </div>
                <div className={styles.btnAcoes}>
                <button className={styles.botaoFinalizar}>Finalizar Compra</button>
                <button className={styles.botaoCancelar} onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
