import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import Dots from "./Dots";
import MainIndex from "./MainIndex";

const Index = () => {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      console.log(scrollTop, "want");
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setScrollIndex(2);
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지s
          setScrollIndex(3);
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지s
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 2페이지s
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 2페이지s
          console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        } else {
          // 현재 3페이지
          console.log("현재 6페이지, down");
          console.log(scrollTop);
          console.log(pageHeight)
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 2페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 2페이지
          console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          // 현재 마지막페이지
          console.log("현재 마지막페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        }
      }
      if (scrollTop + pageHeight >= outerDivRef.current.scrollHeight && deltaY > 0) {
        const footer = document.querySelector('footer');
        footer.style.bottom = 0;
        console.log(deltaY)
        setIsOn(true);
      } else if (deltaY < 0 && isOn === true) {
        const footer = document.querySelector('footer');
        footer.style.bottom = -50 + '%';
        outerDivRef.current.scrollTo({
          top: pageHeight * 5,
          left: 0,
          behavior: "smooth",
        });
        console.log(deltaY)
        setScrollIndex(6);
        setIsOn(false);
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };

  }, [isOn]);
  return (
    <>
      <section ref={outerDivRef} className="outer scrollEnd">
        <Dots scrollIndex={scrollIndex} />
        <MainIndex isOn={isOn}/>
      </section>
    </>
  );
};

export default Index;