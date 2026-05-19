import { createContext, useState, useContext, ReactNode } from 'react';

interface Produto {
  id: number;
  title: string;
  price: number;
  images: string;
}


interface CartContextType {
  carrinho: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
}


interface CartProviderProps {
  children: ReactNode;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {

  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};