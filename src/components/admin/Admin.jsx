import EnterPassword from "components/admin/EnterPassword";
import { useState } from "react";
import { useEffect } from "react";
import AdminMain from "components/admin/AdminMain";
import * as config from "config";

const Admin = (props) => {
    const { isAdmin, isMobile, aboutData, setAdmin, setPage } = props;
    const [password, setPassword] = useState("");

    useEffect(() => {
        checkedPassword();
    }, [password]);

    const passwordKeyDown = () => {
        window.addEventListener("keydown", (e) => {
            const checkCode = e.keyCode;
            // 숫자, 문자만 입력 가능
            if (checkCode === 13 || (checkCode >= 48 && checkCode <= 57) || (checkCode >= 65 && checkCode <= 90) || (checkCode >= 96 && checkCode <= 107)) {
                if (e.key === "Enter") {
                    if (password === config.ADMIN_PASSWORD) {
                        setAdmin(true);
                        setPage(true);
                        e.preventDefault();
                    } else {
                        setAdmin(false);
                        setPage(false);
                        e.preventDefault();
                    }
                } else {
                    setPassword(password + e.key);
                }
            }
        })
    }

    const checkedPassword = () => {
        if (isAdmin) {
            setAdmin(true);
        } else {
            passwordKeyDown();
        }

    }

    return (
        <>
            {isAdmin && (
                <AdminMain
                    isMobile={isMobile}
                    aboutData={{
                        aboutTitle: aboutData?.p_about_title,
                        aboutContext: aboutData?.p_about_context
                    }}
                />
            )}
            {!isAdmin && (
                <EnterPassword password={password} />
            )}
        </>
    );
}

export default Admin;