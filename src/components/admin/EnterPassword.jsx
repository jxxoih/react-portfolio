import { useState, useEffect, useRef } from "react";
import { API_ACTIONS } from "config";
import * as appUtill from "utills/appUtill";

const EnterPassword = (props) => {
    const colon = " : ";
    const regex = /./gi;
    const { setAdmin, setPage, isAdmin, setUnderMnt } = props;

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

    const passwordKeyDown = async (e) => {
        const checkCode = e.keyCode;
        // 숫자, 문자만 입력 가능

        if (checkCode === 13 || (checkCode >= 48 && checkCode <= 57) || (checkCode >= 65 && checkCode <= 90) || (checkCode >= 96 && checkCode <= 107)) {
            if (e.key === "Enter") {
                if (pwd === "exit") {
                    setAdmin(false);
                    setPage(false);
                } else {
                    await appUtill.resolveGetData(API_ACTIONS.SEARCH_AUTH_PWD, pwd)
                        .then((resolvedData) => {
                            if (resolvedData) {
                                setAdmin(true);
                                setPage(true);
                            } else {
                                setAdmin(false);
                            }
                        })
                        .catch(() => {
                            setUnderMnt(true);
                        });
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