import styles from "styles/Header.module.css";

const HeaderMobile = (props) => {
    const { func } = props;

    return (
        <div className={styles.gnbMobile}>
            <ul>
                <li onClick={() => func(0)}>About.</li>
                <li onClick={() => func(1)}>Work.</li>
                <li onClick={() => func(2)}>Skills.</li>
                <li onClick={() => func(3)}>Contact.</li>
            </ul>
        </div>
    );
}

export default HeaderMobile;