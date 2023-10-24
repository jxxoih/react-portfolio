import styles from "styles/Main.module.css";

import About from "components/About.jsx";
import Work from "components/Work";
import Skill from "components/Skill";
import Contact from "components/Contact";
import { useState } from "react";
import { useEffect } from "react";

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
        if (count === mainText.length) {  // count를 따로 두지 않고 mainTitle.length 체크도 가능
            clearInterval(interval); 
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    });

    console.log(props);

    return (
        <div>
            <div className={styles.mainContent + " main"}>
                <p className={styles.typer}>
                    {mainTitle}
                </p>
            </div>

            <About />
            <Work func={returnUrl} />
            <Skill func={returnUrl} />
            <Contact />


        {/* 
        work : 작업내용 모바일 PC class이름 다르게 하거나 컴포넌트 하나 만들어야됨
        */}
        </div>
    );
}

export default Main;