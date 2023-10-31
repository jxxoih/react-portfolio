import styles from "styles/Work.module.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";
import { useState } from "react";
import { useEffect } from "react";

const Work = (props) => {
    const [company, setCompany] = useState([]);
    const [project, setProject] = useState([]);
    const [projectSkill, setProjectSkill] = useState([]);

    useEffect(() => {
        appUtill.resolveData(config.GET_COMPANY_ACTION).then((resolvedData) => setCompany(resolvedData));
        appUtill.resolveData(config.GET_PROJECT_ACTION).then((resolvedData) => setProject(resolvedData));
        appUtill.resolveData(config.GET_PROJECT_SKILL_ACTION).then((resolvedData) => setProjectSkill(resolvedData));
    }, []);


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
                            <div className={props.isMobile ? styles.worksMobile : styles.wokrs} key={comp.w_id}>
                                <div className={styles.companyNm}>
                                    <p>
                                        {comp.company_nm}
                                    </p>
                                    <p className={styles.workDt}>
                                        {comp.w_start_date.split("T")[0]
                                            + " ~ " +
                                            comp.w_end_date.split("T")[0]}
                                    </p>
                                </div>
                                {
                                    !!project &&
                                    project.map((project) => (
                                        project.w_id === comp.w_id &&
                                        < div className={styles.workingList} key={project.pro_id} >
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
                                                    project.pro_start_date.split("T")[0]
                                                    + " ~ " +
                                                    project.pro_end_date.split("T")[0]
                                                }
                                            </p>
                                            <p className={styles.workSkill}>
                                                {
                                                    !!projectSkill &&
                                                    projectSkill.map((psData, idx) => {
                                                        if (project.pro_id != psData.pro_id) return;

                                                        if (project.pro_id === projectSkill[idx + 1]?.pro_id) {
                                                            if (project.pro_position === 0) {
                                                                if (psData.sf_id === projectSkill[idx + 1]?.sf_id) {
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