import Header from "components/commons/Header";
import HeaderMobile from "components/commons/HeaderMobile";
import Main from "components/Main";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


import "styles/common.css";
import "styles/admin.css";

import {
  GNB_LIST,
  ADMIN_AUTHORITY_EXPIRE_TIME,
  ADMIN_PATH,
  MOBILE_PX,
  IMG_PATH,
  API_ACTIONS,
  ADMIN_KEY_NAME,
  ROOT_PATH,
  STALE_TIME,
  CACHE_TIME
} from "config";
import * as appUtill from "utills/appUtill";
import Admin from "components/admin/Admin";
import LoadingPage from "components/commons/LoadingPage";
import InspectionPage from "components/commons/InspectionPage";
import { useQueries, useQueryClient } from "react-query";

function App() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [underMnt, setUnderMnt] = useState(false);

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
    let targetY = document.querySelector("." + GNB_LIST[e]).getBoundingClientRect().y;

    scrollToY(y + targetY)
  }

  const scrollToY = (yScroll) => {
    window.scrollTo({
      top: yScroll,
      behavior: 'smooth'
    });
  }

  const results = useQueries([
    {
      queryKey: ['about'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_ABOUT_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setAboutData(res[0])
      },
    },
    {
      queryKey: ['company'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_COMPANY_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setCompany(res)
      }
    },
    {
      queryKey: ['project'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_PROJECT_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setProject(res)
      }
    },
    {
      queryKey: ['projectSkill'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_PROJECT_GET_SKILL_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setProjectSkill(res)
      }
    },
    {
      queryKey: ['skill'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_SKILL_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setSkillData(res)
      }
    },
    {
      queryKey: ['skillField'], queryFn: () => appUtill.resolveGetData(API_ACTIONS.GET_SKILL_FIELD_ACTION), staleTime: STALE_TIME, cacheTime: CACHE_TIME,
      onSuccess: (res) => {
        if(!!!res) {
          setUnderMnt(true)
        } else {
          setUnderMnt(false)
        }
        setFieldResult(res)
      }
    },
  ]);

  const setAdminAuthrizeExpireTime = () => {
    const keyName = ADMIN_KEY_NAME;

    const obj = {
      value: keyName,
      expire: Date.now() + ADMIN_AUTHORITY_EXPIRE_TIME
    }

    const objString = JSON.stringify(obj);

    window.localStorage.setItem(keyName, objString);

    return true;
  }
  const getAdminAuthrizeExpireTime = () => {
    const keyName = ADMIN_KEY_NAME;

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
    if (underMnt) {
      navigate(ROOT_PATH);
      return;
    }

    if (status) {
      navigate(ADMIN_PATH);
      setIsAdmin(getAdminAuthrizeExpireTime());
    } else {
      navigate(ROOT_PATH);
    }

    scrollToY(0);
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

    function handleResize() {
      let width = window.innerWidth;
      if (width <= MOBILE_PX) {
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
      {underMnt && (
        <InspectionPage
          title={aboutData?.sm_title}
          context={aboutData?.sm_context}
        />
      )}

      {!underMnt && (
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
                    path={ADMIN_PATH}
                    element={
                      <Admin
                        isAdmin={isAdmin}
                        isMobile={isMobile}
                        aboutData={aboutData}
                        setAdmin={setAdminAuthrize}
                        setPage={setPage}
                        setUnderMnt={setUnderMnt}
                        queryClient={queryClient}
                      />
                    }
                  >
                  </Route>
                  <Route
                    path={ROOT_PATH}
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
                <img src={IMG_PATH + "topBtn.svg"} alt="TOP" />
              </div>
            )
          }
        </>
      )}
    </>
  );
}

export default App;
