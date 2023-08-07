

import styles from "@/styles/dashboard/dashboard.module.scss";

export const DashboardPage = () => {
    return (
        <section className={styles.dashboard}>
            <div className={`container ${styles.dashboard__container}`}>
                <div className={styles.dashboard__brands}>
                    <span></span>
                </div>
            </div>
        </section>
    );
};