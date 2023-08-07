import Link from "next/link";
import React from "react";
import styles from "@/styles/footer/footer.module.scss";

const FooterLogo = () => (
  <div className={styles.footer__top__item}>
    <Link href="/dashboard" passHref legacyBehavior>
      <a className={styles.footer__top__item__logo}>
        <img src="/img/footer-logo.svg" alt="logo" />
        <span className={styles.footer__top__item__logo__text}>Милые хомячки</span>
      </a>
    </Link>
  </div>
);

export default FooterLogo;
