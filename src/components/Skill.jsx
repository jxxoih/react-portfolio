import styles from "styles/modules/Skill.module.css";

import { IMG_PATH } from "config";

const Skill = (props) => {
    const { isMobile, func, skillDataList } = props;
    const { fieldResult, skillData } = skillDataList;

    return (
        <div className={styles.skillWrap + " skills"}>
            <div className={styles.skillTitle}>
                <p className="wrapTitle">
                    Skills.
                </p>
            </div>
            <div className={styles.skillContent}>
                {!!fieldResult &&
                    fieldResult.map((field, fidx) => (
                        <div className={styles.skillList} key={fidx}>
                            <div className={styles.skillBox}>
                                <p className={styles.stackTitle}>{field.sf_name}</p>
                                <ul>
                                    {!!skillData &&
                                        skillData.map((data) => (
                                            data.sf_idx == field.sf_idx &&
                                            <li
                                                style={{ backgroundImage: `url(${IMG_PATH + data.s_img})` }}
                                                key={data.s_idx}
                                                className={data?.s_idx === 12 ? styles.setUrl : ""}
                                                onClick={data.s_idx === 12 ? (e) => func(`https://github.com/${data.p_github}`, e) : console.log()}
                                            >
                                                <div className={styles.iconHover}>
                                                    {
                                                        data.s_idx === 12 ?
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