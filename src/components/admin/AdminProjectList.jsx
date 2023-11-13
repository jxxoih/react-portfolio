import CustomSelect from "components/commons/CustomSelect";
import styles from "styles/admin/AdminProject.module.css";

const AdminProjectList = (props) => {
    const { projectData, onChangeInput, companyList, checkHandler, newProjectSkill } = props;


    const positionOption = [
        { value: -1, label: "Position" },
        { value: 0, label: "Front, Back-end" },
        { value: 1, label: "Front-end" },
        { value: 2, label: "Back-end" },
    ];

    const useOption = [
        { value: -1, label: "사용여부" },
        { value: 0, label: "비활성" },
        { value: 1, label: "활성" }
    ];

    return (
        <ul className={styles.admProjectList}>
            {
                projectData.length > 0 &&
                    projectData.map((data, idx) => (
                        <li key={idx}>
                            <ul className={styles.dataUl}>
                                <li>
                                    <CustomSelect
                                        classNm="project"
                                        dataKey={idx}
                                        name="c_idx"
                                        onChange={onChangeInput}
                                        value={data.c_idx}
                                        options={companyList}
                                    />
                                </li>
                                <li>
                                    <input
                                        data-key={idx}
                                        name="pro_name"
                                        onChange={onChangeInput}
                                        value={data.pro_name}
                                        placeholder="프로젝트명."
                                    />
                                </li>
                                <li>
                                    <input
                                        data-key={idx}
                                        name="pro_detail"
                                        onChange={onChangeInput}
                                        value={data.pro_detail}
                                        placeholder="프로젝트 내용."
                                    />
                                </li>
                                <li>
                                    <input
                                        data-key={idx}
                                        name="pro_url"
                                        onChange={onChangeInput}
                                        value={data.pro_url}
                                        placeholder="프로젝트 URL"
                                    />
                                </li>
                                <li>
                                    <input
                                        data-key={idx}
                                        name="pro_start_date"
                                        onChange={onChangeInput}
                                        value={data.pro_start_date}
                                        placeholder="시작일"
                                    />
                                </li>
                                <li>
                                    <input
                                        data-key={idx}
                                        name="pro_end_date"
                                        onChange={onChangeInput}
                                        value={data.pro_end_date}
                                        placeholder="종료일"
                                    />
                                </li>
                                <li>
                                    <CustomSelect
                                        classNm="project"
                                        dataKey={idx}
                                        name="pro_position"
                                        onChange={onChangeInput}
                                        value={data.pro_position}
                                        options={positionOption}
                                    />
                                </li>
                                <li>
                                    <CustomSelect
                                        classNm="project"
                                        dataKey={idx}
                                        name="use_status"
                                        onChange={onChangeInput}
                                        value={data.use_status}
                                        options={useOption}
                                    />
                                </li>
                                <li className={styles.skillList}>
                                    {
                                        props.skillList.map((skill) => (
                                            <div key={skill.s_idx}>
                                                <input
                                                    type="checkbox"
                                                    name="project_skill"
                                                    data-proid={data.pro_idx}
                                                    data-key={skill.s_idx}
                                                    data-arrid={idx}
                                                    id={"pro" + data.pro_idx + "skill" + skill.s_idx}
                                                    checked={(!!data.project_skill.find(e => e.s_idx === skill.s_idx && e.pro_idx > 0))
                                                        || (newProjectSkill.findIndex(e => e.s_idx === skill.s_idx && e.pro_idx === data.pro_idx) !== -1)
                                                    }
                                                    onChange={checkHandler}
                                                />
                                                <label htmlFor={"pro" + data.pro_idx + "skill" + skill.s_idx}>
                                                    {skill.s_name}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </li>
                            </ul>
                        </li>
                    ))
            }
        </ul>
    );
}

export default AdminProjectList;