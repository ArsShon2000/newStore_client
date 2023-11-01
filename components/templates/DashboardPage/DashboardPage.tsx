import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import CartAlert from "@/components/modules/DashboardPage/CartAlert";
import { getBestsellersOrNewPartsFx } from "@/app/api/boilerparts";
import BrandSlider from "@/components/modules/DashboardPage/BrandSlider";
import { IBoilerParts } from "@/types/boilerparts";
import { $mode } from "@/context/mode";
import DashboardSlider from "@/components/modules/DashboardPage/DashboardSlider";
import { $shoppingCart } from '@/context/shopping-cart';
import styles from "@/styles/dashboard/dashboard.module.scss";

export const DashboardPage = () => {
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";

  const [newParts, setNewParts] = useState<IBoilerParts>({} as IBoilerParts);
  const [bestsellers, setBestsellers] = useState<IBoilerParts>({} as IBoilerParts);
  const [spinner, setSpinner] = useState(false);
  const shoppingCart = useStore($shoppingCart);
  const [showAlert, setShowAlert] = useState(!!shoppingCart.length)

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

  const closeAlert = () => setShowAlert(false)

  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{opacity: 0 }}
              animate={{opacity: 1 }}
              exit={{opacity: 0 }}
              className={`${styles.dashboard__alert} ${darkModeClass}`}
            >
              <CartAlert count={shoppingCart.length} closeAlert={closeAlert} />
            </motion.div>
          )}
        </AnimatePresence>
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
        <div className={`${styles.dashboard__parts}`}>
            <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
                Новинки
            </h3>
            <DashboardSlider items={newParts.rows || []} spinner={spinner}/>
        </div>
        <div className={`${styles.dashboard__about}`}>
            <h3 className={`${styles.dashboard__parts__title} ${styles.dashboard__about__title} ${darkModeClass}`}>
                О компании
            </h3>
            <p className={`${styles.dashboard__about__text} ${darkModeClass}`}>qwertyuioplkjhgfdsazxcvbnm</p>
        </div>
      </div>
    </section>
  );
};
