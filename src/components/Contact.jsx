import { IMG_PATH } from "config";

import styles from "styles/Contact.module.css";



const emailImg = IMG_PATH + "email.png";

const Contact = (props) => {
    const { email } = props;

    return (
        <div className={styles.contactWrap + " contact"}>
            <div className={styles.contactTitle}>
                <p className="wrapTitle">
                    Contact.
                </p>
            </div>
            <div className={styles.contactContent}>
                <img src={emailImg} alt="email-img" className={styles.emailImg} />
                <p className={styles.emailText}>Email.</p>
                <p className={styles.email}>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Contact;