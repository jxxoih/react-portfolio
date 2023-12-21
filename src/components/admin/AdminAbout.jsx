import { useEffect } from "react";
import { useState } from "react";
import styles from "styles/admin/modules/AdminAbout.module.css";

import * as appUtill from "utills/appUtill";
import { API_ACTIONS } from "config";
import { useMutation } from "react-query";

const AdminAbout = (props) => {
    const { aboutDataList, setUnderMnt, queryClient } = props;

    const [aboutData, setAboutData] = useState(aboutDataList);
    const [oriData, setOriData] = useState(aboutDataList);
    const [aboutChgStat, setAboutChgStat] = useState(false);

    const onChangeAbout = (e) => {
        const { name, value } = e.target;

        const nextInputs = {
            ...aboutData,
            [name]: value,
        };
        setAboutData(nextInputs);

        if (nextInputs.p_about_title != oriData.p_about_title
            || nextInputs.p_about_context != oriData.p_about_context) {
            setAboutChgStat(true);
        } else {
            setAboutChgStat(false);
        }
    }

    const aboutUpdate = async () => {
        await appUtill.resolvePostData(API_ACTIONS.UPDATE_ABOUT, aboutData);
    }

    const updateAbout = async () => {
        if (aboutChgStat) {
            mutate();
        } else {
            return;
        }

        setAboutChgStat(false);
    }

    const { mutate } = useMutation(() => aboutUpdate(), {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['about']})
        }
    });

    useEffect(() => {
        setOriData(aboutDataList);
        setAboutData(aboutDataList);
    }, [aboutDataList]);

    return (
        <div className={styles.aboutWrap + " admAbout"}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutTitle}>
                    <p className="wrapTitle">
                        {!aboutChgStat && (
                            "About Me."
                        )}
                        {aboutChgStat && (
                            <button
                                onClick={() => updateAbout()}
                            >
                                Edit Data
                            </button>
                        )}
                    </p>
                </div>
                <div className={styles.aboutContext}>

                    <p className={styles.aboutContextTitle}>
                        <input
                            name="p_about_title"
                            type="text"
                            value={aboutData.p_about_title || ""}
                            onChange={onChangeAbout}
                        />
                    </p>
                    <p className={styles.aboutContexts}>
                        <textarea
                            name="p_about_context"
                            value={aboutData.p_about_context || ""}
                            onChange={onChangeAbout}
                        >
                        </textarea>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default AdminAbout;