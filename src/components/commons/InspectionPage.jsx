import styles from "styles/modules/Inspection.module.css";
import { IMG_PATH } from "config";

const warningImg = IMG_PATH + "warning.png";

const InspectionPage = (props) => {
    const { title, context } = props;

    return (
        <div className={styles.InspectionFrame}>
            <div className={styles.InspectionWrap}>
                <img src={warningImg} alt="warningImg" className={styles.warningImg} />
                <p className={styles.InspectionTitle}>{title}</p>
                {!!context && (
                    <span className={styles.InspectionContext}>{context}</span>
                )}
            </div>
        </div>
    );
}

export default InspectionPage;