import styles from "styles/About.module.css";

const About = (props) => {
    const result = props.data;

    return (
        <div className={styles.aboutWrap + " about"}>
            <div className={styles.aboutContent}>
                <div className={props.isMobile ? styles.aboutTitleM : styles.aboutTitle}>
                    <p className="wrapTitle">
                        About Me.
                    </p>
                </div>
                <div className={styles.aboutContext}>
                    <p className={styles.aboutContextTitle}>
                        {result[0]?.p_about_title}
                    </p>
                    <p className={styles.aboutContexts}>
                        {result[0]?.p_about_context}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;