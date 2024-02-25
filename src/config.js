export const IMG_PATH = process.env.PUBLIC_URL + "/img/";
export const GITHUB_PATH = "https://github.com/";

export const USE_LOCATION = window.location.href;

export const ADMIN_PATH = "/admin";

export const ADMIN_KEY_NAME = "isAdmin";

export const ROOT_PATH = "/";

export const P_IDX = 1;

export const GNB_LIST = [
    "about",
    "work",
    "skills",
    "contact",
    "admAbout",
    "admCompany",
    "admProject"
];

// const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://api.jxxo.shop/" : "http://localhost:3333/";
const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://port-0-node-server-12fhqa2llo7zh36o.sel5.cloudtype.app/" : "http://localhost:3333/";
// const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://devp.shop/": "http://localhost:3333/";

// const API_PATH = "https://api.jxxo.shop/";

const POST_PATH = "postData";
const GET_PATH = "getData";

export const API_POST_PATH = API_PATH + POST_PATH;
export const API_GET_PATH = API_PATH + GET_PATH;

// export const ADMIN_AUTHORITY_EXPIRE_TIME = 86400000;
export const ADMIN_AUTHORITY_EXPIRE_TIME = 6000000; // 1시간
export const STALE_TIME = 6000000;
export const CACHE_TIME = 6000000;

export const MOBILE_PX = 768;

export const API_ACTIONS = {
    GET_ABOUT_ACTION: "getAbout",
    GET_SKILL_ACTION: "getSkill",
    GET_SKILL_FIELD_ACTION: "getSkillField",
    GET_COMPANY_ACTION: "getCompany",
    GET_PROJECT_ACTION: "getProject",
    GET_PROJECT_GET_SKILL_ACTION: "getProjectSkills",
    GET_ADMIN_COMPANY_ACTION: "getAdmCompany",
    GET_ADMIN_PROJECT_ACTION: "getAdmProject",
    GET_SKILL_LIST: "getSkillList",
    SEARCH_AUTH_PWD: "searchAuthPwd",
    UPDATE_ABOUT: "updateAbout",
    UPDATE_COMPANY: "updateCompany",
    INSERT_NEW_COMPANY: "insertCompany",
    UPDATE_PROJECT: "updateProject",
    INSERT_NEW_PROJECT: "insertProject",
    DELETE_PROJECT_SKILL: "deleteProjectSkill",
}
