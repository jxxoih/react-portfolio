import CustomSelect from "components/commons/CustomSelect";
import { useEffect } from "react";
import { useState } from "react";
import styles from "styles/admin/modules/AdminProject.module.css";

import * as appUtill from "utills/appUtill";
import AdminProjectList from "components/admin/AdminProjectList";
import { API_ACTIONS } from "config";


const AdminProject = (props) => {
    const { reqData, companyData, projectDataList, skillList } = props;
    const [projectData, setProjectData] = useState(projectDataList);
    const [addData, setAddData] = useState([]);
    const [newProjectSkill, setNewProjectSkill] = useState([]);

    const [companyList, setCompanyList] = useState([]);

    const checkHandler = (e) => {
        const checked = e.target.checked;
        const s_idx = e.target.dataset.key * 1;
        const idx = e.target.dataset.arrid;
        const pro_idx = e.target.dataset.proid * 1;

        const useData = projectData[idx].project_skill;
        var f_idx = useData.findIndex(el => el.s_idx === s_idx);

        if (f_idx !== -1) {
            var prevData = useData[f_idx];
            // 0으로 매핑을 끊음
            if (checked) {
                prevData.pro_idx = pro_idx;
            } else {
                prevData.pro_idx = 0;
            }
            var nextData = projectData[idx].project_skill[f_idx];
            nextData = prevData

            projectData[idx].project_skill[f_idx] = nextData;
            setProjectData([...projectData]);
        } else {
            // 신규데이터
            const newPs = newProjectSkill;
            var findData = newPs.findIndex(
                el => el.pro_idx === pro_idx
                    && el.s_idx === s_idx);
            if (findData > -1) {
                // 체크해제
                newPs.splice(f_idx, 1);
            } else {
                // 체크
                var newPsData = {
                    pro_idx: pro_idx,
                    s_idx: s_idx
                }
                newPs.push(newPsData);
            }
            setNewProjectSkill([...newPs]);
        }

        return checked;
    }

    const onChangeInput = (e) => {
        const idx = e.target.dataset.key;
        const { name, value } = e.target;

        const nextInputs = {
            ...projectData[idx],
            [name]: value,
        };

        projectData[idx] = nextInputs;
        setProjectData([...projectData]);
    }


    const onChangeAddInput = (e) => {
        const idx = e.target.dataset.key;
        const { name, value } = e.target;

        const nextInputs = {
            ...addData[idx],
            [name]: value,
        };

        addData[idx] = nextInputs;
        setAddData([...addData]);
    }

    const addProject = () => {
        const data = {
            c_idx: 1,
            pro_name: "",
            pro_position: -1,
            pro_detail: "",
            pro_url: "",
            pro_start_date: "",
            pro_end_date: "",
            use_status: 0,
            project_skill: [

            ]
        };

        setAddData([...addData, data]);
    }


    const setCompany = () => {
        companyData.map((data, idx) => {
            const newCompanyData = {
                ...companyList[idx],
                value: data.c_idx,
                label: data.company_nm,
            }

            companyList[idx] = newCompanyData;
            setCompanyList([...companyList])
        })
    }

    const editProject = async () => {
        await appUtill.resolveData(API_ACTIONS.UPDATE_PROJECT, { projectData, newProjectSkill }).then((resolvedData) =>
            setProjectData(projectData)
        );
        if (addData.length > 0) {
            appUtill.resolveData(API_ACTIONS.INSERT_NEW_PROJECT, addData);
        }
        await updateProjectData();
        setAddData([]);
        setNewProjectSkill([]);
    }

    const updateProjectData = () => {
        // TODO::현재 페이지 변경시 reqData로 모든 데이터 최신화됨 추후 수정 필요
        reqData(2);
    }

    useEffect(() => {
        setProjectData(projectDataList);
        setCompany();
    }, [projectDataList])

    return (
        <div className={styles.admProjectFrame + " admProject"}>
            <div className={styles.admProjectWrap}>
                <div className="admFrameTitle">
                    Project.
                </div>
                <div className={styles.admProjectContent}>
                    <AdminProjectList
                        projectData={projectData}
                        onChangeInput={onChangeInput}
                        companyList={companyList}
                        checkHandler={checkHandler}
                        newProjectSkill={newProjectSkill}
                        skillList={skillList}
                        newProjectStatus
                    />

                    <AdminProjectList
                        projectData={addData}
                        onChangeInput={onChangeAddInput}
                        companyList={companyList}
                        checkHandler={checkHandler}
                        newProjectSkill={newProjectSkill}
                        skillList={skillList}
                        newProjectStatus={false}
                    />


                    <div className={styles.addBtnWrap}>
                        <button
                            className={styles.addProjectBtn}
                            onClick={() => addProject()}
                        >
                            Add Company.
                        </button>
                        <button
                            className={styles.editProjectBtn}
                            onClick={() => editProject()}
                        >
                            Edit Data.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProject;