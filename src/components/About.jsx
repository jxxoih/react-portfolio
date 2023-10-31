import styles from "styles/About.module.css";

import * as appUtill from "utills/appUtill";
import * as config from "config";
import { useState } from "react";
import { useEffect } from "react";

const About = (props) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        appUtill.resolveData(config.ABOUT_ACTION).then((resolvedData) => setResult(resolvedData));
    }, []);


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