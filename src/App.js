import Header from "components/commons/Header";
import HeaderMobile from "components/commons/HeaderMobile";
import Main from "components/Main";
import * as config from "config";
import { useEffect, useState } from "react";

import "styles/common.css";

function App() {
  const gnbList = [
    "about",
    "work",
    "skills",
    "contact"
  ]

  const [y, setY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

  const gnbClick = (e) => {
    let targetY = document.querySelector("." + gnbList[e]).getBoundingClientRect().y;

    scrollToY(y + targetY)
  }

  const scrollToY = (yScroll) => {
    window.scrollTo({
      top: yScroll,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
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
      <Main isMobile={isMobile} />

      {scroll && (
        <div className="topBtn" onClick={() => scrollToY(0)} >
          <img src={config.IMG_PATH + "topBtn.svg"} alt="TOP" />
        </div>
      )}
    </>
  );
}

export default App;
