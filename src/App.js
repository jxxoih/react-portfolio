import Header from "components/commons/Header";
import HeaderMobile from "components/commons/HeaderMobile";
import Main from "components/Main";
import { useEffect, useState } from "react";


import "styles/common.css";

import * as config from "config";
import * as appUtill from "utills/appUtill";

function App() {
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
    appUtill.resolveData(config.ABOUT_ACTION).then((resolvedData) => setAboutData(resolvedData));
    appUtill.resolveData(config.GET_COMPANY_ACTION).then((resolvedData) => setCompany(resolvedData));
    appUtill.resolveData(config.GET_PROJECT_ACTION).then((resolvedData) => setProject(resolvedData));
    appUtill.resolveData(config.GET_PROJECT_SKILL_ACTION).then((resolvedData) => setProjectSkill(resolvedData));
    appUtill.resolveData(config.SKILL_ACTION).then((resolvedData) => setSkillData(resolvedData));
    appUtill.resolveData(config.SKILL_FIELD_ACTION).then((resolvedData) => setFieldResult(resolvedData));
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

  return (
    <>
      {!isMobile && (
        <Header func={gnbClick} />
      )}
      {isMobile && (
        <HeaderMobile func={gnbClick} />
      )}

      <Main
        isMobile={isMobile}
        aboutData={aboutData}
        workData={{ company, project, projectSkill }}
        skillData={{ skillData, fieldResult }}
      />

      {scroll && (
        <div className="topBtn" onClick={() => scrollToY(0)} >
          <img src={config.IMG_PATH + "topBtn.svg"} alt="TOP" />
        </div>
      )}
    </>
  );
}

export default App;
