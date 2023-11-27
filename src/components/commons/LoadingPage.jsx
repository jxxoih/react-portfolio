import styles from "styles/modules/Loading.module.css";

import * as config from "config";

const LoadingPage = () => {
    return (
        <>
            <div className={styles.LoadingWrap}>
                <div className={styles.loader}>
                    <div className={styles.loadingBar}>
                    </div>
                    <p>
                        Loading..
                    </p>
                </div>
            </div>
        </>
    );
}

export default LoadingPage;