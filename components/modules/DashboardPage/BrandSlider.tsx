import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import styles from "@/styles/dashboard/dashboard.module.scss";
import BrandsSliderNextArrow from "@/components/elements/BrandsSliderNextArrow/BrandsSliderNextArrow";
import BrandsSliderPrevArrow from "@/components/elements/BrandsSliderPrevArrow/BrandsSliderPrevArrow";

const BrandSlider = () => {
  const isMedia768 = useMediaQuery(768);
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";
  const brandItems = [
    { id: 1, img: "/img/brand-1.png", alt: "brand-1" },
    { id: 2, img: "/img/brand-2.png", alt: "brand-2" },
    { id: 3, img: "/img/brand-3.png", alt: "brand-3" },
    { id: 4, img: "/img/brand-4.png", alt: "brand-4" },
    { id: 5, img: "/img/brand-1.png", alt: "brand-1" },
    { id: 6, img: "/img/brand-2.png", alt: "brand-2" },
    { id: 7, img: "/img/brand-3.png", alt: "brand-3" },
    { id: 8, img: "/img/brand-4.png", alt: "brand-4" },
    { id: 9, img: "/img/brand-1.png", alt: "brand-1" },
    { id: 10, img: "/img/brand-2.png", alt: "brand-2" },
    { id: 11, img: "/img/brand-3.png", alt: "brand-3" },
    { id: 12, img: "/img/brand-4.png", alt: "brand-4" },
  ];

  useEffect(() => {
    const slider = document.querySelector(
      `.${styles.dashboard__brands__slider}`
    );

    const list = slider?.querySelector(".slick-list") as HTMLElement;

    list.style.height = isMedia768 ? "60px" : "80px";
  }, [isMedia768]);

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: <BrandsSliderNextArrow modeClass={darkModeClass} />,
    prevArrow: <BrandsSliderPrevArrow modeClass={darkModeClass} />,
  };
  return (
    <Slider {...settings} className={styles.dashboard__brands__slider}>
      {brandItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.dashboard__brands__slide} ${darkModeClass}`}
          style={{ width: isMedia768 ? 124 : 180 }}
        >
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
