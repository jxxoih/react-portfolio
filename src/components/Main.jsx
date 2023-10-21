import styles from "styles/Main.module.css";

const imgPath = process.env.PUBLIC_URL + "/img/";
const skillList = {

    "front": [
        {
            name: "html"
            , lv: 5
            , img: "html.png"
        }
        , {
            name: "css"
            , lv: 5
            , img: "css.png"
        }
        , {
            name: "js"
            , lv: 5
            , img: "javascript.png"
        }
        , {
            name: "react"
            , lv: 5
            , img: "react.png"
        }
    ]

    , "back": [
        {
            name: "java"
            , lv: 5
            , img: "java.png"
        }
        , {
            name: "spring"
            , lv: 5
            , img: "spring.png"
        }
        , {
            name: "php"
            , lv: 5
            , img: "php.png"
        }
        , {
            name: "node"
            , lv: 5
            , img: "node.png"
        }
    ]
    , "db": [
        {
            name: "mySQL"
            , lv: 5
            , img: "mysql.png"
        }
        , {
            name: "mariaDB"
            , lv: 5
            , img: "mariaDB"
        }
    ]
}

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
                            <p className={styles.stackTitle}>Front-end</p>
                            <ul>
                                {skillList["front"].map(item => (
                                    <li style={{ backgroundImage: `url(${imgPath + item.img})` }}>
                                        <div className={styles.iconHover}>
                                            {item.lv}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.skillList}>
                        <div className={styles.skillBox}>
                        <p className={styles.stackTitle}>Back-end</p>
                            <ul>
                                {skillList["back"].map(item => (
                                    <li style={{ backgroundImage: `url(${imgPath + item.img})` }}>
                                        <div className={styles.iconHover}>
                                            {item.lv}
                                        </div>
                                    </li>
                                ))}
                            </ul>
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