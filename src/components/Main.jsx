import styles from "styles/Main.module.css";

import mainImg from "assets/imgs/mainImg.jpg";
import { useState } from "react";

const Main = () => {
    return (
        <div>
            <div className={styles.mainContent + " main"}>
            </div>
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
            <div className={styles.skillWrap + " skills"}>
                <div className={styles.skillTitle}>
                    <p>
                        Skills.
                    </p>
                </div>
                <div className={styles.skillContent}>
                    <div className={styles.skillList}>
                        <div className={styles.skillBox}>
                            <p className={styles.stackTitle}>Front.</p>
                            <ul>
                                <li className={styles.htmlIcon}>
                                        <div className={styles.iconHover}>
                                            html
                                        </div>
                                </li>
                                <li className={styles.cssIcon}>CSS</li>
                                <li className={styles.jsIcon}>JavaScript</li>
                                <li className={styles.reactIcon}>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.skillList}>
                        <div className={styles.skillBox}>
                            b
                        </div>
                    </div>
                    <div className={styles.skillList}>
                        <div className={styles.skillBox}>
                            g
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;