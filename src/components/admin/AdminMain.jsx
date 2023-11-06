import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

const AdminMain = (props) => {
    const [aboutInputs, setIAboutnputs] = useState({
        aboutTitle: props.aboutData?.p_about_title,
        aboutContext: props.aboutData?.p_about_context,
        change: false
    });
    const [aboutChgStat, setAboutChgStat] = useState(false);
    const { aboutTitle, aboutContext } = aboutInputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        const nextInputs = {
            ...aboutInputs,
            [name]: value,
        };

        setIAboutnputs(nextInputs);
    }

    useEffect(() => {
        if (aboutTitle === props.aboutData?.p_about_title && aboutContext === props.aboutData?.p_about_context) {
            setAboutChgStat(false);
        } else {
            setAboutChgStat(true);
        }
    }, [aboutInputs]);


    const updateAbout = () => {
        if (aboutChgStat) {
            appUtill.reqAPI(config.UPDATE_ABOUT, aboutInputs);
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
            <AdminCompany />
            <AdminProject />
        </div>
    );
}

export default AdminMain;