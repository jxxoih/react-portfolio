import Header from "components/commons/Header";
import HeaderMobile from "components/commons/HeaderMobile";
import Main from "components/Main";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


import "styles/common.css";
import "styles/admin.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";
import Admin from "components/admin/Admin";

function App() {
  const navigate = useNavigate();

  const [aboutData, setAboutData] = useState([]);
  const [company, setCompany] = useState([]);
  const [project, setProject] = useState([]);
  const [projectSkill, setProjectSkill] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [fieldResult, setFieldResult] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCheck, setAdminCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [admPage, setAdmPage] = useState(false);


  const [y, setY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

  const setAdmin = (arg) => {
    setAdminCheck(arg);
    setPassword("");
  }

  const gnbClick = (e) => {
    let targetY = document.querySelector("." + config.GNB_LIST[e]).getBoundingClientRect().y;

    scrollToY(y + targetY)
  }

  const scrollToY = (yScroll) => {
    window.scrollTo({
      top: yScroll,
      behavior: 'smooth'
    });
  }

  const reqData = () => {
    appUtill.resolveData(config.GET_ABOUT_ACTION).then((resolvedData) => setAboutData(resolvedData[0]));
    appUtill.resolveData(config.GET_COMPANY_ACTION).then((resolvedData) => setCompany(resolvedData));
    appUtill.resolveData(config.GET_PROJECT_ACTION).then((resolvedData) => setProject(resolvedData));
    appUtill.resolveData(config.GET_PROJECT_GET_SKILL_ACTION).then((resolvedData) => setProjectSkill(resolvedData));
    appUtill.resolveData(config.GET_SKILL_ACTION).then((resolvedData) => setSkillData(resolvedData));
    appUtill.resolveData(config.GET_SKILL_FIELD_ACTION).then((resolvedData) => setFieldResult(resolvedData));
  }

  useEffect(() => {
    // getData
    reqData();

    function handleResize() {
      let width = window.innerWidth;
      if (width <= config.MOBILE_PX) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    function topBtn() {
      let offsetY = window.pageYOffset;
      setY(offsetY);

      if (offsetY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    window.addEventListener('scroll', topBtn);
    topBtn();

    return () => {
      window.removeEventListener('scroll', topBtn);
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  useEffect(() => {
    passwordCheck();
  }, [adminCheck, password]);

  const passwordCheck = () => {
    if (adminCheck) {
      navigate(config.ADMIN_PATH);
      if (isAdmin) {
        setAdmPage(true);
      } else {
        window.addEventListener("keydown", (e) => {
          const checkCode = e.keyCode;
          if (checkCode === 13 || (checkCode >= 48 && checkCode <= 57) || (checkCode >= 65 && checkCode <= 90) || (checkCode >= 96 && checkCode <= 107)) {
            if (e.key === "Enter") {
              if (password === config.ADMIN_PASSWORD) {
                navigate(config.ADMIN_PATH)
                setIsAdmin(true);
                setAdmPage(true);
                e.preventDefault();
              } else {
                // 비번틀리면 관리자모드 해제
                navigate("/");
                setIsAdmin(false);
                setAdmPage(false);
                e.preventDefault();
              }
            } else {
              setPassword(password + e.key);
            }
          }
        })
      }
    } else {
      if (!isAdmin && config.USE_LOCATION.indexOf("/admin") > 0) {
        setAdminCheck(true);
      } else {
        navigate("/");
        setAdmPage(false);
      }
    }
  }

  const updateData = (arg) => {
    if (arg === 0) {
      appUtill.resolveData(config.GET_ABOUT_ACTION).then((resolvedData) =>
        setAboutData(resolvedData[0]));
    }
  }

  return (
    <>
      {!isMobile && (
        <Header
          func={gnbClick}
          setAdmin={setAdmin}
          isAdmin={isAdmin}
          admPage={admPage}
        />
      )}
      {isMobile && (
        <HeaderMobile func={gnbClick} />
      )}
      <Routes>
        <Route
          path={config.ADMIN_PATH}
          element={
            <Admin
              isAdmin={isAdmin}
              password={password}
              isMobile={isMobile}
              aboutData={aboutData}
              workData={{ company, project, projectSkill }}
              skillData={{ skillData, fieldResult }}
              updateFunc={updateData}
            />
          }
        >
        </Route>
        <Route
          path="/"
          element={
            <Main
              adminCheck={adminCheck}
              isMobile={isMobile}
              aboutData={aboutData}
              workData={{ company, project, projectSkill }}
              skillData={{ skillData, fieldResult }}
            />
          }
        >
        </Route>
      </Routes>


      {scroll && (
        <div className="topBtn" onClick={() => scrollToY(0)} >
          <img src={config.IMG_PATH + "topBtn.svg"} alt="TOP" />
        </div>
      )}
    </>
  );
}

export default App;
