import { useState } from "react";
import styles from "styles/admin/AdminCompany.module.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";

const AdminCompany = (props) => {
    const [companyData, setCompanyData] = useState(props.companyData)
    const [addData, setAddData] = useState([]);

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
            company_nm: ""
        };

        setAddData([...addData, data]);
    }

    const editCompany = () => {
        appUtill.resolveData(config.UPDATE_COMPANY, companyData).then((resolvedData) =>
            setCompanyData(companyData)
        );

        if (addData.length > 0) {
            appUtill.resolveData(config.ADD_NEW_COMPANY, addData).then((resolvedData) =>
                updateCompanyData()
            );
        }

        props.updateFunc(0);
    }

    const updateCompanyData = () => {
        appUtill.resolveData(config.GET_COMPANY_ACTION).then((resolvedData) =>
            setCompanyData(resolvedData));
        setAddData([]);
    }

    // emp 퇴사 여부 1=퇴사
    // status 사용할거? 1=사용

    return (
        <div className={styles.admCompanyFrame + " admCompany"}>
            <div className={styles.admCompanyWrap}>
                <div className="admFrameTitle">
                    Company.
                </div>
                <div className={styles.admCompanyContent}>
                    <ul className={styles.admCompanyList}>
                        {
                            companyData.map((data, idx) => (
                                <li key={idx}>
                                    <input
                                        data-key={idx}
                                        name="company_nm"
                                        onChange={onChangeInput}
                                        value={data.company_nm}
                                        placeholder="회사명을 입력하세요."
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    <ul className={styles.admCompanyList}>
                        {
                            addData.map((data, idx) => (
                                <li key={idx}>
                                    <input
                                        data-key={idx}
                                        name="company_nm"
                                        onChange={onChangeAddInput}
                                        value={data.company_nm}
                                        placeholder="회사명을 입력하세요."
                                    />
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
                            onClick={() => editCompany()}
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