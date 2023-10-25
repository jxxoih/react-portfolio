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

  const setScrollY = () => {
    let offsetY = window.pageYOffset;
    setY(offsetY);

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

    window.addEventListener('resize', handleResize);
    handleResize();
    window.addEventListener('scroll', setScrollY);

    return () => {
      window.removeEventListener('scroll', setScrollY);
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
    </>
  );
}

export default App;
