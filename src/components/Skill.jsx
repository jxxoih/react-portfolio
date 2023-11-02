import styles from "styles/Skill.module.css";

import * as config from "config";

const Skill = (props) => {
    const { fieldResult, skillData } = props.skillData;

    return (
        <div className={styles.skillWrap + " skills"}>
            <div className={styles.skillTitle}>
                <p className="wrapTitle">
                    Skills.
                </p>
            </div>
            <div className={props.isMobile ? styles.skillMobileContent : styles.skillContent}>
                {!!fieldResult &&
                    fieldResult.map((field, fidx) => (
                        <div className={styles.skillList} key={fidx}>
                            <div className={props.isMobile ? styles.skillMobileBox : styles.skillBox}>
                                <p className={props.isMobile ? styles.stackTitleMobile : styles.stackTitle}>{field.sf_name}</p>
                                <ul>
                                    {!!skillData &&
                                        skillData.map((data) => (
                                            data.sf_id == field.sf_id &&
                                            <li
                                                style={{ backgroundImage: `url(${config.IMG_PATH + data.s_img})` }}
                                                key={data.s_id}
                                                className={!!data?.s_id === 12 ? styles.setUrl : ""}
                                                onClick={data.s_id === 12 ? (e) => props.func(`https://github.com/${data.p_github}`, e) : console.log()}
                                            >
                                                <div className={styles.iconHover}>
                                                    {
                                                        data.s_id === 12 ?
                                                            data.p_github
                                                            : data.s_name
                                                    }
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skill;