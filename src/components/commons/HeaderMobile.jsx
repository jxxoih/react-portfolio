import styles from "styles/Header.module.css";

const HeaderMobile = (props) => {
    return (
        <div className={styles.gnbMobile}>
            <ul>
                <li onClick={() => props.func(0)}>About.</li>
                <li onClick={() => props.func(1)}>Work.</li>
                <li onClick={() => props.func(2)}>Skills.</li>
                <li onClick={() => props.func(3)}>Contact.</li>
            </ul>
        </div>
    );
}

export default HeaderMobile;