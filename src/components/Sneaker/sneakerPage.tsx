import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/products.json";
import Sneaker from "../Sneaker";

const SneakerPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const sneaker = productData.find(
    (product) => product.id === parseInt(id || "", 10)
  );

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSelect = (size: number) => {
    setSelectedSize(size === selectedSize ? null : size); // Убираем выбор, если повторно нажали
  };

  if (!sneaker) {
    return <p>Кроссовок не найден</p>;
  }

  return (
    <Sneaker
      data={sneaker}
      selectedSize={selectedSize}
      onSelect={handleSelect}
    />
  );
};

export default SneakerPage;
