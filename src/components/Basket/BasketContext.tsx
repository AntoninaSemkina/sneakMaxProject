import React, { createContext, useContext, useState, ReactNode } from "react";
import { product } from "../../types/product";

type BasketContextType = {
  items: product[];
  addItem: (item: product) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<product[]>([]);

  const addItem = (item: product) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <BasketContext.Provider value={{ items, addItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
