import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import { API_ACTIONS, STALE_TIME, CACHE_TIME } from "config";
import LoadingPage from "components/commons/LoadingPage";
import { useQueries } from "react-query";

const AdminMain = (props) => {
    const { isMobile, setUnderMnt, queryClient } = props;
    const [companyData, setCompanyData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const results = useQueries([
        {
            queryKey: ['about'],
            queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_ABOUT_ACTION),
            taleTime: STALE_TIME,
            cacheTime: CACHE_TIME,
            onSuccess: (res) => {
                setAboutData(res[0])
            }
        },
        {
            queryKey: ['admCompany'],
            queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_COMPANY_ACTION),
            taleTime: STALE_TIME,
            cacheTime: CACHE_TIME,
            onSuccess: (res) => {
                setCompanyData(res)
            }
        },
        {
            queryKey: ['admProject'],
            queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_ADMIN_PROJECT_ACTION),
            taleTime: STALE_TIME,
            cacheTime: CACHE_TIME,
            onSuccess: (res) => {
                setProjectData(res)
            }
        },
        {
            queryKey: ['skillList'],
            queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_SKILL_LIST),
            taleTime: STALE_TIME,
            cacheTime: CACHE_TIME,
            onSuccess: (res) => {
                setSkillList(res)
            }
        },
    ])
 
    useEffect(() => {
        const loadingFinishAll = results.some(results => results.isLoading);
        setIsLoading(loadingFinishAll);
    }, [results]);

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
                                setUnderMnt={setUnderMnt}
                                queryClient={queryClient}
                            />
                        )
                    }
                    {
                        companyData && (
                            <AdminCompany
                                companyDataList={companyData}
                                setUnderMnt={setUnderMnt}
                                queryClient={queryClient}
                            />
                        )
                    }
                    {
                        projectData && (
                            <AdminProject
                                companyDataList={companyData}
                                projectDataList={projectData}
                                skillList={skillList}
                                setUnderMnt={setUnderMnt}
                                queryClient={queryClient}
                            />
                        )
                    }
                </>
            )}
        </div>
    );
}

export default AdminMain;