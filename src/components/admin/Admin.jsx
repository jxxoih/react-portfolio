import EnterPassword from "components/admin/EnterPassword";

import AdminMain from "components/admin/AdminMain";

const Admin = (props) => {
    const { isAdmin, isMobile, setAdmin, setPage ,setUnderMnt, queryClient} = props;

    return (
        <>
            {isAdmin && (
                <AdminMain
                    isMobile={isMobile}
                    setUnderMnt={setUnderMnt}
                    queryClient={queryClient}
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