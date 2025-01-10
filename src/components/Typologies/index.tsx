import { FC, useState, useEffect } from "react";
import style from "./style.module.css";
import Typology from "../Typology";
import { typology as TypologyType, TypologyArray } from "../../types/typology";

const Typologies: FC = () => {
  const [typologyData, setTypologyData] = useState<TypologyArray>([]);
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
        const data: TypologyArray = await response.json();
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
          {typologyData.map((item: TypologyType) => (
            <Typology key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Typologies;
