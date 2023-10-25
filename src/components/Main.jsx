import styles from "styles/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";
import { useState } from "react";
import { useEffect } from "react";

import * as data from "data";

const mainText = "개발자 강지호 입니다.";

const Main = (props) => {
    const [mainTitle, setMainTitle] = useState("");
    const [count, setCount] = useState(0);

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

    return (
        <div>
            <div className={styles.mainContent + " main"}>
                <p className={styles.typer}>
                    {mainTitle}
                </p>
            </div>

            <About 
            isMobile={props.isMobile} 
            data={data.ABOUT_ME} 
            />
            <Work 
            func={returnUrl}
             isMobile={props.isMobile}
             data={data}
             />
            <Skill 
            func={returnUrl} 
            isMobile={props.isMobile}
            data={data}
            />
            <Contact />

        </div>
    );
}

export default Main;