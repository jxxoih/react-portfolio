export const IMG_PATH = process.env.PUBLIC_URL + "/img/";
export const GITHUB_PATH = "https://github.com/";


const API_POST_PATH = "data";

export const USE_LOCATION = window.location.href;

export const ADMIN_PATH = "/admin";

export const ADMIN_PASSWORD = "0219";

export const GNB_LIST = [
    "about",
    "work",
    "skills",
    "contact",
    "admAbout",
    "admCompany",
    "admProject"
];

export const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://port-0-node-learning-12fhqa2llo7zh36o.sel5.cloudtype.app/" + API_POST_PATH : "http://localhost:3333/" + API_POST_PATH;
// export const API_PATH = "https://port-0-node-learning-12fhqa2llo7zh36o.sel5.cloudtype.app/" + "data";

export const MOBILE_PX = 768;

export const ABOUT_ACTION = "getAbout";
export const WORK_ACTION = "getWork";
export const SKILL_ACTION = "getSkill";
export const SKILL_FIELD_ACTION = "getSkillField";
export const GET_COMPANY_ACTION = "getCompany";
export const GET_PROJECT_ACTION = "getProject";
export const GET_PROJECT_SKILL_ACTION = "getProjectSkills";
export const UPDATE_ABOUT = "updateAbout";