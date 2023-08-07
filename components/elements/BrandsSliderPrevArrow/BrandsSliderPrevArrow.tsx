import { IBrandSliderArrow } from "@/types/elements";
import BrandsSliderArrowSvg from "../BrandsSliderArrow/BrandsSliderArrow";
import styles from "@/styles/dashboard/dashboard.module.scss";

const BrandsSliderPrevArrow = (props: IBrandSliderArrow) => (
        <button className={`${styles.dashboard__brands__slider__arrow} ${styles.dashboard__brands__slider__arrow_prev} ${props.modeClass}`}
        onClick={props.onClick}>
            <span><BrandsSliderArrowSvg /></span>
        </button>
    );


export default BrandsSliderPrevArrow;