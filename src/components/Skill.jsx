import * as config from "config";
import * as data from "data";

import styles from "styles/Skill.module.css";

const skillList = data.SKILL_LIST;
const skills = data.SKILLS;

const Skill = (props) => {
    return (
        <div className={styles.skillWrap + " skills"}>
            <div className={styles.skillTitle}>
                <p className="wrapTitle">
                    Skills.
                </p>
            </div>
            <div className={styles.skillContent}>
                {skillList.map((item, idx) => (
                    <div className={styles.skillList} key={idx}>
                        <div className={styles.skillBox}>
                            <p className={styles.stackTitle}>{item.title}</p>
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
                ))}
            </div>
        </div>
    );
}

export default Skill;