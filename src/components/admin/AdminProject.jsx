import CustomSelect from "components/commons/CustomSelect";
import { useEffect } from "react";
import { useState } from "react";
import styles from "styles/admin/AdminProject.module.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";


const AdminProject = (props) => {
    const [projectData, setProjectData] = useState(props.projectData);
    const [addData, setAddData] = useState([]);

    const [companyList, setCompanyList] = useState([]);

    const positionOption = [
        {value: -1, label: "Position"},
        { value: 0, label: "Front, Back-end" },
        { value: 1, label: "Front-end" },
        { value: 2, label: "Back-end" },
    ];

    const useOption = [
        { value: -1, label: "사용여부" },
        { value: 0, label: "비활성" },
        { value: 1, label: "활성" }
    ];


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
            use_status: 0
        };

        setAddData([...addData, data]);
    }


    const setCompany = () => {
        props.companyData.map((data, idx) => {
            const newCompanyData = {
                ...companyList[idx],
                value: data.c_idx,
                label: data.company_nm,
            }

            companyList[idx] = newCompanyData;
            setCompanyList([...companyList])
        })
    }

    const editProject = () => {
        appUtill.resolveData(config.UPDATE_PROJECT, projectData).then((resolvedData) =>
            setProjectData(projectData)
        );

        if (addData.length > 0) {
            appUtill.resolveData(config.INSERT_NEW_PROJECT, addData).then((resolvedData) =>
                updateProjectData()
            );
        }
    }

    const updateProjectData = () => {
        // TODO::현재 페이지 변경시 reqData로 모든 데이터 최신화됨 추후 수정 필요
        // props.updateFunc(0);
        props.reqData(2);
        setAddData([]);
    }



    useEffect(() => {
        // 데이터 바뀜
        setProjectData([...props.projectData]);
        setCompany();
    }, [props.projectData])

    return (
        <div className={styles.admProjectFrame + " admProject"}>
            <div className={styles.admProjectWrap}>
                <div className="admFrameTitle">
                    Project.
                </div>
                <div className={styles.admProjectContent}>
                    <ul className={styles.admProjectList}>
                        {
                            projectData.map((data, idx) => (
                                <li key={idx}>
                                    <ul className={styles.dataUl}>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="c_idx"
                                                onChange={onChangeInput}
                                                value={data.c_idx}
                                                options={companyList}
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_name"
                                                onChange={onChangeInput}
                                                value={data.pro_name}
                                                placeholder="프로젝트명."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_detail"
                                                onChange={onChangeInput}
                                                value={data.pro_detail}
                                                placeholder="프로젝트 내용."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_url"
                                                onChange={onChangeInput}
                                                value={data.pro_url}
                                                placeholder="프로젝트 URL"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_start_date"
                                                onChange={onChangeInput}
                                                value={data.pro_start_date}
                                                placeholder="시작일"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_end_date"
                                                onChange={onChangeInput}
                                                value={data.pro_end_date}
                                                placeholder="종료일"
                                            />
                                        </li>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="pro_position"
                                                onChange={onChangeInput}
                                                value={data.pro_position}
                                                options={positionOption}
                                            />
                                        </li>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="use_status"
                                                onChange={onChangeInput}
                                                value={data.use_status}
                                                options={useOption}
                                            />
                                        </li>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>

                    <ul className={styles.admProjectList}>
                        {
                            addData.map((data, idx) => (
                                <li key={idx}>
                                    <ul className={styles.dataUl}>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="c_idx"
                                                onChange={onChangeAddInput}
                                                value={data.c_idx}
                                                options={companyList}
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_name"
                                                onChange={onChangeAddInput}
                                                value={data.pro_name}
                                                placeholder="프로젝트명."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_detail"
                                                onChange={onChangeAddInput}
                                                value={data.pro_detail}
                                                placeholder="프로젝트 내용."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_url"
                                                onChange={onChangeAddInput}
                                                value={data.pro_url}
                                                placeholder="프로젝트 URL"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_start_date"
                                                onChange={onChangeAddInput}
                                                value={data.pro_start_date}
                                                placeholder="시작일"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="pro_end_date"
                                                onChange={onChangeAddInput}
                                                value={data.pro_end_date}
                                                placeholder="종료일"
                                            />
                                        </li>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="pro_position"
                                                onChange={onChangeAddInput}
                                                value={data.pro_position}
                                                options={positionOption}
                                            />
                                        </li>
                                        <li>
                                            <CustomSelect
                                                classNm="project"
                                                dataKey={idx}
                                                name="use_status"
                                                onChange={onChangeAddInput}
                                                value={data.use_status}
                                                options={useOption}
                                            />
                                        </li>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>



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