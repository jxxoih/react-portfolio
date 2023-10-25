import styles from "styles/About.module.css";

const About = (props) => {
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
                        {props.data.title}
                    </p>
                    <p className={styles.aboutContexts}>
                        {props.data.context}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;