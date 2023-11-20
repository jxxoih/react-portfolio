import styles from "styles/Header.module.css";

const Header = (props) => {
    const { admPage, func, setPage } = props;

    return (
        <div className={styles.gnb}>
            <ul>
                {!admPage && (
                    <>
                        <li onClick={() => func(0)}>About.</li>
                        <li onClick={() => func(1)}>Work.</li>
                        <li onClick={() => func(2)}>Skills.</li>
                        <li onClick={() => func(3)}>Contact.</li>
                        <li onClick={() => setPage(true)}>Admin.</li>
                    </>
                )}
                {admPage && (
                    <>
                        <li onClick={() => func(4)}>About.</li>
                        <li onClick={() => func(5)}>Company.</li>
                        <li onClick={() => func(6)}>Project.</li>
                        <li onClick={() => setPage(false)}>Home.</li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Header;