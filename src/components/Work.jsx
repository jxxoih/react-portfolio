import styles from "styles/Work.module.css";

const Work = (props) => {
    const company = props.companyData;
    const project = props.projectData;
    const projectSkill = props.projectSkillData;

    return (
        <div className={styles.workWrap + " work"}>
            <div className={styles.workContext}>
                <div className={styles.workTitle}>
                    <p className="wrapTitle">
                        Work.
                    </p>
                </div>
                <div className={styles.workContent}>
                    {
                        !!company &&
                        company.map((comp) => (
                            <div className={props.isMobile ? styles.worksMobile : styles.wokrs} key={comp.c_idx}>
                                <div className={styles.companyNm}>
                                    <p>
                                        {comp.company_nm}
                                    </p>
                                    <p className={styles.workDt}>
                                        {comp.w_start_date
                                            + " ~ " +
                                            comp.w_end_date}
                                    </p>
                                </div>
                                {
                                    !!project &&
                                    project.map((project) => (
                                        project.c_idx === comp.c_idx &&
                                        < div className={styles.workingList} key={project.pro_idx} >
                                            <p className={styles.projectTitle}>
                                                <span
                                                    className={!!project.pro_url ? styles.setPortfolio : ""}
                                                    onClick={(e) => props.func(project.pro_url, e)}
                                                >
                                                    {project.pro_name}
                                                </span>
                                            </p>
                                            <p className={styles.work}>
                                                {project.pro_detail}
                                                ({project.pos_name})
                                                {!props.isMobile && (
                                                    <span className={styles.bar}>|</span>
                                                )}
                                                {props.isMobile && (
                                                    <br />
                                                )}
                                                {
                                                    project.pro_start_date
                                                    + " ~ " +
                                                    project.pro_end_date
                                                }
                                            </p>
                                            <p className={styles.workSkill}>
                                                {
                                                    !!projectSkill &&
                                                    projectSkill.map((psData, idx) => {
                                                        if (project.pro_idx != psData.pro_idx) return;

                                                        if (project.pro_idx === projectSkill[idx + 1]?.pro_idx) {
                                                            if (project.pro_position === 0) {
                                                                if (psData.sf_idx === projectSkill[idx + 1]?.sf_idx) {
                                                                    return psData.s_name + ", ";
                                                                } else {
                                                                    return psData.s_name + " / ";
                                                                }
                                                            } else {
                                                                return psData.s_name + ", ";
                                                            }
                                                        } else {
                                                            return psData.s_name;
                                                        }
                                                    })
                                                }
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default Work;