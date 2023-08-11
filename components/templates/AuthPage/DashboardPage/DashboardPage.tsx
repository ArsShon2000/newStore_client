import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { toast } from "react-toastify";
import { getBestsellersOrNewPartsFx } from "@/app/api/boilerparts";
import BrandSlider from "@/components/modules/DashboardPage/BrandSlider";
import { IBoilerParts } from "@/types/boilerparts";
import { $mode } from "@/context/mode";
import styles from "@/styles/dashboard/dashboard.module.scss";
import DashboardSlider from "@/components/modules/DashboardPage/DashboardSlider";

export const DashboardPage = () => {
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";

  const [newParts, setNewParts] = useState<IBoilerParts>({} as IBoilerParts);
  const [bestsellers, setBestsellers] = useState<IBoilerParts>({} as IBoilerParts);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    loadBoilerParts();
  }, []);

  const loadBoilerParts = async () => {
    try {
        setSpinner(true)
      const bestsellers = await getBestsellersOrNewPartsFx(
        "/boiler-parts/bestsellers"
      );
      const newParts = await getBestsellersOrNewPartsFx("/boiler-parts/new");

      setBestsellers(bestsellers);
      setNewParts(newParts);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
        setSpinner(false)
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
            <DashboardSlider items={bestsellers.rows || []} spinner={spinner}/>
        </div>
      </div>
    </section>
  );
};
