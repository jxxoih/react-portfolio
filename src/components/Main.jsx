import styles from "styles/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";
import { useState } from "react";
import { useEffect } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

import * as data from "data";

const mainText = "개발자 강지호입니다.";

const Main = (props) => {
    const [mainTitle, setMainTitle] = useState("");
    const [count, setCount] = useState(0);
    const [aboutData, setAboutData] = useState([]);

    const returnUrl = (url, e) => {
        if (url) {
            window.open(url, "_blank", "noopener, noreferrer");
        }

        e.preventDefault();

        return;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setMainTitle(mainTitle + mainText[count]);
            setCount(count + 1);
        }, 150);
        if (count === mainText.length) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    useEffect(() => {
        appUtill.resolveData(config.ABOUT_ACTION).then((resolvedData) => setAboutData(resolvedData));
    }, [])

    return (
        <div>
            <div className={styles.mainContent + " main"}>
                <p className={styles.typer}>
                    {mainTitle}
                </p>
            </div>

            <About
                isMobile={props.isMobile}
                data={aboutData}
            />
            <Work
                func={returnUrl}
                isMobile={props.isMobile}
            />
            <Skill
                func={returnUrl}
                isMobile={props.isMobile}
            />
            <Contact />

        </div>
    );
}

export default Main;