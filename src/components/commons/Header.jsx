import styles from "styles/Header.module.css";

const Header = (props) => {
    const {admPage} = props;

    return (
        <div className={styles.gnb}>
            <ul>
                {!admPage && (
                    <>
                        <li onClick={() => props.func(0)}>About.</li>
                        <li onClick={() => props.func(1)}>Work.</li>
                        <li onClick={() => props.func(2)}>Skills.</li>
                        <li onClick={() => props.func(3)}>Contact.</li>
                        <li onClick={() => props.setPage(true)}>Admin.</li>
                    </>
                )}
                {admPage && (
                    <>
                        <li onClick={() => props.func(4)}>About.</li>
                        <li onClick={() => props.func(5)}>Company.</li>
                        <li onClick={() => props.func(6)}>Project.</li>
                        <li onClick={() => props.setPage(false)}>Home.</li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Header;