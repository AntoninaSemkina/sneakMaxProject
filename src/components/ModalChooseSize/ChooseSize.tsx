import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { product } from "../../types/product";
import ChooseSize from "../../components/ModalChooseSize";

const ChooseSizePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sneaker, setSneaker] = useState<product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleBack = () => navigate("/catalog");

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
    <div>
      {isModalOpen && (
        <ChooseSize
          data={sneaker}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default ChooseSizePage;
