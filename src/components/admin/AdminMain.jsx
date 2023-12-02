import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import { API_ACTIONS } from "config";
import LoadingPage from "components/commons/LoadingPage";

const AdminMain = (props) => {
    const { isMobile, setUnderMnt } = props;
    const [companyData, setCompanyData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const reqData = async (arg) => {
        if (arg === 0) {
            await appUtill.resolveGetData(API_ACTIONS.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            ).catch(() => {
                setUnderMnt(true);
            });
        } else if (arg === 1) {
            await appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            ).catch(() => {
                setUnderMnt(true);
            });
        } else if (arg === 2) {
            await appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            ).catch(() => {
                setUnderMnt(true);
            });
        } else {
            await appUtill.resolveGetData(API_ACTIONS.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            ).catch(() => {
                setUnderMnt(true);
            });
            await appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            ).catch(() => {
                setUnderMnt(true);
            });
            await appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            ).catch(() => {
                setUnderMnt(true);
            });
            await appUtill.resolveGetData(API_ACTIONS.GET_SKILL_LIST).then((resolvedData) =>
                setSkillList(resolvedData)
            ).catch(() => {
                setUnderMnt(true);
            });
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
                                setUnderMnt={setUnderMnt}
                            />
                        )
                    }
                    {
                        companyData && (
                            <AdminCompany
                                companyDataList={companyData}
                                reqData={reqData}
                                setUnderMnt={setUnderMnt}
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
                                setUnderMnt={setUnderMnt}
                            />
                        )
                    }
                </>
            )}
        </div>
    );
}

export default AdminMain;