import styles from "styles/About.module.css";

const About = () => {
    return (
        <div className={styles.aboutWrap + " about"}>
            <div className={styles.aboutTitle}>
                <p>
                    About Me.
                </p>
            </div>
            <div className={styles.aboutContext}>
                <p className={styles.aboutContextTitle}>나는 강지호</p>
                <p className={styles.aboutContent}>개.발.자.다</p>
            </div>
        </div>
    );
}

export default About;