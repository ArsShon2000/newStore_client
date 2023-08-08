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
import { IDashboardSlider } from "@/types/dashboard";

const DashboardSlider = ({ items, spinner }: IDashboardSlider) => {
  const isMedia768 = useMediaQuery(768);
  const mode = useStore($mode);
  const darkModeClass = mode === "dark" ? `${styles.dark_mode}` : "";


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
      {spinner ? (
        [...Array(8)]
      )}
    </Slider>
  );
};

export default DashboardSlider;
