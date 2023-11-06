import EnterPassword from "components/admin/EnterPassword";
import AdminMain from "./AdminMain";

const Admin = (props) => {
    const { company, project, projectSkill } = props.workData;

    return (
        <>
            {props.isAdmin && (
                <AdminMain
                    isMobile={props.isMobile}
                    aboutData={props.aboutData[0]}
                    companyData={company}
                    projectData={project}
                    projectSkillData={projectSkill}
                    skillData={props.skillData}
                />
            )}
            {!props.isAdmin && (
                <EnterPassword password={props.password} />
            )}
        </>
    );
}

export default Admin;