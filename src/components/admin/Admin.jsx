import EnterPassword from "components/admin/EnterPassword";

import AdminMain from "components/admin/AdminMain";

const Admin = (props) => {
    const { isAdmin, isMobile, setAdmin, setPage ,setUnderMnt} = props;

    return (
        <>
            {isAdmin && (
                <AdminMain
                    isMobile={isMobile}
                    setUnderMnt={setUnderMnt}
                />
            )}
            {!isAdmin && (
                <EnterPassword
                    isAdmin={isAdmin}
                    setAdmin={setAdmin}
                    setPage={setPage}
                    setUnderMnt={setUnderMnt}
                />
            )}
        </>
    );
}

export default Admin;