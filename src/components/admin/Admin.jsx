import EnterPassword from "components/admin/EnterPassword";

import AdminMain from "components/admin/AdminMain";

const Admin = (props) => {
    const { isAdmin, isMobile, aboutData, setAdmin, setPage, setLoading, isLoading } = props;

    return (
        <>
            {isAdmin && (
                <AdminMain
                    setLoading={setLoading}
                    isMobile={isMobile}
                    aboutData={{
                        aboutTitle: aboutData?.p_about_title,
                        aboutContext: aboutData?.p_about_context
                    }}
                    isLoading={isLoading}
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