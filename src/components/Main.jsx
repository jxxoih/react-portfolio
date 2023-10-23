import styles from "styles/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";

const Main = () => {
    const returnUrl = (url, e) => {
        if (url) {
            window.open(url, "_blank", "noopener, noreferrer");
        }

        e.preventDefault();

        return;
    }


    return (
        <div>
            <div className={styles.mainContent + " main"}>
            </div>

            <About />
            <Work func={returnUrl} />
            <Skill func={returnUrl} />
            <Contact />

        </div>
    );
}

export default Main;