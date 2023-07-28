"use client";
import HomePage from "@/app/resume/components/homePage";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import { getLocalFile } from "@/redux/helper";
import { handleLoading } from "@/redux/themeReducer";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [height, setheight] = useState(1000);
  const [width, setWidth] = useState(500);
  const theme = useSelector((s) => s.themeReducer.value);
  const pageRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);;
    dispatch(handleLoading(false));
    if (!getLocalFile("resume")) {
      localStorage.setItem("resume", JSON.stringify({ ...theme }));
    }
  }, []);

  useEffect(() => {
    setheight(pageRef.current.offsetHeight - 2);
    setWidth(pageRef.current.offsetWidth - 2);
    window.addEventListener("resize", handleResize);
  }, [theme?.triggerFortoggler]);


  function handleResize() {
    setheight(pageRef.current.offsetHeight - 2);
    setWidth(pageRef.current.offsetWidth - 2);
  }

  return (
    <div>
      {theme?.isLoading && <Loader />}
      <div
        ref={pageRef}
        className=" m-auto  border-2 border-black overflow-hidden sm:w-[99vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]"
        style={{ visibility: theme?.isLoading ? "collapse" : "visible" }}
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
