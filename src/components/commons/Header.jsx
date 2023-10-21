import styles from "styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.gnb}>
            <ul>
                <li>About.</li>
                <li>Work.</li>
                <li>Skills.</li>
                <li>Project.</li>
                <li>Contact.</li>
            </ul>
        </div>
    );
}

export default Header;