import Header from "components/commons/Header";
import Main from "components/Main";
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

    window.addEventListener('scroll', setScrollY);

    return () => {
      window.removeEventListener('scroll', setScrollY);
    }

  }, [])

  return (
    <>
      <Header func={gnbClick} />
      <Main isMobile={isMobile} />
    </>
  );
}

export default App;
