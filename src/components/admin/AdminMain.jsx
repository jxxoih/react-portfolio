import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

const AdminMain = (props) => {
    const [oriData, setOriData] = useState(props.aboutData);

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
            <AdminCompany 
                companyData={props.companyData}
                updateFunc={props.updateFunc}
            />
            <AdminProject />
        </div>
    );
}

export default AdminMain;