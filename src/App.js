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
import LoadingPage from "components/commons/LoadingPage";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [isAdmin, setIsAdmin] = useState(null);

  const [aboutData, setAboutData] = useState([]);
  const [company, setCompany] = useState([]);
  const [project, setProject] = useState([]);
  const [projectSkill, setProjectSkill] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [fieldResult, setFieldResult] = useState([]);

  const [y, setY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

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



  const setAdminAuthrizeExpireTime = () => {
    const keyName = "isAdmin";

    const obj = {
      value: keyName,
      expire: Date.now() + config.ADMIN_AUTHORITY_EXPIRE_TIME
    }

    const objString = JSON.stringify(obj);

    window.localStorage.setItem(keyName, objString);

    return true;
  }
  const getAdminAuthrizeExpireTime = () => {
    const keyName = "isAdmin";

    const objString = window.localStorage.getItem(keyName);

    if (!!!objString) {
      return false;
    }

    const obj = JSON.parse(objString);

    if (Date.now() > obj.expire) {
      window.localStorage.removeItem(keyName);

      return false;
    }

    return true;
  }

  const getPage = () => {
    var curPath = window.location.pathname;
    curPath = curPath.indexOf("admin") > 0 ? true : false;

    return curPath;
  }
  const [admPage, setAdmPage] = useState(getPage());

  const setPage = (status) => {
    setAdmPage(status);

    if (status) {
      navigate(config.ADMIN_PATH);
      setIsAdmin(getAdminAuthrizeExpireTime());
    } else {
      navigate("/");
    }

    scrollToY(0);
    reqData();
  }

  const setAdminAuthrize = (status) => {
    // 관리자 권한 생성
    if (status) {
      setIsAdmin(setAdminAuthrizeExpireTime());
    }
  }

  useEffect(() => {
    setIsAdmin(getAdminAuthrizeExpireTime());
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

  return (
    <>
      {
        isLoading && (
          <LoadingPage />
        )
      }
      {
        !isLoading && (
          <>
            {!isMobile && (
              <Header
                func={gnbClick}
                setPage={setPage}
                admPage={admPage}
              />
            )}
            {isMobile && (
              <HeaderMobile func={gnbClick} />
            )}
            < Routes >
              <Route
                path={config.ADMIN_PATH}
                element={
                  <Admin
                    setLoading={setIsLoading}
                    isAdmin={isAdmin}
                    isMobile={isMobile}
                    aboutData={aboutData}
                    setAdmin={setAdminAuthrize}
                    setPage={setPage}
                  />
                }
              >
              </Route>
              <Route
                path="/"
                element={
                  <Main
                    isMobile={isMobile}
                    aboutData={aboutData}
                    workData={{ company, project, projectSkill }}
                    skillData={{ skillData, fieldResult }}
                  />
                }
              >
              </Route>
            </Routes>
          </>
        )
      }

      {
        scroll && (
          <div className="topBtn" onClick={() => scrollToY(0)} >
            <img src={config.IMG_PATH + "topBtn.svg"} alt="TOP" />
          </div>
        )
      }
    </>
  );
}

export default App;
