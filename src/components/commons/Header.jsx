import styles from "styles/Header.module.css";

const Header = (props) => {

    return (
        <div className={styles.gnb}>
            <ul>
                <li onClick={() => props.func(0)}>About.</li>
                <li onClick={() => props.func(1)}>Work.</li>
                <li onClick={() => props.func(2)}>Skills.</li>
                <li onClick={() => props.func(3)}>Contact.</li>
                <li onClick={() => props.modalF(true)}>Edit.</li>
            </ul>
        </div>
    );
}

export default Header;