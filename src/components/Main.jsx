import styles from "styles/modules/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";
import { useState } from "react";
import { useEffect } from "react";

const mainText = "개발자 강지호입니다.";

const Main = (props) => {
    const [mainTitle, setMainTitle] = useState("");
    const [count, setCount] = useState(0);

    const { isMobile, aboutData, skillData, workData } = props;
    const { company, project, projectSkill } = workData;

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
                isMobile={isMobile}
                aboutData={aboutData}
            />

            <Work
                func={returnUrl}
                isMobile={isMobile}
                companyData={company}
                projectData={project}
                projectSkillData={projectSkill}
            />
            <Skill
                func={returnUrl}
                isMobile={isMobile}
                skillDataList={skillData}
            />
            <Contact
                email={aboutData?.p_email}
            />
        </div>
    );
}

export default Main;