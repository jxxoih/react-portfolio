import EnterPassword from "components/admin/EnterPassword";

import AdminMain from "components/admin/AdminMain";

const Admin = (props) => {
    const { isAdmin, isMobile, aboutData, setAdmin, setPage } = props;

    return (
        <>
            {isAdmin && (
                <AdminMain
                    isMobile={isMobile}
                />
            )}
            {!isAdmin && (
                <EnterPassword
                    isAdmin={isAdmin}
                    setAdmin={setAdmin}
                    setPage={setPage}
                />
            )}
        </>
    );
}

export default Admin;