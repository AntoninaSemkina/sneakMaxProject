import { FC } from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/products.json";
import Sneaker from "../Sneaker";

const SneakerPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const sneaker = productData.find(
    (product) => product.id === parseInt(id || "", 10)
  );
  if (!sneaker) {
    return <p>Кроссовок не найден</p>;
  }

  return <Sneaker data={sneaker} />;
};

export default SneakerPage;
