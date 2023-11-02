import styles from "styles/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";
import { useState } from "react";
import { useEffect } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

const mainText = "개발자 강지호입니다.";

const Main = (props) => {
    const [mainTitle, setMainTitle] = useState("");
    const [count, setCount] = useState(0);

    const {company, project, projectSkill} = props.workData;

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
                aboutData={props.aboutData[0]}
            />

            <Work
                func={returnUrl}
                isMobile={props.isMobile}
                companyData={company}
                projectData={project}
                projectSkillData={projectSkill}
            />
            <Skill
                func={returnUrl}
                isMobile={props.isMobile}
                skillData={props.skillData}
            />
            <Contact
                email={props.aboutData[0]?.p_email}
            />

        </div>
    );
}

export default Main;