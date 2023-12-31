import Slider from "react-slick";
import { useEffect } from "react";
import Link from "next/link";
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IDashboardSlider } from "@/types/dashboard";
import { formatPrice } from "@/utils/common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/dashboard/dashboard.module.scss";
import skeletonstyles from "@/styles/skeleton/skeleton.module.scss";

const DashboardSlider = ({ items, spinner, goToPartPage }: IDashboardSlider) => {
    const isMedia768 = useMediaQuery(768);
    const isMedia1366 = useMediaQuery(1366);
    const isMedia800 = useMediaQuery(800);
    const isMedia560 = useMediaQuery(560);
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";


  useEffect(() => {
    const slider = document.querySelectorAll(`.${styles.dashboard__slider}`);

    slider.forEach((item) => {
      const list = item.querySelector('.slick-list') as HTMLElement

      list.style.height = isMedia560 ? '276px' : '390px'
      list.style.padding = '0 5px'
      list.style.marginRight = isMedia560 ? '-8px' : isMedia800 ? '-15px' : '0'
    }) 
  }, [isMedia560, isMedia800]);

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToScroll: isMedia768 ? 1 : 2
  };

  const width = {
    width: isMedia1366 ? (isMedia800 ? (isMedia560 ? 160 : 252) : 317) : 344
  }

  return (
    <Slider {...settings} className={styles.dashboard__slider}>
      {spinner ? (
        [...Array(8)].map((item) => (
          <div
            className={`${skeletonstyles.skeleton__item} ${
              mode === "dark" ? `${skeletonstyles.dark_mode}` : ""
            }`}
            key={item}
            style={width}
          >
            <div className={skeletonstyles.skeleton__item__light} />
          </div>
        ))
      ) : items.length ? (
        items.map((item) => (
          <div
            key={item.id}
            className={`${styles.dashboard__slide} ${darkModeClass}`}
            style={width}
          >
            <img src={JSON.parse(item.images)[0]} alt={item.name} />
            <div className={styles.dashboard__slide__inner}>
              <Link href={goToPartPage ? `/catalog/${item.id}` : "/catalog"} legacyBehavior passHref>
                <a href="">
                  <h3 className={styles.dashboard__slide__title}>
                    {item.name}
                  </h3>
                </a>
              </Link>
              <span className={styles.dashboard__slide__code}>Артикул: {item.vendor_code}</span>
              <span className={styles.dashboard__slide__price}>{formatPrice(item.price)} P</span>
            </div>
          </div>
        ))
      ) : (
        <span>Список товаров пуст ....</span>
      )}
    </Slider>
  );
};

export default DashboardSlider;
