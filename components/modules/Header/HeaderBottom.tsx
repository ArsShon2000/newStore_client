import { useStore } from "effector-react";
import { $mode } from "@/context/mode";
import Link from "next/link";
import SearchSvg from "@/components/elements/SearchSvg/SearchSvg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SearchInput from './../../elements/Header/SearchInput';
import { ModeToggler } from "@/components/elements/modeToggler/ModeToggler";
import CartPopup from "./CartPopup/CartPopup";
import styles from "@/styles/header/index.module.scss";

const HeaderBottom = () => {
  const isMedia950 = useMediaQuery(950);
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";

  return (
    <div className={styles.header__bottom}>
      <div className={`container ${styles.header__bottom__container}`}>
        <h1 className={styles.header__logo}>
          <Link href="/dashboard" legacyBehavior passHref>
            <a className={styles.header__logo__link}>
              <img src="/img/logo.svg" alt="logo" />
              <span
                className={`${styles.header__logo__link__text} ${darkModeClass}`}
              >
                Милые хомячки
              </span>
            </a>
          </Link>
        </h1>
        <div className={styles.header__search}>
            <SearchInput />
            <button className={`${styles.header__search__btn} ${darkModeClass}`}>
                <span className={styles.header__search__btn__span}>
                    <SearchSvg />
                </span>
            </button>
        </div>
        <div className={styles.header__shopping_cart}>
            {!isMedia950 &&  <ModeToggler />}
            <CartPopup />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
