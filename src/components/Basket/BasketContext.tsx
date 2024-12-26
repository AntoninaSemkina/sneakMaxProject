import React, { createContext, useContext, useState, ReactNode } from "react";
import { product } from "../../types/product";

type BasketItem = product & {
  selectedSize: number;
};

type BasketContextType = {
  items: BasketItem[];
  addItem: (item: BasketItem) => void;
  removeItem: (id: number, size: number) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<BasketItem[]>([]);

  const addItem = (item: BasketItem) => {
    const exists = items.some(
      (existingItem) =>
        existingItem.id === item.id &&
        existingItem.selectedSize === item.selectedSize
    );

    if (!exists) {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeItem = (id: number, size: number) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.selectedSize === size)
      )
    );
  };

  return (
    <BasketContext.Provider value={{ items, addItem, removeItem }}>
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
