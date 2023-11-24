import { useState } from "react";
import { useEffect } from "react";
import { ADMIN_PASSWORD } from "config";
import { useRef } from "react";

const EnterPassword = (props) => {
    const colon = " : ";
    const regex = /./gi;
    const { setAdmin, setPage, isAdmin } = props;

    const [password, setPassword] = useState("");
    var pwd = "";
    const enterPwd = useRef("");

    const setEnteredPwd = (arg) => {
        if (!!arg) {
            enterPwd.current = arg.toString();
        } else {
            enterPwd.current = "";
        }
        pwd = enterPwd.current;
        setPassword(pwd)
    }

    const passwordKeyDown = (e) => {
        const checkCode = e.keyCode;
        // 숫자, 문자만 입력 가능
        if (checkCode === 13 || (checkCode >= 48 && checkCode <= 57) || (checkCode >= 65 && checkCode <= 90) || (checkCode >= 96 && checkCode <= 107)) {
            if (e.key === "Enter") {
                if (pwd === ADMIN_PASSWORD) {
                    setAdmin(true);
                    setPage(true);
                    e.preventDefault();
                } else {
                    setAdmin(false);
                    setPage(false);
                    e.preventDefault();
                }
                setEnteredPwd("");
            } else {
                setEnteredPwd(pwd + e.key);
            }
        }
    }

    useEffect(() => {
        if (isAdmin) {
            setAdmin(true);
            setEnteredPwd("");
            return;
        }

        window.addEventListener('keydown', passwordKeyDown);

        return () => {
            window.removeEventListener("keydown", passwordKeyDown)
        }
    }, []);

    return (
        <div className="enterPwd">
            <p>
                Enter Password<span className="colon">{colon}</span>
                {password.replaceAll(regex, "*")}
            </p>
        </div>
    );
}

export default EnterPassword;