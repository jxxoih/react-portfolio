import { useState } from "react";
import { useEffect } from "react";
import { API_ACTIONS } from "config";
import { useRef } from "react";
import * as appUtill from "utills/appUtill";

const EnterPassword = (props) => {
    const colon = " : ";
    const regex = /./gi;
    const { setAdmin, setPage, isAdmin } = props;

    const [password, setPassword] = useState("");
    const ADMIN_AUTH_PWD = useRef("");

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
                if (pwd === ADMIN_AUTH_PWD.current) {
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

    const getAuthPwd = async () => {
        await appUtill.resolveData(API_ACTIONS.GET_AUTH_PWD).then((resolvedData) => ADMIN_AUTH_PWD.current = resolvedData[0].authPwd);
    }

    useEffect(() => {
        getAuthPwd();

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