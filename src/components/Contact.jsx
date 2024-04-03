import { IMG_PATH } from "config";

import styles from "styles/modules/Contact.module.css";



const emailImg = IMG_PATH + "email.png";
const githubImg = IMG_PATH + "github-full.png";

const Contact = (props) => {
    const { email, github, func } = props;

    return (
        <div className={styles.contactWrap + " contact"}>
            <div className={styles.contactTitle}>
                <p className="wrapTitle">
                    Contact.
                </p>
            </div>
            <div className={styles.contactContentWrap}>
                <div className={styles.contactContent}>
                    <img src={emailImg} alt="email-img" className={styles.contentImg} />
                    <span className={styles.contentText}>Email.</span>
                    <span className={styles.content}>
                        {email}
                    </span>
                </div>
                <div className={styles.contactContent}>
                    <img
                        src={githubImg} alt="github-img"
                        className={styles.githubImg}
                        onClick={(e) => func(`https://github.com/${github}`, e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;