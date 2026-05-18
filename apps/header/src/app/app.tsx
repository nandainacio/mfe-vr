import vrLogo from '../assets/logo_vr_branco.png';
import imgCompras from '../assets/btn_compras.png';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <img className={styles.logoBranco} src={vrLogo} alt="VR Logo" />
      <button className={styles.botaoCarrinho} onClick={() => alert('Carrinho clicado!')}>
        <img
          src={imgCompras}
          className={styles.imgCompras}
          alt="Ícone do Carrinho"
        />
        <span className={styles.contador}>0</span>
      </button>
    </div>
  );
}

export default App;
