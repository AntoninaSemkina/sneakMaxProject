import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sneaker from "../Sneaker";
import { product } from "../../types/product";

const SneakerPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sneaker, setSneaker] = useState<product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSneaker = async () => {
      try {
        const response = await fetch(
          `https://c6de376cf2e227cc.mokky.dev/sneakers/${id}`
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data: product = await response.json();
        setSneaker(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // Обработка ошибки, если это экземпляр Error
        } else {
          setError("Произошла неизвестная ошибка"); // На случай других типов ошибок
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSneaker();
  }, [id]);

  const handleSelect = (size: number) => {
    setSelectedSize(size === selectedSize ? null : size); // Убираем выбор, если повторно нажали
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

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
