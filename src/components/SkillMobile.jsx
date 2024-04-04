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
            <div className={styles.skillMobileContent}>
                {!!fieldResult &&
                    <div className={styles.skillMobileBox}>
                        <div className={styles.skillMobileList}>
                            {!!skillData &&
                                skillData.map((data) => (
                                    <div
                                        className={styles.skillImgBox}
                                        key={data.s_idx}
                                        onClick={data.s_idx === 12 ? (e) => func(`https://github.com/${data.p_github}`, e) : console.log()}
                                    >
                                        <img src={IMG_PATH + data.s_img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Skill;