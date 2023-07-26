import React from 'react';
import { useStore } from 'effector-react';
import LocationSVG from '../LocationSVG/LocationSVG';
import { $mode } from '@/context/mode';
import styles from '@/styles/cityButton/cityButton.module.scss';

const CityButton = () => {
    const mode = useStore($mode)
    const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
    return (
        <button className={styles.city}>
            <span className={`${styles.city__span} ${darkModeClass}`}>
                <LocationSVG />
                </span>
            <span className={`${styles.city__text} ${darkModeClass}`}>Moscow</span>
        </button>
    );
};

export default CityButton;