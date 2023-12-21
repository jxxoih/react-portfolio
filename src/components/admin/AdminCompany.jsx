import { useState } from "react";
import styles from "styles/admin/modules/AdminCompany.module.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";
import CustomSelect from "components/commons/CustomSelect";
import { useEffect } from "react";
import { API_ACTIONS } from "config";
import { useMutation } from "react-query";

const AdminCompany = (props) => {
    const { companyDataList, queryClient } = props;
    const [companyData, setCompanyData] = useState(companyDataList)
    const [addData, setAddData] = useState([]);

    const empOption = [
        { value: -1, label: "퇴사여부" },
        { value: 0, label: "퇴사전" },
        { value: 1, label: "퇴사" }
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
            ...companyData[idx],
            [name]: value,
        };

        companyData[idx] = nextInputs;
        setCompanyData([...companyData]);
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

    const addCompany = () => {
        const data = {
            company_nm: "",
            emp_status: 1,
            use_status: 0,
            w_end_date: "",
            w_start_date: ""
        };

        setAddData([...addData, data]);
    }

    const editCompany = async () => {
        await appUtill.resolvePostData(API_ACTIONS.UPDATE_COMPANY, companyData);

        if (addData.length > 0) {
            await appUtill.resolvePostData(API_ACTIONS.INSERT_NEW_COMPANY, addData);
        }

        updateCompanyData();
    }

    const updateCompanyData = () => {
        queryClient.invalidateQueries({ queryKey: ['admCompany'] });
        queryClient.invalidateQueries({ queryKey: ['company'] });
        setAddData([]);
    }

    useEffect(() => {
        setCompanyData(companyDataList);
    }, [companyDataList]);

    const { mutate } = useMutation(() => editCompany(), {
        onSuccess: () => {
            updateCompanyData();
        }
    })

    return (
        <div className={styles.admCompanyFrame + " admCompany"}>
            <div className={styles.admCompanyWrap}>
                <div className="admFrameTitle">
                    Company.
                </div>
                <div className={styles.admCompanyContent}>
                    <ul className={styles.admCompanyList}>
                        {
                            companyData &&
                            companyData.map((data, idx) => (
                                <li key={idx}>
                                    <ul className={styles.dataUl}>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="company_nm"
                                                onChange={onChangeInput}
                                                value={data.company_nm}
                                                placeholder="회사명을 입력하세요."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="w_start_date"
                                                onChange={onChangeInput}
                                                value={data.w_start_date}
                                                placeholder="입사일"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="w_end_date"
                                                onChange={onChangeInput}
                                                value={data.w_end_date}
                                                placeholder="퇴사일"
                                            />
                                        </li>
                                        <li className={styles.dropBox}>
                                            <CustomSelect
                                                dataKey={idx}
                                                name="emp_status"
                                                onChange={onChangeInput}
                                                value={data.emp_status}
                                                options={empOption}
                                            />
                                        </li>
                                        <li className={styles.dropBox}>
                                            <CustomSelect
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
                    <ul className={styles.admCompanyList}>
                        {
                            addData.map((data, idx) => (
                                <li key={idx}>
                                    <ul className={styles.dataUl}>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="company_nm"
                                                onChange={onChangeAddInput}
                                                value={data.company_nm}
                                                placeholder="회사명을 입력하세요."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="w_start_date"
                                                onChange={onChangeAddInput}
                                                value={data.w_start_date}
                                                placeholder="입사일"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                data-key={idx}
                                                name="w_end_date"
                                                onChange={onChangeAddInput}
                                                value={data.w_end_date}
                                                placeholder="퇴사일"
                                            />
                                        </li>
                                        <li className={styles.dropBox}>
                                            <CustomSelect
                                                dataKey={idx}
                                                name="emp_status"
                                                onChange={onChangeAddInput}
                                                value={data.emp_status}
                                                options={empOption}
                                            />
                                        </li>
                                        <li className={styles.dropBox}>
                                            <CustomSelect
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
                            className={styles.addCompanyBtn}
                            onClick={() => addCompany()}
                        >
                            Add Company.
                        </button>
                        <button
                            className={styles.editCompanyBtn}
                            onClick={() => mutate()}
                        >
                            Edit Data.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCompany;