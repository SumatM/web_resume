"use client";
import HomePage from "@/app/resume/components/homePage";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import { getLocalFile } from "@/redux/helper";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";

export default function Home() {
  const [height, setheight] = useState(1000);
  const [width, setWidth] = useState(500);
  const theme = useSelector((s) => s.themeReducer.value);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    const heightdoc = document.getElementById("homepage");
    setheight(heightdoc.offsetHeight - 2);
    setWidth(heightdoc.offsetWidth - 2);
    if (!getLocalFile("resume")) {
      localStorage.setItem("resume", JSON.stringify({ ...theme }));
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setflag(false);
    }, 2000);
  }, []);

  return (
    <div>
      {flag && <Loader />}
      <div
        id="homepage"
        className="w-[60vw] m-auto  border-2 border-black overflow-hidden"
        style={{ visibility: flag ? "collapse" : "visible" }}
      >
        <div
          style={{
            clipPath:
              "polygon(0% 0%, 99.75% 0%, 99.75% 99.75%, 49.64% 100%, 49.14% 31.6%, 0% 0%)",
            background: `${theme.backgroundTheme}`,
            height: `${height}px`,
            width: `${width}px`,
          }}
          className={`absolute  mb-10`}
        ></div>
        <HomePage />
        <div className="absolute top-1 right-5">
          <Modal />
        </div>
      </div>
    </div>
  );
}
