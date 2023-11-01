import styles from "styles/Skill.module.css";

import { useState } from "react";

import * as config from "config";
import * as appUtill from "utills/appUtill";
import { useEffect } from "react";

const Skill = (props) => {
    const [result, setResult] = useState([]);
    const [fieldResult, setFieldResult] = useState([]);

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
                            <p className={props.isMobile ? styles.stackTitleMobile : styles.stackTitle}>{field.sf_name}</p>
                            <div className={props.isMobile ? styles.skillMobileBox : styles.skillBox}>
                                <ul>
                                    {!!result &&
                                        result.map((data) => (
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