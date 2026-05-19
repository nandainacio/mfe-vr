import { useEffect, useState } from "react";
import { getProdutos } from "./service/cardService";
import styles from './app.module.css';

interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface CardsProps {
  adicionarAoCarrinho?: (produto: any) => void;
}

export function App({ adicionarAoCarrinho }: CardsProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        setLoading(true);
        const dados = await getProdutos();
        setProdutos(dados);
      } catch (err) {
        setError('Não foi possível carregar os produtos. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    carregarProdutos();
  }, []);

  if (loading) return <div className={styles.loading}>Carregando produtos...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div>
      <div className={styles.gridProdutos}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <img src={produto.images[0]} alt={produto.title} className={styles.fotoProduto} />
            <h3 className={styles.titulo}>{produto.title}</h3>
            <p className={styles.descricao}>{produto.description}</p>
            <div className={styles.footerCard}>
              <span className={styles.preco}>
                {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
              
              <button 
                className={styles.botaoComprar}
                onClick={() => adicionarAoCarrinho && adicionarAoCarrinho(produto)}
              >
                COMPRAS
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;