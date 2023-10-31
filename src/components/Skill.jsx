import styles from "styles/Skill.module.css";

import { useState } from "react";

import * as config from "config";
import * as appUtill from "utills/appUtill";
import { useEffect } from "react";

const Skill = (props) => {
    const [result, setResult] = useState([]);
    const [fieldResult, setFieldResult] = useState([]);

    const skillList = props.data.SKILL_LIST;
    const skills = props.data.SKILLS;

    useEffect(() => {
        appUtill.resolveData(config.SKILL_ACTION).then((resolvedData) => setResult(resolvedData));
        appUtill.resolveData(config.SKILL_FIELD_ACTION).then((resolvedData) => setFieldResult(resolvedData));
    }, []);

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
                                    {!!result &&
                                        result.map((data) => (
                                            data.sf_id == field.sf_id && 
                                            <li
                                                style={{ backgroundImage: `url(${config.IMG_PATH + data.s_img})` }}
                                                key={data.s_id}
                                                className={!!data?.url ? styles.setUrl : ""}
                                                onClick={(e) => props.func("", e)}
                                            >
                                                <div className={styles.iconHover}>
                                                    {
                                                        data.s_name
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
                {/* {skillList.map((item, idx) => (
                    <div className={styles.skillList} key={idx}>
                        <div className={props.isMobile ? styles.skillMobileBox : styles.skillBox}>
                            <p className={props.isMobile ? styles.stackTitleMobile : styles.stackTitle}>{item.title}</p>
                            <ul>
                                {item[skills[idx]].map(skill => (
                                    <li
                                        style={{ backgroundImage: `url(${config.IMG_PATH + skill.img})` }}
                                        key={skill.name}
                                        className={!!skill.url ? styles.setUrl : ""}
                                        onClick={(e) => props.func(skill.url, e)}
                                    >
                                        <div className={styles.iconHover}>
                                            {skill.description}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default Skill;