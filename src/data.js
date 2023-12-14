import { API_ACTIONS } from "config";


const ABOUT_DATA = [
    {
        p_about_context: "백엔드 개발자로 일을 시작했지만 프론트에 흥미를 느껴 프론트, 백엔드를 같이 개발, 공부하고 있는 \n풀스택 개발자가 목표인 강지호입니다."
        , p_about_title: "2년차 개발자"
        , p_birth: 19990219
        , p_description: "개발자 강지호입니다."
        , p_email: "jxxo.ih@gmail.com"
        , p_github: "jxxoih"
        , p_name: "강지호"
        , sm_context: ""
        , sm_state: 1
        , sm_title: "서비스 점검중 입니다."
    }
];

const COMPANY_DATA = [
    {
        c_idx: 1,
        company_nm: "주식회사키키",
        emp_status: 1,
        use_status: 1,
        w_end_date: "2023-01-01",
        w_start_date: "2022-04-04"
    },
    {
        c_idx: 2,
        company_nm: "제이앤제이",
        emp_status: 1,
        use_status: 1,
        w_end_date: "2023-06-30",
        w_start_date: "2023-01-02"
    }
];

const PROJECT_DATA = [
    {
        c_idx: 1,
        pos_name: "프론트, 백엔드",
        pro_detail: "기능개발 및 유지 보수",
        pro_end_date: "2022-12-31",
        pro_idx: 1,
        pro_name: "키키 사장님페이지",
        pro_position: 0,
        pro_start_date: "2022-04-01",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 1,
        pos_name: "프론트, 백엔드",
        pro_detail: "기능개발 및 유지 보수",
        pro_end_date: "2022-12-31",
        pro_idx: 2,
        pro_name: "키키 관리자페이지",
        pro_position: 0,
        pro_start_date: "2022-04-01",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 1,
        pos_name: "백엔드",
        pro_detail: "POS 프로그램 기능 개발 및 유지 보수, REST API를 이용해 외부 배달대행사 API 연동",
        pro_end_date: "2022-12-31",
        pro_idx: 3,
        pro_name: "키키 포스프로그램(POS)",
        pro_position: 2,
        pro_start_date: "2022-05-01",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 1,
        pos_name: "프론트, 백엔드",
        pro_detail: "사이트, 웹뷰 개발 및 유지 보수",
        pro_end_date: "2022-12-31",
        pro_idx: 4,
        pro_name: "키키 사이트 및 웹뷰",
        pro_position: 0,
        pro_start_date: "2022-06-01",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 1,
        pos_name: "프론트, 백엔드",
        pro_detail: "키키 앱에 들어갈 채팅서비스 기능 일부 웹뷰 UI 및 로직 구현",
        pro_end_date: "2022-11-01",
        pro_idx: 5,
        pro_name: "키키 채팅서비스 웹뷰",
        pro_position: 0,
        pro_start_date: "2022-10-01",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 2,
        pos_name: "프론트, 백엔드",
        pro_detail: "B2B 쇼핑몰 개발",
        pro_end_date: "2023-06-30",
        pro_idx: 6,
        pro_name: "(주)대화공업 B2B",
        pro_position: 0,
        pro_start_date: "2023-01-02",
        pro_url: "",
        use_status: 1
    },
    {
        c_idx: 2,
        pos_name: "프론트엔드",
        pro_detail: "디자인 외 모든작업",
        pro_end_date: "2023-02-01",
        pro_idx: 7,
        pro_name: "(주)대화공업 홈페이지",
        pro_position: 1,
        pro_start_date: "2023-01-02",
        pro_url: "https://devziho.shop",
        use_status: 1
    },
    {
        c_idx: 2,
        pos_name: "프론트엔드",
        pro_detail: "일부 UI 작업",
        pro_end_date: "2023-06-01",
        pro_idx: 8,
        pro_name: "사내메신저 프로그램",
        pro_position: 1,
        pro_start_date: "2023-05-01",
        pro_url: "",
        use_status: 1
    }
];

const PROJECT_SKILL_DATA = [
    { pro_idx: 1, s_name: 'HTML', sf_idx: 1 }
    , { pro_idx: 1, s_name: 'CSS', sf_idx: 1 }
    , { pro_idx: 1, s_name: 'JavaScript', sf_idx: 1 }
    , { pro_idx: 1, s_name: 'PHP', sf_idx: 2 }
    , { pro_idx: 2, s_name: 'HTML', sf_idx: 1 }
    , { pro_idx: 2, s_name: 'CSS', sf_idx: 1 }
    , { pro_idx: 2, s_name: 'JavaScript', sf_idx: 1 }
    , { pro_idx: 2, s_name: 'PHP', sf_idx: 2 }
    , { pro_idx: 3, s_name: 'PHP', sf_idx: 2 }
    , { pro_idx: 4, s_name: 'React', sf_idx: 1 }
    , { pro_idx: 4, s_name: 'PHP', sf_idx: 2 }
    , { pro_idx: 5, s_name: 'HTML', sf_idx: 1 }
    , { pro_idx: 5, s_name: 'CSS', sf_idx: 1 }
    , { pro_idx: 5, s_name: 'JavaScript', sf_idx: 1 }
    , { pro_idx: 5, s_name: 'nodejs', sf_idx: 2 }
    , { pro_idx: 6, s_name: 'Thymeleaf', sf_idx: 1 }
    , { pro_idx: 6, s_name: 'Spring', sf_idx: 2 }
    , { pro_idx: 7, s_name: 'React', sf_idx: 1 }
    , { pro_idx: 8, s_name: 'HTML', sf_idx: 1 }
    , { pro_idx: 8, s_name: 'CSS', sf_idx: 1 }
    , { pro_idx: 8, s_name: 'JavaScript', sf_idx: 1 }
];

const SKILL_DATA = [
    {
        p_github: "jxxoih",
        s_idx: 1,
        s_img: "html.png",
        s_name: "HTML",
        sf_idx: 1,
        sf_name: "Front-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 2,
        s_img: "css.png",
        s_name: "CSS",
        sf_idx: 1,
        sf_name: "Front-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 3,
        s_img: "javascript.png",
        s_name: "JavaScript",
        sf_idx: 1,
        sf_name: "Front-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 4,
        s_img: "react.png",
        s_name: "React",
        sf_idx: 1,
        sf_name: "Front-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 15,
        s_img: "thymeleaf.png",
        s_name: "Thymeleaf",
        sf_idx: 1,
        sf_name: "Front-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 7,
        s_img: "php.png",
        s_name: "PHP",
        sf_idx: 2,
        sf_name: "Back-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 8,
        s_img: "node.png",
        s_name: "nodejs",
        sf_idx: 2,
        sf_name: "Back-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 6,
        s_img: "spring.png",
        s_name: "Spring",
        sf_idx: 2,
        sf_name: "Back-end"
    },
    {
        p_github: "jxxoih",
        s_idx: 9,
        s_img: "mysql.png",
        s_name: "MySQL",
        sf_idx: 3,
        sf_name: "DBMS"
    },
    {
        p_github: "jxxoih",
        s_idx: 10,
        s_img: "mariadb.png",
        s_name: "MariaDB",
        sf_idx: 3,
        sf_name: "DBMS"
    },
    {
        p_github: "jxxoih",
        s_idx: 11,
        s_img: "git.jpeg",
        s_name: "Git",
        sf_idx: 4,
        sf_name: "Version Control"
    },
    {
        p_github: "jxxoih",
        s_idx: 12,
        s_img: "github.png",
        s_name: "GitHub",
        sf_idx: 4,
        sf_name: "Version Control"
    },
    {
        p_github: "jxxoih",
        s_idx: 13,
        s_img: "zeplin.png",
        s_name: "Zeplin",
        sf_idx: 5,
        sf_name: "Communication"
    },
    {
        p_github: "jxxoih",
        s_idx: 14,
        s_img: "figma.png",
        s_name: "Figma",
        sf_idx: 5,
        sf_name: "Communication"
    }
];

const FIELD_DATA = [
    { sf_name: 'Front-end', sf_idx: 1 }
    , { sf_name: 'Back-end', sf_idx: 2 }
    , { sf_name: 'DBMS', sf_idx: 3 }
    , { sf_name: 'Version Control', sf_idx: 4 }
    , { sf_name: 'Communication', sf_idx: 5 }
];

const AUTH_PWD = [
    {
        authPwd: "wjarjawnd"
    }
]


export const returnData = (action) => {
    var data;

    switch (action) {
        case API_ACTIONS.GET_ABOUT_ACTION:
            data = ABOUT_DATA;
            break;
        case API_ACTIONS.GET_COMPANY_ACTION:
            data = COMPANY_DATA;
            break;
        case API_ACTIONS.GET_PROJECT_ACTION:
            data = PROJECT_DATA;
            break;
        case API_ACTIONS.GET_PROJECT_GET_SKILL_ACTION:
            data = PROJECT_SKILL_DATA;
            break;
        case API_ACTIONS.GET_SKILL_ACTION:
            data = SKILL_DATA;
            break;
        case API_ACTIONS.GET_SKILL_FIELD_ACTION:
            data = FIELD_DATA;
            break;
        case API_ACTIONS.GET_AUTH_PWD:
            data = AUTH_PWD;
            break;
        default:
            data = null;
            break;
    }

    return data;
}