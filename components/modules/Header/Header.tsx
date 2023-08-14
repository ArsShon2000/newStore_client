import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import styles from '@/styles/header/index.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};