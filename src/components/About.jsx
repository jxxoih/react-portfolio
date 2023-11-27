import styles from "styles/modules/About.module.css";

const About = (props) => {
    const { aboutData, isMobile } = props;

    return (
        <div className={styles.aboutWrap + " about"}>
            <div className={styles.aboutContent}>
                <div className={isMobile ? styles.aboutTitleM : styles.aboutTitle}>
                    <p className="wrapTitle">
                        About Me.
                    </p>
                </div>
                <div className={styles.aboutContext}>
                    <p className={styles.aboutContextTitle}>
                        {aboutData?.p_about_title}
                    </p>
                    <p className={styles.aboutContexts}>
                        {aboutData?.p_about_context}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;