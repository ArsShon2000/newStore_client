import { IBrandSliderArrow } from "@/types/elements";
import BrandsSliderArrowSvg from "../BrandsSliderArrow/BrandsSliderArrow";
import styles from "@/styles/dashboard/dashboard.module.scss";

const BrandsSliderNextArrow = (props: IBrandSliderArrow) => (
        <button className={`${styles.dashboard__brands__slider__arrow} ${styles.dashboard__brands__slider__arrow_next} ${props.modeClass}`}
        onClick={props.onClick}>
            <span><BrandsSliderArrowSvg /></span>
        </button>
    );


export default BrandsSliderNextArrow;