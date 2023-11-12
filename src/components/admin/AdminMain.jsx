import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

const AdminMain = (props) => {
    const [oriData, setOriData] = useState(props.aboutData);

    const [companyData, setCompanyData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillList, setSkillList] = useState([]);

    const [aboutInputs, setAboutInputs] = useState(props.aboutData);
    const [aboutChgStat, setAboutChgStat] = useState(false);
    const { aboutTitle, aboutContext } = aboutInputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        const nextInputs = {
            ...aboutInputs,
            [name]: value,
        };

        setAboutInputs(nextInputs);
    }


    const reqData = (arg) => {
        if (arg === 1) {
            appUtill.resolveData(config.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
        } else if (arg === 2) {
            appUtill.resolveData(config.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
        } else {
            appUtill.resolveData(config.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
            appUtill.resolveData(config.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
            appUtill.resolveData(config.GET_SKILL_LIST).then((resolvedData) =>
                setSkillList(resolvedData)
            );
        }
    }

    useEffect(() => {
        reqData();
    }, []);

    useEffect(() => {
        if (aboutTitle === oriData?.aboutTitle && aboutContext === oriData?.aboutContext) {
            setAboutChgStat(false);
        } else {
            setAboutChgStat(true);
        }
    }, [aboutInputs, oriData]);

    const updateAbout = () => {
        if (aboutChgStat) {
            appUtill.resolveData(config.UPDATE_ABOUT, aboutInputs).then((resolvedData) => setOriData(aboutInputs));
            props.updateFunc(0);
        } else {
            return;
        }
    }


    return (
        <div className="adminFrame">
            <AdminAbout
                isMobile={props.isMobile}
                aboutData={aboutInputs}
                aboutChgStat={aboutChgStat}
                inputFunc={onChange}
                aboutFunc={updateAbout}
            />
            {
                companyData && (
                    <AdminCompany
                        companyData={companyData}
                        updateFunc={props.updateFunc}
                        reqData={reqData}
                    />
                )
            }
            {
                projectData && (
                    <AdminProject
                        companyData={companyData}
                        projectData={projectData}
                        skillList={skillList}
                        reqData={reqData}
                    />
                )
            }
        </div>
    );
}

export default AdminMain;