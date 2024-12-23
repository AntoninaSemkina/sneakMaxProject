import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import { size } from "../../types/size";
import Size from "../size";

interface SizesProps {
  selectedSizes: number[];
  onSelectSize: (size: number) => void;
}

const Sizes: FC<SizesProps> = ({ selectedSizes, onSelectSize }) => {
  const [sizeData, setSizeData] = useState<size[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await fetch(
          "https://c6de376cf2e227cc.mokky.dev/sizes"
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data: size[] = await response.json();
        setSizeData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSizes();
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {sizeData.map((member: size) => (
            <Size
              key={member.id}
              data={member}
              isSelected={selectedSizes.includes(member.size)}
              onSelect={() => onSelectSize(member.size)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
