import vrLogo from '../assets/vr_logo.png';
import styles from './app.module.css';

export function App() {
  return (
    <>
    <hr className={styles.divisor} />
    <div className={styles.footer}>
      <img
        src={vrLogo}
        className={styles.logo}
        alt="VR logo"
      />
      <p className={styles.textoFooter}>© 2026 VR Benefícios - Todos os direitos reservados  </p>
    </div>
    </>
  );
}

export default App;
