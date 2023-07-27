"use client";
import React, { useState } from "react";
import "./Modal.css";
import { changeTheme } from "@/redux/themeReducer";
import { SiKeepachangelog } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useSelector((s) => s.themeReducer.value);
  const dispatch = useDispatch();
  const colors = [
    "#283593",
    "#546E7A",
    "#C2185B",
    "#212121",
    "#00C853",
    "#FFA000",
  ];
  let themes = [
    {
      LtextColor: "#00695C",
      RtextColor: "#90CAF9",
      iconColor: "#66BB6A",
      backgroundTheme: "#283593",
    },
    {
      LtextColor: "#00695C",
      RtextColor: "#EF9A9A",
      iconColor: "#FB8C00",
      backgroundTheme: "#546E7A",
    },
    {
      LtextColor: "#EF6C00",
      RtextColor: "#80CBC4",
      iconColor: "#AFB42B",
      backgroundTheme: "#C2185B",
    },
    {
      LtextColor: "#827717",
      RtextColor: "#FBC02D",
      iconColor: "#D32F2F",
      backgroundTheme: "#212121",
    },
    {
      LtextColor: "#AD1457",
      RtextColor: "#BF360C",
      iconColor: "#A1887F",
      backgroundTheme: "#00C853",
    },
    {
      LtextColor: "#7B1FA2",
      RtextColor: "#00897B",
      iconColor: "#607D8B",
      backgroundTheme: "#FFA000",
    },
  ];

  const handleColorChange = (color, index) => {
    localStorage.setItem('resume',JSON.stringify({...theme}))
    dispatch(changeTheme(themes[index]));
    console.log(color);
  };

  return (
    <div>
      <button className="button1" onClick={() => setShowModal(!showModal)}>
        <SiKeepachangelog size="25px" color={theme.iconColor} />
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Choose a Color</h2>
            <div className="color-picker">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color, index)}
                ></div>
              ))}
            </div>
            <button className="button2" onClick={() => setShowModal(false)}><span>Close</span></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
