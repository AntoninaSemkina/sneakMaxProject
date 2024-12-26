import { FC, useState, useEffect } from "react";
import style from "./style.module.css";
import ProductTypology from "../productTypology";
import { Typology } from "../../types/typology";

const ProductsTypology: FC = () => {
  const [typologyData, setTypologyData] = useState<Typology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypologyData = async () => {
      try {
        const response = await fetch(
          "https://c6de376cf2e227cc.mokky.dev/typology"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data: Typology[] = await response.json();
        setTypologyData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTypologyData();
  }, []);

  if (loading) {
    return <div className={style.loading}>Loading typologies...</div>;
  }

  if (error) {
    return <div className={style.error}>Error loading typologies: {error}</div>;
  }

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {typologyData.map((typologyItem) => (
            <ProductTypology key={typologyItem.id} data={typologyItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTypology;
