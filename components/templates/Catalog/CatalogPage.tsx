import { useStore } from "effector-react";
import { $mode } from '@/context/mode';
import styles from "@/styles/catalog/catalog.module.scss";
import { AnimatePresence } from "framer-motion";
import ManufacturersBlock from "@/components/modules/CatalogPage/ManufacturersBlock";
import FilterSelect from "@/components/modules/CatalogPage/FilterSelect";
import { getBoilerPartsFx } from "@/app/api/boilerparts";

const CatalogPage = () => {
    const mode = useStore($mode);
    const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";

    const loadBoilerParts = async () => {
        try {
            const data = await getBoilerPartsFx('/boiler-parts?limit=20&offset=0')
        } catch (error) {
            
        }
    }

    return (
        <section className={styles.catalog}>
            <div className={`container ${styles.catalog__container}`}>
                <h2 className={`${styles.catalog__title} ${darkModeClass}`}>Каталог товаров</h2>
                <div className={`${styles.catalog__top} ${darkModeClass}`}>
                    <AnimatePresence>
                        <ManufacturersBlock title="Парода" />
                    </AnimatePresence>
                    <AnimatePresence>
                        <ManufacturersBlock title="Виды" />
                    </AnimatePresence>
                    <div className={styles.catalog__top__inner}>
                        Сбросить фильтр
                    </div>
                    <FilterSelect />
                </div>
                <div className={`${styles.catalog__bottom} ${darkModeClass}`}>
                    <div className={styles.catalog__bottom__inner}>
                        <div className={styles.catalog__bottom}>Filters</div>
                        <ul className={styles.catalog__list}>
                            {[].map((item) => (
                                <li key={item}></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;