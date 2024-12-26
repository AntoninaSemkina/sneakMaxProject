import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Sneaker from "../../components/Sneaker";
import { product } from "../../types/product";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sneaker, setSneaker] = useState<product | null>(null);
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
          setError(error.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSneaker();
  }, [id]);

  const handleClose = () => {
    navigate(-1); // Возвращаемся на предыдущую страницу
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
    <div className={style.container}>
      <div className={style.overlay}>
        <div className={style.modal}>
          <div className={style.page}>
            <button onClick={handleClose} className={style.closeButton}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
                  fill="var(--button-red-color)"
                />
              </svg>
            </button>
            <Sneaker data={sneaker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
