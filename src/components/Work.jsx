import styles from "styles/Work.module.css";

const Work = (props) => {
    const workList = props.data.WORK_LIST;

    const company = props.data.COMPANY;
    return (
        <div className={styles.workWrap + " work"}>
            <div className={styles.workContext}>
                <div className={styles.workTitle}>
                    <p className="wrapTitle">
                        Work.
                    </p>
                </div>
                <div className={styles.workContent}>
                    {workList.map((item, idx) => (
                        <div className={props.isMobile ? styles.worksMobile : styles.wokrs} key={idx}>
                            <div className={styles.companyNm}>
                                <p>
                                    {item.companyNm}
                                </p>
                                <p className={styles.workDt}>
                                    {item.workDT}
                                </p>
                            </div>
                            {item[company[idx]].map((work, idx2) => (
                                <div className={styles.workingList} key={idx2}>
                                    <p className={styles.projectTitle}>
                                        <span
                                            className={!!work.portpolio ? styles.setPortpolio : ""}
                                            onClick={(e) => props.func(work.portpolio, e)}
                                        >
                                            {work.content}
                                        </span>
                                    </p>
                                    <p className={styles.work}>
                                        {work.work}
                                        {!props.isMobile && (
                                            <span className={styles.bar}>|</span>
                                        )}
                                        {props.isMobile && (
                                            <br />
                                        )}
                                        {work.datetime}
                                    </p>
                                    <p className={styles.workSkill}>
                                        {work.skill}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;