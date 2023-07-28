"use client";
import React, { useState } from "react";
import "./Modal.css";
import { changeTheme } from "@/redux/themeReducer";
import { SiKeepachangelog } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { colors, themes } from "@/redux/helper";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useSelector((s) => s.themeReducer.value);
  const dispatch = useDispatch();

  const handleColorChange = (color, index) => {
    localStorage.setItem("resume", JSON.stringify({ ...themes[index] }));
    dispatch(changeTheme(themes[index]));
  };

  function handleModelAction() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button
        className="button1"
        onClick={handleModelAction}
        style={{ backgroundColor: theme.backgroundTheme }}
      >
        <SiKeepachangelog
          title="Change Theme"
          size="25px"
          color={theme.iconColor}
        />
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
            <button className="button2" onClick={() => setShowModal(false)}>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
