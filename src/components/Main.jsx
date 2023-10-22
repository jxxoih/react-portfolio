import styles from "styles/Main.module.css";

const imgPath = process.env.PUBLIC_URL + "/img/";

const skillList = [
    {
        "front": [
            {
                name: "html"
                , description: "Project"
                , img: "html.png"
            }
            , {
                name: "css"
                , description: "Project"
                , img: "css.png"
            }
            , {
                name: "js"
                , description: "Project"
                , img: "javascript.png"
            }
            , {
                name: "react"
                , description: "Project"
                , img: "react.png"
            }
        ]
        , title: "Front-end"
    }
    , {
        "back": [
            {
                name: "java"
                , description: "Project"
                , img: "java.png"
            }
            , {
                name: "spring"
                , description: "Project"
                , img: "spring.png"
            }
            , {
                name: "php"
                , description: "Project"
                , img: "php.png"
            }
            , {
                name: "node"
                , description: "Learning.."
                , img: "node.png"
            }
        ]
        , title: "Back-end"
    }
    , {
        "dbms": [
            {
                name: "mySQL"
                , description: "MySQL"
                , img: "mysql.png"
            }
            , {
                name: "mariaDB"
                , description: "MariaDB"
                , img: "mariadb.png"
            }
        ]
        , title: "DBMS"
    }
    , {
        "vc": [
            {
                name: "git"
                , description: "Git"
                , img: "git.jpeg"
            }
            , {
                name: "github"
                , description: "GitHub"
                , img: "github.png"
            }
        ]
        , title: "Version Control"
    }
    , {
        "communication": [
            {
                name: "zeplin"
                , description: "Zeplin"
                , img: "zeplin.png"
            }
            , {
                name: "figma"
                , description: "Figma"
                , img: "figma.png"
            }
        ]
        , title: "Communication"
    }
]

const skills = [
    "front",
    "back",
    "dbms",
    "vc",
    "communication"
]

const workList = [
    {
        "주식회사키키": [
            {
                content: "키키 사장님페이지"
                , work: "기능개발 및 유지보수(프론트, 백엔드)"
                , datetime: "2022-04-01 ~ 2022-12-31"
            }
            , {
                content: "키키 관리자페이지"
                , work: "기능개발 및 유지보수(프론트, 백엔드)"
                , datetime: "2022-04-01 ~ 2022-12-31"
            }
            , {
                content: "키키 포스프로그램(POS)"
                , work: "POS 프로그램 유지보수 및 REST API를 이용해 외부 배달대행사 API 연동(프론트, 백엔드)"
                , datetime: "2022-05-01 ~ 2022-12-31"
            }
            , {
                content: "키키 채팅서비스 웹뷰"
                , work: "키키 앱에 들어갈 채팅서비스 기능 일부 웹뷰 UI 및 로직 구현"
                , datetime: "2022-10-01 ~ 2022-11-01"
            }
        ]
        , workDT: "2022-04 ~ 2023-01"
        , companyNm: "주식회사키키"
    }
    , {
        "제이앤제이": [
            {
                content: "(주)대화공업 B2B"
                , work: "쇼핑몰 개발(프론트, 백엔드)"
                , datetime: "2023-01-02 ~ 2023-06-30"
            }
            , {
                content: "(주)대화공업 홈페이지"
                , work: "디자인 외 모든 작업(프론트엔드)"
                , datetime: "2023-01-02 ~ 2023-02-01"
            }
            , {
                content: "크레텍 사내메신저"
                , work: "일부 UI 작업 참여(프론트엔드)"
                , datetime: "2023-05-01 ~ 2023-06-01"
            }
        ]
        , workDT: "2023-01 ~ 2023-07"
        , companyNm: "제이앤제이"
    }
]

const company = [
    "주식회사키키", "제이앤제이"
]

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

            <div className={styles.workWrap + " work"}>
                <div className={styles.workContext}>
                    <div className={styles.workTitle}>
                        <p>
                            Work.
                        </p>
                    </div>
                    <div className={styles.workContent}>
                        {workList.map((item, idx) => (
                            <div className={styles.wokrs}>
                                <div className={styles.companyNm}>
                                    <p>
                                        {item.companyNm}
                                    </p>
                                    <p className={styles.workDt}>
                                        {item.workDT}
                                    </p>
                                </div>
                                {item[company[idx]].map(work => (
                                    <div className={styles.workingList}>
                                        <p>
                                            {work.content}
                                        </p>
                                        <p className={styles.work}>
                                            {work.work}
                                            <span className={styles.bar}>|</span>
                                            {work.datetime}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.skillWrap + " skills"}>
                <div className={styles.skillTitle}>
                    <p>
                        Skills.
                    </p>
                </div>
                <div className={styles.skillContent}>
                    {skillList.map((item, idx) => (
                        <div className={styles.skillList}>
                            <div className={styles.skillBox}>
                                <p className={styles.stackTitle}>{item.title}</p>
                                <ul>
                                    {item[skills[idx]].map(skill => (
                                        <li style={{ backgroundImage: `url(${imgPath + skill.img})` }}>
                                            <div className={styles.iconHover}>
                                                {skill.description}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;