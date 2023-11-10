import EnterPassword from "components/admin/EnterPassword";
import AdminMain from "./AdminMain";

const Admin = (props) => {
    return (
        <>
            {props.isAdmin && (
                <AdminMain
                    isMobile={props.isMobile}
                    aboutData={{
                        aboutTitle: props.aboutData?.p_about_title,
                        aboutContext: props.aboutData?.p_about_context
                    }}
                    updateFunc={props.updateFunc}
                />
            )}
            {!props.isAdmin && (
                <EnterPassword password={props.password} />
            )}
        </>
    );
}

export default Admin;