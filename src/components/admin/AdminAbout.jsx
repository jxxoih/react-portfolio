import styles from "styles/admin/AdminAbout.module.css";

const AdminAbout = (props) => {
    const { aboutTitle, aboutContext } = props.aboutData;

    return (
        <div className={styles.aboutWrap + " admAbout"}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutTitle}>
                    <p className="wrapTitle">
                        {!props.aboutChgStat && (
                            "About Me."
                        )}
                        {props.aboutChgStat && (
                            <button
                                onClick={() => props.aboutFunc()}
                            >
                                Edit Data
                            </button>
                        )}
                    </p>
                </div>
                <div className={styles.aboutContext}>
                    <p className={styles.aboutContextTitle}>
                        <input
                            name="aboutTitle"
                            type="text"
                            value={aboutTitle}
                            onChange={props.inputFunc}
                        />
                    </p>
                    <p className={styles.aboutContexts}>
                        <textarea
                            name="aboutContext"
                            value={aboutContext}
                            onChange={props.inputFunc}
                        >
                        </textarea>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminAbout;