import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import { API_ACTIONS } from "config";
import LoadingPage from "components/commons/LoadingPage";

const AdminMain = (props) => {
    const { isMobile } = props;
    const [companyData, setCompanyData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const reqData = async (arg) => {
        if (arg === 0) {
            await appUtill.resolveData(API_ACTIONS.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            );
        } else if (arg === 1) {
            await appUtill.resolveData(API_ACTIONS.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
        } else if (arg === 2) {
            await appUtill.resolveData(API_ACTIONS.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
        } else {
            await appUtill.resolveData(API_ACTIONS.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            );
            await appUtill.resolveData(API_ACTIONS.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
            await appUtill.resolveData(API_ACTIONS.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
            await appUtill.resolveData(API_ACTIONS.GET_SKILL_LIST).then((resolvedData) =>
                setSkillList(resolvedData)
            );
        }

        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        reqData();
    }, []);

    return (
        <div className="adminFrame">
            {isLoading && (
                <LoadingPage />
            )}
            {!isLoading && (
                <>
                    {
                        aboutData && (
                            <AdminAbout
                                isMobile={isMobile}
                                aboutDataList={aboutData}
                                reqData={reqData}
                            />
                        )
                    }
                    {
                        companyData && (
                            <AdminCompany
                                companyDataList={companyData}
                                reqData={reqData}
                            />
                        )
                    }
                    {
                        projectData && (
                            <AdminProject
                                companyData={companyData}
                                projectDataList={projectData}
                                skillList={skillList}
                                reqData={reqData}
                            />
                        )
                    }
                </>
            )}
        </div>
    );
}

export default AdminMain;