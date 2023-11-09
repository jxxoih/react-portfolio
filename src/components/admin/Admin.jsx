import EnterPassword from "components/admin/EnterPassword";
import AdminMain from "./AdminMain";

const Admin = (props) => {
    const { project, projectSkill } = props.workData;

    return (
        <>
            {props.isAdmin && (
                <AdminMain
                    isMobile={props.isMobile}
                    aboutData={{
                        aboutTitle: props.aboutData?.p_about_title,
                        aboutContext: props.aboutData?.p_about_context
                    }}
                    projectData={project}
                    projectSkillData={projectSkill}
                    skillData={props.skillData}
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