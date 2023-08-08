import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBestsellersOrNewPartsFx } from "@/app/api/boilerparts";
import BrandSlider from "@/components/modules/DashboardPage/BrandSlider";
import { IBoilerPart } from "@/types/boilerparts";
import styles from "@/styles/dashboard/dashboard.module.scss";
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";

export const DashboardPage = () => {
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";

  const [newParts, setNewParts] = useState([]);
  const [bestsellers, setBestsellers] = useState<IBoilerPart[]>([]);

  useEffect(() => {
    loadBoilerParts();
  }, []);

  const loadBoilerParts = async () => {
    try {
      const bestsellers = await getBestsellersOrNewPartsFx(
        "/boiler-parts/bestsellers"
      );
      const newParts = await getBestsellersOrNewPartsFx("/boiler-parts/new");

      setBestsellers(bestsellers);
      setNewParts(newParts);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <div className={styles.dashboard__brands}>
          <BrandSlider />
        </div>
        <h2 className={`${styles.dashboard__title} ${darkModeClass}`}>
          We have a beautiful Hamsters
        </h2>
        <div className={`${styles.dashboard__parts}`}>
            <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
                Хиты продаж
            </h3>
        </div>
      </div>
    </section>
  );
};
